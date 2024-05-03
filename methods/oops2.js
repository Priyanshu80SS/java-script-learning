//--------------prototype------------
//-------function can only use prototype object  ---------
//prototype is differ from proto


// function hello(){
//     console.log("hello world");
// }

// hello.prototype.abc="abc";
// hello.prototype.sing=function(){
//     return "ooo laaa laaa";
// };
// console.log(hello.prototype.sing());









// const userMethods={
//     about:function(){
//     return `${this.firstName} is ${this.age} years old`;
// },
//     is18:function(){
//     return this.age>=18;
// }
// }


// function createUser(firstName,lastName,email,age,address){
//     const this=Object.create(createUser.prototype);//it gives the prototype which helps to use objects inside function
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.email=email;
//     this.age=age;
//     this.address=address;
    
//     return this;
//     }
//     createUser.prototype.about=function(){
//         return `${this.firstName} is ${this.age} years old`;
//     };
//     createUser.prototype.is18=function(){
//         return this.age>=18;
//     };
//     const user1= createUser("priyanshu","bhardwaj","priyanhsubhardwaj@gmail.com",18,"abhimanyu Nagar");
//     const user2= createUser("anshu","bhardwaj","priyanhsubhardwaj@gmail.com",18," Nagar");
//     const user3= createUser("iyanshu","bhardwaj","priyanhsubhardwaj@gmail.com",18,"abhimanyu");
//     console.log(user1)
//     console.log(user1.is18())
//     console.log(user3.about())




//-------new keyword------------
//new keyword doing three works 
//1--empety object this={}
//2--return this
//3--avoids prtotype implementing mannually

// function createUser(firstName,age){
//     this.firstName=firstName;
//     this.age=age;
// }
// createUser.prototype.about=function(){
//     console.log(this.firstName,this.age);
// }
// const user1=new createUser("priyanhsu",6);
// console.log(user1);
// user1.about();


//----improvisation in the code using new keyword

// function createUser(firstName,lastName,email,age,address){
    
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.email=email;
//     this.age=age;
//     this.address=address;
    
//     return this;
//     }
//      createUser.prototype.about=function(){
//         return `${this.firstName} is ${this.age} years old`;
//     };
//      createUser.prototype.is18=function(){
//         return this.age>=18;
//     };
//     const user1=new createUser("priyanshu","bhardwaj","priyanhsubhardwaj@gmail.com",18,"abhimanyu Nagar");
//     const user2=new createUser("anshu","bhardwaj","priyanhsubhardwaj@gmail.com",18," Nagar");
//     const user3= new createUser("iyanshu","bhardwaj","priyanhsubhardwaj@gmail.com",18,"abhimanyu");
//     console.log(user1)
//     console.log(user1.is18())
//     console.log(user3.about())



//-----------class-------------
//----improvisation in the code using class keyword

// class createUser{
//     constructor(firstName,lastName,email,age,address){
//             this.firstName=firstName;
//             this.lastName=lastName;
//             this.email=email;
//             this.age=age;
//             this.address=address;
//     }
//     about(){ 
//         return `${this.firstName} is ${this.age} years old`
//     }
//     is18(){
//         return this.age>=18;
//     }
//      func(a) {
//              console.log(a);
//     }
// }

//     const user1=new createUser("priyanshu","bhardwaj","priyanhsubhardwaj@gmail.com",18,"abhimanyu Nagar");
//     const user2=new createUser("anshu","bhardwaj","priyanhsubhardwaj@gmail.com",18," Nagar");
//     const user3= new createUser("iyanshu","bhardwaj","priyanhsubhardwaj@gmail.com",18,"abhimanyu");
//     console.log(user1)
//     console.log(user1.is18())

//     //user1 (how to check protoype)
//     console.log(Object.getPrototypeOf(user1));
    
//     user1.func("priyanhsu");



//use of super keyword

// class Animal{
//     constructor(name , age){
//         this.name=name;
//         this.age=age;

//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isCute(){ 
//         return this.age<=1;
//     }
// }
// // const animal= Animal("tommy",8);
// // console.log(animal)

// class Dog extends Animal{
//        constructor(name,age,speed){
//         super(name,age)
//         this.speed=speed;
//        }
//        run(){
//         return `${this.name} is running at speed of ${this.speed}kmph`;
//        }
// }
// const dog=new Dog("tommy",8,45)
// console.log(dog)
// console.log(dog.run());
// console.log(dog.eat());




//getters and setters

//getters ----helps in methods to use as properties by using (get)
// class Person{
//     constructor(firstName,LastName,age){
//         this.firstName=firstName;
//         this.LastName=LastName;
//         this.age=age;
//     }
//    get fullName(){
//         return `${this.firstName}  ${this.LastName}`;
//     }
//     set fullName(){
        
//     }
// }

// const person1=new Person("priyanhsu","bhardwaj",18);
// console.log(person1.fullName);



const users =[
    {firstName:"pri",age:23},
    {firstName:"priyan",age:23},
    {firstName:"pr",age:23},
    {firstName:"priyanshu",age:23},
    
]
const userNames=users.map((user)=>{
    return user.firstName;
})
console.log(userNames);