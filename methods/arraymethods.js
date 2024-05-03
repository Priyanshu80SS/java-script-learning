//forEach method

// const numbers=[3,4,5,6,7];

// const myNumbers=numbers.forEach(function(number,index){
//     console.log(`index is${index} and number is ${number}`);
// })


const users=[
    {firstName:"priyanhsu",age:23},
    {firstName:"priy",age:23},
    {firstName:"priya",age:23},
    {firstName:"p",age:23}
]


// const Name=users.forEach(function(firstName){
//     console.log(Name.firstName);
// })

// users.forEach(function(name){
//     console.log(name.firstName);
// })

// for(let name of users){
//     console.log(name.firstName);
// }

const Name=users.forEach(firstName=>{
    console.log(firstName.firstName) 
})
