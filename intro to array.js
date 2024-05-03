//intro to arrays

// let fruit=["apple","mango","grapes"];
// console.log(fruit);
// console.log(fruit[0]);

// let numbers=[1,2,3,4];
// console.log(numbers);

// let mixed=[1,2,3,4,"string",null,undefined];
// console.log(mixed);


// let fruit=["apple","mango","grapes"];
// console.log(fruit);
// fruit[1]= "banana";
// console.log(fruit);

// let fruit=["apple","mango","grapes"];
// console.log(typeof fruit);
// console.log(Array.isArray(fruit));

// let fruit=["apple","mango","grapes"];
// console.log(fruit);
// //push method
// fruit.push("banana");
// console.log(fruit);

// //pop method
// fruit.pop();
// console.log(fruit);

// let poppedFruit=fruit.pop();
// console.log(fruit);
// console.log("popped fruit is ",poppedFruit);

// //unshift adds at starting
// fruit.unshift("banana");
// fruit.unshift("myfruit");
// console.log(fruit);

//primitive vs reference datatypes
// let num1 = 6;
// let num2 = num1;
// console.log("value of num1 is",num1);
// console.log("value of num2 is",num2);
// num1++;
// console.log("value of num1 is",num1);
// console.log("value of num2 is",num2);


// //reference type -->arrays
// let array1 = ["item1","item2"];
// let array2 = array1;
// console.log("array1",array1);
// console.log("array2",array2);
// array1.push("item3");
// console.log("after pushing element to array 1");
// console.log("array1",array1);
// console.log("array2",array2);

//how to clone arrays
//if any change is made in array1 then there is no impact should be in array2
//this is possible by making clone of array1
// let array1 = ["item1","item2"];
// let array2 = array1;
// console.log(array1===array2);

//cloning procedure no1
// let array1 = ["item1","item2"];
// let array2 = ["item1","item2"];
// array1.push("item3");
// console.log(array1);
// console.log(array2);

//cloning procedure no2
// let array1 = ["item1","item2"];
// console.log(array1);;
// let array2 = array1.slice(0);
// array1.push("item3");
// console.log(array1);
// console.log(array2);

//cloning procedure no3
// let array1 = ["item1","item2"];
// console.log(array1);;
// let array2 = [].concat(array1);
// array1.push("item3");
// console.log(array1);
// console.log(array2);

//cloning procedure no4 -->spread operator
// let array1 = ["item1","item2"];
// console.log(array1);;
// let array2 = [...array1];
// array1.push("item3");
// console.log(array1);
// console.log(array2);


//adding element to array2 using slice method
// let array1 = ["item1","item2"];
// let array2 = array1.slice(0).concat(["item3",]);
// console.log(array1);
// console.log(array2);


//adding element to array2 using spread method
// let array1 = ["item1","item2"];
// let onMoreArray =["item3","item4"];
// let array2 = [...array1,...onMoreArray];
// console.log(array1);
// console.log(onMoreArray);
// console.log(array2);


//for loop in array
// let fruits=["apple","mango","grapes","banana"];
// let n=fruits.length;
// for(let i=0;i<n;i++){
//     console.log(fruits[i]);
// }


//print in uppercase inside for loop
// let fruits=["apple","mango","grapes","banana"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i].toUpperCase());
// }

//print to put in a new array
let fruits=["apple","mango","grapes","banana"];
let fruits2=[];
for(let i=0;i<fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);

