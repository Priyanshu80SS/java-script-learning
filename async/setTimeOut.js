//synchronous programming vs asynchronous programming

//synchronous programming 

// console.log("script strat");
// for(let i=1;i<1000;i++){
//     console.log("inside for loop");
// }

// console.log("script end");


// asynchronous programming
//SetTime Out

// console.log("script start")

// setTimeout(()=>{
//     console.log("inside time out");
// },1000)
// for(let i=0;i<=1000;i++){
//     console.log("......")
// }
// console.log("script end")


// console.log("script start")

// const id=setTimeout(()=>{
//     console.log("inside time out");
// },1000)
// for(let i=0;i<=1000;i++){
//     console.log("......")
// }
// console.log("setTimeout id is ",id);

// console.log("script end")



// clearing time out 
console.log("script start")

const id=setTimeout(()=>{
    console.log("inside time out");
},1000)
for(let i=0;i<=1000;i++){
    console.log("......")
}
console.log("setTimeout id is ",id);
console.log("clearing time out")
clearTimeout(id);
console.log("script end")