const allBtn = document.querySelectorAll(".mybuttons button");
console.log(allBtn);

// for(let btn of allBtn){
//     btn.addEventListener("click",function(e){
//        e.target.style.backgroundColor = "yellow";
//      e.target.style.color = " red"
//     })
// }


allBtn.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = " red"
    })
})