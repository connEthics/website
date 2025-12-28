# Arazzo: The Missing Link in API Orchestration

**APIs are the backbone of modern business, but orchestrating them is still a manual, error-prone process. Enter Arazzo, the new OpenAPI specification for workflows.**

In the API economy, we have mastered the art of describing *endpoints*. Thanks to OpenAPI (formerly Swagger), we know exactly what a `GET /users/{id}` expects and returns. But business value rarely comes from a single API call. It comes from a sequence: "Create User" -> "Verify Email" -> "Issue Wallet" -> "Onboard to Service".

Until now, this "glue" code—the workflow—was hidden in PDF documentation, scattered across Wiki pages, or worse, buried in the implementation code itself. Developers were left guessing how to chain calls together to achieve a business goal.

**This changes with Arazzo.**

## What is Arazzo?

Arazzo is a new specification under the OpenAPI Initiative that allows you to define **sequences of calls**, inputs, outputs, and success criteria. It turns static "documentation" into "executable specifications". It bridges the gap between technical capability (OpenAPI) and business intent (Workflows).

At ConnEthics, we believe that **Strategic Intelligence** means not just understanding the data, but understanding the *flow* of data. That's why we are fully committed to the Arazzo standard.

To accelerate its adoption, we are releasing two open-source tools designed to make Arazzo accessible to everyone, from the curious beginner to the integration expert.

## 1. The Arazzo Visualizer: See Before You Code

We believe in "Learning by Doing". Before you write a single line of YAML, you should be able to visualize the outcome.

We have created the **Arazzo Playground**, a web-based visualizer that instantly transforms your Arazzo specifications into interactive diagrams.

![Arazzo Visualizer Preview](/images/insights/arazzo/builder-preview.png)

**Key Features:**
*   **Interactive Flow View**: Drag, zoom, and explore workflow nodes with auto-layout.
*   **Multiple Perspectives**: Switch between Flowcharts, Sequence Diagrams, and Swimlane Views to understand the actor interactions.
*   **Live Documentation**: Click on any step to see detailed inputs, outputs, and success criteria.

It is the ideal gateway to understand how Arazzo can document your business use cases on top of your OpenAPI specifications.

👉 **Try the Playground:** [arazzo.connethics.com](https://arazzo.connethics.com/)

## 2. The VS Code Extension: Developer Experience First

Once you are ready to implement, the tool must come to you. We have released the **Arazzo VS Code Extension** to bring the power of Arazzo directly into your IDE.

![Arazzo VS Code Extension](/images/insights/arazzo/vscode-demo.png)

It transforms your editor into a powerful environment for Arazzo:
*   **Live Preview**: Visualize your specifications side-by-side with your code.
*   **Flowchart Visualization**: Your workflows become clear diagrams thanks to Mermaid.js.
*   **Synchronization**: Click on a step in the diagram, and the editor jumps to the right line of code.
*   **Validation & Autocompletion**: Write your specifications with confidence, knowing they are syntactically correct.

👉 **Install from Marketplace:** [Arazzo VS Code Extension](https://marketplace.visualstudio.com/items?itemName=connethics.arazzo-vscode)

## Join the Revolution

The shift from "Managing Endpoints" to "Orchestrating Workflows" is inevitable. It reduces integration costs, improves developer onboarding, and ensures that your API products actually deliver the business value they promise.

These projects are **Open Source** and open to your contributions. We invite you to try them, fork them, and help us build the future of API orchestration.

*   **GitHub Repo (VS Code)**: [connEthics/arazzo-vscode](https://github.com/connEthics/arazzo-vscode)
*   **GitHub Repo (Demo)**: [connEthics/arazzo-demo](https://github.com/connEthics/arazzo-demo)
