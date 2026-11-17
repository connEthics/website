import type { Locale } from '@/i18n/config';
import type { FaqItem } from '@/lib/seo/jsonld';

/**
 * Content of the Arazzo landing (`/arazzo`, `/fr/arazzo`).
 *
 * One dictionary per locale, rendered by `src/components/arazzo/ArazzoLanding.tsx`.
 * The French text is written natively, not translated line by line.
 * Sources for every claim: arazzo-vscode `specs/002-arazzo-1-1-refonte/research/`
 * (R2 positioning, R3 MCP, R4 runners). No unverified figure, no client figure.
 */

export const ARAZZO_PATHS = { en: '/arazzo', fr: '/fr/arazzo' } as const;

export const ARAZZO_LINKS = {
  marketplace: 'https://marketplace.visualstudio.com/items?itemName=connethics.arazzo-vscode',
  studio: 'https://arazzo.connethics.com',
  skill: 'https://arazzo.connethics.com/arazzo.skill.md',
  example: (folder: string) => `https://arazzo.connethics.com/builder?example=${folder}`,
  spec: 'https://spec.openapis.org/arazzo/v1.1.0.html',
} as const;

/** Examples shown in the embedded graph; YAML served from `public/arazzo/examples/<id>/`. */
export interface GraphExample {
  id: 'e2e-order-to-cash' | 'mcp-travel-booking' | 'e2e-session-renewal';
  workflowId: string;
  label: string;
}

export type PainIcon = 'intent' | 'tribal' | 'tests' | 'agents';
export type UseCaseIcon = 'mcp' | 'e2e' | 'partners';

interface Link {
  label: string;
  href: string;
}

export interface ArazzoLandingContent {
  locale: Locale;
  meta: { title: string; description: string; keywords: string[]; ogImage: string; ogAlt: string };
  hero: { overline: string; title: string; description: string; primary: Link; secondary: Link };
  pains: { eyebrow: string; title: string; intro: string; items: { icon: PainIcon; title: string; body: string }[] };
  whatsNew: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { label: string; body: string }[];
    compatTitle: string;
    compat: string;
    roadmap: string;
    specLabel: string;
  };
  useCases: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { icon: UseCaseIcon; title: string; body: string; points: string[]; example: string; exampleLabel: string }[];
  };
  graph: {
    eyebrow: string;
    title: string;
    intro: string;
    examplesLabel: string;
    examples: GraphExample[];
    loadLabel: string;
    loadingLabel: string;
    errorLabel: string;
    wheelHint: string;
    touchActivate: string;
    touchDone: string;
    openInStudio: string;
    note?: string;
  };
  tools: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { name: string; badge: string; body: string; cta: Link }[];
    screenshotAlt: string;
    screenshotCaption: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; model: string; body: string; link: Link }[];
    note: string;
  };
  faq: { eyebrow: string; title: string; items: FaqItem[] };
  cta: { title: string; body: string; primary: Link; secondary: Link };
  software: { description: string };
}

const en: ArazzoLandingContent = {
  locale: 'en',
  meta: {
    title: 'Arazzo 1.1: API workflows humans can read and machines can run | ConnEthics',
    description:
      'Arazzo, the OpenAPI Initiative standard for multi-step API workflows: one versioned file that documents a journey, runs as an E2E test in CI and becomes a governed tool for AI agents. Tools, examples and support by ConnEthics.',
    keywords: ['Arazzo', 'Arazzo 1.1', 'OpenAPI', 'AsyncAPI', 'API workflows', 'MCP', 'AI agents', 'end-to-end testing', 'Arazzo Studio', 'Arazzo for VS Code', 'ConnEthics'],
    ogImage: '/images/arazzo/arazzo-og-en.png',
    ogAlt: 'Arazzo 1.1 — API workflows humans can read and machines can run — ConnEthics',
  },
  hero: {
    overline: 'Arazzo 1.1 · Tools and support by ConnEthics',
    title: 'API workflows humans can read and machines can run',
    description:
      'Arazzo is the OpenAPI Initiative standard for describing multi-step API journeys. One versioned file documents the journey for your partners, runs as an end-to-end test in your CI, and becomes a governed tool for your AI agents.',
    primary: { label: 'Read the Arazzo 1.1 guide', href: '/insights/arazzo-1-1-mcp-e2e' },
    secondary: { label: 'Talk to us', href: '/contact' },
  },
  pains: {
    eyebrow: 'The problem',
    title: 'Intent, not endpoints',
    intro:
      'Your APIs expose verbs; your customers and agents are after outcomes. The path from one to the other is rarely written down, and everyone pays for it differently.',
    items: [
      {
        icon: 'intent',
        title: 'Endpoints without intent',
        body: 'OpenAPI says what you can call, not why or in which order. “Book a trip” or “close an order” spans several operations, sometimes several APIs, and every consumer rebuilds that intent from a catalogue.',
      },
      {
        icon: 'tribal',
        title: 'Tribal integration knowledge',
        body: 'The real call order, the traps and the values to carry from one response to the next live in wikis, private collections, chat threads and a few people’s heads. Unversioned, untested, and gone when they leave.',
      },
      {
        icon: 'tests',
        title: 'Brittle end-to-end tests',
        body: 'API journeys are hand-coded in one test framework or buried in collection scripts: tied to a tool, unreadable outside the dev team, and a second copy of what the documentation should already say.',
      },
      {
        icon: 'agents',
        title: 'Agents that guess',
        body: 'Give an agent one tool per endpoint and it has to pick, order and chain calls on every run. Each guess costs tokens and adds variance, and research on tool selection shows accuracy falling as the catalogue grows.',
      },
    ],
  },
  whatsNew: {
    eyebrow: 'Arazzo 1.1',
    title: 'What 1.1 adds, in short',
    intro: 'Published by the OpenAPI Initiative on 17 May 2026, Arazzo 1.1.0 goes beyond HTTP and makes workflows easier to compose.',
    items: [
      { label: 'Event-driven steps', body: 'AsyncAPI sources, with steps that send or receive a message, a correlationId and a timeout.' },
      { label: 'Step-level dependsOn', body: 'Fan-out and join: invoice and shipment in parallel, then close the order.' },
      { label: 'Reusable workflows', body: 'An action can call a workflow with parameters: “renew the session, then retry”, written once.' },
      { label: 'Selector Object', body: 'Versioned extraction with JSONPath (RFC 9535), XPath or JSON Pointer.' },
      { label: '$self and querystring', body: 'A stable identity for the document, and whole query strings aligned with OpenAPI 3.2.' },
      { label: 'Tighter semantics', body: 'Expression grammar, source resolution order and truthy/falsy criteria, so runners agree more often.' },
    ],
    compatTitle: 'Your 1.0 documents stay valid',
    compat:
      'A minor, backward-compatible release: a 1.0.x document remains a valid 1.0.x document, and tools pick the schema from the arazzo field. Migrate when you need a 1.1 feature, not before.',
    roadmap: 'MCP, gRPC or loops as step types are on the specification roadmap, not in 1.1.',
    specLabel: 'Read the 1.1.0 specification',
  },
  useCases: {
    eyebrow: 'Write it once, use it three times',
    title: 'One workflow, three jobs',
    intro:
      'The same Arazzo workflow documents a journey, runs as a test and backs an agent tool. Each use case below links to a runnable example you can open in Arazzo Studio.',
    items: [
      {
        icon: 'mcp',
        title: 'Governed MCP tools',
        body: 'Each workflow becomes one MCP tool: the workflowId is its name, the inputs become its input schema, and only declared outputs go back to the agent.',
        points: [
          'quote_trip is read-only; book_trip adds hold, payment and compensations',
          'Budget and price guardrails end the run before any payment',
          'Retries run in the engine, without a round trip to the model',
        ],
        example: 'mcp-travel-booking',
        exampleLabel: 'Open the travel-booking example',
      },
      {
        icon: 'e2e',
        title: 'Executable E2E tests',
        body: 'The YAML runs in CI with an Arazzo runner against a mock of your OpenAPI. Success criteria are explicit, and an event step waits for your message with a correlation ID and a timeout.',
        points: [
          'Order, event confirmation, payment, then invoice and shipment joined',
          'Portable criteria: simple conditions with JSON Pointer',
          'Runner support for 1.1 is partial: we document what runs where',
        ],
        example: 'e2e-order-to-cash',
        exampleLabel: 'Open the order-to-cash example',
      },
      {
        icon: 'partners',
        title: 'Partner integration docs',
        body: 'Onboarding becomes a journey a partner can read as a graph and run on a sandbox with their own tool, instead of reverse-engineering a wiki.',
        points: [
          'French B2B onboarding: SIREN lookup, KYC, account creation',
          'The HTTP part is a sub-workflow that also runs on its own',
          'A partner webhook closes the journey as an AsyncAPI step',
        ],
        example: 'e2e-onboarding-entreprise-fr',
        exampleLabel: 'Open the B2B onboarding example',
      },
    ],
  },
  graph: {
    eyebrow: 'Try it',
    title: 'A workflow you can see, not a wall of YAML',
    intro:
      'This is the graph component shipped in Arazzo for VS Code and Arazzo Studio, rendering the examples’ YAML in your browser. Click a step, search, switch the layout or open the legend.',
    examplesLabel: 'Example',
    examples: [
      { id: 'e2e-order-to-cash', workflowId: 'orderToCash', label: 'Order to cash' },
      { id: 'mcp-travel-booking', workflowId: 'book_trip', label: 'Travel booking (MCP)' },
      { id: 'e2e-session-renewal', workflowId: 'listUnpaidInvoices', label: 'Session renewal' },
    ],
    loadLabel: 'Load the interactive graph',
    loadingLabel: 'Loading the graph…',
    errorLabel: 'The graph could not be loaded. Open the example in Arazzo Studio instead.',
    wheelHint: 'Ctrl or ⌘ + scroll to zoom · drag to pan',
    touchActivate: 'Tap to explore the graph',
    touchDone: 'Done',
    openInStudio: 'Open in Arazzo Studio',
    note: 'The example descriptions are written in French; step names and structure read the same in any language.',
  },
  tools: {
    eyebrow: 'ConnEthics tooling',
    title: 'We use what we recommend',
    intro: 'Free tools to write, check and visualise Arazzo 1.0 and 1.1, built on the same MIT-licensed core.',
    items: [
      {
        name: 'Arazzo for VS Code — by ConnEthics',
        badge: 'MIT · Free',
        body: 'Validation against the official 1.0 and 1.1 schemas, semantic checks beyond the schema (step targets, dependsOn cycles, AsyncAPI rules), completion, a quick fix to migrate to 1.1.0, and this interactive graph.',
        cta: { label: 'Install from the Marketplace', href: ARAZZO_LINKS.marketplace },
      },
      {
        name: 'Arazzo Studio by ConnEthics',
        badge: 'Free to use · MIT core',
        body: 'A web builder and viewer for Arazzo workflows: examples gallery, YAML, documentation and graph views, in the browser with nothing to install.',
        cta: { label: 'Open Arazzo Studio', href: ARAZZO_LINKS.studio },
      },
      {
        name: 'AI skill file',
        badge: 'Markdown',
        body: 'One file that teaches coding assistants (Claude Code, Cursor, Copilot, Cline) to write, review and fix Arazzo 1.1, expose workflows as MCP tools and run them as tests.',
        cta: { label: 'Read arazzo.skill.md', href: ARAZZO_LINKS.skill },
      },
      {
        name: 'Runnable examples',
        badge: '5 workflows',
        body: 'Five Arazzo 1.1 documents with their stub OpenAPI or AsyncAPI, inputs, commands and the results we actually observed, plus a CI template.',
        cta: { label: 'Browse the examples', href: ARAZZO_LINKS.example('e2e-order-to-cash') },
      },
    ],
    screenshotAlt: 'The order-to-cash workflow in the Arazzo for VS Code graph, light theme: inputs, an HTTP order step, an AsyncAPI receive step, payment, invoice and shipment joined before closing the order.',
    screenshotCaption: 'order-to-cash in Arazzo for VS Code: HTTP and event steps, dependsOn join, outputs.',
  },
  services: {
    eyebrow: 'Agents choose the intent; workflows guarantee the sequence',
    title: 'How ConnEthics can help',
    intro:
      'Some candour first: Arazzo is a description, not an engine. It has no loops, no data transformations, no human step and no transactions, and runners cover only part of 1.1. When it fits, we work within our existing engagement models.',
    items: [
      {
        title: 'Agentic API readiness audit',
        model: 'Strategic Radar · 2 to 4 weeks',
        body: 'We map the 10 to 20 business intents that matter, where their sequence lives today, and the risk of exposing raw endpoints to agents. You get a roadmap prioritised by business value.',
        link: { label: 'Our engagement models', href: '/services' },
      },
      {
        title: 'Workflow and contract design',
        model: 'Knowledge Engineering · Tactical Strike Team',
        body: 'Workshops with the people who hold the knowledge, Arazzo 1.1 workflows written and validated, E2E journeys wired into CI, and the “one workflow, one MCP tool” pattern with its guardrails.',
        link: { label: 'Knowledge Engineering', href: '/services#knowledge-engineering' },
      },
      {
        title: 'AI tool governance',
        model: 'Ecosystem Governance · AI governance',
        body: 'A reviewed whitelist of workflows exposed to agents, lint rules in CI, and traceability aligned with OWASP LLM06 (Excessive Agency).',
        link: { label: 'Our AI governance practice', href: '/ai-governance' },
      },
    ],
    note: 'We do not promise figures before measuring them with you. Indicators we propose to track: share of key intents formalised, tools exposed to agents versus endpoints, critical journeys covered in CI.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions architects ask us',
    items: [
      {
        question: 'How is Arazzo different from Postman collections or BPMN?',
        answer:
          'A Postman collection is tied to Postman and keeps its logic in scripts; it shines for exploration. BPMN models business processes, human tasks included, without knowing OpenAPI. Arazzo is a neutral, declarative contract for API journeys, bound to your OpenAPI and AsyncAPI operations. They coexist: a BPMN service task can reference an Arazzo workflow.',
      },
      {
        question: 'Does Arazzo replace MCP?',
        answer:
          'No. MCP is how an agent discovers and calls tools; Arazzo describes the sequence behind a tool. A common pattern is one workflow per MCP tool, executed by a server that reads the Arazzo document. MCP as a step type is on the Arazzo roadmap, not in 1.1.',
      },
      {
        question: 'Which runners execute Arazzo today?',
        answer:
          'A handful, with uneven 1.1 support. In our November 2026 tests, Redocly Respect was the most mature for HTTP but did not evaluate Selector Objects or run AsyncAPI steps; arazzo-cli ran Kafka receive steps; Specmatic ran send and receive under a commercial licence. Keep success criteria to simple conditions with JSON Pointer for portability.',
      },
      {
        question: 'Are my Arazzo 1.0 documents still valid?',
        answer:
          'Yes. 1.1.0 is a minor, backward-compatible release: a 1.0.x document remains valid, and tools select the schema from the arazzo field. Arazzo for VS Code validates both versions and offers a quick fix to migrate to 1.1.0 when you need its features.',
      },
      {
        question: 'Under which licences are the ConnEthics tools published?',
        answer:
          'Arazzo for VS Code and the shared packages behind it, @connethics/arazzo-core (validation and graph model) and @connethics/arazzo-flow (the graph), are MIT-licensed. Arazzo Studio is free to use and built on that MIT-licensed core.',
      },
      {
        question: 'When should I not use Arazzo?',
        answer:
          'For long business processes with human tasks (BPMN or a workflow engine fits better), for crash-proof execution with durable state (Temporal or Step Functions, possibly described in Arazzo for consumers), for loops over data or heavy transformations, or while your OpenAPI descriptions are not reliable yet. Start there.',
      },
    ],
  },
  cta: {
    title: 'Start with one journey',
    body: 'Pick the integration that costs you the most today. We will help you write it as an Arazzo workflow, see it as a graph, run it in CI, and decide whether an agent should be allowed to call it.',
    primary: { label: 'Contact us', href: '/contact' },
    secondary: { label: 'Open Arazzo Studio', href: ARAZZO_LINKS.studio },
  },
  software: {
    description:
      'VS Code extension for Arazzo 1.0 and 1.1 workflows with OpenAPI and AsyncAPI: validation against the official schemas, semantic checks, completion, quick fixes (migrate to 1.1) and an interactive graph.',
  },
};

const fr: ArazzoLandingContent = {
  locale: 'fr',
  meta: {
    title: 'Arazzo 1.1 : des workflows API lisibles par les humains, exécutables par les machines | ConnEthics',
    description:
      'Arazzo, le standard de l’OpenAPI Initiative pour les enchaînements d’API : un fichier versionné qui documente un parcours, s’exécute comme test E2E en CI et devient un outil gouverné pour vos agents IA. Outils, exemples et accompagnement ConnEthics.',
    keywords: ['Arazzo', 'Arazzo 1.1', 'OpenAPI', 'AsyncAPI', 'workflows API', 'MCP', 'agents IA', 'tests de bout en bout', 'Arazzo Studio', 'Arazzo for VS Code', 'ConnEthics'],
    ogImage: '/images/arazzo/arazzo-og-fr.png',
    ogAlt: 'Arazzo 1.1 — des workflows API lisibles par les humains, exécutables par les machines — ConnEthics',
  },
  hero: {
    overline: 'Arazzo 1.1 · Outils et accompagnement ConnEthics',
    title: 'Des workflows API lisibles par les humains, exécutables par les machines',
    description:
      'Arazzo est le standard de l’OpenAPI Initiative pour décrire les parcours qui enchaînent plusieurs appels d’API. Un seul fichier versionné documente le parcours pour vos partenaires, s’exécute comme test de bout en bout dans votre CI et devient un outil gouverné pour vos agents IA.',
    primary: { label: 'Lire le guide Arazzo 1.1', href: '/fr/insights/arazzo-1-1-mcp-e2e' },
    secondary: { label: 'Nous contacter', href: '/contact' },
  },
  pains: {
    eyebrow: 'Le constat',
    title: 'Des intentions, pas des endpoints',
    intro:
      'Vos API exposent des verbes, vos clients et vos agents cherchent des résultats. Le chemin de l’un à l’autre est rarement écrit, et chacun en paie le prix à sa façon.',
    items: [
      {
        icon: 'intent',
        title: 'Des endpoints sans intention',
        body: 'OpenAPI dit ce que l’on peut appeler, pas pourquoi ni dans quel ordre. « Réserver un voyage » ou « clôturer une commande » mobilise plusieurs opérations, parfois plusieurs API, et chaque consommateur reconstitue l’intention à partir du catalogue.',
      },
      {
        icon: 'tribal',
        title: 'Une connaissance d’intégration tribale',
        body: 'Le véritable ordre des appels, les pièges et les valeurs à propager d’une réponse à l’autre vivent dans des wikis, des collections privées, des fils de discussion et la tête de quelques personnes. Rien n’est versionné ni testé, et tout part avec elles.',
      },
      {
        icon: 'tests',
        title: 'Des tests E2E fragiles',
        body: 'Les parcours d’API sont codés à la main dans un framework de test ou enfouis dans des scripts de collection : liés à un outil, illisibles hors de l’équipe de développement, et doublon de ce que la documentation devrait déjà dire.',
      },
      {
        icon: 'agents',
        title: 'Des agents qui devinent',
        body: 'Donnez à un agent un outil par endpoint : à chaque exécution, il doit choisir, ordonner et enchaîner les appels. Chaque supposition coûte des tokens et ajoute de la variance, et les travaux sur la sélection d’outils montrent une précision qui baisse quand le catalogue grossit.',
      },
    ],
  },
  whatsNew: {
    eyebrow: 'Arazzo 1.1',
    title: 'Ce qu’apporte la 1.1, en bref',
    intro: 'Publiée par l’OpenAPI Initiative le 17 mai 2026, Arazzo 1.1.0 dépasse le seul HTTP et rend les workflows plus faciles à composer.',
    items: [
      { label: 'Étapes événementielles', body: 'Sources AsyncAPI, étapes qui émettent ou attendent un message, avec correlationId et timeout.' },
      { label: 'dependsOn par étape', body: 'Éventail puis jonction : facture et expédition en parallèle, puis clôture de la commande.' },
      { label: 'Workflows réutilisables', body: 'Une action peut appeler un workflow avec des paramètres : « renouveler la session, puis rejouer », écrit une seule fois.' },
      { label: 'Selector Object', body: 'Extraction versionnée en JSONPath (RFC 9535), XPath ou JSON Pointer.' },
      { label: '$self et querystring', body: 'Une identité stable pour le document, et des chaînes de requête complètes, alignées sur OpenAPI 3.2.' },
      { label: 'Une sémantique resserrée', body: 'Grammaire des expressions, ordre de résolution des sources, critères vrais ou faux : les runners divergent moins.' },
    ],
    compatTitle: 'Vos documents 1.0 restent valides',
    compat:
      'Une version mineure et rétrocompatible : un document 1.0.x reste un document 1.0.x valide, et les outils choisissent le schéma d’après le champ arazzo. Vous migrez quand vous avez besoin d’une fonctionnalité 1.1, pas avant.',
    roadmap: 'MCP, gRPC ou les boucles comme types d’étape figurent sur la feuille de route de la spécification, pas dans la 1.1.',
    specLabel: 'Lire la spécification 1.1.0',
  },
  useCases: {
    eyebrow: 'Écrit une fois, utile trois fois',
    title: 'Un workflow, trois usages',
    intro:
      'Le même workflow Arazzo documente un parcours, s’exécute comme un test et adosse un outil d’agent. Chaque cas d’usage renvoie à un exemple exécutable, à ouvrir dans Arazzo Studio.',
    items: [
      {
        icon: 'mcp',
        title: 'Des outils MCP gouvernés',
        body: 'Chaque workflow devient un outil MCP : le workflowId lui donne son nom, les inputs son schéma d’entrée, et seules les sorties déclarées reviennent à l’agent.',
        points: [
          'quote_trip est en lecture seule ; book_trip ajoute blocage, paiement et compensations',
          'Les garde-fous de budget et de prix arrêtent le parcours avant tout paiement',
          'Les retries tournent dans le moteur, sans aller-retour avec le modèle',
        ],
        example: 'mcp-travel-booking',
        exampleLabel: 'Ouvrir l’exemple de réservation',
      },
      {
        icon: 'e2e',
        title: 'Des tests E2E exécutables',
        body: 'Le YAML s’exécute en CI avec un runner Arazzo, face à un mock de votre OpenAPI. Les critères de succès sont explicites, et une étape événementielle attend votre message avec un identifiant de corrélation et un délai maximal.',
        points: [
          'Commande, confirmation par événement, paiement, puis facture et expédition jointes',
          'Des critères portables : conditions simples en JSON Pointer',
          'Le support de la 1.1 par les runners est partiel : nous documentons ce qui tourne où',
        ],
        example: 'e2e-order-to-cash',
        exampleLabel: 'Ouvrir l’exemple order-to-cash',
      },
      {
        icon: 'partners',
        title: 'La documentation d’intégration partenaires',
        body: 'L’onboarding devient un parcours que le partenaire lit sous forme de graphe et exécute sur un bac à sable avec son propre outil, au lieu de rétro-ingénierer un wiki.',
        points: [
          'Entrée en relation B2B : recherche SIREN, KYC, création du compte',
          'La partie HTTP est un sous-workflow, exécutable seul',
          'Un webhook partenaire clôt le parcours, en étape AsyncAPI',
        ],
        example: 'e2e-onboarding-entreprise-fr',
        exampleLabel: 'Ouvrir l’exemple d’onboarding B2B',
      },
    ],
  },
  graph: {
    eyebrow: 'À vous de jouer',
    title: 'Un workflow qui se regarde, pas un mur de YAML',
    intro:
      'Voici le composant de graphe d’Arazzo for VS Code et d’Arazzo Studio, qui interprète le YAML des exemples directement dans votre navigateur. Cliquez sur une étape, cherchez, changez la disposition ou ouvrez la légende.',
    examplesLabel: 'Exemple',
    examples: [
      { id: 'e2e-order-to-cash', workflowId: 'orderToCash', label: 'De la commande à l’encaissement' },
      { id: 'mcp-travel-booking', workflowId: 'book_trip', label: 'Réservation de voyage (MCP)' },
      { id: 'e2e-session-renewal', workflowId: 'listUnpaidInvoices', label: 'Renouvellement de session' },
    ],
    loadLabel: 'Charger le graphe interactif',
    loadingLabel: 'Chargement du graphe…',
    errorLabel: 'Le graphe n’a pas pu être chargé. Ouvrez plutôt l’exemple dans Arazzo Studio.',
    wheelHint: 'Ctrl ou ⌘ + molette pour zoomer · glisser pour se déplacer',
    touchActivate: 'Touchez pour explorer le graphe',
    touchDone: 'Terminer',
    openInStudio: 'Ouvrir dans Arazzo Studio',
  },
  tools: {
    eyebrow: 'L’outillage ConnEthics',
    title: 'Nous utilisons ce que nous recommandons',
    intro: 'Des outils gratuits pour écrire, vérifier et visualiser de l’Arazzo 1.0 et 1.1, construits sur le même cœur sous licence MIT.',
    items: [
      {
        name: 'Arazzo for VS Code — by ConnEthics',
        badge: 'MIT · Gratuit',
        body: 'Validation contre les schémas officiels 1.0 et 1.1, contrôles sémantiques au-delà du schéma (cibles d’étape, cycles de dependsOn, règles AsyncAPI), complétion, quick fix de migration vers la 1.1.0, et ce même graphe interactif.',
        cta: { label: 'L’installer depuis le Marketplace', href: ARAZZO_LINKS.marketplace },
      },
      {
        name: 'Arazzo Studio by ConnEthics',
        badge: 'Gratuit · Cœur MIT',
        body: 'Un éditeur et visualiseur web de workflows Arazzo : galerie d’exemples, vues YAML, documentation et graphe, dans le navigateur, sans rien installer.',
        cta: { label: 'Ouvrir Arazzo Studio', href: ARAZZO_LINKS.studio },
      },
      {
        name: 'Le skill file IA',
        badge: 'Markdown',
        body: 'Un fichier unique qui apprend aux assistants de code (Claude Code, Cursor, Copilot, Cline) à écrire, relire et corriger de l’Arazzo 1.1, à exposer des workflows en outils MCP et à les exécuter comme des tests.',
        cta: { label: 'Lire arazzo.skill.md', href: ARAZZO_LINKS.skill },
      },
      {
        name: 'Les exemples exécutables',
        badge: '5 workflows',
        body: 'Cinq documents Arazzo 1.1 avec leurs OpenAPI ou AsyncAPI de démonstration, leurs entrées, leurs commandes et les résultats réellement observés, plus un modèle de CI.',
        cta: { label: 'Parcourir les exemples', href: ARAZZO_LINKS.example('e2e-order-to-cash') },
      },
    ],
    screenshotAlt: 'Le workflow order-to-cash dans le graphe d’Arazzo for VS Code, thème clair : entrées, commande HTTP, attente d’un événement AsyncAPI, paiement, facture et expédition jointes avant la clôture.',
    screenshotCaption: 'order-to-cash dans Arazzo for VS Code : étapes HTTP et événementielles, jonction dependsOn, sorties.',
  },
  services: {
    eyebrow: 'L’agent choisit l’intention, le workflow garantit la séquence',
    title: 'Comment ConnEthics vous accompagne',
    intro:
      'D’abord, un mot de franchise : Arazzo est une description, pas un moteur. Ni boucles, ni transformation de données, ni étape humaine, ni transactions, et les runners ne couvrent qu’une partie de la 1.1. Quand il est pertinent, nous intervenons dans nos modèles d’engagement existants.',
    items: [
      {
        title: 'Audit « API readiness agentique »',
        model: 'Strategic Radar · 2 à 4 semaines',
        body: 'Nous cartographions les 10 à 20 intentions métier qui comptent, l’endroit où vit aujourd’hui leur séquence et le risque d’exposer des endpoints bruts à des agents. Vous repartez avec une feuille de route priorisée par la valeur métier.',
        link: { label: 'Nos modèles d’engagement (EN)', href: '/services' },
      },
      {
        title: 'Design de workflows et de contrats',
        model: 'Knowledge Engineering · Tactical Strike Team',
        body: 'Des ateliers avec ceux qui détiennent la connaissance, des workflows Arazzo 1.1 écrits et validés, des parcours E2E branchés sur votre CI, et le pattern « un workflow, un outil MCP » avec ses garde-fous.',
        link: { label: 'Knowledge Engineering (EN)', href: '/services#knowledge-engineering' },
      },
      {
        title: 'Gouvernance des outils IA',
        model: 'Ecosystem Governance · Gouvernance de l’IA',
        body: 'Une liste blanche relue des workflows exposés aux agents, des règles de lint en CI, et une traçabilité alignée sur OWASP LLM06 (Excessive Agency).',
        link: { label: 'Notre pratique de gouvernance de l’IA (EN)', href: '/ai-governance' },
      },
    ],
    note: 'Nous ne promettons pas de chiffres avant de les avoir mesurés avec vous. Les indicateurs que nous proposons de suivre : part des intentions clés formalisées, outils exposés aux agents rapportés au nombre d’endpoints, parcours critiques couverts en CI.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Les questions que nous posent les architectes',
    items: [
      {
        question: 'Quelle différence entre Arazzo, les collections Postman et BPMN ?',
        answer:
          'Une collection Postman est liée à Postman et loge sa logique dans des scripts ; elle excelle pour explorer une API. BPMN modélise des processus métier, tâches humaines comprises, sans connaître OpenAPI. Arazzo est un contrat neutre et déclaratif pour les parcours d’API, rattaché à vos opérations OpenAPI et AsyncAPI. Les trois cohabitent : une tâche de service BPMN peut référencer un workflow Arazzo.',
      },
      {
        question: 'Arazzo remplace-t-il MCP ?',
        answer:
          'Non. MCP est le protocole par lequel un agent découvre et appelle des outils ; Arazzo décrit la séquence derrière un outil. Le pattern courant : un workflow par outil MCP, exécuté par un serveur qui lit le document Arazzo. MCP comme type d’étape figure sur la feuille de route d’Arazzo, pas dans la 1.1.',
      },
      {
        question: 'Quels runners exécutent Arazzo aujourd’hui ?',
        answer:
          'Une poignée, avec un support inégal de la 1.1. Lors de nos essais de novembre 2026, Redocly Respect était le plus mûr pour le HTTP, mais n’évaluait pas les Selector Objects et refusait les étapes AsyncAPI ; arazzo-cli exécutait les étapes receive sur Kafka ; Specmatic gérait send et receive, sous licence commerciale. Pour rester portable, limitez les critères de succès aux conditions simples en JSON Pointer.',
      },
      {
        question: 'Mes documents Arazzo 1.0 restent-ils valides ?',
        answer:
          'Oui. La 1.1.0 est une version mineure et rétrocompatible : un document 1.0.x reste valide, et les outils choisissent le schéma d’après le champ arazzo. Arazzo for VS Code valide les deux versions et propose un quick fix de migration vers la 1.1.0 quand vous en avez besoin.',
      },
      {
        question: 'Sous quelles licences les outils ConnEthics sont-ils publiés ?',
        answer:
          'Arazzo for VS Code et les paquets partagés qui le font tourner, @connethics/arazzo-core (validation et modèle de graphe) et @connethics/arazzo-flow (le graphe), sont sous licence MIT. Arazzo Studio est gratuit et construit sur ce cœur sous licence MIT.',
      },
      {
        question: 'Quand ne faut-il pas utiliser Arazzo ?',
        answer:
          'Pour un processus métier long avec des tâches humaines (BPMN ou un moteur de workflow conviennent mieux), pour une exécution qui doit survivre à une panne avec un état durable (Temporal ou Step Functions, éventuellement décrits en Arazzo pour les consommateurs), pour itérer sur des données ou les transformer lourdement, ou tant que vos descriptions OpenAPI ne sont pas fiables. Commencez par là.',
      },
    ],
  },
  cta: {
    title: 'Commencez par un parcours',
    body: 'Choisissez l’intégration qui vous coûte le plus aujourd’hui. Nous vous aidons à l’écrire en workflow Arazzo, à la voir en graphe, à l’exécuter en CI, et à décider si un agent doit avoir le droit de l’appeler.',
    primary: { label: 'Nous contacter', href: '/contact' },
    secondary: { label: 'Ouvrir Arazzo Studio', href: ARAZZO_LINKS.studio },
  },
  software: {
    description:
      'Extension VS Code pour les workflows Arazzo 1.0 et 1.1 avec OpenAPI et AsyncAPI : validation contre les schémas officiels, contrôles sémantiques, complétion, quick fixes (migration vers la 1.1) et graphe interactif.',
  },
};

export const arazzoLanding: Record<Locale, ArazzoLandingContent> = { en, fr };
