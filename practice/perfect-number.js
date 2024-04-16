/*

Data structure
-list of divisors


Find the divisors
iterate till the number
if no remainder => divisor => add to list

Add divisors up

Compare to original number


*/

class PerfectNumber {

  // Find divisors
  static divisors(number) {
    let picks = [];
    for (let num = 1; num < number; num += 1) {
      if (number % num === 0) {
        picks.push(num);
      }
    }

    return picks;
  }

  static sum(nums) {
    let total = nums.reduce(((add, currentValue) => add + currentValue), 0);

    return total;
  }

  static compare(sumNum, origNum) {
    if (sumNum > origNum) {
      return "abundant";
    } else if (sumNum < origNum) {
      return "deficient";
    } else {
      return "perfect";
    }
  }

  static classify(number) {
    if (number < 0) {
      throw new Error();
    }
    let divisors = this.divisors(number);
    let sum = this.sum(divisors);

    return this.compare(sum, number);
  }
}

module.exports = PerfectNumber;