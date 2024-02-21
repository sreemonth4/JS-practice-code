// let myPromise=new Promise(function(resolve,reject){
//     const a=5
//     const b=5
//     setTimeout(()=>{
//         if(a==b){
//             resolve('same result')
//         }
//         else{
//             reject('not same')
//         }
//     },1000)
// })

// //fulfilled state
// myPromise.then(function(result){
//     console.log(result)
// })

// //rejected state
// myPromise.catch(function(FailedResult){
//     console.log(FailedResult)
// })

const Headers = () => {
    console.log("headers");
};
Headers()