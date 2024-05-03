//if else condition 

// let age=17;
// if(age>18){
//     console.log("user can play ddlc");
// }else{
//     console.log("user can play mario");
// }

// let num=13;
// if(num%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

//ternary operator or conditional operator
// let age=8;
// let drink=age>=5 ? "coffee":"milk";
// console.log(drink);


//and operator 
// let firstname="priyanshu";
// let age=16;

// if(firstname[0]==="p"&& age>18){
//    console.log("name starts with p and abhove 18");
// }else{
//     console.log("inside else");
// }

//or operator
// if(firstname[0]==="p"|| age>18){
//     console.log("name starts with p and abhove 18");
//  }else{
//      console.log("inside else");
//  }


//nested if else
// let winningNumber=19;
// let guess=+prompt("guess the number");
//console.log(typeof guess,guess);

// if(guess===winningNumber){
//     console.log("your guess is right");
// }else{
//    if(guess>winningNumber){
//     console.log("your number is to high ");
//    }else{
//     console.log("your number is too low ");
//    }
// }


//else if else if else
// let temInDegree=0;
// if(temInDegree<0){
//     console.log("extreme cold");
// }else if(temInDegree<10){
//     console.log("harsh cold");
// }else if(temInDegree<25){
//     console.log("weather is okay");
// }else{
//     console.log("on the ac ");
// }

//switch

let day=2;

switch(day){
    case 0:
        console.log("monday");
    break;
    case 1:
        console.log("tuesday");
    break;
    case 2:
        console.log("wednesday");
    break;
    case 3:
        console.log("thrusday");
    break;
    case 4:
        console.log("friday");
    break;
    case 5:
        console.log("saturday");
    break;
    case 6:
        console.log("sunday");
    break;
    default:
        console.log("invalid day");
}