//functions inside function 
// const app = () =>{
//     const myFunc = () =>{
//         console.log("hello from my func");
//     }
//     const addTwo = (num1,num2) =>{
//         return num1+num2;
//     }
//     const mul = (num1,num2)=>{
//         return num1*num2;
//     }
//     console.log("inside app");
//  myFunc();    
// console.log("add of number:",addTwo(4,6));
// console.log("multiplcation of number:",mul(4,6));
// }
// app();
// console.log("add of number:",addTwo(4,6));
// console.log("multiplcation of number:",mul(4,6));


//lexical scope

// function myApp(){
//     const myVar="value1";
//     function myfunc(){
//         const myVar="value59";
//         console.log("inside my func",myVar);
//     }
//     const myfunc2=function(){}
//     const myfunc3=()=>{} 
//     console.log(myVar);
//     myfunc();
// }    
// myApp();


//blockscope vs function scope 
//let and const are block scope 
//var is function scope 

// {
//     let firstName = "priyanshu";
// }
// console.log(firstName);

// {
//     let firstName = "priyanshu";
//     console.log(firstName);
// }



// {
//     const firstName = "smita";
// }
// console.log(firstName);

// {
//     const firstName = "smita";
//     console.log(firstName);
// }


// {
//     var firstName = "aimpi";
// }
// console.log(firstName);


//default parameter

// function addTwo(a,b){
//     if(typeof b==="undefined"){
//         b=1;
//     }
//     return a+b;
// }
// const ans =addTwo(4);
// console.log(ans);

// function addTwo(a,b=0){
    
//     return a+b;
// }
// const ans =addTwo(4);
// console.log(ans);

//rest parameters
// function myFunc(a,b,c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }
// myFunc(3,4,5);

// function addNumbers(...numbers){
//     let total=0;
//     for(let number of numbers){
//         total=total+number;
//     }
//     console.log("sum is",total);
// }
// addNumbers(1,2,3,4,5,6,7,8);



//param destructuring
//object
//react me bohat jyada use hota hai 

// const person = {
//     firstName: "priyanshu",
//     gender: "male",
// };

// function printDetails({
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// function printDetails({firstName,gender}){
//     console.log(firstName);
//     console.log(gender);
// }
// printDetails(person);


//callback functions

function myFunc2(){
    console.log("inside my func 2");
}
function myFunc(callblock){
    
    callblock()
}
myFunc(myFunc2);