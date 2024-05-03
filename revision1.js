
// let age=23;
// let name="priyanhsu"

// //number to string
// console.log(typeof(age+" "));
// age="24"
// age=+"24"


// let str1="10";
// let str2="20";
// let str3=+ str1 + +str2;
// console.log(str3);
// console.log(typeof(+ str1 + +str2));

// //string concatenation
// let string1="priyanshu";
// let string2="bhardwaj";
// let fullname=string1+" "+string2;
// console.log(fullname);


//template string
// let age=22;
// let firstName="priyanshu";
// //let aboutMe="my name is "+firstName+" and my age is "+age;
// console.log(`my name is ${firstName} and my age is ${age}`);



//undefined
// let firstName;
// console.log(typeof firstName);
//  firstName="Priyanhsu";
//  console.log(typeof firstName,firstName);


//null
// let myVariable=null;
//  console.log( myVariable);
// myVariable="priyanhsu";
// console.log(myVariable,typeof myVariable);
// console.log(typeof null);//bug,error

//boolenas-->true,false
// let num1="7";
// let num2=7;
//  console.log(num1<=num2);

// //  == vs ===
// console.log(num1 == num2)

// //!= vs !==
// console.log(num1!=num2)

//truthly and falsly 


// function myFunction() {
//   let text = document.getElementById("demo").innerHTML;
//   document.getElementById("demo").innerHTML =
//   text.replace("Microsoft","W3Schools");
// }



// function convert(){
//     var kms=document.getElementById('data').value;
//    const factor = 0.621371;
//    var miles=kms*factor;
//    document.getElementById('result').innerText = `${miles}miles`;
// }
// convert();

// function convert(){
//     var celsius = document.getElementById('data').innerHTML;
//     const fahrenheit = (celsius * 1.8 ) + 32;
//     document.getElementById('result').innerText = `${fahrenheit}fahrenheit`;
// }
// convert();


//By using (Math.sign(function))
// function check(){
//     var number=document.getElementById('data').value;
//     ult = Math.sign(number);
//     document.getElementById('result').innerText = result;
// }

// function check(){
//     var number=document.getElementById('data').value;
//     
//         if(number<0){
//              result = `${number} is negative number`;
//         }else if(number==0){
//             result=`${number} is zero`;
//         }else if(number>0){
//             result = `${number} is positive`;
//         }else{
//             result=`${number} is not a number`;
//         }

//     document.getElementById('result').innerText=result;    

// }


//by using (Math.random())function //it will return a random floating point number ranging form 0 to less than 1  //example for creating otp
//formulae --> Math.random() * ( highestNumber - lowestNumber ) + lowestNumber
// var x = Math.random() * ( 10 - 1 ) + 1;
// console.log(`random value between 1 and 10 is ${x}`);


//by using (Math.floor())function //it will return a random integer number ranging form 0 to less than 1  //example for creating otp
//formulae --> Math.floor() * ( highestNumber - lowestNumber ) + lowestNumber

// var x = Math.random();
// console.log("random before calculation "+ x);
// // x = x * (1000-1)+1;
// x = x *10000;
// console.log("random after calculation "+ x);
// console.log("floor calculation "+ Math.floor(x));


// function oddEvenCheck(){
//     var num = document.getElementById('number').value;
//     if(num%2===0){
//         result= num + 'number is even';
//     }else{
//         result = num + 'number is odd' ;
//     }
//     document.getElementById('result').innerHTML = result;

// }


// function oddEvenCheck(){
//     var num = document.getElementById('number').value;
//     ult = num%2 == 0 ? "even" : "odd";
//     console.log(`${x} is an ${result} number`) 
// }


    
// var num = prompt("please enter a number  ");
// if(num==1){
//     console.log(`${num} is neither a prime nor composite number `);
// }else if(num<1){
//     console.log(`${num} is not a prime number `);
// }else{

//     for( let i=2;i<num;i++){
//         if(num%i==0){
//               console.log(`${num} is not a prime number ` );
//              break;
//         }else{
//              console.log(`${num} is a prime number `);
//         }
//     }
//     // console.log(res);
// }


// var num1 = prompt("please enter a number  ");
// var num2 = prompt("please enter a number  ");
// var num3 = prompt("please enter a number  ");
// if(num1>num2){
//     console.log(num1 ,"is largest");
// }else if(num2>num3){
//     console.log(num2 ,"is largest");
// }else if(num3>num1){
//     console.log(num3 ,"is largest");
// }else{
//     console.log("all number are equal");
// }


//--->By using math.max function we founded max number between three numbers 
// var num1 = prompt("please enter a number  ");
// var num2 = prompt("please enter a number  ");
// var num3 = prompt("please enter a number  ");
// var x = Math.max(num1,num2,num3);
// console.log(`${num1},${num2},${num3} : Largest = ${x}`);


// function check(a,b,c){
//       if(a>b){
//         return a;
//       }else if(b>c){
//         return b;
//       }else{
//         return c;
//       }
// }
// var num1 = prompt("please enter a number  ");
// var num2 = prompt("please enter a number  ");
// var num3 = prompt("please enter a number  ");
// var x = check(num1,num2,num3);
// console.log(`${num1},${num2},${num3} : Largest = ${x}`);


//--->factorial of a number

// var num = prompt("please enter a number  ");
// var fact=1;

// if(num==0){
//     console.log(`The factorial of a ${num} is 1 ` );
// }else if(num<0){
//     console.log(`The factorial of a ${num} is not posiible `);
// }else{
    
//     for(let i=1;i<=num;i++){
//     fact=fact*i;
//    }
//    console.log(`The factorial of a ${num} is ${fact} `);
// }


//----> to find factorial using recursuion   

// var num = prompt("please enter a number  ");
// var fact=1;

// function factr(number){
//      if(number>num){
//         return;
//      }
//      fact=fact*number;
//      console.log(fact)
//      number++
//      factr(number);
    
// }
// factr(1)


//---->Print table using function

var num = prompt("please enter a number  ");
var temp=num;
function table(n){
    for(let i=1;i<=20;i++){
         var res=i*num;
         console.log(`${num} x ${i} = ${res}`);
    }
  
    
}
table(num);