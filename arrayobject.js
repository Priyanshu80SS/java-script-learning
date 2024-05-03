//use const for creating array
// const pi=3.14;
// //pi=12;we can not assign constant doubly
// console.log(pi);

// const fruits=["apple","mango"];
// fruits.push("banana");
// console.log(fruits);

//while loop
// const fruits=["apple","mango","pineapple"];
// let i=0;
// while(i<fruits.length){
//     console.log(fruits[i].toUpperCase());
//     i++;
// }

// const fruits=["apple","mango","pineapple"];
// let i=0;
// let fruits2=[];
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
//  console.log(fruits2)


//for of loop in array
// const fruits=["apple","mango","pineapple"];
// let fruit2=[];
// for(let fruit of fruits){
//     fruit2.push(fruit.toUpperCase());
// }
// console.log(fruit2);

//for of loop in array
// const fruits=["apple","gauvava","mango","pineapple"];
// for(let index in fruits){
//       console.log(index);
//       console.log(fruits[index]);
// }


//array destructuring
// const myArray = ["value1","value2"];
// let myVar1=myArray[0];
// let myVar2=myArray[1];
// console.log("the value of myvar1: ",myVar1);
// console.log("the value of myvar2: ",myVar2);

//shortcut of above code
const myArray = ["value1","value2"];
let [myVar1,myVar2] =myArray;
myVar1="value changed";
console.log("the value of myvar1: ",myVar1);
console.log("the value of myvar2: ",myVar2);
