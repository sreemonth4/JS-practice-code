let a=[20,30,40,50,70,30,23,40]

let find=a.find(function(n){
    return n>30
})
console.log(find)

let findindex=a.findIndex(function(n){
    return n==30
})

console.log("index at :"+findindex)

