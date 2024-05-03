// important array methods
//forEach
//map---->react pe bohat jarurat padta hai 
//filter
//reduce

//for each method
// const numbers = [4,2,5,8];

// function multiplyby2(number,index){
//     console.log(`index is ${index} number is ${number}`);
//   //  console.log(number*2);
//     console.log(`${number}*2 = ${number*2}`)
// }
// for(let i =0;i<numbers.length;i++){
//     multiplyby2(numbers[i],i);
// }
// numbers.forEach(function(number,index){
//     console.log(`insex is ${index} number is ${number}`);
// });

// numbers.forEach(function(number,index){
//     console.log(`${number}*2 = ${number*2}`);
// })

// const users = [
//     {firstName:"priyanshu",age:22},
//     {firstName:"yanshu",age:21},
//     {firstName:"himanshu",age:92},
//     {firstName:"sudhanshu",age:19},
// ] 
// users.forEach(function(users){
//     console.log(`${users.firstName}`);
// })

//forEach using arrow function
// users.forEach((user)=>{
//     console.log(`${user.firstName}`);
// })

// for(let user of users){
//     console.log(`${user.firstName}`); 
// }


//map method
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number * number;
// }
// const squareNumbers=numbers.map(square);
// console.log(squareNumbers);

// const squareNumbers=numbers.map(function(number){
//           return number*number;
// });
// console.log(squareNumbers);

//arrow function in map method
// const squareNumbers=numbers.map((number)=>{
//     return number*number;
// });
// console.log(squareNumbers);


//realistic example of map method
// const users = [
//     {firstName:"priyanshu",age:22},
//     {firstName:"yanshu",age:21},
//     {firstName:"himanshu",age:92},
//     {firstName:"sudhanshu",age:19},
// ] 
// const userNames=users.map((details)=>{
//     return details.firstName;
// })
// console.log(userNames);


//filter method
// const numbers = [3,4,6,1,8];
// const isEven=function(number){
//     return number%2===0;
// }
// const eveNumbers=numbers.filter(isEven);
// console.log(eveNumbers);

//filter method using arrow function 

// const isEven=numbers.filter((Number)=>{
//     return Number%2===0;
// })
// console.log(isEven);


//reduce method 
// const numbers = [3,4,6,1,8];

// const sum=numbers.reduce((accumulator,currentValue)=>{
//   return accumulator+currentValue;
  //return accumulator+currentValue
  //   7           3          4
  //   13          7          6
  //   14          13         1
  //    22         14         8
// })
// console.log(sum);

//real lyfe example
const userCart=[
    {productId:1,productName:"mobile",price:120000},
    {productId:2,productName:"laptop",price:1000000},
    {productId:3,productName:"computer",price:2000000}
]  
const sum=userCart.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
})
console.log(sum)