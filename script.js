document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const card = trigger.closest('.qa-card');
    const isOpen = card.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(isOpen));
  });
});
