import { AnimationFrame } from './AnimationFrame';

const animFrame = new AnimationFrame();
var sun = new Image();
var moon = new Image();
var earth = new Image();

const arcRadius = 150;
const height = 300;
const width = 300;

export function init() {
  const figureEl = document.querySelector('figure');
  if (figureEl.classList.contains('hidden')) {
    figureEl.classList.remove('hidden');
    figureEl.classList.add('visible');
  }

  sun.src =
    'https://live.mdnplay.dev/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations/canvas_sun.png';
  moon.src =
    'https://live.mdnplay.dev/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations/canvas_moon.png';
  earth.src =
    'https://live.mdnplay.dev/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations/canvas_earth.png';
  animFrame.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document
    .querySelector<HTMLCanvasElement>('#canvas')
    .getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 600, 600); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(width, height);

  // Earth
  var time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds()
  );
  ctx.translate(arcRadius, 0);
  ctx.fillRect(0, -12, 40, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  ctx.save();
  // Moon
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds()
  );
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(width, height, arcRadius, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 600, 600);

  animFrame.requestAnimationFrame(draw);
}
