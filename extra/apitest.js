
/*
Delegate

two args (object, method name, extra args)

object will be able to call method with one its methods
extra args will be arguments for that method

*/

// function delegate(obj, methodName, args) {
//   return function() {
//     obj[methodName](args);
//   }
// }

// let foo = {
//   name: 'test',
//   bar: function(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux()

// foo.bar = function() {console.log('changed')};

// baz.qux();

// function formatName(firstName, middleName, lastName) {
//   return `${lastName}, ${firstName} ${middleName[0]}.`;
// }

// fullName = ['James', 'Tiberius', 'Kirk'];

// console.log(formatName(...fullName));
// logs: Kirk, James T.


// setInterval(() => console.log(5), 1000);

setTimeout(() => console.log('eo'), 0);

console.log('1');

