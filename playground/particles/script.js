const strings = {
  rocket: `xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxooooooxx
xxxxxxxxxxooooooooox
xxxxxxxxxoooxxxxxoox
xxxxxxxoooxxxxxxxoox
xooooooooxxxxxxxxoox
xooxxoooxxoooxxxxoox
xxoxxooxxooxooxxxoox
xxooooxxxoxxxoxxooxx
xxxoooxxxoxxooxxooxx
xxxxoooxxooooxxooxxx
xxxoooooxxxxxxooxxxx
xxxooxoooxxxxoooxxxx
xxxoxxxoooxxoooxxxxx
xxxoxxxxoooooooxxxxx
xxxooxxoooooxxoxxxxx
xxxooooooxooxxoxxxxx
xxxxxxxxxxxooooxxxxx
xxxxxxxxxxxxxooxxxxx
xxxxxxxxxxxxxxxxxxxx`,
  codepen: `xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxooxxxxxxxxx
xxxxxxxooooooxxxxxxx
xxxxxoooxooxoooxxxxx
xxxoooxxxooxxxoooxxx
xooooxxxxooxxxxoooox
oooxxxxxxooxxxxxxooo
ooooxxxxxooxxxxxxooo
oooooxxxooooxxxooooo
ooxxoooooxxoooooxxoo
ooxxoooooxxoooooxxoo
oooooxxxooooxxxooooo
oooxxxxxxooxxxxxxooo
xoooxxxxxooxxxxxooox
xxoooxxxxooxxxxoooxx
xxxxoooxxooxxoooxxxx
xxxxxxooooooooxxxxxx
xxxxxxxooooooxxxxxxx
xxxxxxxxxooxxxxxxxxx
xxxxxxxxxxxxxxxxxxxx`,
  blog: `xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxx
xoooooooooooooxxxxxx
ooxxooxxxxxxxooxxxxx
oxxxxooxxxxxxoooxxxx
oooooooxxxxxxxooxxxx
oooooooxooooxxooxxxx
xxxxxooxxxxxxxooxxxx
xxxxxooxooxxxxooxxxx
xxxxxooxxxxxxxooxxxx
xxxxxooxoooxxxooxxxx
xxxxxooxxxxxxxooxxxx
xxxxxooxoxxxxxooxxxx
xxxxxooxxxoooooooooo
xxxxxooxxxoooooooooo
xxxxxooxxxoxxxxxxxoo
xxxxxooooooxxxxxxooo
xxxxxxooooooooooooox
xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxx`,
  freecodecamp: `xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxx
xxxooxxxxxxxxxxooxxx
xxooxxxooxxxxxxxooxx
xooxxxxxooxxxxxxxoox
xooxxxxxooxxxxxxxoox
xooxxxxxoooxxxxxxoox
ooxxxxxooooxoxxxxxoo
ooxxxxoooxoxooxxxxoo
ooxxxxooxxoxoooxxxoo
ooxxxooxxxoooooxxxoo
ooxxxooxxxooxooxxxoo
ooxxxooxxxxxxooxxxoo
ooxxxooxxxxxxooxxxoo
xooxxxooxxxxooxxxoox
xoooxxxooooooxxxooox
xxooxxxxooooxxxxooxx
xxxooxxxxxxxxxxooxxx
xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxx`,
  github: `xxxxxxxxxxxxxxxxxxxx
xxxoooxxxooxxxoooxxx
xxooxooooooooooxooxx
xxooxxxxxxxxxxxxooxx
xxxooxxxxxxxxxxooxxx
xxxooxxxxxxxxxxooxxx
xxooxxxxxxxxxxxxooxx
xxooxxxxxxxxxxxxooxx
xxooxxxxxxxxxxxxooxx
xxooxxxxxxxxxxxxooxx
xxxooxxxxxxxxxxooxxx
xxxxoooooooooooooxxx
xxxxxoooooooooooxxxx
xxxxxoxxxxxxxxooxxxx
xxxxooxoxooxoxooxxxx
xxxxoxxoxooxoxxoxxxx
xxxxoxooxooxooxoxxxx
xxxooooooooooooooxxx
xxoooxxooxxooxxoooxx
xxxxxxxxxxxxxxxxxxxx`,
  twitter: `xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxooooxxxxx
xxxxxxxxxxooooooxxxx
xoxxxxxxxooxxxxooxxx
xoooxxxxxooxxxxxoooo
xooooxxxxooxxxxxxoox
xooxoooooooxxxxxooxx
oxooxxooooxxxxxxooxx
oooooxxxxxxxxxxxooxx
ooooooxxxxxxxxxxooxx
xooxxxxxxxxxxxxxooxx
oooooxxxxxxxxxxxooxx
xoooxxxxxxxxxxxooxxx
xxoooxxxxxxxxxooxxxx
xxxooooxxxxxxoooxxxx
xoooooxxxxxxoooxxxxx
xxoooxxxxxxoooxxxxxx
xxxooooooooooxxxxxxx
xxxxxooooooxxxxxxxxx
xxxxxxxxxxxxxxxxxxxx`,
};

const canvas = document.querySelector('canvas');
const { width: size } = canvas;
const context = canvas.getContext('2d');

const VLib = new VectorLib();

const particleSystem = new ParticleSystem(strings.rocket, size);
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

  for (const key of Object.keys(strings)) {
    if (key[0] === k) {
      particleSystem.updateParticles(strings[key]);
    }
  }
});
