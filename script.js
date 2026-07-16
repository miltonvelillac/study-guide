const COMPLETED_QUESTIONS_KEY = 'study-guide.completed-questions.v1';

function readCompletedQuestions() {
  try {
    const storedValue = JSON.parse(localStorage.getItem(COMPLETED_QUESTIONS_KEY) || '[]');
    return new Set(Array.isArray(storedValue) ? storedValue : []);
  } catch {
    return new Set();
  }
}

function saveCompletedQuestions(completedQuestions) {
  try {
    localStorage.setItem(COMPLETED_QUESTIONS_KEY, JSON.stringify([...completedQuestions]));
  } catch {
    // La guía sigue funcionando aunque el navegador bloquee localStorage.
  }
}

const completedQuestions = readCompletedQuestions();
const questionCards = [...document.querySelectorAll('.qa-card')];
const pageId = document.querySelector('.section-header h2')?.textContent.trim() || 'home';

const question35 = questionCards.find(
  (card) => card.querySelector('.question-number')?.textContent.trim() === '35',
);

if (question35) {
  const answer = question35.querySelector('.answer');
  answer.innerHTML = `
    <p>La organizaría principalmente <strong>por dominio o funcionalidad</strong>, no por tipo técnico global. Así, todo lo necesario para una capacidad del negocio vive cerca y los cambios en una funcionalidad afectan menos al resto de la aplicación.</p>
    <pre><code>src/
  app/                    # arranque, routing y providers globales
    router/
    providers/
    store/
  features/
    candidates/
      api/                # peticiones, DTOs y mapeos
      components/         # UI propia de la funcionalidad
      hooks/              # orquestación y lógica reutilizable
      pages/              # puntos de entrada de las rutas
      model/              # tipos y reglas del dominio
      tests/
      index.ts             # API pública del módulo
    reports/
    assessments/
  shared/
    ui/                   # design system genérico
    lib/                  # utilidades sin conocimiento del negocio
    hooks/
    types/
  assets/</code></pre>
    <p><strong>Definiría límites claros entre capas.</strong> Los componentes de presentación reciben datos y emiten eventos; los hooks o casos de uso coordinan comportamiento; la capa <code>api</code> encapsula HTTP y transforma los DTO del backend al modelo que consume la interfaz. Evitaría hacer peticiones directamente desde componentes visuales.</p>
    <pre><code>// features/candidates/index.ts: API pública del feature
export { CandidatesPage } from "./pages/CandidatesPage";
export { useCandidate } from "./hooks/useCandidate";

// Otras áreas importan desde el límite público:
import { CandidatesPage } from "@/features/candidates";</code></pre>
    <p><strong>Separaría los tipos de estado por responsabilidad:</strong> estado local cerca del componente; estado de servidor en React Query o una solución equivalente; estado global únicamente para datos realmente transversales, como sesión o preferencias. No usaría un store global como contenedor de todo.</p>
    <p>También establecería reglas de dependencia: <code>app</code> puede componer funcionalidades, una funcionalidad puede usar <code>shared</code>, pero <code>shared</code> no conoce dominios y una funcionalidad no debería importar archivos internos de otra. Los archivos <code>index.ts</code> exponen una API pequeña y evitan acoplamiento accidental.</p>
    <p>Para escalar el equipo añadiría rutas con lazy loading, manejo consistente de errores, accesibilidad, un design system, pruebas junto al código, aliases de importación, linting y validaciones en CI. Documentaría decisiones relevantes con ADRs y mediría antes de introducir abstracciones.</p>
    <p>En resumen: buscaría <strong>alta cohesión dentro de cada feature y bajo acoplamiento entre features</strong>. La estructura debe poder evolucionar: empezaría simple y extraería a <code>shared</code> solo aquello que ya tenga usos reales en varios dominios.</p>
  `;
}

function getQuestionId(card) {
  const questionNumber = card.querySelector('.question-number')?.textContent.trim();
  return `${pageId}:${questionNumber}`;
}

function updatePageProgress() {
  const progress = document.querySelector('.questions-progress');
  if (!progress) return;

  const completedOnPage = questionCards.filter((card) =>
    completedQuestions.has(getQuestionId(card)),
  ).length;
  progress.textContent = `${completedOnPage} de ${questionCards.length} completadas`;
}

questionCards.forEach((card) => {
  const trigger = card.querySelector('.accordion-trigger');
  const questionId = getQuestionId(card);
  const questionNumber = card.querySelector('.question-number')?.textContent.trim();
  const completionLabel = document.createElement('label');
  const checkbox = document.createElement('input');
  const labelText = document.createElement('span');

  checkbox.type = 'checkbox';
  checkbox.className = 'question-check';
  checkbox.checked = completedQuestions.has(questionId);
  checkbox.setAttribute('aria-label', `Marcar pregunta ${questionNumber} como completada`);
  labelText.textContent = 'Lista';
  completionLabel.className = 'completion-toggle';
  completionLabel.title = `Marcar pregunta ${questionNumber} como completada`;
  completionLabel.append(checkbox, labelText);
  card.prepend(completionLabel);
  card.classList.toggle('completed', checkbox.checked);

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) completedQuestions.add(questionId);
    else completedQuestions.delete(questionId);

    card.classList.toggle('completed', checkbox.checked);
    saveCompletedQuestions(completedQuestions);
    updatePageProgress();
  });

  trigger?.addEventListener('click', () => {
    const isOpen = card.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(isOpen));
  });
});

function createResetButton(label, className, onClick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `reset-btn ${className}`;
  button.textContent = label;
  button.addEventListener('click', onClick);
  return button;
}

function resetPageProgress() {
  if (!window.confirm('¿Reiniciar las preguntas completadas de esta página?')) return;

  questionCards.forEach((card) => {
    completedQuestions.delete(getQuestionId(card));
    card.classList.remove('completed');
    const checkbox = card.querySelector('.question-check');
    if (checkbox) checkbox.checked = false;
  });
  saveCompletedQuestions(completedQuestions);
  updatePageProgress();
}

function resetAllProgress() {
  if (!window.confirm('¿Reiniciar el progreso de todas las secciones?')) return;

  completedQuestions.clear();
  saveCompletedQuestions(completedQuestions);
  questionCards.forEach((card) => {
    card.classList.remove('completed');
    const checkbox = card.querySelector('.question-check');
    if (checkbox) checkbox.checked = false;
  });
  updatePageProgress();
}

const toolbar = document.createElement('div');
toolbar.className = questionCards.length ? 'progress-actions' : 'progress-actions global-only';

if (questionCards.length) {
  const progress = document.createElement('span');
  progress.className = 'questions-progress';
  progress.setAttribute('aria-live', 'polite');
  toolbar.append(
    progress,
    createResetButton('Reiniciar esta página', 'page-reset', resetPageProgress),
  );
}

toolbar.append(createResetButton('Reiniciar todo', 'global-reset', resetAllProgress));

const toolbarTarget = document.querySelector('.section-header');
if (toolbarTarget) {
  toolbarTarget.insertAdjacentElement('afterend', toolbar);
  updatePageProgress();
}
