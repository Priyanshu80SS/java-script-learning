// console.log("script start");
// setInterval(()=>{
//     console.log(Math.random());
// },10000 );
// console.log("script end"); 


// const body = document.querySelector("body");
// const btn = document.getElementById("btn");

// btn.addEventListener('click',(event)=>{
//     setInterval(()=>{
//        event.target.body.style.backgroundColor=colorGenerator();
//     },1000);
// })

// function colorGenerator(){
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
    
//     console.log(`${red}${green}${blue}`)
// }

// const body = document.querySelector("body");
// const btn = document.getElementById("btn");
// let intervalId = null; // Initialize intervalId outside the event listener

// btn.addEventListener('click', (event) => {
//   if (intervalId === null) {
//     intervalId = setInterval(() => {
//      event.target. body.style.backgroundColor = colorGenerator();
//     }, 1000);
//   } else {
//     clearInterval(intervalId); // Clear the interval if it's already running
//     intervalId = null; // Reset intervalId
//   }
// });

// function colorGenerator() {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
  
//   return `rgb(${red}, ${green}, ${blue})`; // Return a valid CSS color string
// }


