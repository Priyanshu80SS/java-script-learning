//object
//arrays arevgood but not sufficient
//for real world data
//objectstore key value pairs
//object dont have index

//how to create objects

// const person = {
//     name:"priyanshu",
//     age:22,
//     hobbies: ["guitar","sleeping","listening music"]
// };
// console.log(person);
//console.log(typeof person);
//how to acess data from object
// console.log(person.name);
//console.log(person["name"]);
// console.log(person.age);
//console.log(person.hobbies);

//how to add key value pair to objects
// person.gender = "male";
// console.log(person);

// person["gender"] = "male";
//  console.log(person);


//difference between dot and bracket notation.
// const person = {
//     name:"priyanshu",
//     age:22,
//     "person hobbies": ["guitar","sleeping","listening music"]
// };
//console.log(person["person hobbies"]);
 
//const key="email";
// const person = {
//     name:"priyanshu",
//     age:22,
//     "person hobbies": ["guitar","sleeping","listening music"]
// };
//person.key="priyanshubhardwaj@gmail.com";
//person[key]="priyanshubhardwaj099@gmail.com";
//console.log(person);

//for in loop in object
const person = {
    name:"priyanshu",
    age:22,
    "person hobbies": ["guitar","sleeping","listening music"]
};
//for(let key in person){
    //console.log(person[key]);
   // console.log(`${key} : ${person[key]}`);
   //   console.log(key ,":", person[key]);
//}

// console.log(Object.keys(person));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }


//computed properties
// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1= "myvalue1";
// const value2= "myvalue2";

// const obj = {
//         [key1] : value1,
//         [key2] : value2
// }
// console.log(obj);


//spread operator in array case
// const array1=[1,2,3];
// const array2=[4,5,6];

// const newArray = [...array1,...array2,89,69];
// const newArray = [..."123456789"];
// console.log(newArray);


//spread operator in object case
// const obj1={
//     key1:"value1",
//     key2:"value2"
// };
// const obj2={
//     key3:"value3",
//     key4:"value4"
// };
// const newObject={...obj1,...obj2};
// console.log(newObject);

//destructuring in object case
// const band={
//     bandNmae : " led zeppelin ",
//     famousSong:"stairway to heaven",
//  };
// let bandName = band.bandName;
// let famousSong = band.famousSong;
// bandName = "queen";
// console.log(bandName,famousSong);
//shortcut
// const{bandNmae,famousSong}=band;
// console.log(bandNmae);


//object inside array
//very usefull in real world applications
// const users = [
//     {userId:1,firstName:'priyanshu',gender:'male'},
//     {userId:2,firstName:'bhardwaj',gender:'male'},
//     {userId:3,firstName:'smita',gender:'female'},
// ]
// for(let user log(user.firstName);
// }

//nested destructuring
const users = [
    {userId:1,firstName:'priyanshu',gender:'male'},
    {userId:2,firstName:'bhardwaj',gender:'male'},
    {userId:3,firstName:'smita',gender:'female'},
]
const [{firstName}, ,{gender}] = users;
const [{firstName:user1firstName,userId}, ,{gender:user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);