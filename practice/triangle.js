
class Triangle {
  static types = ['equilateral', 'isosceles', 'scalene'];

  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    
    this.validSides();
    this.noNegatives();
    this.noZeros();

    this.sides = [this.side1, this.side2, this.side3];
  }

  equilateral() {
    if (this.sides.every(val => val === this.side1)) {
      return 'equilateral'
    } 
  }

  isosceles() {
    //check 1
    if ((this.sides.filter(val => val === this.side1)).length === 2) {
      return 'isosceles';
    } else if ((this.sides.filter(val => val === this.side2)).length == 2) {
      return 'isosceles';
    }
  }


  kind() {
    if (this.equilateral() === 'equilateral'){
      return 'equilateral';
    };
    if (this.isosceles() === 'isosceles') {
      return 'isosceles';
    }

    
    

    return 'scalene';
  }

  // sum(oneSide, otherSide) {
  //   return oneSide + otherSide;
  // }

  validSides() {

    if ((this.side1 + this.side2) <= this.side3) {
      this.invalid();
    } else if ((this.side1 + this.side3) <= this.side2) {
      this.invalid();
    } else if ((this.side2 + this.side3) <= this.side1) {
      this.invalid();
    }
  }

  invalid() {
    throw new TypeError('Invalid Triangle');
  }

  noZeros() {
    if (this.side1 === 0) {
      this.invalid();
    } else if (this.side2 === 0) {
      this.invalid();
    } else if (this.side3 === 0) {
      this.invalid();
    }
  }

  noNegatives() {
    if (([this.side1, this.side2, this.side3].find(val => val < 0))) {
      this.invalid();
    }
  }

}

module.exports = Triangle;