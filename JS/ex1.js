class Square {
  constructor(side) {
    this.side = side;
    this.perimeter = 0;
    this.area = 0;
    this.diagonal = 0;
  }

  findperimeter() {
    this.perimeter += this.side * 4;
  }
  findarea() {
    this.area += this.side ** 2;
  }

  finddiagonal() {
    this.diagonal += Math.sqrt(2) * this.side;
  }

  describe() {
    this.findperimeter();
    this.findarea();
    this.finddiagonal();
    console.log(`Square with side ${this.side} has perimeter of ${this.perimeter}, area of ${this.area}, and diagonal of ${this.diagonal}`)
  }

}

const firstsquare = new Square(2);
const secondsquare = new Square(3);
const thirdsquare = new Square(4);

firstsquare.describe();
secondsquare.describe();
thirdsquare.describe();