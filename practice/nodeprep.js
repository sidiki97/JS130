
const diaMond = require('./diamond')

function diamond(letter) {
  let alphabet = getAlphabet();

  let index = alphabet.indexOf(letter);

  let outer = index;
  let inner = 0;

  let currentLetter = 0;

  for(let i = outer; i >= 0; i -= 1) {
    let string = "";

    for (let j = 0; j < i; j += 1) {
      string += " ";
    }
    if (inner > 0) {
      if (inner % 2 != 1) {
        inner +=1
      }
      let innerString = "";
      
      for (let i = 0; i < inner; i += 1) {
        innerString += " ";
      }
      console.log(string + alphabet[currentLetter] + innerString + alphabet[currentLetter]);
    } else {
      console.log(string + alphabet[currentLetter]);
    }
    inner += 1;
    currentLetter += 1;
  }
}



function getAlphabet() {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  return alphabet;
}

console.log(diaMond.makeDiamond('C'));
