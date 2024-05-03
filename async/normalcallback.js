//understand callback


// function myFunc(callback){
//     console.log("function is doing some task 1")
//     callback();
// }

// myFunc(()=>{
//     console.log("function is doing some task 2")
// });


// function gettwoNumbers(n1,n2,callback){
//     if(typeof n1==="number" && typeof n2==="number"){
//         callback(n1,n2)
//     }else{
//         console.log("wrong data type")
//     }
    
    
// }

// function addTwoNUmbers(num1,num2){
//       console.log(num1+num2);
      
// }

// gettwoNumbers(4,5,addTwoNUmbers);




function gettwoNumbers(n1,n2,onsuccess,onfailiure){
    if(typeof n1==="number" && typeof n2==="number"){
        onsuccess(n1,n2)
    }else{
        onfailiure();
    }    
}

function addTwoNUmbers(num1,num2){
      console.log(num1+num2);
      
}

function onFailure(){
    console.log("wrong datatype");
    console.log("please pass number only");
}


gettwoNumbers(4,5,addTwoNUmbers,onFailure) 






// function gettwoNumbers(n1,n2,onsuccess,onfailiure){
//     if(typeof n1==="number" && typeof n2==="number"){
//         onsuccess(n1,n2)
//     }else{
//         onfailiure();
//     }    
// }

// gettwoNumbers("4",5,(num1,num2)=>{
//     console.log(num1+num2);
    
// },()=>{
//     console.log("wrong datatype");
//     console.log("please pass number only");
// });   