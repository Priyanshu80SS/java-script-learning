
//const grandparent=document.querySelector(".grandParent");
// const parent=document.querySelector(".parent");
// const childBox=document.querySelector(".child");


//-----Event capturing

// childBox.addEventListener("click",function(){
//     console.log("capturing !!! child")
// },true);
// parent.addEventListener("click",function(){
//     console.log("capturing !!! parent")
// },true)
// grandparent.addEventListener("click",function(){
//     console.log("capturing !!! grandParent")
// },true)
// document.body.addEventListener("click",function(){
//     console.log("capturing !!! body")
// },true)
 
//event bubbling
// childBox.addEventListener("click",function(){
//     console.log("bubbling child")
// });
// parent.addEventListener("click",function(){
//     console.log("bubbling parent")
// })
// grandparent.addEventListener("click",function(){
//     console.log("bubbling grandParent")
// })
// document.body.addEventListener("click",function(){
//     console.log("bubbling body")
// })
 






//Evenet delegation

const grandparent=document.querySelector(".grandParent");
 grandparent.addEventListener("click",(e)=>{
   
    console.log(e.target.textContent);
 })