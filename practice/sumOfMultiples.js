/*

What is a natural number?
- positive whole number

Two arguments
- natural number
- set of numbers (default val [3,5])

in set
find multiples less than first arg
add up those multiples to get sum

how to determine multiple
mod of multiple is zero
*/

class SumOfMultiples { 
    static defaultMultiples = [3,5];
    constructor(...args) {
        
        this.multiples = args.length === 0 ? SumOfMultiples.defaultMultiples : args;
    }

    retrieveMultiples(list) {
        for (let i = 0; i < list.defaultMultiples.length; i += 1) {
            for (let j = list.defaultMultiples[i]; j < number; j += list.defaultMultiples[i]) {
                if (!multipleNums.includes(j)) {
                    multipleNums.push(j);
                }
            }
            
        }
        
    }

    static to(number) {
        let multipleNums = []

        for (let i = 0; i < SumOfMultiples.defaultMultiples.length; i += 1) {
            for (let j = SumOfMultiples.defaultMultiples[i]; j < number; j += SumOfMultiples.defaultMultiples[i]) {
                if (!multipleNums.includes(j)) {
                    multipleNums.push(j);
                }
            }
            
        }

        

        let sum = multipleNums.reduce((accumulator, currentVal) => accumulator + currentVal, 0);

        return sum;
    }

    to(number) {
        /*

        initialize a sum variable

        iterate multiples

        inner loop to compare to number (while less)
        iterate the multiples and add to sum variable

        return sum

        */

        let multipleNums = []

        for (let i = 0; i < this.multiples.length; i += 1) {
            for (let j = this.multiples[i]; j < number; j += this.multiples[i]) {
                if (!multipleNums.includes(j)) {
                    multipleNums.push(j);
                }
            }
            
        }

        

        let sum = multipleNums.reduce((accumulator, currentVal) => accumulator + currentVal);

        return sum;

    }
}


module.exports = SumOfMultiples;