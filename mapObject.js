//Maps
//map is an iterable

//store data in ordered fashion

//store key value pair(like object)
//duplicate keys are not allowed like objects

//different between maps and objects

//objects can only have string or symbol
//as key

//in maps you can use anything as key
//like array ,number,string

//object literal
//key ->string
//key ->symbol

// const person={
//     firstName:"priyanshu",
//     age:7,
//     1:"one"
// };
// console.log(person.firstName);
// console.log(person["firstName"])
// for(let key in person){
//     console.log(typeof key);
// }


// const person=new Map();
// person.set('firstName','priyanshu')
// person.set('age',45)
// person.set(1,'one')
// console.log(person);
// console.log(person.get(1))
// for(let key of person.keys()){
//     console.log(key,typeof key)
// }

// for(let [key,value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key,value);
// }

// const person = new Map([['firstName','priyanshu'],['age',24]])
// console.log(person);

// const person1={
//     id:1,
//     firstName:"priyanshu"
// }
// const person2={
//     id:2,
//     firstName:"anshu"
// }

// const userInfo = new Map();
// userInfo.set(person1,{age:8,gender:"male"});
// userInfo.set(person1,{age:9,gender:"female"});
// // console.log(userInfo);
// console.log(person1.id);
// console.log(userInfo.get(person1).gender);
// console.log(userInfo.get(person2).gender);



//clone using object.assign
//memory
// const obj = {
//     key1:"value1",
//     key2:"valie2"
// }

// const obj2=obj;
// obj.key3="value3";
// console.log(obj);
// console.log(obj2);

// const obj2=Object.assign({},obj);
// obj.key3="value3";
// console.log(obj);
// console.log(obj2);


//Optional chaining
const user = {
    firstName:'priyanshu',
    // address:{houseNumber:'123'}
}
console.log(user.firstName);
// console.log(user.address.houseNumber);
console.log(user.address?.houseNumber);