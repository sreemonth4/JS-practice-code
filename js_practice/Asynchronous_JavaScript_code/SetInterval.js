function greet(){
    console.log("Hello! this is sree");
}

let timer=setInterval(greet,1000);

setTimeout(function(){
    clearInterval(timer)
},5000)