//proto ,prottype,class

// const user={
//     firstName : "harshit",
//     lastName:"bhardwaj",
//     email:"priyanshubhardwaj099@gmaol.com",
//     age:2,
//     address:"house number",
//     about:function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age>=18;
//     }
// }


//create functions to create multiple objects
//1--function(that function create object)
// 2--add key value pair
//3--object ko return karega 

// function createUser(firstName,lastName,email,age,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about=function(){
//         return `${this.firstName} is ${this.age} years old`;
//     };
//     user.is18= function(){
//         return this.age>=18;
//     }
//     return user;
// }
// const user1= createUser("priyanshu","bhardwaj","priyanhsubhardwaj@gmail.com",18,"abhimanyu Nagar");
// console.log(user1);
// const is18=user1.is18();
// console.log(is18);
// const about=user1.about();//to avoid these methods using one by one we will see next code snippet
// console.log(about);


// const userMethods={
//         about:function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//         is18:function(){
//         return this.age>=18;
//     }
// }
// function createUser(firstName,lastName,email,age,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about=userMethods.about;
//     user.is18=userMethods.is18;
//     return user;
// }
// const user1= createUser("priyanshu","bhardwaj","priyanhsubhardwaj@gmail.com",18,"abhimanyu Nagar");
// const user2= createUser("anshu","bhardwaj","priyanhsubhardwaj@gmail.com",18," Nagar");
// const user3= createUser("iyanshu","bhardwaj","priyanhsubhardwaj@gmail.com",18,"abhimanyu");
// console.log(user1.about())
// console.log(user3.about())


// const userMethods={
//     about:function(){
//     return `${this.firstName} is ${this.age} years old`;
// },
//     is18:function(){
//     return this.age>=18;
// }
// }
// function createUser(firstName,lastName,email,age,address){
// const user=Object.create(userMethods);//it gives the proto which helps to establish relations b/w two objects
// user.firstName=firstName;
// user.lastName=lastName;
// user.email=email;
// user.age=age;
// user.address=address;

// return user;
// }
// const user1= createUser("priyanshu","bhardwaj","priyanhsubhardwaj@gmail.com",18,"abhimanyu Nagar");
// const user2= createUser("anshu","bhardwaj","priyanhsubhardwaj@gmail.com",18," Nagar");
// const user3= createUser("iyanshu","bhardwaj","priyanhsubhardwaj@gmail.com",18,"abhimanyu");
// console.log(user1)
// console.log(user1.about())
// console.log(user3.about())