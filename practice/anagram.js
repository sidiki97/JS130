/*

datastructure
- object with character counts


word, a list of possible anagrams

- need to filter list to get anagrams

iterate list

if anagram => add to another list
Determine anagram
iterate list
check letter counts
iterating the strings to add to new object and then verify same with original object
if matching => anagram

Additional info:
same word not anagram
maake sure all chars match 
case insensitive (compare as lowercase)
*/


class Anagram {
  constructor(word) {
    this.word = word;
    this.count = Anagram.counter(this.word);
  }

  static counter(word) {
    let obj = {};
    for (let char = 0; char < word.length; char += 1) {
      let letter = word[char].toLowerCase();
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }

    return obj;
  }

  anagram(listWord) {
    if (listWord.length !== this.word.length) {
      return false;
    }

    if (listWord.toLowerCase() === this.word.toLowerCase()) {
      return false;
    }

    let listWordCount = Anagram.counter(listWord);

    for (let key in listWordCount) {
      if (this.count[key]) {
        if (this.count[key] !== listWordCount[key]) {
          return false;
        }
      } else {
        return false;
      }
    }


    return true;
  }

  findAnagrams(list = []) {
    let anagrams = [];
    for (let idx = 0; idx < list.length; idx += 1) {
      if (this.anagram(list[idx])) {
        anagrams.push(list[idx]);
      }
    }

    return anagrams;
  }

  match(list = []) {
    let subList = this.findAnagrams(list);

    return subList;

  }
}


module.exports = Anagram;