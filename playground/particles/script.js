const canvas = document.querySelector('canvas')
const { width, height } = canvas;
const context = canvas.getContext('2d')


class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add(v) {
    this.x = this.x + v.x
    this.y = this.y + v.y
  }
  subtract(v) {
    this.x = this.x - v.x
    this.y = this.y - v.y
  }
  multiply(s) {
    this.x = this.x * s
    this.y = this.y * s
  }
  divide(s) {
    if (s !== 0) {
      this.x = this.x / s
      this.y = this.y / s
    }
  }

  getMagnitude() {
    return (this.x ** 2 + this.y ** 2) ** 0.5;
  }

  normalize() {
    const magnitude = this.getMagnitude()
    this.divide(magnitude)
  }

  limit(m) {
    const magnitude = this.getMagnitude()
    if (magnitude > m) {
      this.normalize()
      this.multiply(m)
    }
  }
}

class VectorLib {
  constructor() { }

  new(x, y) {
    return new Vector(x, y)
  }

  add(v1, v2) {
    const v = new Vector(0, 0)
    v.add(v1)
    v.add(v2)

    return v
  }

  subtract(v1, v2) {
    const v = new Vector(0, 0)
    v.add(v1)
    v.subtract(v2)

    return v
  }

  copy(v) {
    return new Vector(v.x, v.y)
  }
}

const VLib = new VectorLib()

class Particle {
  constructor(position, target, r) {
    this.position = position
    this.target = target
    this.r = r * 0.9
    this.velocity = VLib.new(0, 0)
    this.acceleration = VLib.new(0, 0)
  }

  show(context) {
    context.beginPath()
    context.arc(this.position.x, this.position.y, this.r, 0, Math.PI * 2)
    context.fill()
    context.closePath()
  }

  update() {
    this.position.add(this.velocity)
    this.velocity.add(this.acceleration)

    const dirTarget = VLib.subtract(this.target, this.position)
    const distanceTarget = dirTarget.getMagnitude()
    this.velocity.limit(Math.max(1, distanceTarget ** 0.4))
    this.acceleration.multiply(0)
  }

  applyForce(force) {
    this.acceleration.add(force)
  }

  applyBehaviours(mouse) {
    const dirTarget = VLib.subtract(this.target, this.position)
    const distanceTarget = dirTarget.getMagnitude()
    if (distanceTarget > 1) {
      this.applyForce(this.steer(dirTarget, distanceTarget))
      this.applyForce(this.getFriction())
    }

    if(mouse) {
      const dirMouse = VLib.subtract(mouse, this.position)
      const disMouse = dirMouse.getMagnitude()
      if (disMouse < 20) {
        console.log('hello');
        this.applyForce(this.repelMouse(dirMouse, disMouse));
      }
    }

  }

  steer(force, distance) {
    force.normalize()
    const randomNoise = VLib.new(Math.random() - 0.5, Math.random() - 0.5)
    force.add(randomNoise)
    force.multiply(distance)
    return force
  }

  repelMouse(force, distance) {
    force.normalize()
    force.multiply(distance * 100 * -1)
    return force
  }

  getFriction() {
    const force = VLib.copy(this.velocity)
    force.multiply(-1)
    force.multiply(0.75)
    return force
  }

}

let string = `xxxxxxxxxxxxxxxxxxxx
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
xxxxxxxxxxxxxxxxxxxx`

const gridDimensions = string.indexOf('\n')
const gridSize = width
const cellSize = Math.floor(gridSize / gridDimensions)
const particleRadius = Math.floor(cellSize / 2)

string = string.replace(/\n/g, "")
const particles = [];

for (let i = 0; i < string.length; i += 1) {
  if (string[i] === 'o') {
    const column = i % gridDimensions
    const row = Math.floor(i / gridDimensions)

    const x = column * cellSize + cellSize / 2
    const y = row * cellSize + cellSize / 2


    const position = VLib.new(Math.floor(Math.random() * (width - particleRadius)) + particleRadius, Math.floor(Math.random() * (height - particleRadius)) + particleRadius)
    const target = VLib.new(x, y)

    particles.push(new Particle(position, target, particleRadius))
  }
}

for (const particle of particles) {
  particle.show(context)
}

let mouse = null;

let animationID = 0;
function animate() {
  context.clearRect(0, 0, width, height)

  for (const particle of particles) {
    particle.update()
    particle.applyBehaviours(mouse)
    particle.show(context)
  }

  animationID = requestAnimationFrame(animate)
}

animate()
canvas.addEventListener('mousemove', function (e) {
  const { left, top } = this.getBoundingClientRect()
  const {pageX, pageY} = e

  const x = pageX - left
  const y = pageY - top
  mouse = VLib.new(x, y)
})

canvas.addEventListener('mouseleave', function () {
  mouse = null;
  // cancelAnimationFrame(animationID);
})
