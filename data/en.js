(function () {
  const es = window.STUDY_GUIDE_LOCALES.es;

  const translations = {
    typescript: {
      title: 'TypeScript',
      questions: [
        ['What is the difference between interface and type in TypeScript?', 'Both describe shapes. Interfaces are especially convenient for object contracts, extension, and declaration merging. Type aliases can also represent primitives, unions, intersections, and tuples. Use consistency and the required capability as the deciding factors.'],
        ['What is the difference between any, unknown, and never?', 'any disables type checking. unknown accepts any value but requires narrowing before use. never represents a value that cannot exist, such as a function that always throws or an exhaustively handled branch.'],
        ['What are generics, and when would you use them?', 'Generics express relationships between types while preserving type information. Use them for reusable functions, collections, services, and components whose input and output types are related.'],
        ['What are utility types, and which ones do you use most often?', 'Utility types transform existing types. Common choices include Partial, Required, Pick, Omit, Record, Readonly, ReturnType, Parameters, Extract, and Exclude.'],
        ['What is the difference between union and intersection types?', 'A union accepts a value matching any member. An intersection requires all members at once. Unions model alternatives; intersections combine capabilities or object shapes.'],
        ['What is a discriminated union, and why is it useful?', 'It is a union whose members share a literal discriminator such as type or status. It enables safe narrowing, exhaustive switches, and clear modeling of state transitions.'],
        ['What is type narrowing, and how is it performed?', 'Narrowing refines a broad type into a more specific one through runtime evidence. TypeScript understands checks such as typeof, instanceof, in, equality, truthiness, discriminated unions, and custom type guards.'],
        ['What is a custom type guard?', 'It is a function whose return type is a type predicate. It performs a runtime check and tells TypeScript which type is safe inside the successful branch.'],
        ['What is the difference between readonly and const?', 'const prevents reassigning a variable binding, but does not make an object immutable. readonly prevents assignment to a property or collection position at compile time; neither provides deep runtime immutability.'],
        ['What does the keyof operator do?', 'keyof produces a union of the known property keys of a type. It is often combined with generics and indexed access to build type-safe property helpers.'],
        ['What are mapped types?', 'Mapped types iterate over a union of property keys to create a new object type. They can change value types and add or remove readonly and optional modifiers.'],
        ['What are conditional types?', 'Conditional types choose one type or another using a type-level condition. They are useful for reusable transformations and distribute over unions when the checked type is a generic parameter.'],
        ['What does infer do inside a conditional type?', 'infer declares a type variable from part of a matched type. It can extract elements such as a function return type, promise value, tuple member, or array item.'],
        ['What is the difference between an enum and a union of literals?', 'Enums create a named construct and usually emit JavaScript. Literal unions are lightweight, compose naturally with the type system, and emit no runtime code. Runtime lookup requirements may justify an enum or an as-const object.'],
        ['What does structural typing mean in TypeScript?', 'Compatibility depends on a value\'s shape rather than an explicit declared relationship. A value is assignable when it provides the required members with compatible types.'],
        ['What are excess property checks?', 'They detect unexpected properties in fresh object literals assigned to a known object type. They catch likely mistakes, but are not a general guarantee that an object has no extra runtime fields.'],
        ['What is the difference between overloads and union types in functions?', 'Use a union when all inputs share one implementation and the output does not depend precisely on the input. Overloads document distinct call signatures and can preserve input-to-output relationships.'],
        ['What does the satisfies operator do?', 'satisfies verifies that an expression conforms to a type without replacing the expression\'s inferred, more specific type. It is valuable for configuration objects and exhaustive maps.'],
        ['What is the difference between as, as const, and real validation?', 'as is a compile-time assertion and performs no check. as const preserves literal values and marks properties readonly. Real validation inspects untrusted data at runtime and should be used at system boundaries.'],
        ['Which tsconfig options do you consider essential?', 'Enable strict mode and options that match the runtime and module system. Also consider noUncheckedIndexedAccess, exactOptionalPropertyTypes, noImplicitOverride, useUnknownInCatchVariables, isolatedModules, and consistent casing.'],
      ],
    },
    node: {
      title: 'Node.js',
      questions: [
        ['What does it mean that Node.js uses an event-loop execution model?', 'JavaScript callbacks run on a main event-loop thread while many I/O operations are delegated to the operating system or a worker pool. This enables high concurrency as long as each callback finishes quickly.'],
        ['Which operations can block the Node.js event loop?', 'Large synchronous file or crypto operations, expensive computation, catastrophic regular expressions, huge JSON parsing, and long loops can block it. Measure event-loop delay and move CPU-heavy work to workers or separate services.'],
        ['What is the difference between Promise.all, Promise.allSettled, and sequential execution?', 'Promise.all runs work concurrently and rejects on the first failure. allSettled waits for every outcome. Sequential awaits preserve ordering and limit concurrency, but increase total latency. Choose based on dependencies and failure semantics.'],
        ['How would you handle errors centrally in a Node.js API?', 'Route errors to one middleware or boundary, classify operational errors, map them to stable HTTP responses, attach correlation IDs, and log internal context without leaking sensitive details. Handle shutdown and unhandled failures explicitly.'],
        ['How would you structure a large TypeScript backend for maintainability?', 'Organize around business modules with clear boundaries: transport, application use cases, domain logic, and infrastructure adapters. Depend on abstractions, validate at boundaries, and keep framework details away from core rules.'],
        ['What benefits can functional programming provide in a backend?', 'Pure functions, immutability, and explicit effects make logic easier to test, compose, and reason about. Use them where they improve clarity without forcing every integration into an unnatural abstraction.'],
        ['How would you implement idempotency for an endpoint?', 'Accept an idempotency key, store it atomically with a request fingerprint and result, and return the stored result for retries. Define expiration and reject reuse of the same key with different input.'],
      ],
    },
    react: {
      title: 'React 18+',
      questions: [
        ['What is the difference between local, global, and server state?', 'Local state belongs to one component subtree. Global client state is shared application state. Server state is remote, asynchronous, cached data with freshness and synchronization concerns, which is usually best handled by a query library.'],
        ['What are the differences between useEffect, useMemo, and useCallback?', 'useEffect synchronizes with external systems after rendering. useMemo caches a calculated value, and useCallback caches a function reference. The latter two are performance tools, not semantic guarantees.'],
        ['What problems can incorrect useEffect dependencies cause?', 'Missing dependencies create stale closures and missed synchronization. Unstable or unnecessary dependencies can cause repeated effects or loops. Declare every reactive value and restructure the effect when that becomes awkward.'],
        ['What is a controlled component in React?', 'Its relevant value is driven by React state and changed through callbacks. This creates a single source of truth and makes validation and coordination straightforward, at the cost of more state plumbing.'],
        ['How would you avoid unnecessary renders?', 'Keep state close to its consumers, split components, avoid effects that copy derived state, stabilize references only when measurement supports it, and use memoization at meaningful boundaries. Profile before optimizing.'],
        ['When would you use Context API versus Redux, Zustand, or React Query?', 'Context suits low-frequency shared values such as theme or session. Redux or Zustand help with complex client state and cross-feature updates. React Query is designed for fetching, caching, and synchronizing server state.'],
        ['What advantages did React 18 introduce with concurrent rendering?', 'React can prepare interruptible renders, prioritize urgent updates, batch more updates, and support transitions and Suspense-based streaming. Concurrency improves responsiveness but does not make JavaScript run in parallel.'],
        ['How would you organize a large React application?', 'Use feature-oriented modules, shared design-system components, explicit API and state boundaries, route-level code splitting, and colocated tests. Prevent features from reaching into one another\'s internals.'],
      ],
    },
    angular: {
      title: 'Angular',
      questions: [
        ['What is the difference between ChangeDetectionStrategy.Default and OnPush?', 'Default components are checked during each applicable change-detection traversal. OnPush limits checks to triggers such as new input references, events in the subtree, signals, async emissions, or explicit marking. It works best with immutable data and measurable performance goals.'],
        ['How do you explain dependency injection in Angular, and why is it important?', 'Angular resolves dependencies through hierarchical injectors. A provider\'s placement controls whether an instance is application-wide, route-scoped, or local to a component subtree. This supports separation of concerns, substitution in tests, and explicit service lifetimes.'],
        ['What advantages do Signals provide in modern Angular?', 'Signals model reactive state with explicit reads and writes and fine-grained dependency tracking. computed derives values and effect synchronizes with imperative APIs. They can simplify local state and reduce unnecessary checking, but effects should not replace normal data flow.'],
        ['How would you manage Observable subscriptions to prevent memory leaks?', 'Prefer the async pipe or framework-managed signal interop when possible. For imperative subscriptions, use takeUntilDestroyed with DestroyRef in modern Angular, or a correctly completed teardown subject in older code. Also ensure long-lived streams and nested subscriptions are designed deliberately.'],
        ['Why would you use trackBy in an *ngFor?', 'Tracking by a stable identity lets Angular reuse the existing DOM and component instances when a list changes. This avoids unnecessary destruction, preserves UI state, and improves large-list performance. With modern @for, express the same identity through its track clause.'],
        ['What is the difference between guards, resolvers, and interceptors in Angular?', 'Guards control whether navigation may proceed, resolvers obtain data before route activation, and HTTP interceptors apply cross-cutting request and response behavior. Client-side guards improve navigation UX but never replace server-side authorization.'],
        ['When would you choose NgRx over a simple service?', 'Use a service or signals for small, cohesive state. NgRx becomes valuable when many features coordinate complex transitions and the team needs predictable reducers, effects, selectors, tracing, and strong conventions. Its ceremony should solve real complexity rather than create it.'],
        ['What benefits do standalone components provide?', 'Standalone components declare their own dependencies and reduce NgModule ceremony. They simplify composition, lazy loading, testing, and incremental modernization while making a component\'s imports easier to understand locally.'],
        ['How would you approach performance optimization in a large Angular application?', 'Profile first with Angular DevTools and browser traces. Then address the measured bottleneck using route-level lazy loading, smaller bundles, OnPush or signals, stable list tracking, virtual scrolling, fewer expensive bindings, caching, and controlled network concurrency.'],
        ['What would you consider when implementing Angular SSR and hydration?', 'Keep rendering deterministic between server and client, avoid browser-only APIs on the server, transfer initial data to prevent duplicate requests, and control side effects. Measure whether SSR improves SEO and user-perceived loading enough to justify its caching and operational complexity.'],
        ['What is HostListener, and when would you use it?', 'HostListener declaratively handles events from a directive or component host, and can target a limited set of global event sources. It is useful for encapsulated UI behavior; for complex or high-frequency events, consider Renderer2, RxJS, and explicit cleanup.'],
        ['What is the difference between ViewChild and ContentChild?', 'ViewChild queries elements, directives, or components created by the component\'s own view. ContentChild queries content projected into the component by its parent. Their availability depends on the corresponding view and content lifecycle phases.'],
        ['How would you avoid duplicated code between similar components?', 'Prefer composition: extract shared presentation into a focused component, reusable behavior into a directive, and domain or integration logic into a service or plain function. Base classes can help with true inheritance relationships, but often create hidden coupling.'],
        ['What problems can arise when pure functions receive mutable inputs?', 'Mutating shared inputs breaks referential reasoning and can leave memoized values, pure pipes, or OnPush views stale because the reference did not change. Treat inputs as immutable and return new arrays or objects when state changes.'],
        ['How would you design a scalable forms system in Angular?', 'Use typed reactive forms for complex workflows, keep domain validation separate from presentation, create reusable controls through ControlValueAccessor, centralize server-error mapping, and split large forms by feature. Keep form state explicit and test important validation paths.'],
        ['Why is lazy loading important in Angular?', 'Lazy loading reduces initial JavaScript and defers feature work until navigation requires it. Apply it at route or component boundaries, measure chunk sizes, and avoid turning shared dependencies into duplicated or unexpectedly eager bundles.'],
        ['How would you make an Angular application maintainable for a large team?', 'Organize by business domain, define public feature boundaries, adopt consistent naming and state conventions, enforce linting and dependency rules, automate tests, and document architectural decisions. Shared code should have clear ownership and a narrow purpose.'],
        ['How do you explain the difference between a component and a directive in Angular?', 'A component is a directive with its own template and represents a view boundary. Attribute and structural directives add behavior or change rendering around existing elements without owning a standalone view.'],
        ['How would you provide a good experience under high traffic or slow connections?', 'Keep bundles small, lazy-load noncritical features, optimize and cache assets through a CDN, deduplicate requests, use resilient API caching, and show useful skeleton and error states. Monitor real-user Core Web Vitals and design degraded behavior for unreliable networks.'],
      ],
    },
    'aws-serverless': {
      title: 'AWS Serverless',
      questions: [
        ['Describe the flow of a request from a client to Lambda through API Gateway.', 'The client resolves DNS, negotiates TLS, and sends a request to API Gateway. The gateway authenticates, validates, throttles, and transforms it before invoking Lambda; Lambda calls dependencies and returns a response through the gateway.'],
        ['What is an AWS Lambda cold start, and how would you reduce it?', 'A cold start is initialization of a new execution environment. Reduce package size and initialization work, reuse connections, choose suitable runtimes and memory, avoid unnecessary VPC overhead, or use provisioned concurrency for strict latency targets.'],
        ['When would you use Lambda versus ECS or Fargate?', 'Choose Lambda for event-driven, short-lived, bursty workloads with minimal operations. Choose containers for long-running processes, predictable sustained load, specialized runtimes, more resource control, or workloads that exceed Lambda limits.'],
        ['What are the differences between DynamoDB and a relational database?', 'DynamoDB is a managed key-value/document database designed around access patterns and horizontal scale. Relational databases support joins, flexible querying, and rich transactions. The data model and consistency needs should drive the choice.'],
        ['How would you choose a partition key and sort key in DynamoDB?', 'Start from required access patterns. Pick a high-cardinality partition key that distributes traffic, and use the sort key for ordering, ranges, hierarchy, or multiple entity types. Validate distribution with expected traffic.'],
        ['What is a hot partition?', 'It occurs when disproportionate traffic targets a small key range and exhausts its capacity. Improve key distribution, add write sharding when needed, cache reads, and avoid time-based keys that funnel current traffic together.'],
        ['What is the difference between SQS Standard and SQS FIFO?', 'Standard queues provide very high throughput with at-least-once delivery and best-effort ordering. FIFO queues preserve order within message groups and support deduplication, with different throughput and design constraints.'],
        ['Why must an SQS consumer be idempotent?', 'SQS can deliver a message more than once, and processing may succeed before acknowledgement fails. Record a stable event ID or make the state transition conditional so retries do not duplicate effects.'],
        ['What roles do S3 and CloudFront play?', 'S3 provides durable object storage. CloudFront caches content at edge locations, reduces origin load and latency, supports TLS and custom domains, and can protect access to the S3 origin.'],
        ['How would you protect private files in S3?', 'Block public access, use least-privilege IAM and bucket policies, encrypt data, expose short-lived signed URLs or cookies, and let CloudFront access the bucket through Origin Access Control. Audit access and lifecycle rules.'],
        ['A Lambda has errors and high latency. How would you investigate?', 'Correlate logs, metrics, and traces. Check error types, duration percentiles, timeouts, throttles, concurrency, cold starts, memory, downstream latency, retries, and recent deployments. Reproduce with the same payload and correlation ID.'],
        ['The AWS bill suddenly increases. What would you review?', 'Use Cost Explorer and cost-allocation tags to locate the service, region, and usage type. Then inspect traffic, logs, data transfer, retries, retention, idle resources, scaling changes, and possible credential abuse; add budgets and anomaly alerts.'],
      ],
    },
    arquitectura: {
      title: 'Architecture',
      questions: [
        ['Design a platform that generates executive reports using AI.', 'Separate ingestion, durable storage, asynchronous orchestration, retrieval, model execution, validation, and report delivery. Track prompt and model versions, citations, cost, and status; protect tenant data and require human approval where decisions are sensitive.'],
        ['How would you separate synchronous and asynchronous processing?', 'Keep only work required for the immediate response in the synchronous path. Persist a job, publish an event, process it with retryable workers, expose status, and make consumers idempotent. Use a dead-letter queue for exhausted failures.'],
        ['How would you prevent an external provider outage from taking down the entire application?', 'Set strict timeouts, bounded retries with jitter, circuit breakers, concurrency limits, and bulkheads. Cache or degrade gracefully, queue recoverable work, monitor provider health, and consider a fallback provider for critical capabilities.'],
        ['Which strategies would you use to scale a serverless application?', 'Remove shared bottlenecks, partition data well, use queues to absorb bursts, tune concurrency and batch sizes, cache hot reads, and make handlers stateless and idempotent. Track downstream quotas because automatic compute scaling can overwhelm dependencies.'],
        ['Which metrics would you examine to find a bottleneck?', 'Start with end-to-end latency percentiles and traces, then inspect throughput, errors, saturation, queue depth and age, concurrency, event-loop or CPU use, memory, database capacity, cache hit rate, and downstream timings.'],
        ['What is the difference between vertical and horizontal scalability?', 'Vertical scaling gives one instance more CPU or memory and is simple but bounded. Horizontal scaling adds instances, improving capacity and resilience but requiring statelessness, coordination, partitioning, and distributed-system tradeoffs.'],
        ['How would you implement observability in a distributed application?', 'Use structured logs, metrics, and distributed traces tied together by correlation and trace IDs. Define service-level objectives, dashboards, and actionable alerts; propagate context across queues and redact sensitive fields.'],
        ['How would you manage secrets and configuration variables in AWS?', 'Store secrets in Secrets Manager or Parameter Store with encryption, least-privilege IAM, rotation, and audit trails. Keep non-secret configuration separate, validate it at startup, and never commit or log secret values.'],
      ],
    },
    'ia-y-agentes': {
      title: 'AI and Agents',
      questions: [
        ['What is the difference between integrating an LLM directly and building an agent?', 'A direct integration sends input to a model and receives a response. An agent can maintain state, select tools, retrieve information, repeat steps, and validate results. Not every problem needs that additional autonomy and complexity.'],
        ['What are the main components of an AI agent?', 'A model, instructions, state, memory, tools, control rules, retrieval, validation, observability, permissions, and execution limits. The exact set should match the task and its risk.'],
        ['What is the difference between a deterministic workflow and an autonomous agent?', 'A workflow defines its steps and branches in advance. An agent dynamically chooses its next action or tool. Controlled workflows are usually preferable for predictable or sensitive processes.'],
        ['What is RAG, and when would you use it?', 'Retrieval-augmented generation finds relevant documents and supplies them as model context. Use it to answer from current or private knowledge with evidence, without retraining the model.'],
        ['How would you reduce hallucinations?', 'Use trustworthy retrieval, constrained structured output, clear instructions, low temperature where appropriate, citations, deterministic validation, automated evaluations, and human review for high-impact results.'],
        ['How would you protect an application from prompt injection?', 'Treat retrieved content as untrusted data, separate it from instructions, constrain tools and arguments, authorize every action, keep secrets outside model context, validate outputs, and require confirmation for sensitive operations.'],
        ['How would you control cost and latency when using LLMs?', 'Route simple tasks to smaller models, limit context and output, cache safe results, summarize history, parallelize independent work carefully, stream responses, and monitor tokens, latency, and cost per operation.'],
        ['What information would you store for each agent run?', 'Store run, user, and tenant IDs; model and prompt versions; allowed inputs and outputs; tool calls; structured decisions; tokens; cost; latency; validation; errors; and final status, subject to privacy and retention rules.'],
        ['What advantages does LangGraph provide?', 'It represents an agent as an explicit state graph with conditions, cycles, persistence, retries, human approval, and observability. This gives more control over long-running or stateful workflows.'],
        ['How would you evaluate whether answers are correct?', 'Build a representative dataset and measure correctness, faithfulness, completeness, format, safety, bias, cost, and latency. Combine deterministic checks, expected answers, human review, cautious model-based grading, and regression tests.'],
        ['Would you allow an agent to make automatic hiring decisions?', 'Not as the final decision maker. It may organize evidence and draft transparent recommendations, but hiring needs human accountability, bias testing, traceability, appeal paths, data protection, and compliance with applicable law.'],
      ],
    },
    'testing-y-seguridad': {
      title: 'Testing and Security',
      questions: [
        ['What is the difference between unit, integration, and end-to-end tests?', 'Unit tests isolate small logic quickly. Integration tests verify boundaries such as databases or APIs working together. End-to-end tests exercise critical user flows through the deployed stack; they provide confidence but are slower and more fragile.'],
        ['Which parts of a Lambda function would you test?', 'Test domain logic as units, handler validation and response mapping, authorization, idempotency, timeout and retry behavior, and integrations with realistic fakes or local services. Add deployed tests for IAM and event-source configuration.'],
        ['How would you conduct an effective code review?', 'Understand the goal first, then check correctness, security, data handling, failure modes, tests, maintainability, and observability. Keep comments specific and prioritized, distinguish blockers from suggestions, and automate style checks.'],
        ['What are the most important API vulnerabilities?', 'Broken object-level authorization, weak authentication, injection, excessive data exposure, unsafe mass assignment, missing rate limits, SSRF, insecure configuration, and poor secret handling are common risks. Apply defense in depth and test abuse cases.'],
        ['How would you implement authentication and authorization?', 'Use a proven identity provider and validated short-lived tokens or secure sessions. Enforce authorization server-side for every resource and action using least privilege; distinguish roles from ownership and tenant boundaries.'],
        ['How would you avoid exposing sensitive information in logs?', 'Use an allowlist of fields, structured logging, centralized redaction, and safe error objects. Never log secrets, tokens, passwords, or unnecessary personal data; control access, retention, and deletion of logs.'],
      ],
    },
    situacionales: {
      title: 'Situational Questions',
      questions: [
        ['An endpoint takes eight seconds. How would you find the problem?', 'Establish a trace and latency breakdown before changing code. Compare percentiles, inspect database queries and downstream calls, check saturation and payload size, reproduce the slow path, then optimize the measured bottleneck and verify the result.'],
        ['Two users update the same record simultaneously. How would you prevent overwrites?', 'Use optimistic concurrency with a version or timestamp and a conditional update. Reject a stale write with a conflict response so the client can reload or merge. Use transactions or locking when the business invariant requires stronger coordination.'],
        ['An SQS task fails repeatedly. How would you stop it from blocking the system?', 'Configure bounded receives and a dead-letter queue, ensure the visibility timeout exceeds processing time, classify retryable errors, add backoff, isolate poison messages, make processing idempotent, and alert on queue age and DLQ growth.'],
        ['You must migrate a monolith to serverless. Would you rewrite it completely?', 'Usually not. Identify bounded contexts and measurable pain points, add tests and observability, then extract suitable capabilities incrementally using a strangler approach. Rewriting everything at once multiplies delivery and domain-discovery risk.'],
        ['The founders want to launch in two days, but there are technical risks. What would you do?', 'Make the risks and impact explicit, separate non-negotiable safety issues from manageable debt, propose a reduced scope or feature flag, add monitoring and rollback, document accepted risk, and schedule the follow-up work with an owner.'],
        ['Tell me about an important architectural decision.', 'Use a concrete example: context and constraints, options considered, the decision and tradeoffs, how you aligned stakeholders, measurable results, and what you would change now. Demonstrate judgment rather than presenting the choice as universally correct.'],
        ['What would you do during your first 30 days?', 'Learn the product, users, team, architecture, delivery process, and operational risks. Build relationships, run the system locally, review incidents and metrics, ship a small useful improvement, and agree on priorities before proposing major redesigns.'],
      ],
    },
  };

  const codeTranslations = new Map([
    ['// permitido', '// allowed'],
    ['// validación real', '// real validation'],
    ['// no valida en runtime', '// does not validate at runtime'],
    ['// payload.status conserva el literal "ok"', '// payload.status keeps the "ok" literal'],
    ['// salida: 1, 2, 3', '// output: 1, 2, 3'],
    ['// Bloquea el event loop', '// Blocks the event loop'],
    ['// Las APIs asíncronas permiten atender otras solicitudes', '// Async APIs allow other requests to be handled'],
    ['// incluir todo valor reactivo utilizado', '// include every reactive value used'],
    ['// [] usaría un userId obsoleto si cambia', '// [] would use a stale userId after it changes'],
    ['// Lambda: trabajo corto disparado por un evento', '// Lambda: short-lived work triggered by an event'],
    ['// Fargate: proceso largo o con runtime/CPU controlados', '// Fargate: long-running work or controlled runtime/CPU'],
    ['-- Relacional: joins y transacciones complejas', '-- Relational: joins and complex transactions'],
    ['// DynamoDB: acceso por clave conocida', '// DynamoDB: access by a known key'],
    ['// Mala clave: todas las escrituras llegan a la misma partición', '// Bad key: every write reaches the same partition'],
    ['// Distribuir carga con shards', '// Distribute load with shards'],
    ['// Standard: mayor throughput; FIFO: orden por MessageGroupId', '// Standard: higher throughput; FIFO: ordering by MessageGroupId'],
    ['# Horizontal: más instancias', '# Horizontal: more instances'],
    ['# Vertical: más recursos para una instancia', '# Vertical: more resources for one instance'],
    ['// Integración directa', '// Direct integration'],
    ['// Agente: decide cuándo usar herramientas', '// Agent: decides when to use tools'],
    ['// Antes: error silencioso y sin contexto', '// Before: silent error without context'],
    ['// Sugerencia de review: modelar el caso ausente', '// Review suggestion: model the missing case'],
    ['// Strangler pattern: migración gradual por funcionalidad', '// Strangler pattern: gradual migration by feature'],
    ['// Mover el siguiente módulo después de medir errores y latencia', '// Move the next module after measuring errors and latency'],
    ['// Activar primero para usuarios internos y conservar rollback', '// Enable for internal users first and retain rollback'],
    ['# ADR-012: Procesamiento asíncrono de reportes', '# ADR-012: Asynchronous report processing'],
    ['Estado: Aceptada', 'Status: Accepted'],
    ['Contexto: la generación tarda hasta 90 segundos.', 'Context: generation takes up to 90 seconds.'],
    ['Decisión: API 202 + SQS + workers idempotentes.', 'Decision: 202 API + SQS + idempotent workers.'],
    ['Consecuencias: menor acoplamiento; se requiere seguimiento de jobs.', 'Consequences: lower coupling; job tracking is required.'],
  ]);

  function englishAnswer(sourceQuestion, text) {
    const codeBlocks = sourceQuestion.answerHtml.match(/<pre>[\s\S]*?<\/pre>/g) || [];
    const translatedCode = codeBlocks.map((block) => {
      let result = block;
      codeTranslations.forEach((translation, source) => {
        result = result.replaceAll(source, translation);
      });
      return result;
    });
    return `<p>${text}</p>${translatedCode.join('')}`;
  }

  const sections = es.sections.map((sourceSection) => {
    const translated = translations[sourceSection.slug];
    if (!translated || translated.questions.length !== sourceSection.questions.length) {
      throw new Error(`Incomplete English translation for ${sourceSection.slug}`);
    }

    return {
      slug: sourceSection.slug,
      icon: sourceSection.icon,
      title: translated.title,
      questions: sourceSection.questions.map((sourceQuestion, index) => ({
        id: sourceQuestion.id,
        question: translated.questions[index][0],
        answerHtml: englishAnswer(sourceQuestion, translated.questions[index][1]),
      })),
    };
  });

  window.STUDY_GUIDE_LOCALES.en = {
    locale: 'en',
    siteTitle: 'Fullstack Engineer · Study Guide',
    ui: {
      documentTitle: 'Fullstack Engineer Technical Interview',
      interviewPreparation: 'Technical interview preparation',
      homeDescription: 'Choose a section to practice its questions and answers.',
      studySections: 'Study sections',
      studyGuide: 'Study guide',
      topics: 'Topics',
      chooseTopic: 'Choose where you want to begin',
      allSections: '← All sections',
      currentSection: 'Current section',
      sectionOf: 'Section {current} of {total}',
      practiceCount: '{count} practice questions',
      practicePrompt: '{count} practice questions. Answer out loud before opening each answer.',
      studyNavigation: 'Study sections',
      previous: '← {title}',
      next: '{title} →',
      language: 'Language',
    },
    sections,
  };
}());
