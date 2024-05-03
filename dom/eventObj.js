// const firstName = document.querySelector("#one");
// firstName.addEventListener("click",function(e){
//     console.log(e);
// })


const allBtn = document.querySelectorAll('.mybuttons button');
for(let btn of allBtn){
        btn.addEventListener("click",(e)=>{
           console.log(e.target);
        })
    }