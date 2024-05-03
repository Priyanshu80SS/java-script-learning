//promises
//represents a fututre value

// console.log("script start")
// const bucket = ['coffee','chips','vegetables','rice'];

// //produce promise
// const friedRicePromise=new Promise((resolved,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
//      resolved("fried rice")   
//     }else{
//         reject("could'nt do it")
//     }
// });

// //consume
// //how to consume
// friedRicePromise.then(
//     (myfriedrice)=>{
//     console.log("let eat",myfriedrice);
// }
// ).catch((error)=>{
//     console.log("some thing is missing",error);
// })

// for(let i=0;i<=100;i++){
//     console.log(Math.random(),i);
// }

// console.log("script end");






//function returing promises

// function ricePromise(){
//     const bucket = ['coffee','chips','salt','vegetables','rice'];
//     return new Promise((resolve,reject)=>{
//         if(bucket.includes("vegetables")&&bucket.includes("salt")&& bucket.includes("rice")){
//             resolve({value:"friedrice"})
//         }else{
//             reject("could not do it")
//         }
//     })
// }  


// ricePromise().then((myfriedRice)=>{
//     console.log("lets eat",myfriedRice)
// }).catch((error)=>{
//     console.log(error);
// })



//i want to resolve  / reject promises after 2 seconds


// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value=false;
//         setTimeout(()=>{
//           if(value){
//             resolve();
//           }else{
//             reject();
//           }
//         },2000)
//     })
// }

// myPromise()
// .then(()=>{console.log("resolved")})
// .catch(()=>{console.log("reject")})


//promise.resolve
//promise.chaining 

// const myPromise=Promise.resolve(5);
// myPromise.then(value=>{
//     console.log(value);
// })



//then()---->always return promise 

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//           resolve("foo");
//     })
// }

// myPromise()
// .then((value)=>{
//     console.log(value);
//     value+="bar"
//     return(value)
// })

// .then((value)=>{
//     console.log(value);
// })




const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function myPromise(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolve();
            }else{
                reject("element not found");
            }
        },time)
    })
}

myPromise(heading1,"one","red",1000)
.then(()=>{
    return myPromise(heading2,"two","green",2000)
})
.then(()=>{
    return myPromise(heading3,"three","purple",1000)
})
.then(()=>{
    return myPromise(heading4,"four","yellow",1000)
})
.then(()=>{
    return myPromise(heading5,"five","blue",1000)
})
.then(()=>{
    return myPromise(heading6,"six","orange",1000)
})
.then(()=>{
    return myPromise(heading7,"seven","pink",1000)
})
.catch((error)=>{
    alert(error);
})