// setTimeout is a Asynchronous function that  takes a number of milliseconds and returns a promise that will be fulfilled when the timeout expires
//  rejected when the timeout expires with a rejection reason of the specified type and the rejection reason 
//syntax is: setTimeout(callback,timeout)

console.log('Before')

function greet(){
    console.log("Hello! this is sree");
}

setTimeout(greet,3000);

console.log('After')