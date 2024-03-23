
/*

string => [length] => [[], []]

'0123'
if length > string.length throw error

length = 1 
[[0],[1],[2],[3]]

let result = []

iterate the string

build a sequence intialize an array

let s = ''
inner loop that starts at outer loop val
keep looping until val is less than length +, increment

s += string character

s => convert to list numbers

add list of numbers to result list

*/

class Series {
    constructor(string) {
        this.series = string;
    }

    slices(length){
        if (length > this.series.length) {
            throw new Error('Longer than string');
        }

        let result = [];

        for (let i = 0; i < this.series.length; i += 1) {
            let seq = '';

            for (let j = i; j < i + length; j += 1) {
                seq += this.series[j]
            }

            if (seq.length === length) {
                result.push(seq);
            }

            

        }

        return result.map(string => string.split('')
        .map(char => Number(char)));

    }
}

module.exports = Series;

let series = new Series('01234');

console.log(series.slices(1));