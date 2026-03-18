const landingShell = document.querySelector('.landing-shell');
const transitionLayer = document.querySelector('.landing-transition-layer');
const landingLinks = Array.from(document.querySelectorAll('.landing-btn[href]'));

let isNavigating = false;

const transitionPalette = [
  'rgba(103, 215, 255, 0.24)',
  'rgba(116, 228, 198, 0.24)',
  'rgba(159, 133, 255, 0.24)',
  'rgba(255, 182, 133, 0.22)',
  'rgba(255, 139, 200, 0.22)'
];

const buildTransitionBubbles = () => {
  if (!transitionLayer) {
    return;
  }

  transitionLayer.innerHTML = '';

  const bubbleCount = 14;

  for (let index = 0; index < bubbleCount; index += 1) {
    const bubble = document.createElement('span');
    const size = 72 + Math.round(Math.random() * 120);
    const left = 4 + Math.random() * 92;
    const drift = -60 + Math.round(Math.random() * 120);
    const delay = index * 28;
    const duration = 760 + Math.round(Math.random() * 220);
    const color = transitionPalette[index % transitionPalette.length];

    bubble.className = 'transition-bubble';
    if (index % 4 === 3) {
      bubble.classList.add('is-outline');
    }

    bubble.style.setProperty('--size', `${size}px`);
    bubble.style.setProperty('--left', `${left}%`);
    bubble.style.setProperty('--drift', `${drift}px`);
    bubble.style.setProperty('--delay', `${delay}ms`);
    bubble.style.setProperty('--duration', `${duration}ms`);
    bubble.style.setProperty('--bubble-color', color);

    transitionLayer.appendChild(bubble);
  }
};

const enterPortfolio = (target) => {
  if (isNavigating || !target) {
    return;
  }

  isNavigating = true;
  buildTransitionBubbles();
  document.body.classList.add('is-entering');

  window.setTimeout(() => {
    window.location.href = target;
  }, 760);
};

landingLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = link.getAttribute('href');
    if (!target) {
      return;
    }

    if (
      link.target === '_blank' ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    enterPortfolio(target);
  });
});

if (landingShell) {
  landingShell.addEventListener('animationend', () => {
    document.body.classList.remove('is-entering');
  });
}
