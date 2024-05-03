//intro to event
//click
//event add krne ke 3 tarike

// const allBtn = document.querySelectorAll('.mybuttons button');


// for(let btn of allBtn){
//     btn.addEventListener("click",function(){
//         // console.log("you clicked me ");
//         //console.log(this);
//         console.log(this.textContent);
//     })
// }


// const allBtn = document.querySelectorAll(' button');

// for(let i=0; i<allBtn.length;i++){
//     allBtn[i].addEventListener("click",function(){
//         console.log(this);
//     })
// }


const allBtn = document.querySelectorAll('.mybuttons button');
allBtn.forEach(function(btn){
    btn.addEventListener("click",function(){
                // console.log("you clicked me ");
                console.log(this);
               // console.log(this.textContent);
            });
})