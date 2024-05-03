// const first_btn = document.querySelector("#one");
// first_btn.addEventListener("click",function(){
//     console.log("on click");
// })


const allButtons=document.querySelectorAll(".mybuttons button ")
// console.log(allButtons);

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this);
//     })
// }


for(let i=0;i<=allButtons.length;i++){
    allButtons[i].addEventListener("click",function(){
        console.log(this);
    });
}