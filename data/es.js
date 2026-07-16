window.STUDY_GUIDE_LOCALES = window.STUDY_GUIDE_LOCALES || {};
window.STUDY_GUIDE_LOCALES.es = {
  "locale": "es",
  "siteTitle": "Fullstack Engineer · Study Guide",
  "ui": {
    "documentTitle": "Entrevista Técnica Fullstack Engineer",
    "interviewPreparation": "Preparación entrevista técnica",
    "homeDescription": "Elige una sección para practicar sus preguntas y respuestas.",
    "studySections": "Secciones de estudio",
    "studyGuide": "Guía de estudio",
    "topics": "Temas",
    "chooseTopic": "Selecciona por dónde quieres comenzar",
    "allSections": "← Todas las secciones",
    "currentSection": "Sección actual",
    "sectionOf": "Sección {current} de {total}",
    "practiceCount": "{count} preguntas para practicar",
    "practicePrompt": "{count} preguntas para practicar. Responde en voz alta antes de abrir cada respuesta.",
    "studyNavigation": "Secciones de estudio",
    "previous": "← {title}",
    "next": "{title} →",
    "language": "Idioma"
  },
  "sections": [
    {
      "slug": "typescript",
      "icon": "TS",
      "title": "TypeScript",
      "questions": [
        {
          "id": 1,
          "question": "¿Cuál es la diferencia entre interface y type en TypeScript?",
          "answerHtml": "<p>Ambos permiten definir estructuras. <code>interface</code> es especialmente conveniente para objetos y permite *declaration merging*. <code>type</code> es más flexible para uniones, intersecciones, tipos primitivos y tipos condicionales.</p><pre><code>interface User { id: string; name: string;\r\n} type UserStatus = &quot;active&quot; | &quot;inactive&quot;;</code></pre><p>En muchos casos son intercambiables. Usaría <code>interface</code> para contratos de objetos y <code>type</code> para uniones, utilidades y composiciones complejas.</p>"
        },
        {
          "id": 2,
          "question": "¿Qué diferencia existe entre any, unknown y never?",
          "answerHtml": "<ul><li>`any`: desactiva prácticamente la validación de tipos.</li><li>`unknown`: acepta cualquier valor, pero obliga a validarlo antes de usarlo.</li><li>`never`: representa algo que nunca ocurre, como una función que siempre lanza una excepción.</li></ul><pre><code>function parse(value: unknown): string { if (typeof value === &quot;string&quot;) return value; throw new Error(&quot;Invalid value&quot;);\r\n}</code></pre><p>En código de producción es preferible <code>unknown</code> sobre <code>any</code>.</p>"
        },
        {
          "id": 3,
          "question": "¿Qué son los generics y cuándo los usarías?",
          "answerHtml": "<p>Permiten crear código reutilizable conservando el tipo de los datos.</p><pre><code>function first&lt;T&gt;(items: T[]): T | undefined { return items[0];\r\n}</code></pre><p>Los usaría en repositorios, respuestas HTTP, componentes reutilizables y funciones que operan con diferentes tipos.</p>"
        },
        {
          "id": 4,
          "question": "¿Qué son los utility types y cuáles usarías con más frecuencia?",
          "answerHtml": "<p>Son tipos incorporados que transforman otros tipos. Los más comunes son <code>Partial</code>, <code>Required</code>, <code>Pick</code>, <code>Omit</code>, <code>Readonly</code>, <code>Record</code> y <code>ReturnType</code>.</p><pre><code>type User = { id: string; name: string; email: string };\r\ntype UserUpdate = Partial&lt;User&gt;;\r\ntype UserPreview = Pick&lt;User, &quot;id&quot; | &quot;name&quot;&gt;;</code></pre><p>Ayudan a evitar duplicación y expresan mejor la intención del código.</p>"
        },
        {
          "id": 5,
          "question": "¿Qué diferencia existe entre union types e intersection types?",
          "answerHtml": "<p>Una unión representa una opción entre varios tipos; una intersección combina varios tipos en uno.</p><pre><code>type Status = &quot;loading&quot; | &quot;success&quot; | &quot;error&quot;;\r\ntype AuditedUser = User &amp; Auditable;</code></pre>"
        },
        {
          "id": 6,
          "question": "¿Qué es un discriminated union y por qué es útil?",
          "answerHtml": "<p>Es una unión donde cada variante comparte una propiedad literal que permite distinguirla de forma segura.</p><pre><code>type Result = | { type: &quot;success&quot;; data: string } | { type: &quot;error&quot;; message: string };</code></pre><p>Es muy útil para estados de UI, eventos y respuestas de APIs.</p>"
        },
        {
          "id": 7,
          "question": "¿Qué es type narrowing y cómo se realiza?",
          "answerHtml": "<p>Es el proceso mediante el cual TypeScript reduce un tipo amplio a uno más específico. Puede hacerse con <code>typeof</code>, <code>instanceof</code>, <code>in</code>, comparaciones literales y type guards.</p><pre><code>function printId(id: string | number) {\n  if (typeof id === \"string\") {\n    return id.toUpperCase(); // string\n  }\n  return id.toFixed(0); // number\n}</code></pre>"
        },
        {
          "id": 8,
          "question": "¿Qué es un custom type guard?",
          "answerHtml": "<p>Es una función que valida un valor y le informa a TypeScript cuál es su tipo mediante <code>value is Type</code>.</p><pre><code>function isUser(value: unknown): value is User { return typeof value === &quot;object&quot; &amp;&amp; value !== null &amp;&amp; &quot;id&quot; in value;\r\n}</code></pre>"
        },
        {
          "id": 9,
          "question": "¿Qué diferencia existe entre readonly y const?",
          "answerHtml": "<p><code>const</code> evita reasignar una variable. <code>readonly</code> evita modificar una propiedad después de inicializarla. <code>const</code> no vuelve inmutable el contenido de un objeto.</p><pre><code>const user = { name: \"Ana\" };\nuser.name = \"Luis\"; // permitido\n\ninterface Config { readonly apiUrl: string }\nconst config: Config = { apiUrl: \"/api\" };\n// config.apiUrl = \"/v2\"; // error</code></pre>"
        },
        {
          "id": 10,
          "question": "¿Qué hace el operador keyof?",
          "answerHtml": "<p><code>keyof</code> obtiene una unión con las claves de un tipo.</p><pre><code>type User = { id: string; name: string };\r\ntype UserKey = keyof User; // &quot;id&quot; | &quot;name&quot;</code></pre>"
        },
        {
          "id": 11,
          "question": "¿Qué son los mapped types?",
          "answerHtml": "<p>Permiten construir un nuevo tipo recorriendo las propiedades de otro.</p><pre><code>type Optional&lt;T&gt; = { [K in keyof T]?: T[K];\r\n};</code></pre>"
        },
        {
          "id": 12,
          "question": "¿Qué son los conditional types?",
          "answerHtml": "<p>Permiten elegir un tipo según una condición.</p><pre><code>type IsString&lt;T&gt; = T extends string ? true : false;</code></pre>"
        },
        {
          "id": 13,
          "question": "¿Qué hace infer dentro de un conditional type?",
          "answerHtml": "<p><code>infer</code> permite capturar un tipo dentro de una condición.</p><pre><code>type UnwrapPromise&lt;T&gt; = T extends Promise&lt;infer U&gt; ? U : T;</code></pre>"
        },
        {
          "id": 14,
          "question": "¿Qué diferencia existe entre enum y una unión de literales?",
          "answerHtml": "<p>Un <code>enum</code> genera código JavaScript en runtime. Una unión de literales solo existe en compilación. En muchos proyectos se prefieren uniones por ser más simples y ligeras.</p><pre><code>enum RoleEnum { Admin = \"admin\", User = \"user\" }\n\ntype Role = \"admin\" | \"user\";\nconst role: Role = \"admin\"; // no genera JS adicional</code></pre>"
        },
        {
          "id": 15,
          "question": "¿Qué significa structural typing en TypeScript?",
          "answerHtml": "<p>TypeScript compara los tipos por su estructura, no por su nombre. Si un objeto tiene al menos las propiedades requeridas, normalmente es compatible.</p><pre><code>type User = { id: string };\nconst employee = { id: \"u-1\", department: \"IT\" };\n\nconst user: User = employee; // compatible por su estructura</code></pre>"
        },
        {
          "id": 16,
          "question": "¿Qué son excess property checks?",
          "answerHtml": "<p>Son validaciones adicionales aplicadas a objetos literales para detectar propiedades inesperadas. Pueden comportarse diferente cuando el objeto se asigna primero a una variable.</p><pre><code>type User = { id: string };\n\n// const user: User = { id: \"1\", admin: true }; // error\nconst data = { id: \"1\", admin: true };\nconst user: User = data; // permitido</code></pre>"
        },
        {
          "id": 17,
          "question": "¿Qué diferencia existe entre overloads y union types en funciones?",
          "answerHtml": "<p>Los overloads permiten varias firmas públicas para una implementación. Las uniones son más simples cuando la lógica y el retorno no cambian demasiado.</p><pre><code>function format(value: string): string;\nfunction format(value: number): string;\nfunction format(value: string | number) {\n  return String(value);\n}\n\nconst simple = (value: string | number) =&gt; String(value);</code></pre>"
        },
        {
          "id": 18,
          "question": "¿Qué hace el operador satisfies?",
          "answerHtml": "<p><code>satisfies</code> valida que un valor cumpla un tipo sin perder la inferencia específica del valor.</p><pre><code>const config = { mode: &quot;production&quot;, retries: 3\r\n} satisfies Config;</code></pre>"
        },
        {
          "id": 19,
          "question": "¿Cuál es la diferencia entre as, as const y una validación real?",
          "answerHtml": "<p><code>as</code> fuerza una interpretación del tipo, pero no valida en runtime. <code>as const</code> conserva valores literales y vuelve readonly las propiedades. Para datos externos se necesita validación real, por ejemplo con Zod.</p><pre><code>const payload = { status: \"ok\" } as const;\n// payload.status conserva el literal \"ok\"\n\nconst unsafe = input as User; // no valida en runtime\nconst safe = UserSchema.parse(input); // validación real</code></pre>"
        },
        {
          "id": 20,
          "question": "¿Qué opciones de tsconfig considerarías esenciales?",
          "answerHtml": "<p>Activaría <code>strict</code>, <code>noImplicitOverride</code>, <code>noUncheckedIndexedAccess</code>, <code>exactOptionalPropertyTypes</code> y <code>forceConsistentCasingInFileNames</code>, además de configurar correctamente <code>target</code>, <code>module</code> y <code>moduleResolution</code>.</p><pre><code>{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"noUncheckedIndexedAccess\": true,\n    \"exactOptionalPropertyTypes\": true,\n    \"noImplicitOverride\": true\n  }\n}</code></pre>"
        }
      ]
    },
    {
      "slug": "node",
      "icon": "JS",
      "title": "Node.js",
      "questions": [
        {
          "id": 21,
          "question": "¿Qué significa que Node.js tenga un modelo de ejecución basado en un event loop?",
          "answerHtml": "<p>Node.js ejecuta JavaScript principalmente en un solo hilo. El *event loop* coordina operaciones asíncronas como red, archivos, timers y callbacks.</p><p>Mientras una operación de entrada/salida espera, Node puede atender otras solicitudes. Esto lo hace eficiente para aplicaciones con mucho I/O, aunque no necesariamente para trabajo intensivo de CPU.</p><pre><code>console.log(\"1\");\nsetTimeout(() =&gt; console.log(\"3: timer\"), 0);\nPromise.resolve().then(() =&gt; console.log(\"2: microtask\"));\n// salida: 1, 2, 3</code></pre>"
        },
        {
          "id": 22,
          "question": "¿Qué operaciones pueden bloquear el event loop de Node.js?",
          "answerHtml": "<p>Por ejemplo: cálculos intensivos, procesamiento pesado de imágenes, compresión grande, parsing de archivos enormes de manera síncrona, métodos como <code>readFileSync</code> y expresiones regulares muy costosas.</p><p>Para evitarlo se pueden utilizar APIs asíncronas, Worker Threads, procesamiento por lotes, colas o servicios especializados.</p><pre><code>// Bloquea el event loop\nfor (let i = 0; i &lt; 1_000_000_000; i++) {}\n\n// Las APIs asíncronas permiten atender otras solicitudes\nconst file = await fs.promises.readFile(\"report.csv\");</code></pre>"
        },
        {
          "id": 23,
          "question": "¿Cuál es la diferencia entre Promise.all, Promise.allSettled y la ejecución secuencial?",
          "answerHtml": "<p><code>Promise.all</code> ejecuta operaciones concurrentemente, pero falla cuando una de ellas falla.</p><pre><code>const results = await Promise.all([ getUser(), getPermissions()\r\n]);</code></pre><p><code>Promise.allSettled</code> espera todas las operaciones y devuelve el resultado individual de cada una. La ejecución secuencial es apropiada cuando cada operación depende de la anterior o cuando hay que limitar la concurrencia.</p>"
        },
        {
          "id": 24,
          "question": "¿Cómo manejarías errores de manera centralizada en una API de Node.js?",
          "answerHtml": "<p>Crearía errores tipados y un middleware global.</p><pre><code>class AppError extends Error { constructor( public readonly statusCode: number, message: string, public readonly code: string ) { super(message); }\r\n}</code></pre><p>El middleware transformaría esos errores en respuestas consistentes y registraría los errores inesperados sin exponer información sensible.</p>"
        },
        {
          "id": 25,
          "question": "¿Cómo estructurarías un backend grande en TypeScript para que sea mantenible?",
          "answerHtml": "<p>Separaría responsabilidades por capas:</p><pre><code>src/ domain/ application/ infrastructure/ interfaces/ shared/</code></pre><ul><li>`domain`: entidades y reglas de negocio.</li><li>`application`: casos de uso.</li><li>`infrastructure`: DynamoDB, S3, proveedores de IA.</li><li>`interfaces`: controladores HTTP o consumidores SQS.</li><li>`shared`: logging, configuración y errores.</li></ul><p>La lógica de negocio no debería depender directamente de AWS o del framework HTTP.</p>"
        },
        {
          "id": 26,
          "question": "¿Qué beneficios tendría utilizar programación funcional en el backend?",
          "answerHtml": "<p>Funciones pequeñas y predecibles, menos mutación de estado, mayor facilidad para probar, composición de operaciones y menor acoplamiento.</p><pre><code>const calculateScore = (answers: Answer[]): number =&gt; answers.reduce((total, answer) =&gt; total + answer.score, 0);</code></pre><p>No significa eliminar completamente las clases, sino favorecer funciones puras para las reglas de negocio.</p>"
        },
        {
          "id": 27,
          "question": "¿Cómo implementarías idempotencia en un endpoint?",
          "answerHtml": "<p>El cliente enviaría una <code>idempotency-key</code>. Antes de procesar, el backend comprobaría si esa clave ya fue utilizada.</p><pre><code>Idempotency key ↓\r\nConsultar DynamoDB ↓\r\nExiste → retornar resultado anterior\r\nNo existe → procesar y almacenar resultado</code></pre><p>Esto evita duplicar pagos, reportes o tareas por reintentos de red.</p>"
        }
      ]
    },
    {
      "slug": "react",
      "icon": "⚛",
      "title": "React 18+",
      "questions": [
        {
          "id": 28,
          "question": "¿Cuál es la diferencia entre estado local, estado global y estado del servidor?",
          "answerHtml": "<ul><li>Local: pertenece a un componente, como un modal abierto.</li><li>Global: lo necesitan distintas partes de la aplicación, como el usuario autenticado.</li><li>Estado del servidor: información obtenida de APIs, que requiere caché, revalidación y sincronización.</li></ul><p>No almacenaría automáticamente toda la información del servidor en Redux. Para eso React Query o SWR suelen ser más apropiados.</p><pre><code>const [open, setOpen] = useState(false); // estado local\nconst user = useAuthStore((state) =&gt; state.user); // global\nconst { data } = useQuery({\n  queryKey: [\"projects\"],\n  queryFn: fetchProjects,\n}); // estado del servidor</code></pre>"
        },
        {
          "id": 29,
          "question": "¿Qué diferencias existen entre useEffect, useMemo y useCallback?",
          "answerHtml": "<ul><li>`useEffect`: sincroniza el componente con algo externo.</li><li>`useMemo`: memoriza el resultado de un cálculo.</li><li>`useCallback`: memoriza una función.</li></ul><pre><code>const filteredUsers = useMemo( () =&gt; users.filter(user =&gt; user.active), [users]\r\n);</code></pre><p>No deben utilizarse indiscriminadamente porque también añaden complejidad y costo.</p>"
        },
        {
          "id": 30,
          "question": "¿Qué problemas pueden producir las dependencias incorrectas en useEffect?",
          "answerHtml": "<p>Pueden generar valores obsoletos, ejecuciones infinitas, peticiones duplicadas, comportamientos difíciles de reproducir y problemas de concurrencia.</p><p>Cada valor externo utilizado dentro del efecto debe analizarse como una posible dependencia.</p><pre><code>useEffect(() =&gt; {\n  loadUser(userId);\n}, [userId]); // incluir todo valor reactivo utilizado\n\n// [] usaría un userId obsoleto si cambia</code></pre>"
        },
        {
          "id": 31,
          "question": "¿Qué es un controlled component en React?",
          "answerHtml": "<p>Es un componente cuyo valor es controlado por React.</p><pre><code>const [name, setName] = useState(&quot;&quot;); &lt;input value={name} onChange={event =&gt; setName(event.target.value)}\r\n/&gt;</code></pre><p>Facilita validación, transformación y sincronización, aunque en formularios grandes puede requerir librerías como React Hook Form.</p>"
        },
        {
          "id": 32,
          "question": "¿Cómo evitarías renderizados innecesarios?",
          "answerHtml": "<p>Primero mediría con React DevTools Profiler. Después consideraría dividir componentes, mantener el estado cerca de donde se usa, evitar recrear objetos, <code>React.memo</code>, <code>useMemo</code>, <code>useCallback</code>, selectores específicos y virtualización.</p><p>La optimización debe basarse en medición, no únicamente en intuición.</p><pre><code>const Row = memo(function Row({ item, onSelect }) {\n  return &lt;button onClick={() =&gt; onSelect(item.id)}&gt;{item.name}&lt;/button&gt;;\n});\n\nconst onSelect = useCallback((id) =&gt; selectItem(id), [selectItem]);</code></pre>"
        },
        {
          "id": 33,
          "question": "¿Cuándo usarías Context API y cuándo Redux, Zustand o React Query?",
          "answerHtml": "<p>Context es adecuado para información que cambia poco, como tema, idioma o sesión.</p><p>Redux o Zustand son más útiles cuando existe estado global complejo con muchas transiciones.</p><p>React Query es ideal para datos remotos: caché, reintentos, invalidación y revalidación.</p><pre><code>const ThemeContext = createContext(\"dark\"); // dato global estable\n\nconst { data: users } = useQuery({\n  queryKey: [\"users\"],\n  queryFn: fetchUsers,\n}); // caché, reintentos y sincronización del servidor</code></pre>"
        },
        {
          "id": 34,
          "question": "¿Qué ventajas introdujo React 18 con el renderizado concurrente?",
          "answerHtml": "<p>React 18 permite priorizar actualizaciones y preparar renderizados sin bloquear inmediatamente la interfaz.</p><p>Herramientas relevantes: <code>startTransition</code>, <code>useTransition</code>, <code>useDeferredValue</code>, Suspense y automatic batching.</p><pre><code>const [isPending, startTransition] = useTransition();\n\nfunction onSearch(value) {\n  setInput(value); // actualización urgente\n  startTransition(() =&gt; setFilter(value)); // puede interrumpirse\n}</code></pre>"
        },
        {
          "id": 35,
          "question": "¿Cómo organizarías una aplicación React grande?",
          "answerHtml": "<p>Preferiría organización por dominio o funcionalidad:</p><pre><code>src/ features/ candidates/ reports/ assessments/ shared/ components/ hooks/ services/ app/ routing/ providers/</code></pre><p>Cada funcionalidad puede contener componentes, hooks, servicios y pruebas relacionados.</p>"
        }
      ]
    },
    {
      "slug": "angular",
      "icon": "NG",
      "title": "Angular",
      "questions": [
        {
          "id": 36,
          "question": "¿Cuál es la diferencia entre ChangeDetectionStrategy.Default y OnPush?",
          "answerHtml": "<p>Default revisa el árbol completo en cada cambio de referencia o evento. OnPush solo revisa cuando cambia la referencia de la entrada o cuando ocurre un evento dentro del componente. Esto mejora rendimiento, pero exige pensar con más cuidado en cómo se actualizan los datos.</p>\r\n                <pre><code>@Component({\r\n  selector: 'app-card',\r\n  template: '{{ user.name }}',\r\n  changeDetection: ChangeDetectionStrategy.OnPush\r\n})\r\nexport class CardComponent {\r\n  @Input() user!: User;\r\n}</code></pre>"
        },
        {
          "id": 37,
          "question": "¿Cómo explicas la inyección de dependencias en Angular y por qué es importante?",
          "answerHtml": "<p>Angular usa un inyector jerárquico. Cada servicio puede registrarse en un nivel del árbol de componentes y ser compartido o aislado según el alcance que necesitemos.</p>\r\n                <pre><code>@Injectable({ providedIn: 'root' })\r\nexport class UserService {}\r\n\r\n@Component({ selector: 'app-user', template: '' })\r\nexport class UserComponent {\r\n  constructor(private userService: UserService) {}\r\n}</code></pre>"
        },
        {
          "id": 38,
          "question": "¿Qué ventajas aportan los Signals en Angular moderno?",
          "answerHtml": "<p>Los Signals hacen el estado más explícito y predecible. Permiten declarar estado reactivo con mejor performance y menos complejidad en escenarios donde el flujo de datos puede volverse difícil de seguir.</p>\r\n                <pre><code>count = signal(0);\r\n\r\ndoubleCount = computed(() => this.count() * 2);\r\n\r\neffect(() => console.log(this.count()));</code></pre>"
        },
        {
          "id": 39,
          "question": "¿Cómo manejarías la suscripción a Observables para evitar fugas de memoria?",
          "answerHtml": "<p>Evitaría suscribirme manualmente cuando sea posible y usaría operadores como <code>takeUntil</code>, <code>asyncPipe</code> o un patrón de limpieza en <code>ngOnDestroy</code>.</p>\r\n                <pre><code>private destroy$ = new Subject<void>();\r\n\r\nngOnInit() {\r\n  this.userService.getUser().pipe(takeUntil(this.destroy$)).subscribe();\r\n}\r\n\r\nngOnDestroy() {\r\n  this.destroy$.next();\r\n  this.destroy$.complete();\r\n}</code></pre>"
        },
        {
          "id": 40,
          "question": "¿Por qué usarías trackBy en un *ngFor?",
          "answerHtml": "<p>Porque ayuda a Angular a identificar qué elementos cambiaron, agregaron o eliminaron, reduciendo re-renderizados innecesarios y mejorando el rendimiento en listas grandes.</p>\r\n                <pre><code><li *ngFor=\"let item of items; trackBy: trackById\">{{ item.name }}</li>\r\n\r\ntrackById(index: number, item: Item) {\r\n  return item.id;\r\n}</code></pre>"
        },
        {
          "id": 41,
          "question": "¿Qué diferencia existe entre guards, resolvers y interceptors en Angular?",
          "answerHtml": "<p>Los guards protegen acceso a rutas, los resolvers precargan datos antes de entrar a una vista y los interceptors modifican peticiones y respuestas de forma transversal.</p>\r\n                <pre><code>const routes: Routes = [{\r\n  path: 'dashboard',\r\n  canActivate: [AuthGuard],\r\n  resolve: { user: UserResolver }\r\n}];</code></pre>"
        },
        {
          "id": 42,
          "question": "¿Cuándo elegirías NgRx frente a un servicio simple?",
          "answerHtml": "<p>NgRx es útil cuando el estado tiene muchas transiciones, requisitos de trazabilidad, sincronización compleja o se necesita una arquitectura más explícita para equipos grandes.</p>\r\n                <pre><code>this.store.dispatch(loadUsers());\r\nthis.store.select(selectUsers);</code></pre>"
        },
        {
          "id": 43,
          "question": "¿Qué beneficios aporta el uso de standalone components?",
          "answerHtml": "<p>Reducen la cantidad de NgModules, simplifican la composición y hacen más sencillo el onboarding en proyectos modernos. También facilitan el lazy loading y la migración gradual.</p>\r\n                <pre><code>@Component({\r\n  selector: 'app-user-card',\r\n  standalone: true,\r\n  imports: [CommonModule]\r\n})\r\nexport class UserCardComponent {}\r\n</code></pre>"
        },
        {
          "id": 44,
          "question": "¿Cómo abordarías la optimización de rendimiento en una app Angular grande?",
          "answerHtml": "<p>Me centraría en detectar cuellos de botella con herramientas de profiling, usar OnPush cuando corresponda, reducir el número de bindings, aplicar lazy loading y ser cuidadoso con la frecuencia de las peticiones y el tamaño de los bundles.</p>\r\n                <pre><code>{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }</code></pre>"
        },
        {
          "id": 45,
          "question": "¿Qué consideraciones tendrías para hacer una app Angular SSR o con hidratación?",
          "answerHtml": "<p>SSR mejora SEO y el tiempo de primer contenido renderizado, pero exige revisar el manejo de APIs del lado del servidor, el estado inicial y los efectos que no deberían ejecutarse en el servidor.</p>\r\n                <pre><code>provideClientHydration()</code></pre>"
        },
        {
          "id": 46,
          "question": "¿Qué es un HostListener y cuándo lo usarías?",
          "answerHtml": "<p>Es un decorador para escuchar eventos del host del componente o directiva. Se usa para encapsular comportamientos de UI sin depender de un DOM externo.</p>\r\n                <pre><code>@HostListener('click')\r\nonClick() {\r\n  console.log('clicked');\r\n}</code></pre>"
        },
        {
          "id": 47,
          "question": "¿Qué diferencia hay entre ViewChild y ContentChild?",
          "answerHtml": "<p><code>ViewChild</code> accede a elementos o componentes dentro de la vista del componente actual. <code>ContentChild</code> accede a contenido proyectado desde un componente padre.</p>\r\n                <pre><code>@ViewChild('inputRef') input!: ElementRef;\r\n@ContentChild(MyDirective) contentChild!: MyDirective;</code></pre>"
        },
        {
          "id": 48,
          "question": "¿Cómo evitarías código duplicado entre componentes similares?",
          "answerHtml": "<p>Normalmente extraería lógica compartida a un componente base, un servicio reutilizable, un custom directive o un composable pattern según el contexto.</p>\r\n                <pre><code>@Directive({ selector: '[appAutoFocus]' })\r\nexport class AutoFocusDirective {\r\n  @HostListener('focus') onFocus() {}\r\n}</code></pre>"
        },
        {
          "id": 49,
          "question": "¿Qué problemas pueden aparecer al usar funciones puras con inputs mutables?",
          "answerHtml": "<p>Se pueden generar estados inconsistentes, efectos secundarios difíciles de rastrear y bugs porque Angular asume que el cambio de referencia es la señal más clara de actualización.</p>\r\n                <pre><code>const users = this.usersService.getUsers();\r\nthis.filteredUsers = users.filter(u => u.active);</code></pre>"
        },
        {
          "id": 50,
          "question": "¿Cómo diseñarías un sistema de formularios escalable en Angular?",
          "answerHtml": "<p>Usaría FormBuilder o Reactive Forms para casos complejos, separaría validaciones por dominio, encapsularía lógica en componentes y mantendría los formularios lo más declarativos posible.</p>\r\n                <pre><code>this.form = this.fb.group({\r\n  name: ['', Validators.required],\r\n  email: ['', [Validators.required, Validators.email]]\r\n});</code></pre>"
        },
        {
          "id": 51,
          "question": "¿Qué importancia tiene el uso de lazy loading en Angular?",
          "answerHtml": "<p>Reduce el bundle inicial, mejora el tiempo de carga y permite dividir la app en módulos funcionales que se cargan solo cuando el usuario los necesita.</p>\r\n                <pre><code>{ path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }</code></pre>"
        },
        {
          "id": 52,
          "question": "¿Qué harías para que una aplicación Angular sea más fácil de mantener en equipos grandes?",
          "answerHtml": "<p>Definiría arquitectura por dominio, reglas de naming, convenciones de componentes, tests automatizados y un enfoque claro para estado, routing y servicios compartidos.</p>\r\n                <pre><code>src/\r\n  features/\r\n    users/\r\n    orders/\r\n  shared/\r\n    components/\r\n    services/\r\n</code></pre>"
        },
        {
          "id": 53,
          "question": "¿Cómo explicas la diferencia entre un componente y una directiva en Angular?",
          "answerHtml": "<p>Un componente tiene plantilla y suele representar una vista. Una directiva añade comportamiento o lógica a un elemento existente sin asumir el rol de vista independiente.</p>\r\n                <pre><code>@Directive({ selector: '[appHighlight]' })\r\nexport class HighlightDirective {}\r\n</code></pre>"
        },
        {
          "id": 54,
          "question": "¿Qué harías para asegurar una buena experiencia en entornos de alto tráfico o con conexiones lentas?",
          "answerHtml": "<p>Aplicaría caching, lazy loading, optimización de assets, manejo inteligente de peticiones, skeletons y estrategias de carga progresiva para que la app se sienta rápida incluso con recursos limitados.</p>\r\n                <pre><code>loading = signal(true);\r\n</code></pre>"
        }
      ]
    },
    {
      "slug": "aws-serverless",
      "icon": "AWS",
      "title": "AWS Serverless",
      "questions": [
        {
          "id": 55,
          "question": "Describe el flujo de una petición desde un cliente hasta una Lambda usando API Gateway.",
          "answerHtml": "<p>Flujo típico:</p><pre><code>Cliente ↓\r\nCloudFront ↓\r\nAPI Gateway ↓\r\nAutenticación / validación ↓\r\nLambda ↓\r\nDynamoDB, S3, SQS u otro servicio</code></pre><p>API Gateway recibe la solicitud, aplica reglas como autenticación o límites, invoca Lambda y devuelve la respuesta.</p>"
        },
        {
          "id": 56,
          "question": "¿Qué es un cold start en AWS Lambda y cómo lo reducirías?",
          "answerHtml": "<p>Es la latencia adicional cuando AWS debe inicializar un nuevo entorno.</p><p>Puede reducirse con paquetes pequeños, menos dependencias, inicialización fuera del handler, evitando conexiones costosas repetidas, Provisioned Concurrency y evitando VPC cuando no es necesaria.</p><pre><code>const fn = new lambda.Function(this, \"ApiFn\", { /* ... */ });\n\nnew lambda.Alias(this, \"Live\", {\n  aliasName: \"live\",\n  version: fn.currentVersion,\n  provisionedConcurrentExecutions: 5,\n});</code></pre>"
        },
        {
          "id": 57,
          "question": "¿Cuándo utilizarías Lambda y cuándo ECS o Fargate?",
          "answerHtml": "<p>Usaría Lambda para eventos, procesos cortos, carga variable, APIs de ejecución breve y tareas sin estado.</p><p>Usaría contenedores cuando el proceso dura mucho, necesita control del runtime, tiene carga constante, requiere mucha CPU o memoria, mantiene conexiones persistentes o usa dependencias complejas.</p><pre><code>// Lambda: trabajo corto disparado por un evento\nexport const handler = async (event) =&gt; processEvent(event);\n\n// Fargate: proceso largo o con runtime/CPU controlados\nnew ecs.FargateTaskDefinition(stack, \"Worker\", {\n  cpu: 2048,\n  memoryLimitMiB: 4096,\n});</code></pre>"
        },
        {
          "id": 58,
          "question": "¿Qué diferencias existen entre DynamoDB y una base de datos relacional?",
          "answerHtml": "<p>DynamoDB es NoSQL, administrado y diseñado para escalar horizontalmente. Requiere diseñar la tabla según los patrones de acceso.</p><p>Una base relacional ofrece relaciones, joins, SQL flexible, transacciones complejas y consultas ad hoc.</p><p>DynamoDB no debería elegirse solo porque es serverless.</p><pre><code>-- Relacional: joins y transacciones complejas\nSELECT o.id, u.name FROM orders o JOIN users u ON u.id = o.user_id;\n\n// DynamoDB: acceso por clave conocida\nGetItem({ TableName: \"Orders\", Key: { pk: \"USER#42\", sk: \"ORDER#9\" } });</code></pre>"
        },
        {
          "id": 59,
          "question": "¿Cómo escogerías partition key y sort key en DynamoDB?",
          "answerHtml": "<p>La partition key debe distribuir los datos de manera uniforme. La sort key permite ordenar y consultar elementos relacionados.</p><pre><code>PK: COMPANY#123\r\nSK: EXECUTIVE#456</code></pre><p>Otro elemento:</p><pre><code>PK: COMPANY#123\r\nSK: REPORT#2026-07-15</code></pre><p>El diseño debe partir de las consultas necesarias.</p>"
        },
        {
          "id": 60,
          "question": "¿Qué es un hot partition?",
          "answerHtml": "<p>Ocurre cuando demasiadas solicitudes usan la misma clave de partición, concentrando la carga.</p><p>Soluciones: mejor distribución de claves, sharding, evitar claves únicas globales como una fecha, usar caché, escrituras por lotes y revisar patrones de acceso.</p><pre><code>// Mala clave: todas las escrituras llegan a la misma partición\n{ pk: \"STATUS#PENDING\", jobId: \"123\" }\n\n// Distribuir carga con shards\n{ pk: \"STATUS#PENDING#07\", jobId: \"123\" }</code></pre>"
        },
        {
          "id": 61,
          "question": "¿Cuál es la diferencia entre SQS Standard y SQS FIFO?",
          "answerHtml": "<p>SQS Standard ofrece escalabilidad muy alta, entrega al menos una vez y no garantiza orden.</p><p>SQS FIFO mantiene el orden por grupo y ofrece deduplicación, pero tiene menor capacidad relativa.</p><pre><code>new sqs.Queue(this, \"Orders\", {\n  fifo: true,\n  contentBasedDeduplication: true,\n  queueName: \"orders.fifo\",\n});\n// Standard: mayor throughput; FIFO: orden por MessageGroupId</code></pre>"
        },
        {
          "id": 62,
          "question": "¿Por qué un consumidor de SQS debe ser idempotente?",
          "answerHtml": "<p>Porque SQS puede entregar un mensaje más de una vez. El consumidor debe procesarlo nuevamente sin duplicar resultados.</p><p>Puede guardarse el ID del mensaje o de la operación en DynamoDB y validarlo antes de ejecutar efectos secundarios.</p><pre><code>await dynamo.send(new PutCommand({\n  TableName: \"ProcessedMessages\",\n  Item: { messageId, expiresAt },\n  ConditionExpression: \"attribute_not_exists(messageId)\",\n})); // el duplicado falla sin repetir el efecto</code></pre>"
        },
        {
          "id": 63,
          "question": "¿Qué función cumplen S3 y CloudFront?",
          "answerHtml": "<p>S3 almacena objetos como archivos, documentos, imágenes o una aplicación estática.</p><p>CloudFront distribuye contenido mediante CDN: menor latencia, caché global, TLS, protección adicional y menos solicitudes directas a S3.</p><pre><code>new cloudfront.Distribution(this, \"Web\", {\n  defaultBehavior: {\n    origin: origins.S3BucketOrigin.withOriginAccessControl(bucket),\n    cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,\n  },\n});</code></pre>"
        },
        {
          "id": 64,
          "question": "¿Cómo protegerías archivos privados en S3?",
          "answerHtml": "<p>Con bloqueo de acceso público, políticas IAM mínimas, cifrado, URLs prefirmadas, CloudFront Origin Access Control, auditoría con CloudTrail y validación de archivos.</p><pre><code>const command = new GetObjectCommand({\n  Bucket: \"private-documents\",\n  Key: \"reports/42.pdf\",\n});\nconst url = await getSignedUrl(s3, command, { expiresIn: 300 });</code></pre>"
        },
        {
          "id": 65,
          "question": "Una Lambda genera errores y alta latencia. ¿Cómo investigarías?",
          "answerHtml": "<p>Revisaría CloudWatch Logs, duración, errores, throttles, memoria, CPU, cold starts, dependencias externas, conexiones, tamaño del payload, concurrencia, trazas y cambios recientes.</p><pre><code>const metrics = new Metrics();\nconst tracer = new Tracer();\n\nexport const handler = tracer.captureLambdaHandler(async (event) =&gt; {\n  metrics.addMetric(\"Request\", MetricUnit.Count, 1);\n  return service.execute(event);\n});</code></pre>"
        },
        {
          "id": 66,
          "question": "La factura de AWS aumenta repentinamente. ¿Qué revisarías?",
          "answerHtml": "<p>Usaría Cost Explorer por servicio, región, día y tipo de uso.</p><p>Después revisaría invocaciones Lambda, logs excesivos, transferencia de datos, S3, DynamoDB, NAT Gateway, recursos olvidados, loops entre eventos y tráfico automatizado.</p><pre><code>aws ce get-cost-and-usage \\\n  --time-period Start=2025-01-01,End=2025-02-01 \\\n  --granularity DAILY \\\n  --metrics UnblendedCost \\\n  --group-by Type=DIMENSION,Key=SERVICE</code></pre>"
        }
      ]
    },
    {
      "slug": "arquitectura",
      "icon": "◎",
      "title": "Arquitectura",
      "questions": [
        {
          "id": 67,
          "question": "Diseña una plataforma que genere reportes ejecutivos mediante IA.",
          "answerHtml": "<p>Una posible arquitectura:</p><pre><code>React + CloudFront ↓\r\nAPI Gateway ↓\r\nLambda API ↓\r\nDynamoDB ↓\r\nS3 para documentos ↓\r\nSQS ↓\r\nLambda Worker ↓\r\nServicio de extracción ↓\r\nLLM / agente ↓\r\nValidación ↓\r\nReporte almacenado en S3</code></pre><p>El procesamiento largo debe ser asíncrono. La API devuelve un identificador y el frontend consulta el estado o recibe una notificación.</p>"
        },
        {
          "id": 68,
          "question": "¿Cómo separarías un proceso síncrono de uno asíncrono?",
          "answerHtml": "<p>Síncrono para operaciones rápidas que el usuario necesita inmediatamente.</p><p>Asíncrono para generación de reportes, procesamiento de documentos, llamadas largas a IA, correos y procesos con reintentos. La API puede responder <code>202 Accepted</code> con un <code>jobId</code>.</p><pre><code>app.post(\"/reports\", async (req, res) =&gt; {\n  const jobId = crypto.randomUUID();\n  await queue.send({ jobId, input: req.body });\n  res.status(202).json({ jobId, status: \"queued\" });\n});</code></pre>"
        },
        {
          "id": 69,
          "question": "¿Cómo evitarías que una caída de un proveedor externo afecte toda la aplicación?",
          "answerHtml": "<p>Implementaría timeouts, reintentos con exponential backoff y jitter, circuit breaker, colas, caché, proveedor alternativo, degradación controlada, alertas y métricas.</p><pre><code>const breaker = new CircuitBreaker(callProvider, {\n  timeout: 2_000,\n  errorThresholdPercentage: 50,\n  resetTimeout: 30_000,\n});\nbreaker.fallback(() =&gt; cachedResponse);</code></pre>"
        },
        {
          "id": 70,
          "question": "¿Qué estrategias usarías para escalar una aplicación serverless?",
          "answerHtml": "<p>Funciones sin estado, SQS para absorber picos, concurrencia controlada, DynamoDB con claves distribuidas, CloudFront, caché, procesamiento por lotes, cuotas, DLQ y backpressure.</p><pre><code>new lambda.EventSourceMapping(this, \"Workers\", {\n  target: worker,\n  eventSourceArn: queue.queueArn,\n  batchSize: 10,\n  maxConcurrency: 50,\n  reportBatchItemFailures: true,\n});</code></pre>"
        },
        {
          "id": 71,
          "question": "¿Qué métricas revisarías para encontrar un cuello de botella?",
          "answerHtml": "<p>Latencia promedio, p95, p99, throughput, error rate, CPU, memoria, concurrencia, throttling, tiempo de llamadas externas, edad de mensajes SQS, consumo DynamoDB, cache hit ratio y cold starts.</p><pre><code>fields @timestamp, @duration, requestId\n| filter level = \"ERROR\" or @duration &gt; 2000\n| stats count(*) as requests, pct(@duration, 95) as p95\n  by operation\n| sort p95 desc</code></pre>"
        },
        {
          "id": 72,
          "question": "¿Qué diferencia existe entre escalabilidad vertical y horizontal?",
          "answerHtml": "<p>Vertical significa aumentar recursos de una máquina. Horizontal significa agregar más instancias o consumidores.</p><p>Las arquitecturas cloud suelen favorecer la escalabilidad horizontal.</p><pre><code># Horizontal: más instancias\nkubectl scale deployment api --replicas=5\n\n# Vertical: más recursos para una instancia\nresources:\n  limits:\n    cpu: \"2\"\n    memory: 4Gi</code></pre>"
        },
        {
          "id": 73,
          "question": "¿Cómo implementarías observabilidad en una aplicación distribuida?",
          "answerHtml": "<p>Con logs estructurados, métricas, trazas distribuidas, correlation IDs, dashboards, alertas, registro de despliegues y métricas de negocio.</p><pre><code>{ &quot;level&quot;: &quot;error&quot;, &quot;requestId&quot;: &quot;abc-123&quot;, &quot;operation&quot;: &quot;generate-report&quot;, &quot;durationMs&quot;: 4200\r\n}</code></pre>"
        },
        {
          "id": 74,
          "question": "¿Cómo manejarías secretos y variables de configuración en AWS?",
          "answerHtml": "<p>AWS Secrets Manager para secretos, Parameter Store para configuración, IAM Roles, KMS, rotación de credenciales y configuración separada por ambiente.</p><p>Nunca guardaría secretos en el repositorio.</p><pre><code>const response = await secrets.send(new GetSecretValueCommand({\n  SecretId: process.env.DATABASE_SECRET_ARN,\n}));\nconst credentials = JSON.parse(response.SecretString);</code></pre>"
        }
      ]
    },
    {
      "slug": "ia-y-agentes",
      "icon": "AI",
      "title": "IA y Agentes",
      "questions": [
        {
          "id": 75,
          "question": "¿Cuál es la diferencia entre integrar directamente un LLM y construir un agente?",
          "answerHtml": "<p>Una integración directa envía un prompt y obtiene una respuesta.</p><p>Un agente puede mantener estado, decidir el siguiente paso, usar herramientas, consultar información, repetir procesos y validar resultados. No todo problema necesita un agente.</p><pre><code>// Integración directa\nconst answer = await model.invoke(prompt);\n\n// Agente: decide cuándo usar herramientas\nconst agent = createReactAgent({ llm: model, tools: [search, calculator] });\nconst result = await agent.invoke({ messages: [question] });</code></pre>"
        },
        {
          "id": 76,
          "question": "¿Qué componentes principales tiene un agente de IA?",
          "answerHtml": "<p>Modelo, prompt, estado, memoria, herramientas, reglas de control, recuperación de información, validación, observabilidad y límites de ejecución.</p><pre><code>type AgentState = {\n  messages: Message[];\n  context: Document[];\n  toolCalls: ToolCall[];\n  attempts: number;\n  approved: boolean;\n};</code></pre>"
        },
        {
          "id": 77,
          "question": "¿Qué diferencia existe entre un workflow determinista y un agente autónomo?",
          "answerHtml": "<p>Un workflow define los pasos previamente:</p><pre><code>Extraer datos → Clasificar → Generar reporte → Validar</code></pre><p>Un agente decide dinámicamente qué herramienta o acción ejecutar. Para procesos sensibles suele ser mejor un workflow controlado.</p>"
        },
        {
          "id": 78,
          "question": "¿Qué es RAG y cuándo lo utilizarías?",
          "answerHtml": "<p>RAG combina recuperación de documentos con generación.</p><pre><code>Pregunta ↓\r\nBuscar fragmentos relevantes ↓\r\nEnviar contexto al modelo ↓\r\nGenerar respuesta con evidencia</code></pre><p>Lo usaría para consultar metodologías, políticas, perfiles y conocimiento institucional sin reentrenar el modelo.</p>"
        },
        {
          "id": 79,
          "question": "¿Cómo reducirías las alucinaciones?",
          "answerHtml": "<p>Con RAG, fuentes confiables, respuestas estructuradas, temperatura baja, validaciones, instrucciones claras, citas, límites, revisión humana y evaluaciones automatizadas.</p><pre><code>const context = await vectorStore.similaritySearch(question, 5);\nconst result = await model.withStructuredOutput(AnswerSchema).invoke({\n  question,\n  context,\n  instruction: \"Responde solo con evidencia del contexto\",\n});</code></pre>"
        },
        {
          "id": 80,
          "question": "¿Cómo protegerías una aplicación frente a prompt injection?",
          "answerHtml": "<p>Tratar documentos como datos, separar instrucciones y contenido, limitar herramientas, validar argumentos, aplicar permisos, no exponer secretos, filtrar salidas y exigir confirmación humana para acciones sensibles.</p><pre><code>const ToolInput = z.object({\n  customerId: z.string().uuid(),\n  amount: z.number().positive().max(1000),\n});\n\nconst input = ToolInput.parse(untrustedArguments);\nawait authorize(user, \"refund\", input.customerId);</code></pre>"
        },
        {
          "id": 81,
          "question": "¿Cómo controlarías costos y latencia al usar LLMs?",
          "answerHtml": "<p>Modelos pequeños para tareas simples, modelos grandes solo cuando aportan valor, caché, resúmenes, límites de tokens, procesamiento asíncrono, paralelización controlada, streaming y monitoreo de costo por operación.</p><pre><code>const model = task.complexity === \"low\" ? smallModel : largeModel;\nconst cacheKey = hash({ promptVersion, input });\n\nconst cached = await cache.get(cacheKey);\nif (cached) return cached;\nreturn model.invoke(input, { maxTokens: 500 });</code></pre>"
        },
        {
          "id": 82,
          "question": "¿Qué información guardarías de cada ejecución de un agente?",
          "answerHtml": "<p>Versión del modelo, versión del prompt, herramientas, entradas y salidas permitidas, tokens, costo, latencia, errores, decisiones estructuradas, validación, usuario, organización e ID de ejecución.</p><pre><code>await runs.put({\n  runId,\n  model: \"model-version\",\n  promptVersion: \"v12\",\n  toolCalls,\n  inputTokens,\n  outputTokens,\n  latencyMs,\n  status,\n});</code></pre>"
        },
        {
          "id": 83,
          "question": "¿Qué ventajas ofrece LangGraph?",
          "answerHtml": "<p>Permite representar el agente como un grafo de estados con flujos explícitos, persistencia, condiciones, ciclos, reintentos, aprobación humana, observabilidad y mayor control.</p><pre><code>const workflow = new StateGraph(State)\n  .addNode(\"retrieve\", retrieve)\n  .addNode(\"answer\", answer)\n  .addEdge(START, \"retrieve\")\n  .addEdge(\"retrieve\", \"answer\")\n  .addEdge(\"answer\", END)\n  .compile({ checkpointer });</code></pre>"
        },
        {
          "id": 84,
          "question": "¿Cómo evaluarías si las respuestas son correctas?",
          "answerHtml": "<p>Crearía casos representativos y mediría exactitud, fidelidad, completitud, formato, seguridad, sesgo, costo y latencia.</p><p>Combinaría reglas automáticas, respuestas esperadas, evaluación humana, LLM-as-judge con precaución y pruebas de regresión.</p><pre><code>for (const testCase of dataset) {\n  const output = await agent.invoke(testCase.input);\n  expect(output.citations).not.toHaveLength(0);\n  expect(faithfulness(output, testCase.context)).toBeGreaterThan(0.9);\n}</code></pre>"
        },
        {
          "id": 85,
          "question": "¿Permitirías que un agente tome decisiones automáticas de contratación?",
          "answerHtml": "<p>No como decisión final. El sistema debería organizar evidencia, generar scorecards, detectar inconsistencias, explicar recomendaciones, mantener trazabilidad y permitir revisión humana.</p><pre><code>const recommendation = await agent.evaluate(candidate);\n\nif (recommendation.risk !== \"low\") {\n  return requestHumanReview(recommendation);\n}\nreturn { status: \"pending-human-approval\", recommendation };</code></pre>"
        }
      ]
    },
    {
      "slug": "testing-y-seguridad",
      "icon": "✓",
      "title": "Testing y Seguridad",
      "questions": [
        {
          "id": 86,
          "question": "¿Cuál es la diferencia entre pruebas unitarias, de integración y end-to-end?",
          "answerHtml": "<p>Unitarias prueban una unidad aislada. Integración prueba interacción entre componentes. End-to-end prueba el flujo completo.</p><p>Una estrategia sana tiene muchas unitarias, suficientes integraciones y pocas E2E críticas.</p><pre><code>it(\"calcula el total\", () =&gt; expect(total([2, 3])).toBe(5)); // unit\nit(\"guarda el pedido\", async () =&gt; expect(await api.create(order)).toBeDefined()); // integration\n\ntest(\"compra completa\", async ({ page }) =&gt; {\n  await page.goto(\"/checkout\");\n  await expect(page.getByText(\"Confirmado\")).toBeVisible();\n}); // E2E</code></pre>"
        },
        {
          "id": 87,
          "question": "¿Qué partes de una Lambda probarías?",
          "answerHtml": "<p>Lógica de negocio, validación del evento, autorización, respuestas HTTP, errores, idempotencia, integración con AWS, reintentos, timeouts y casos duplicados.</p><pre><code>it(\"rechaza un evento sin autorización\", async () =&gt; {\n  const response = await handler({ headers: {} }, mockContext);\n  expect(response.statusCode).toBe(401);\n});\n\nit(\"no procesa dos veces el mismo eventId\", async () =&gt; {\n  await handler(event, mockContext);\n  await expect(handler(event, mockContext)).resolves.toMatchObject({ statusCode: 200 });\n});</code></pre>"
        },
        {
          "id": 88,
          "question": "¿Cómo realizarías un code review efectivo?",
          "answerHtml": "<p>Revisaría correctitud, seguridad, claridad, diseño, rendimiento, tests, errores y observabilidad. Los comentarios deben explicar la razón y distinguir cambios obligatorios de sugerencias.</p><pre><code>// Antes: error silencioso y sin contexto\nconst user = await repository.find(id);\n\n// Sugerencia de review: modelar el caso ausente\nconst user = await repository.find(id);\nif (!user) throw new NotFoundError(\"User\", { id });</code></pre>"
        },
        {
          "id": 89,
          "question": "¿Cuáles son las vulnerabilidades más importantes en una API?",
          "answerHtml": "<p>Autorización rota, inyección, exposición de datos, rate limiting insuficiente, validación incorrecta, SSRF, CORS incorrecto, archivos maliciosos, secretos en logs, dependencias vulnerables e IAM excesivo.</p><pre><code>app.post(\"/users/:id/transfer\", authenticate, async (req, res) =&gt; {\n  const input = TransferSchema.parse(req.body); // evita entradas inválidas\n  await authorize(req.user, \"transfer\", req.params.id); // evita BOLA\n  await rateLimiter.consume(req.user.id);\n  res.json(await transfer(input));\n});</code></pre>"
        },
        {
          "id": 90,
          "question": "¿Cómo implementarías autenticación y autorización?",
          "answerHtml": "<p>Usaría Cognito u OIDC, tokens de corta duración, roles y permisos, control por organización, validación en cada endpoint y mínimo privilegio.</p><p>No confiaría solo en ocultar opciones desde el frontend.</p><pre><code>app.get(\"/admin/reports\", verifyJwt, requireRole(\"admin\"), handler);\n\nfunction requireRole(role) {\n  return (req, res, next) =&gt;\n    req.user.roles.includes(role) ? next() : res.sendStatus(403);\n}</code></pre>"
        },
        {
          "id": 91,
          "question": "¿Cómo evitarías exponer información sensible en logs?",
          "answerHtml": "<p>No registraría contraseñas, tokens, cookies, documentos completos ni datos personales innecesarios. Implementaría redaction y una lista explícita de campos permitidos.</p><pre><code>const logger = pino({\n  redact: {\n    paths: [\"req.headers.authorization\", \"password\", \"token\", \"user.email\"],\n    censor: \"[REDACTED]\",\n  },\n});</code></pre>"
        }
      ]
    },
    {
      "slug": "situacionales",
      "icon": "★",
      "title": "Situacionales",
      "questions": [
        {
          "id": 92,
          "question": "Un endpoint tarda ocho segundos. ¿Cómo encontrarías el problema?",
          "answerHtml": "<p>Agregaría trazas y mediría cada etapa:</p><pre><code>API Gateway: 50 ms\r\nLambda initialization: 500 ms\r\nDynamoDB: 30 ms\r\nLLM: 6.5 s\r\nSerialización: 20 ms</code></pre><p>Después optimizaría la etapa responsable.</p>"
        },
        {
          "id": 93,
          "question": "Dos usuarios actualizan simultáneamente el mismo registro. ¿Cómo evitarías sobrescrituras?",
          "answerHtml": "<p>Usaría control de concurrencia optimista con un campo <code>version</code>.</p><p>La actualización solo se acepta si la versión esperada coincide con la almacenada. En DynamoDB se implementa con una expresión condicional.</p><pre><code>await table.update({\n  key: { id },\n  update: { ...changes, version: currentVersion + 1 },\n  condition: \"version = :expected\",\n  values: { \":expected\": currentVersion },\n}); // si falla, responder 409 Conflict</code></pre>"
        },
        {
          "id": 94,
          "question": "Una tarea SQS falla repetidamente. ¿Cómo evitarías que bloquee el sistema?",
          "answerHtml": "<p>Configuraría número máximo de reintentos, visibility timeout, dead-letter queue, alarmas, registro de la causa, reprocesamiento e idempotencia.</p><pre><code>const dlq = new sqs.Queue(this, \"JobsDLQ\");\nconst queue = new sqs.Queue(this, \"Jobs\", {\n  visibilityTimeout: Duration.minutes(2),\n  deadLetterQueue: { queue: dlq, maxReceiveCount: 5 },\n});</code></pre>"
        },
        {
          "id": 95,
          "question": "Debes migrar un monolito a serverless. ¿Lo reescribirías completamente?",
          "answerHtml": "<p>No automáticamente. Haría una migración incremental: identificar módulos, extraer procesos asíncronos, agregar APIs o eventos, migrar funcionalidades de bajo riesgo y medir resultados.</p><pre><code>// Strangler pattern: migración gradual por funcionalidad\napp.use(\"/api/reports\", serverlessReportsProxy);\napp.use(\"/api\", legacyMonolithProxy);\n\n// Mover el siguiente módulo después de medir errores y latencia</code></pre>"
        },
        {
          "id": 96,
          "question": "Los fundadores quieren lanzar algo en dos días, pero hay riesgos técnicos. ¿Qué harías?",
          "answerHtml": "<p>Explicaría los riesgos en términos de impacto comercial y propondría una versión reducida y segura con feature flag, acceso limitado, métricas, rollback y deuda técnica documentada.</p><pre><code>if (features.isEnabled(\"new-report\", user.id)) {\n  return newReportService.generate(input);\n}\nreturn currentReportService.generate(input);\n\n// Activar primero para usuarios internos y conservar rollback</code></pre>"
        },
        {
          "id": 97,
          "question": "Cuéntame una decisión arquitectónica importante.",
          "answerHtml": "<p>Usaría el formato STAR: situación, tarea, acción y resultado.</p><p>Ejemplo: en un proyecto logístico creado desde cero, propuse una arquitectura modular, componentes reutilizables y separación entre presentación y negocio. Esto redujo duplicación y facilitó agregar nuevas funcionalidades.</p><pre><code># ADR-012: Procesamiento asíncrono de reportes\nEstado: Aceptada\nContexto: la generación tarda hasta 90 segundos.\nDecisión: API 202 + SQS + workers idempotentes.\nConsecuencias: menor acoplamiento; se requiere seguimiento de jobs.</code></pre>"
        },
        {
          "id": 98,
          "question": "¿Qué harías durante tus primeros 30 días?",
          "answerHtml": "<p>Primera semana: entender producto, usuarios, arquitectura e incidentes.</p><p>Segunda semana: resolver problemas de alto impacto y mejorar observabilidad.</p><p>Semanas 3 y 4: proponer roadmap, estándares de pruebas, diseño de agentes, métricas y entregar una mejora visible en producción.</p><pre><code>const first30Days = {\n  week1: [\"producto\", \"usuarios\", \"arquitectura\", \"incidentes\"],\n  week2: [\"quick wins\", \"observabilidad\"],\n  weeks3And4: [\"roadmap\", \"tests\", \"métricas\", \"entrega en producción\"],\n};</code></pre>"
        }
      ]
    }
  ]
};
