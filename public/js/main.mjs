import { syllables } from './content.mjs';
import { historyProgress } from './history.mjs';

const buttons = [...document.querySelectorAll('[data-syllable]')];
const panel = document.querySelector('#syllable-panel');
const origin = document.querySelector('#syllable-origin');
const description = document.querySelector('#syllable-description');

function activateSyllable(id) {
  const item = syllables.find(entry => entry.id === id);
  if (!item || !panel || !origin || !description) return;
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.syllable === id)));
  panel.dataset.active = id;
  origin.textContent = `${item.name} / ${item.origin}`;
  description.textContent = item.description;
}

buttons.forEach(button => {
  button.addEventListener('pointerenter', () => activateSyllable(button.dataset.syllable));
  button.addEventListener('focus', () => activateSyllable(button.dataset.syllable));
  button.addEventListener('click', () => activateSyllable(button.dataset.syllable));
});

const history = document.querySelector('.history-track');
const milestones = [...document.querySelectorAll('.milestone')];
if (history && milestones.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-seen');
      const seen = milestones.map(node => node.classList.contains('is-seen'));
      history.style.setProperty('--progress', historyProgress(seen));
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.25 });
  milestones.forEach(node => observer.observe(node));
} else if (history) {
  history.style.setProperty('--progress', '100%');
}
