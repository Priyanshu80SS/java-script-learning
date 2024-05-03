
//get multiple elements using getElement by class name

// const navItem = document.getElementsByClassName("nav-item");//html collection
// // console.log(navItem)
// // console.log(navItem[0]);

// let navItem = document.getElementsByTagName("a");

// for(let i=0;i<navItem.length;i++){
//      let navItem = navItem[i];
//      navItem.style.backgroundColor = "#fff";

// }

//get multiple elements using getElement by querySelectorAll

const navItem=document.querySelectorAll(".nav-item");
// console.log(navItem[1]);

for(let i=0;i<navItem.length;i++){
    console.log(navItem[i])

}
