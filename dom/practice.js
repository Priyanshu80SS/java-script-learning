//DOM
// Document Object Model
//overview
//how to use
//deep study



//select element using get element by id 
// console.log(document.getElementById('Email'));



// select element using query selector
// console.log(document.querySelector('#Email')); ---to select element from id using query selector
// console.log(document.querySelector('.todo-section'));---to select element from class using query selector


//change text
//textContent and innerText
// const mainheading = document.getElementById('main-heading');
// console.log(mainheading.textContent);
// //to change
// mainheading.textContent = " this is something else"
// console.log(mainheading.textContent);



//change the styles of elements
const mainheading = document.querySlector('div.headline h2');
//console.log(mainheading.style);
mainheading.style.color= " blue";
