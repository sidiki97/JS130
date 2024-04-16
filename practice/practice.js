
function subtract(max, min) {
  if (min !== undefined) {
    return max - min;
  } else {
    return function(newMin) {
      return max - newMin;
    }
  }
}

console.log(subtract(11, 4) === 7); //true
console.log(subtract(12, 1) === 11); //true
console.log(subtract(7, 3) === 4); //true

const subtractFromTen = subtract(10);
console.log(subtractFromTen(3) === 7); //true
console.log(subtractFromTen(5) === 5); //true