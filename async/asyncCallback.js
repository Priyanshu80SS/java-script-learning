//callbacks , // callback hell , pyramid of doom
//asynchronous programming

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

//callbackhell

// setTimeout(() => {
//     heading1.textContent="one";
//     heading1.style.color="violet";

//     setTimeout(() => {
//     heading2.textContent="two";
//     heading2.style.color="purple";

//     setTimeout(() => {
//         heading3.textContent="three";
//         heading3.style.color="red";

//     setTimeout(() => {
//             heading4.textContent="four";
//             heading4.style.color="pink";

//         setTimeout(() => {
//                 heading5.textContent="five";
//                 heading5.style.color="green";

//              setTimeout(() => {
//                     heading6.textContent="six";
//                     heading6.style.color="blue";

//                 setTimeout(() => {
//                         heading7.textContent="seven";
//                         heading7.style.color="brown";
//                          }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//        }, 1000);
//    }, 1000);
// }, 1000);

//setTimeout using Function

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element,text,color,time,onsuccessCallBck,onfailureCallBck){
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            if (onsuccessCallBck) {
                onsuccessCallBck();
            }
        }else{
             if (onfailureCallBck) {
                onfailureCallBck();
             }
        }
    }, time);
}

//call back hell
changeText(heading1,"one","violet",2000,()=>{
  changeText(heading2,"two","purple",1000,()=>{
    changeText(heading3,"three","green",1000,()=>{
        changeText(heading4,"four","red",1000,()=>{
            changeText(heading5,"five","yellow",1000,()=>{
                changeText(heading6,"six","blue",1000,()=>{
                    changeText(heading7,"seven","brown",1000,()=>{

                    },()=>{console.log("heading 7  doesnot exceed")})
                },()=>{console.log("heading 6  doesnot exceed")})
            },()=>{console.log("heading 5  doesnot exceed")})
        },()=>{console.log("heading 4  doesnot exceed")})
    },()=>{console.log("heading 3  doesnot exceed")})
  },()=>{console.log("heading 2  doesnot exceed")})
},()=>{console.log("heading 1  doesnot exceed")})



