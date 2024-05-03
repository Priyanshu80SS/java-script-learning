// own method 
// function inside object

// const person={
//     firstName:"priyanhsu",
//     age:8,
//     about:function(){
//         //this -- runtime pe value lgta hai is se 
//         console.log(`person firstName is ${this.firstName} and age is ${this.age}`)
//     }
// }
//console.log(person.about);
//person.about();

// function personInfo(){
//     //this -- runtime pe value lgta hai is se 
//     console.log(`person firstName is ${this.firstName} and age is ${this.age}`)
// }
// const person1={
//     firstName:"priyanhsu",
//     age:8,
//     about:personInfo
// }
// const person2={
//     firstName:"anhsu",
//     age:81,
//     about:personInfo
// }
// const person3={
//     firstName:"su",
//     age:58,
//     about:personInfo
// }
// const person4={
//     firstName:"riyanhsu",
//     age:89,
//     about:personInfo
// }
// //console.log(person.about);
// person1.about();
// person2.about();
// person3.about();
// person4.about();


// this and window

// function myName(){
//     console.log("hello world");
// }
// myName();


// function myName(){
//     console.log(this);//-----window dega jisme sarre methods hote hain
// }
// myName();

// function myName(){
//     console.log("hello world");
// }
// window.myName();

// function myName(){
//     "use strict"// -----to avoid window objects printing
//     console.log(this);
// }
// myName();


// --- (.call .apply .bind) method  

// ---.call method

function about(hobby,favMusician){
    console.log(this.firstName,this.age,hobby,favMusician)
 }

const person1={
        firstName:"priyanhsu",
         age:8,
         
}    
const user1={
    firstName:"anhsu",
     age:18,
   
}   

 person1.about.call(user1,"guitar","alka");
//apply
// about.apply(user1,["guitar","bach"])

// //---.bind method --returns function
// const func= about.bind(person1,"guitar","back");
// func();