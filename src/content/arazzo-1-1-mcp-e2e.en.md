Your APIs are well documented. What your customers and your AI agents are trying to achieve with them is not. Every endpoint has its OpenAPI description, yet the sequence that turns those endpoints into an outcome (book a trip, close an order, renew a session) lives in wikis, Postman collections, test scripts and the heads of two or three people.

That gap always had a cost: slow onboarding, brittle tests, support tickets. With AI agents it becomes a real risk, because an agent that has to guess the order of calls will guess differently every time. In this article we show, with two runnable examples, how Arazzo 1.1 lets one workflow file serve as a governed tool for an agent and as an end-to-end test in your CI. We also share the limits we measured, because they matter as much as the promise.

## 1. The pain: endpoints without intent

OpenAPI tells you what you can call. It does not tell you why, or in which order. "Book a trip" means searching flights, pricing an offer, checking seats, holding a booking, capturing a payment and confirming it, with compensations if something fails halfway. None of that is written in the API description. Each consumer, human or machine, rebuilds the intent from a catalogue of operations.

For a developer, the cost is time. For an agent, it is reliability. When every endpoint becomes a tool, the model must pick the right tools, order them, carry identifiers from one response to the next and interpret errors, at every run. The research is consistent on this point:

- Anthropic's guidance on agent tools warns that "a common error we've observed is tools that merely wrap existing software functionality or API endpoints", and recommends one higher-level tool per task.
- In the RAG-MCP study, tool-selection accuracy with the full catalogue exposed drops to 13.62%. It rises to 43.13% when the catalogue is filtered.
- In τ-bench, even the best function-calling agents succeed on fewer than a quarter of retail tasks eight times out of eight (pass^8 below 25%).

The lesson is not "avoid agents". It is: **let the agent choose the intent, and let a reviewed workflow guarantee the sequence.** That is exactly what Arazzo describes.

**Arazzo** is the OpenAPI Initiative standard for describing workflows: sequences of API calls with their inputs, data flow, success criteria, retries and failure paths. A workflow is plain YAML, versioned next to your OpenAPI and reviewed in a pull request like code. A **runner** is a tool that executes it.

## 2. What Arazzo 1.1 adds

Arazzo 1.1.0 was published on 17 May 2026. It is a minor, backward-compatible release: a 1.0.x document remains a valid 1.0.x document, and tools choose the JSON Schema from the `arazzo` field. You migrate when you need a 1.1 feature, not before.

| Feature | What it gives you | Where you see it below |
|---|---|---|
| AsyncAPI sources, `action: send` and `receive` | A step can publish or wait for an event, not only call HTTP | order-to-cash |
| `correlationId` and `timeout` | Wait for *your* message, and fail cleanly if it never comes | order-to-cash |
| Step-level `dependsOn` | Fan-out and join: invoice and shipment, then close | order-to-cash |
| Selector Object and Expression Type | Versioned extraction with JSONPath (RFC 9535), XPath or JSON Pointer | order-to-cash outputs |
| Workflow reuse from actions, with `parameters` | "Renew the session, then retry" written once, reused everywhere | session-renewal |
| `in: querystring` | A whole query string as one value, aligned with OpenAPI 3.2 | session-renewal |
| `$self` | A stable identity and base URI for the document | all examples |

The 1.1 text also tightens semantics that runners used to interpret differently: the grammar of runtime expressions, the resolution order of `$sourceDescriptions`, and how a criterion is judged true or false. Fewer surprises when you change tools.

## 3. Use case 1: one workflow, one MCP tool

The **Model Context Protocol (MCP)** is the protocol through which an AI agent discovers and calls tools. The pattern we recommend is simple: each Arazzo workflow becomes one MCP tool. The `workflowId` becomes the tool name, the workflow `inputs` (JSON Schema) become its `inputSchema`, and only the declared `outputs` come back to the agent.

Our example is a corporate travel assistant that receives: "Find me a flight from Paris to Lisbon on 18 December, under €400, and book it." Instead of composing six to eight API calls itself, the agent gets two tools:

- `quote_trip`, read-only: search, price, seat availability. No booking, no payment.
- `book_trip`, with a financial side effect: the same checks, then hold, payment and confirmation, with compensations (`voidPayment`, `releaseBooking`) if the end of the chain fails.

![The book_trip workflow in the new Arazzo graph: retries on 503, guardrails that end the run before any payment, and compensation paths](/images/insights/arazzo/arazzo-1-1-book-trip-graph.webp "559x1369")

The guardrails are written in the workflow, not in a prompt. Here are two steps of `book_trip`, taken from the example (descriptions translated):

```yaml
- stepId: priceOffer
  description: Budget guardrail + price lock (the price must not exceed the confirmed one).
  operationId: $sourceDescriptions.travel.priceOffer
  parameters:
    - { name: offerId, in: path, value: $steps.searchFlights.outputs.offerId }
    - { name: passengers, in: query, value: $inputs.passengerCount }
  successCriteria:
    - condition: $statusCode == 200
    - condition: $response.body#/total/amount <= $inputs.maxTotalAmount
    - condition: $response.body#/total/amount <= $inputs.confirmedTotalPrice
  onFailure:
    - name: priceAboveBudget
      type: end
  outputs:
    totalPrice: $response.body#/total
    totalAmount: $response.body#/total/amount
    quoteExpiresAt: $response.body#/expiresAt
- stepId: checkSeatAvailability
  description: Flight lock (the flight found must be the one the user confirmed).
  operationId: $sourceDescriptions.travel.getSeatAvailability
  parameters:
    - { name: flightId, in: path, value: $steps.searchFlights.outputs.flightId }
    - { name: cabin, in: query, value: $inputs.cabin }
  successCriteria:
    - condition: $statusCode == 200
    - condition: $response.body#/available >= $inputs.passengerCount
    - condition: $steps.searchFlights.outputs.flightNumber == $inputs.confirmedFlightNumber
  onFailure:
    - name: offerChanged
      type: end
```

If the price exceeds the budget, or has moved since the user confirmed it, the run ends before `createBooking`: nothing is held, nothing is charged. Retries on `503` (`retryWhenBusy`, twice, every 2 seconds) run inside the engine, without a round trip to the model, so without extra tokens and without the agent changing parameters between attempts.

### What the agent sees, and what it never sees

Arazzo describes the sequence. How it is exposed to an agent is a publication decision, and we make it explicit in a reviewed file, `mcp-tools.json`. This is a format we propose. It separates the `tool` object, served as is in `tools/list`, from a server-side `binding` that the client never receives. Excerpt for `book_trip`:

```json
{
  "tool": {
    "name": "book_trip",
    "annotations": {
      "readOnlyHint": false,
      "destructiveHint": true,
      "idempotentHint": false,
      "openWorldHint": true
    }
  },
  "binding": {
    "workflowId": "book_trip",
    "hiddenInputs": {
      "paymentMethodToken": {
        "source": "vault",
        "ref": "vault://travel-demo/users/{sub}/payment-methods/default",
        "onMissing": "elicitation-url"
      },
      "idempotencyKey": {
        "source": "server",
        "generator": "uuid-v4",
        "scope": "confirmation"
      },
      "confirmedTotalPrice": {
        "source": "confirmation",
        "from": "$preview.outputs.totalPrice.amount"
      },
      "confirmedFlightNumber": {
        "source": "confirmation",
        "from": "$preview.outputs.flightNumber"
      }
    },
    "confirmation": {
      "required": true,
      "mode": "elicitation-form",
      "previewWorkflowId": "quote_trip",
      "acceptWhen": "$elicitation.content.confirm == true",
      "whenClientLacksElicitation": "reject"
    },
    "auth": { "requiredScopes": ["travel:book", "payments:charge"] }
  }
}
```

Read it as a governance document:

- **Hidden inputs.** The payment token comes from a vault, the idempotency key from the server, the confirmed price and flight from the confirmation step. The agent cannot supply, invent or replay them.
- **Human confirmation.** Before `book_trip` runs, the MCP server executes `quote_trip` as a preview and asks the user, through MCP elicitation, to confirm the flight and the price. The confirmed values become locked inputs that the workflow checks again. If the client cannot ask the user, the server refuses rather than booking without consent.
- **Annotations are hints.** `destructiveHint: true` helps a client warn the user, but it is never a security control. Scopes, confirmation and limits are enforced on the server.
- **Whitelisted outputs.** Only the declared outputs of the workflow reach the agent, never raw response bodies.

One precision matters, because it is often blurred: **MCP is not a step type in Arazzo 1.1**. A step targets an OpenAPI operation, an AsyncAPI operation or channel, or another workflow. Arazzo orchestrates the APIs *behind* an MCP tool; it does not call MCP tools. MCP, A2A, gRPC and GraphQL step types are on the OpenAPI Initiative roadmap, and pausing a workflow for a human is a proposal for a later version (pull request #568). Today, the confirmation lives in the MCP server, between two workflows.

### What we measured

Against a Prism 5.16.0 mock with Redocly Respect 2.79.0, both workflows pass: 2 workflows, 9 steps, 46 checks, exit code 0. `book_trip` returns the booking reference `K7Q2ZP`. The negative case (budget set to 300) stops at `priceOffer` with exit code 1, with no booking and no payment step executed. A second runner, arazzo-cli 0.9.0, returns the same outputs.

Two honest caveats. The mock is stateless, so the compensations and the `503` retries are described but not exercised; that needs a scenario-based mock or a real sandbox. And `mcp-tools.json` is written by hand in this example: it is the contract we review, not yet a generated artefact.

## 4. Use case 2: an end-to-end test you can run

The second use is the one QA teams feel first. The same format that documents a journey can run it, so the documentation stops drifting from reality: when behaviour changes, the CI turns red.

### Order-to-cash: HTTP and events in one workflow

An order is created over HTTP, then validated asynchronously by a back office that publishes `order.confirmed` on Kafka. The workflow waits for that event, captures the payment, issues the invoice and creates the shipment in parallel, and closes the order only when both are done.

![The orderToCash workflow: an AsyncAPI receive step with a 6-second timeout, then a fan-out and a join expressed with dependsOn](/images/insights/arazzo/arazzo-1-1-order-to-cash-graph.webp "400x1119")

The asynchronous step and the join, taken from the example (descriptions trimmed):

```yaml
- stepId: awaitOrderConfirmation
  operationId: $sourceDescriptions.orderEvents.receiveOrderConfirmed
  action: receive
  correlationId: $steps.createOrder.outputs.orderId  # ignores other orders
  timeout: 6000                                      # milliseconds
  dependsOn:
    - createOrder
  successCriteria:
    - condition: $message.payload#/status == 'confirmed'
  outputs:
    confirmedAt: $message.payload#/confirmedAt
    warehouseId: $message.payload#/warehouseId
# ...
- stepId: closeOrder
  operationId: $sourceDescriptions.commerce.closeOrder
  dependsOn:
    - createInvoice
    - createShipment
  parameters:
    - name: orderId
      in: path
      value: $steps.createOrder.outputs.orderId
  requestBody:
    contentType: application/json
    payload:
      invoiceId: $steps.createInvoice.outputs.invoiceId
      shipmentId: $steps.createShipment.outputs.shipmentId
  successCriteria:
    - condition: $statusCode == 200
    - condition: $response.body#/status == 'closed'
```

Results recorded with Prism, a Kafka container and arazzo-cli 0.9.0: the run succeeds with `orderId: ord_123`, `paymentId: pay_3021`, the invoice and tracking numbers, and the shipped SKUs extracted by a JSONPath Selector. The receive step got the right message in 830 ms and ignored the "noise" message for `ord_999` thanks to the `correlationId`. With no event published, the step fails with `RUNTIME_MESSAGE_RECEIVE_TIMEOUT` after 6 seconds and exit code 1. The same run with Microcks 1.16.0 simulating the back office also succeeds.

### Session renewal: write the recovery once

A classic: the session has expired, the API answers `401`. In 1.0, every flow duplicated the re-authentication logic. In 1.1, a failure action can call a reusable workflow with `parameters`, then replay the failed step:

```yaml
components:
  failureActions:
    renewSessionOn401:
      name: renewSessionOn401
      type: retry
      workflowId: renewSession
      parameters:
        - name: sessionToken
          value: $inputs.sessionToken
        - name: refreshToken
          value: $inputs.refreshToken
      retryAfter: 1
      retryLimit: 2
      criteria:
        - condition: $statusCode == 401
```

The nominal scenario passes with Respect (3 workflows, 4 steps, 20 checks), including an explicit negative workflow that checks the API really refuses an expired session with `SESSION_EXPIRED`. The expired-session scenario fails as expected: Respect runs `renewSession` twice, retries twice, then stops with exit code 1. That is the point: the recovery runs, and the retry limit protects you from an infinite loop. Note that `retryAfter` is in seconds and `timeout` in milliseconds.

### The CI recipe

The examples come with a GitHub Actions template. The HTTP job pins its tools, starts a mock that serves the OpenAPI examples, then runs the workflows:

```yaml
- name: Start the Prism mock
  run: |
    npx -y @stoplight/prism-cli@5.16.0 mock -h 127.0.0.1 -p 4010 openapi.yaml > prism.log 2>&1 &
    for i in $(seq 1 30); do
      curl -s -o /dev/null http://127.0.0.1:4010/ && exit 0
      sleep 1
    done
    echo "Prism did not start"; cat prism.log; exit 1
- name: Run the workflows (Respect)
  run: |
    mkdir -p reports
    npx -y @redocly/cli@2.79.0 respect *.arazzo.yaml \
      --server travel=http://127.0.0.1:4010 \
      --input "$(cat inputs.json)" \
      --json-output reports/respect.json
```

The full template runs a matrix of four nominal cases and two negative cases that must fail, converts the Respect output to JUnit with a 30-line script, and adds a Kafka job with arazzo-cli for `receive`. We replayed the HTTP matrix locally, command by command: 6 cases out of 6 behave as expected. The asynchronous jobs reuse commands we ran by hand, but have not yet run inside GitHub Actions.

### The limits, measured rather than guessed

- **Respect does not evaluate Selector Objects.** It copies the object as is: a silent false positive. That is why the order-to-cash example uses Selectors only in outputs, and why the examples run by Respect avoid them.
- **Respect refuses AsyncAPI sources.** For order-to-cash it runs `createOrder`, then stops. The open-source path for `receive` is arazzo-cli with Kafka.
- **No open-source runner executes `action: send` today.** arazzo-cli refuses it, pending an open question in the specification (issue #617). Specmatic runs it, under a commercial licence.
- **Only `simple` criteria with JSON Pointer are portable** (`$response.body#/status == 'pending'`). A JSONPath filter on the root passes in Respect and fails in strict RFC 9535 runners. We keep the examples on the portable form.
- **arazzo-cli resolves relative URLs against `$self`**, as the 1.1 text requires, so it runs on a working copy without `$self`.

None of this is a reason to wait. It is a reason to choose your runner deliberately and to keep your criteria portable.

## 5. The ConnEthics tooling

We use what we recommend, and we publish it:

- **Arazzo for VS Code — by ConnEthics.** Live validation of 1.0 and 1.1 documents (the schema is chosen from the `arazzo` field), semantic checks beyond the schema (step targets, `dependsOn` cycles, AsyncAPI rules), and a quick fix that migrates a document to 1.1.0 and suggests a `$self`. [Install it from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=connethics.arazzo-vscode).
- **Arazzo Studio by ConnEthics.** A web builder and viewer for Arazzo workflows, free to use, built on an MIT-licensed core. [Open Arazzo Studio](https://arazzo.connethics.com).
- **The AI skill file.** A single Markdown file that teaches coding assistants (Claude Code, Cursor, Copilot, Cline) to write, review and fix Arazzo 1.1, expose workflows as MCP tools and run them as tests. [Read arazzo.skill.md](https://arazzo.connethics.com/arazzo.skill.md).
- **The examples.** Five Arazzo 1.1 documents, each with its stub OpenAPI or AsyncAPI, its inputs, its commands and the results we actually observed, plus the CI template. Every extract in this article comes from them.

## 6. How ConnEthics can help

Before the offer, some candour. Arazzo is a description, not an engine: it has no loops, no data transformations, no human step and no transactions, and the runners cover only part of 1.1. It is the wrong tool for long business processes with human tasks (BPMN or a workflow engine fits better), for crash-proof execution (Temporal or Step Functions, possibly described in Arazzo for consumers), or when your OpenAPI descriptions are not trustworthy yet. Start there.

When it fits, we work with you in the engagement models you can find on our [services page](/services):

- **Agentic API readiness audit** (Strategic Radar, 2 to 4 weeks). We map the 10 to 20 business intents that matter, where their sequence lives today, and the risk of exposing raw endpoints to agents. You get a roadmap prioritised by business value.
- **From tribal knowledge to contract** (Knowledge Engineering). Workshops with the people who hold the knowledge, Arazzo 1.1 workflows written and validated, graph and documentation generated from the same source.
- **Executable E2E journeys and deterministic agent tools** (Tactical Strike Team). Runner choice, mocks, secrets, CI pipeline, and the "one workflow, one MCP tool" pattern with its guardrails, then transfer to your teams.
- **Governing what agents may chain** (Ecosystem Governance with our [AI governance practice](/ai-governance)). A reviewed whitelist of workflows exposed to agents, lint rules in CI, and traceability aligned with OWASP LLM06 (Excessive Agency).

We do not promise figures before measuring them with you. The indicators we propose to track are concrete: the share of key intents formalised, the number of tools exposed to agents compared with the number of endpoints, critical journeys covered in CI, and the success rate of repeated agent tasks. If this resonates, [let's talk](/contact).

## 7. Sources

- OpenAPI Initiative, [Arazzo Specification v1.1.0](https://spec.openapis.org/arazzo/v1.1.0.html) (17 May 2026), and the [Arazzo overview and roadmap](https://www.openapis.org/arazzo-specification).
- Redocly, [Arazzo Specification 1.1 release](https://redocly.com/blog/arazzo-specification-1-1-release); Zuplo, [Arazzo goes cross protocol](https://zuplo.com/blog/arazzo-goes-cross-protocol).
- Model Context Protocol, [Tools](https://modelcontextprotocol.io/specification/latest/server/tools) and [Elicitation](https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation) (revision 2026-07-28).
- OAI/Arazzo-Specification, [issue #617](https://github.com/OAI/Arazzo-Specification/issues/617) (outgoing message contract for `send`) and [issue #523](https://github.com/OAI/Arazzo-Specification/issues/523) (Function Object and MCP binding).
- Anthropic, [Writing effective tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents); SmartBear, [From Endpoints to Intent](https://smartbear.com/blog/from-endpoints-to-intent-rethinking-agent-api-workflows-with-arazzo).
- T. Gan and Q. Sun, [RAG-MCP](https://arxiv.org/abs/2505.03275) (arXiv:2505.03275); S. Yao et al., [τ-bench](https://arxiv.org/abs/2406.12045) (arXiv:2406.12045).
- OWASP GenAI, [LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/).
- Runners and mocks: [Redocly Respect](https://redocly.com/docs/respect), [arazzo-cli](https://github.com/strefethen/arazzo-cli), [Specmatic Arazzo](https://docs.specmatic.io/supported_protocols/arazzo), [Stoplight Prism](https://github.com/stoplightio/prism), [Microcks](https://microcks.io/); API Evangelist, [The tools that actually execute your Arazzo workflows](https://apievangelist.com/2026/08/14/the-tools-that-actually-execute-your-arazzo-workflows/).
