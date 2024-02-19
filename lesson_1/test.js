
function forEach(array, callback, executionContext) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(executionContext, array[index], index, array);
  }
}

// class Foo {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   showItem(item) {
//     console.log(this.prefix, item);
//   }
// }

// let foo = new Foo("Item: ");


// console.log(forEach([1, 2, 3], foo.showItem, foo));
// console.log(forEach([4, 5, 6], foo.showItem));

function filter(array, callback){ 
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index])) {
      newArray.push(array[index]);
    }
  }

  return newArray;
}

function map(array, callback) {
  let mappedArray = [];
  for (let index = 0; index < array.length; index += 1) {
    mappedArray.push(callback(array[index]));
  }

  return mappedArray;
}




function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let index = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    index = 1;
  }

  while (index < array.length) {
    accumulator = callback(accumulator, array[index]);
    index += 1;
  }

  return accumulator;
}

function reduceFilter(array, callback) {
  let filteredArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index])) {
      filteredArray.reduce(()=> filteredArray.push(array[index]), filteredArray)
    }
  }

  return filteredArray;

}

function mapReduce (array, callback) {
  return array.reduce((accumulator, currentValue) => {
    accumulator.push(callback(currentValue));
    return accumulator;
  }, [])
}

