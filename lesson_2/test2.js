
// function makeCounterLogger(num1) {
//     return function(num2) {
//         if (num1 > num2) {
//             while (num1 >= num2) {
//                 console.log(num1);
//                 num1 -= 1;
//             }
//         } else if (num1 < num2) {
//             while (num1 <= num2) {
//                 console.log(num1);
//                 num1 += 1;
//             }
//         }
//     }
// }

// let countlog = makeCounterLogger(5);
// // countlog(8);
// countlog(2);

// function makeList() {
//     let list = [];
//     return function(arg) {
//         if (!arg) {
//             if (list.length > 0) {
//                 list.forEach(item => console.log(item));
//             } else { 
//                 console.log("List is empty");
//             }
//         } else {
//             let result = list.find((item, index) => {
//                 if (item === arg) {
//                     list.splice(index, 1);
//                     console.log(arg + " removed from list");
//                     return true;
//                 }
//             })
//             if (!result) {
//                 list.push(arg);
//                 console.log(arg + " added to list")
//             }
//         }
//     }
// }


// list();
// list('yes')
// list('no');
// list('maybe');
// list();
// list('yes');
// list();

// function makeList() {
//     return {
//         todoList : [],
//         add(value) {
//             this.todoList.push(value);
//             console.log(value + " added to list")
//         },
//         remove(value) {
//             let index = this.todoList.indexOf(value);
//             if (index !== -1){
//                 this.todoList.splice(index, 1);
//                 console.log(value + " removed from list");
//             }
//         },
//         list() {
//             if (this.todoList.length > 0) {
//                 this.todoList.forEach(item => console.log(item));
//             } else { 
//                 console.log("List is empty");
//             }
//         }

//     }
// }

// function makeList() {
//     let todoList = [];
//     return function() {
//         return {
//             add(value) {
//                 todoList.push(value);
//                 console.log(value + " added to list")
//             },
//             remove(value) {
//                 let index = todoList.indexOf(value);
//                 if (index !== -1){
//                     todoList.splice(index, 1);
//                     console.log(value + " removed from list");
//                 }
//             },
//             list() {
//                 if (todoList.length > 0) {
//                     todoList.forEach(item => console.log(item));
//                 } else { 
//                     console.log("List is empty");
//                 }
//             }
    
//         }
//     }
// }

// function makeList() {
//     let items = [];
  
//     return {
//       // items: [], -- this line removed

//       add: function(item) {
//         let index = items.indexOf(item);
//         if (index === -1) {
//           items.push(item);
//           console.log(item + " added!");
//         }
//       },
  
//       list: function() {
//         if (items.length === 0) {
//           console.log("The list is empty.");
//         } else {
//           items.forEach(function(item) {
//             console.log(item);
//           });
//         }
//       },
  
//       remove: function(item) {
//         let index = items.indexOf(item);
//         if (index !== -1) {
//           items.splice(index, 1);
//           console.log(item + " removed!");
//         }
//       },
//     };
//   }

// let list = makeList();



// list.add("peas");
// list.list();
// list.add("corn");
// list.list();
// list.remove("peas");
// list.list();

// here you need to find and log the largest even number in an array

// let array = [];
// let evens = array.filter(num => num % 2 === 0) ;
// let max = evens[0];
// evens.forEach((num) => {
//   if (num > max) {
//     max = num;
//   }
// })

// console.log(max);

function test() {
  console.log('test');
}

(function () {
  console.log('test');
})();

