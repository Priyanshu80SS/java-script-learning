// sort method
// const numbers = [9,5,1200,3000];
// numbers.sort((a,b)=>{
//        return a-b;
// });
// console.log(numbers);

//price lowToHigh to HightoLow

// const products=[
//     {profuctId:1,productName:"p1",price:300},
//     {profuctId:2,productName:"p2",price:600},
//     {profuctId:3,productName:"p3",price:500},
//     {profuctId:4,productName:"p4",price:800},
//     {profuctId:5,productName:"p5",price:700},
//     {profuctId:6,productName:"p6",price:200},
// ]
//lowtoHigh
// const LowToHigh=products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// });
//hightoLow
// const highTolow=products.slice(0).sort((a,b)=>{
//     return b.price-a.price
// });
//console.log(LowToHigh);
//consol.log(highTolow);


//find method

// const array=["Hello","cat","dog","lion"];

// function isLength3(string){
//     return string.length ===3;
// }
// const ans=array.find(isLength3);
// console.log(ans);

//realistic example
// const users=[
//     {userId:1,userName:"priyanhsu"},
//     {userId:2,userName:"priy"},
//     {userId:3,userName:"priya"},
//     {userId:4,userName:"priyan"},
//     {userId:5,userName:"priyanshu"},
// ];
// const myUser=users.find((user)=>user.userId===3);
// console.log(myUser);

//every method
// const numbers=[2,4,6,8,10];
// const ans=numbers.every((number)=>number%2===0);
// console.log(ans);

//real example
// const products=[
//     {profuctId:1,productName:"p1",price:300},
//     {profuctId:2,productName:"p2",price:600},
//     {profuctId:3,productName:"p3",price:500}
//     ]

// const ans=products.every((cartInfo)=>cartInfo.price<1000);    
// console.log(ans);


//some method
// const numbers = [3,5,8,9];
//kya ek vi number esa hai jo even hai 
//true
// const ans=numbers.some((number)=>number%2===0);
// console.log(ans);


//real example
// const products=[
//     {profuctId:1,productName:"p1",price:300},
//     {profuctId:2,productName:"p2",price:600},
//     {profuctId:3,productName:"p3",price:2000}
//     ]

//     const ans=products.some((priceInfo)=>priceInfo.price>=1000);
//     console.log(ans);


//fill method 
//value,start,end

// const myArray=new Array(10).fill(0);
// console.log(myArray);

// const myArray=[1,2,3,4,5,6,7,8,9];
// myArray.fill(0,2,5)
// console.log(myArray)

//splice method
//start,delete,insert
//const myArray = ['item1','item2','item3'];
//delete
//myArray.splice(1,1,);
//insert
// myArray.splice(1,0,"insert Item")
//insert and delete
// myArray.splice(1,2,"inserted Item1","inserted Item2")
// console.log(myArray)

//iterables
//jispe hum for of loop lga sakte hain
//string,array are iterable

// const firstName="priyanshu";
// for(let char of firstName ){
//     console.log(char);
// }


// const items = ['item1','item2','item3'];
// for(let item of items ){
//         console.log(item);
//     }


// const users={'key1':'value1','key2':'value2'}
// for(let char of users){
//         console.log(user);
//     }


//array like object
//jinke pas length property hoti hai
//aur jinko hum index se access lar sakte hain 
//example :-string

const firstName="priyanshu";
console.log(firstName.length);
console.log(firstName[2]);











