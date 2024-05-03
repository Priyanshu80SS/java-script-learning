// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// // console.log(xhr);

// //firstStep

// xhr.open("GET",URL);

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);

//     if(xhr.readyState === 4){
//         // console.log(xhr.response);
//         // console.log(typeof xhr.response);it is in string
//         //we have to covert it in js object

//         const response = xhr.response;
//         const data=JSON.parse(response);
//         //console.log(data);
//          console.log(typeof data);// converted in object
//     }
// }

// xhr.send()
 



const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET",URL);

xhr.onload = function(){ //by using onload readystate will be 4 then there is no use of if condition 
   // console.log(xhr.readyState);
   const response = xhr.response;
   const data = JSON.parse(response);
   console.log(data);
}

xhr.send();