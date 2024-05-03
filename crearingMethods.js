//Methods
//dunction inside object

// const person = {
//     firstName:"priyanshu",
//     age:8,
//     about: function(){ 
//            console.log(`this is me ${this.firstName} and this is my age ${this.age}`)
//     }
   
// }
// //console.log(person.about.function()); 
// person.about();


// function personInfo(){ 
//     console.log(`this is me ${this.firstName} and this is my age ${this.age}`)
// }
// const person1 = {
//     firstName:"priyanshu",
//     age:8,
//     about: personInfo
   
// }
// const person2 = {
//     firstName:"priya",
//     age:18,
//     about: personInfo
   
// }
// const person3 = {
//     firstName:"anshu",
//     age:28,
//     about: personInfo
   
// }

// personInfo();
// person1.about()
// person2.about()


//call , apply , bind (method)


function about(hobby,favMuic) {
    console.log(this.firstName,this.age)
}
const user1 = {
    firstName:"priyanshu",
    age:8,
}
const user2 = {
    firstName:"anshu",
    age:18,
    
   
}

//apply
about.apply(user1,["guitar","bach"]);
