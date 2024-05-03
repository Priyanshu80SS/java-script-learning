//function declareation

// function singHappyBday(){
//     console.log("happy bday to you");
// }
// singHappyBday();

// function toplus(){
//     console.log(2+4);
// }
// toplus();
// function sumofThreeNumbers(number1,number2,number3){
//     return number1+number2+number3;
// }
// console.log(sumofThreeNumbers(2,3,4));

// function evenOdd(num){
//   //  let mynum=console.log(prompt("enter the number : ");
//     if(num%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(evenOdd(9));

// function firrstCharacter(isString){
//     return isString[0];
// }
// console.log(firrstCharacter('abchdgey'));

// function searchIndex(myArray,target){
    
//     for(let i=0;i<myArray.length;i++){ 
//     if(target==myarray[i]){
//         return i;
//     }
// }
//       return -1;
// }
// const  myarray=[3,5,7,8];
// console.log(searchIndex(myarray,8));


//function expression

// const singHappyBday=function (){
//     console.log("happy bday to you");
// }
// singHappyBday();

// const toplus=function(){
//     console.log(2+4);
// }
// toplus();

// const sumofThreeNumbers=function (number1,number2,number3){
//     return number1+number2+number3;
// }
// console.log(sumofThreeNumbers(2,3,4));


// const evenOdd=function (num){
//     //  let mynum=console.log(prompt("enter the number : ");
//       if(num%2==0){
//           return true;
//       }else{
//           return false;
//       }
//   }
//   console.log(evenOdd(9));

  
// const firrstCharacter = function (isString){
//     return isString[0];
// }
// console.log(firrstCharacter('abchdgey'));

// const searchIndex = function (myArray,target){
    
//     for(let i=0;i<myArray.length;i++){ 
//     if(target==myarray[i]){
//         return i;
//     }
// }
//       return -1;
// }
// const  myarray=[3,5,7,8];
// console.log(searchIndex(myarray,8));

  
//arrow function 


const singHappyBday= () =>{
    console.log("happy bday to you");
}
singHappyBday();

const toplus=()=>{
    console.log(2+4);
}
toplus();

const sumofThreeNumbers= (number1,number2,number3)=>{
    return number1+number2+number3;
}
console.log(sumofThreeNumbers(2,3,4));


const evenOdd= num => num%2===0;
    
  console.log(evenOdd(8));

  
const firrstCharacter = isString=>isString[0];

console.log(firrstCharacter('abchdgey'));

const searchIndex = (myArray,target)=>{
    
    for(let i=0;i<myArray.length;i++){ 
    if(target==myarray[i]){
        return i;
    }
}
      return -1;
}
const  myarray=[3,5,7,8];
console.log(searchIndex(myarray,8));


//hoisting -->this is done one and only in declaration case

hello();
function hello(){
    console.log("hello world");
}

  
