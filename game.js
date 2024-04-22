class Pacman {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.radius = 10;
    this.direction = 'right';
  }

  draw(canvas) {
    canvas.context.fillStyle = '#FF0000';
    if (this.direction === 'right') {
      canvas.context.drawCircle(this.x, this.y, this.radius);
    }
    // Add more directions and shapes as needed
  }

  update() {
    switch (this.direction) {
      case 'right':
        this.x += 1;
        break;
      case 'left':
        this.x -= 1;
        break;
      case 'up':
        this.y -= 1;
        break;
      case 'down':
        this.y += 1;
        break;
    }
  }
}

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.pacman = new Pacman();
    this.interval = setInterval(() => {
      this.clear();
      this.pacman.draw(this);
      this.pacman.update();
    }, 1000 / 60); // 60 FPS
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

// Create a canvas element and pass it to the Game constructor
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

new Game(canvas);
