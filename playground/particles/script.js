const canvas = document.querySelector('canvas');
let { width: size } = canvas.getBoundingClientRect();
canvas.width = size;
canvas.height = size;

const context = canvas.getContext('2d');

const VLib = new VectorLib();

const particleSystem = new ParticleSystem('codepen', size);
particleSystem.show(context);

let mouse = null;

function animate() {
  context.clearRect(0, 0, size, size);

  particleSystem.update(mouse);
  particleSystem.show(context);

  requestAnimationFrame(animate);
}

animate();

canvas.addEventListener('mousemove', function(e) {
  const { left, top } = this.getBoundingClientRect();
  const { pageX, pageY } = e;

  const x = pageX - left;
  const y = pageY - top;
  mouse = VLib.new(x, y);
});

canvas.addEventListener('mouseleave', function() {
  mouse = null;
});

window.addEventListener('keypress', function(e) {
  const { key: k } = e;

  for (const key of Object.keys(particleSystem.strings)) {
    if (key[0] === k && key !== particleSystem.key) {
      particleSystem.updateParticles(key);
    }
  }
});

window.addEventListener('resize', function() {
  const { width } = canvas.getBoundingClientRect();
  size = width;
  canvas.width = size;
  canvas.height = size;

  particleSystem.resize(size)
  particleSystem.show(context);
})