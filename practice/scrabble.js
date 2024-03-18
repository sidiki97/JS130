
class Scrabble {
  static otherTable = {
    'A, E, I, O, U, L, N, R, S, T' : 1,
    'D, G' : 2,
    'B, C, M, P' : 3,
    'F, H, V, W, Y' : 4,
    'K' : 5,
    'J, X' : 8,
    'Q, Z' : 10
  }

  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(word) {
    this.word = word;
    this.values = this.setVals();
  }

  setVals() {
    let finalTable = {};
    for(let key in Scrabble.otherTable) {
      let splitted = key.split(', ');
      splitted.forEach(letter => finalTable[letter] = Scrabble.otherTable[key]);
      
    }
    
    return finalTable;
    
  }

  updateWord() {
    return [].map.call(this.word, letter => letter.toUpperCase()).join('');
  }

  static score(word) {
    let scrabble = new Scrabble();
    let points = 0;
    // [].forEach.call(this.word, (letter) => points += this.values[letter]);
    word = [].map.call(word, letter => letter.toUpperCase()).join('');
    
    
    for (let i = 0; i < word.length; i += 1) {
      if (Scrabble.alphabet.includes(word[i])) {
        points += scrabble.values[word[i]]
      }
      
    }
    return points;
  }

  score() {
    if(this.word === undefined || this.word === null) {
      return 0;
    }
    if(this.word.length === 0) {
      return 0;
    }

    let points = 0;
    // [].forEach.call(this.word, (letter) => points += this.values[letter]);
    this.word = this.updateWord();
    
    
    for (let i = 0; i < this.word.length; i += 1) {
      if (Scrabble.alphabet.includes(this.word[i])) {
        points += this.values[this.word[i]]
      }
      
    }
    return points;

  }

  
}

module.exports = Scrabble;

