class ParticleSystem {
  constructor(string, size) {
    const gridOffset = 40;
    const gridSize = size - gridOffset * 2;
    const gridDimensions = string.indexOf('\n');
    const cellSize = Math.floor(gridSize / gridDimensions);
    const particleRadius = Math.floor(cellSize / 2);
    const singleLineString = string.replace(/\n/g, '');

    const particles = [];
    for (let i = 0; i < singleLineString.length; i += 1) {
      if (singleLineString[i] === 'o') {
        const column = i % gridDimensions;
        const row = Math.floor(i / gridDimensions);

        const x = column * cellSize + cellSize / 2 + gridOffset;
        const y = row * cellSize + cellSize / 2 + gridOffset;

        const position = VLib.new(
          Math.floor(Math.random() * gridSize) + gridOffset,
          Math.floor(Math.random() * gridSize) + gridOffset
        );
        const target = VLib.new(x, y);

        particles.push(new Particle(position, target, particleRadius));
      }
    }

    this.gridOffset = gridOffset;
    this.gridDimensions = gridDimensions;
    this.cellSize = cellSize;
    this.particleRadius = particleRadius;
    this.particles = particles;
  }

  show(context) {
    for (const particle of this.particles) {
      particle.show(context);
    }
  }

  update(mouse) {
    for (const particle of this.particles) {
      particle.update();
      particle.applyBehaviours(mouse);
    }
  }

  updateParticles(string) {
    const singleLineString = string.replace(/\n/g, '');
    const targets = [];

    for (let i = 0; i < singleLineString.length; i += 1) {
      if (singleLineString[i] === 'o') {
        const column = i % this.gridDimensions;
        const row = Math.floor(i / this.gridDimensions);

        const x = column * this.cellSize + this.cellSize / 2 + this.gridOffset;
        const y = row * this.cellSize + this.cellSize / 2 + this.gridOffset;
        targets.push(VLib.new(x, y));
      }
    }

    for (let i = 1; i < targets.length; i += 1) {
      if (i < this.particles.length) {
        this.particles[i].updateTarget(targets[i]);
      } else {
        const position = VLib.copy(
          this.particles[this.particles.length - 1].position
        );
        this.particles.push(
          new Particle(position, targets[i], this.particleRadius)
        );
      }
    }

    if (this.particles.length > targets.length) {
      const gap = this.particles.length - targets.length;
      for (let i = 1; i < gap; i += 1) {
        this.particles.pop();
      }
    }
  }
}
