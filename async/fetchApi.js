//fetch ---->returns promise 

const URL =  "https://jsonplaceholder.typicode.com/postss";

// const whatisthis = fetch(URL)
// console.log(whatisthis);  --->returns promise 

fetch(URL)
    .then(response =>{
       return response.json()
    })
    .then((data)=>{
     console.log(data);
    })
    .catch(error=>{
      console.log("inside catch");
      console.log(error);
    })