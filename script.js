(function () {
  const locales = window.STUDY_GUIDE_LOCALES || {};
  const defaultLanguage = 'es';
  const savedLanguage = readSavedLanguage();
  let language = locales[savedLanguage] ? savedLanguage : defaultLanguage;

  function readSavedLanguage() {
    try {
      return localStorage.getItem('study-guide-language');
    } catch {
      return null;
    }
  }

  function saveLanguage(value) {
    try {
      localStorage.setItem('study-guide-language', value);
    } catch {
      // The guide still works when storage is unavailable.
    }
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function interpolate(template, values) {
    return Object.entries(values).reduce(
      (result, [key, value]) => result.replaceAll(`{${key}}`, value),
      template,
    );
  }

  function sectionBySlug(content, slug) {
    return content.sections.find((section) => section.slug === slug);
  }

  function renderLanguageSwitcher(content) {
    const switcher = document.querySelector('.language-switcher');
    switcher.setAttribute('aria-label', content.ui.language);

    switcher.querySelectorAll('[data-language]').forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  function renderHero(content, section) {
    const hero = document.querySelector('#hero');
    hero.replaceChildren();

    const copy = element('div');
    copy.append(element('div', 'kicker', content.ui.interviewPreparation));
    copy.append(element('h1', '', section ? section.title : content.siteTitle));
    copy.append(element(
      'p',
      '',
      section
        ? interpolate(content.ui.practicePrompt, { count: section.questions.length })
        : content.ui.homeDescription,
    ));

    const progress = element('aside', 'progress-box');
    if (section) {
      const current = content.sections.indexOf(section) + 1;
      progress.append(element('strong', '', `${current} / ${content.sections.length}`));
      progress.append(element('span', '', content.ui.currentSection));
      const bar = element('div', 'progress-bar');
      const fill = element('div', 'progress-fill');
      fill.style.width = `${(current / content.sections.length) * 100}%`;
      bar.append(fill);
      progress.append(bar);
    } else {
      progress.append(element('strong', '', content.sections.length));
      progress.append(element('span', '', content.ui.studySections));
    }

    hero.append(copy, progress);
  }

  function renderHome(content) {
    renderHero(content);
    const container = document.querySelector('#home-content');
    container.replaceChildren();

    const header = element('div', 'section-header');
    header.append(element('span', 'eyebrow', content.ui.studyGuide));
    header.append(element('h2', '', content.ui.topics));
    header.append(element('p', '', content.ui.chooseTopic));

    const grid = element('div', 'topic-grid');
    content.sections.forEach((section) => {
      const link = element('a', 'topic-card');
      link.href = `${section.slug}/index.html`;
      link.append(element('span', 'step-icon', section.icon));
      link.append(element('strong', '', section.title));
      link.append(element(
        'span',
        '',
        interpolate(content.ui.practiceCount, { count: section.questions.length }),
      ));
      grid.append(link);
    });

    container.append(header, grid);
  }

  function renderStepper(content, activeSection) {
    const stepper = document.querySelector('#stepper');
    stepper.replaceChildren();
    stepper.setAttribute('aria-label', content.ui.studyNavigation);

    content.sections.forEach((section, index) => {
      const link = element('a', `step${section.slug === activeSection.slug ? ' active' : ''}`);
      link.href = `../${section.slug}/index.html`;
      if (section.slug === activeSection.slug) link.setAttribute('aria-current', 'page');
      link.append(element('span', 'step-index', index + 1));
      link.append(element('span', 'step-icon', section.icon));
      link.append(element('span', 'step-label', section.title));
      stepper.append(link);
    });
  }

  function createQuestionCard(question) {
    const article = element('article', 'qa-card');
    const trigger = element('button', 'accordion-trigger');
    trigger.type = 'button';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.append(element('span', 'question-number', question.id));
    trigger.append(element('span', 'question-text', question.question));
    trigger.append(element('span', 'chevron', '⌄'));

    const panel = element('div', 'accordion-panel');
    const answer = element('div', 'answer');
    answer.innerHTML = question.answerHtml;
    panel.append(answer);
    article.append(trigger, panel);
    return article;
  }

  function renderControls(content, activeIndex) {
    const controls = document.querySelector('#controls');
    controls.replaceChildren();
    const previous = content.sections[activeIndex - 1];
    const next = content.sections[activeIndex + 1];

    if (previous) {
      const link = element('a', 'nav-btn', interpolate(content.ui.previous, { title: previous.title }));
      link.href = `../${previous.slug}/index.html`;
      controls.append(link);
    } else {
      controls.append(element('span'));
    }

    if (next) {
      const link = element('a', 'nav-btn primary', interpolate(content.ui.next, { title: next.title }));
      link.href = `../${next.slug}/index.html`;
      controls.append(link);
    }
  }

  function renderSection(content) {
    const slug = document.body.dataset.section;
    const section = sectionBySlug(content, slug);
    if (!section) return;

    const activeIndex = content.sections.indexOf(section);
    document.querySelector('#page-home').textContent = content.ui.allSections;
    renderHero(content, section);
    renderStepper(content, section);

    const container = document.querySelector('#section-content');
    container.replaceChildren();
    const header = element('div', 'section-header');
    header.append(element(
      'span',
      'eyebrow',
      interpolate(content.ui.sectionOf, {
        current: activeIndex + 1,
        total: content.sections.length,
      }),
    ));
    header.append(element('h2', '', section.title));
    header.append(element(
      'p',
      '',
      interpolate(content.ui.practiceCount, { count: section.questions.length }),
    ));

    const list = element('div', 'qa-list');
    section.questions.forEach((question) => list.append(createQuestionCard(question)));
    container.append(header, list);
    renderControls(content, activeIndex);
  }

  function render() {
    const content = locales[language] || locales[defaultLanguage];
    document.documentElement.lang = language;
    document.title = document.body.dataset.page === 'home'
      ? content.ui.documentTitle
      : `${sectionBySlug(content, document.body.dataset.section)?.title || content.siteTitle} · ${content.siteTitle}`;
    renderLanguageSwitcher(content);

    if (document.body.dataset.page === 'home') renderHome(content);
    else renderSection(content);
  }

  document.addEventListener('click', (event) => {
    const languageButton = event.target.closest('[data-language]');
    if (languageButton && locales[languageButton.dataset.language]) {
      language = languageButton.dataset.language;
      saveLanguage(language);
      render();
      return;
    }

    const trigger = event.target.closest('.accordion-trigger');
    if (!trigger) return;
    const card = trigger.closest('.qa-card');
    const isOpen = card.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(isOpen));
  });

  render();
}());
