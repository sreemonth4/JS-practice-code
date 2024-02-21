// goto this websiite and understand the micro task queue  link -> https://www.jsv9000.app/


function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink=='Apple_juice'){
            resolve('order for Apple juice placed')
        }
        else{
            reject('other orders Rejected')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is been processed')
        resolve(`${order} and is now served`)
    })
}

async function servedOrder(){
    try {
        let orderplaced=await placeOrder('coffee')
        console.log(orderplaced)
        let orderprocessed=await processOrder(orderplaced)
        console.log(orderprocessed)

    } catch (error) {
        console.error(error)
    }
}

servedOrder()