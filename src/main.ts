import { AnimationFrame } from './AnimationFrame';
import { init } from './SolarSystem';

const animFrame = new AnimationFrame();

const progressBar = document.querySelector<HTMLElement>('#progress-bar');
const progressBarHeadingEl = document.querySelector<HTMLElement>(
  '.progress-bar--heading'
);
const progressBarContainerEl = document.querySelector<HTMLElement>(
  '#progress-bar-container'
);

const headingEl = document.querySelector<HTMLElement>('.heading');
const subHeadingEl = document.querySelector<HTMLElement>('.subheading');

/**
 * Borrowing state-like syntax from React to
 * denote that the width of the progress bar
 * is controlled by this variable.
 */
const state = {
  width: 0,
  fontSize: 24,
  opacity: 0,
  translateY: 40,
};

/**
 * Slides in the subheading
 */
const slideInText = () => {
  if (subHeadingEl) {
    subHeadingEl.style.opacity = `${state.opacity}`;
  }

  state.opacity += 0.1;

  if (state.opacity <= 1) {
    animFrame.requestAnimationFrame(slideInText);
  }
};

/**
 * Scales the headline to reach a certain font size
 */
const transformHeadline = () => {
  headingEl.style.opacity = `${state.opacity}`;

  state.opacity += 0.05;

  if (state.opacity <= 1) {
    init();
    animFrame.requestAnimationFrame(transformHeadline);
  }

  if (state.opacity > 1) {
    state.opacity = 0;
    animFrame.requestAnimationFrame(slideInText, 2);
  }
};

const hideProgressBar = () => {
  progressBarHeadingEl?.classList.add('hidden');
  progressBarContainerEl?.classList.add('hidden');
};

/**
 * Animates the progress bar
 */
const updateProgressBar = () => {
  /*
  Set the width of the progress bar
  and increment width state.
  */
  if (progressBar) progressBar.style.width = `${state.width}%`;
  state.width += 1;

  /*
   Call requestAnimationFrame to repaint
   only if the width is lesser than 100
  */
  if (state.width <= 100) {
    animFrame.requestAnimationFrame(updateProgressBar, 0.015);
  }

  if (state.width > 100) {
    hideProgressBar();
    transformHeadline();
  }
};

animFrame.requestAnimationFrame(updateProgressBar);
