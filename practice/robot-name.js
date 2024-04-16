/*

start robot, random name generated

reset robot, new name generated

solution cannot allow same name twice
-> Datastructure that keeps track of previous names? []?

Math.random() -> random num between 0 and 1

Math.random() * 10 -> random num between 0 and 10

ex. 5 character names
first 2 letters (A - Z) 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
next 3 numbers (0 - 9) '0123456789'

let string = '';

2 iterations/operations 
Math.floor(Math.random() * alphabet.length) -> random index

3 iterations/operations
Math.floor(Math.random() * numbers.length)

*/

const NAME_REGEXP = /^[A-Z]{2}\d{3}$/;

Math.seedrandom = require('seedrandom');

// let num = Math.floor(Math.random() * 10);

// console.log(num);


class Robot {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static numbers = '0123456789';
  
  static prevNames = [];
  static seedVal = 0;

  constructor() {
    this.robotName = this.setName();
  }

  static randomIndex(length) {
    return Math.floor(Math.random() * length);
  }

  

  setName() {
    
    let string = "";
    for (let idx = 0; idx < 2; idx += 1) {
      let letter = Robot.alphabet[Robot.randomIndex(Robot.alphabet.length)];
      string += letter;
    }

    for (let ndx = 0; ndx < 3; ndx += 1) {
      let number = Robot.numbers[Robot.randomIndex(Robot.numbers.length)];
      string += number;
    }

    if (Robot.prevNames.length > 0) {
      let search = Robot.prevNames.find(name => name === string);

      if (search !== undefined) {
        this.setName();
      } else {
        Robot.prevNames.push(string);
      }
    } else {
      Robot.prevNames.push(string);
    }

    return string;
  }

  name() {
    return this.robotName;
  }

  static updateAlphabet() {
    let arr = Robot.alphabet.split('');
    let newLast = arr.shift();
    Robot.alphabet = arr.join() + ',' + newLast;
  }

  static updateNumbers() {
    let arr = Robot.numbers.split('');
    let newLast = arr.shift();
    Robot.numbers = arr.join() + ',' + newLast;
  }

  reset() {
    // Robot.updateAlphabet();
    // Robot.updateNumbers();
    // console.log(Robot.alphabet);
    // console.log(Robot.numbers);
    this.robotName = this.setName();
  }
}

module.exports = Robot;

