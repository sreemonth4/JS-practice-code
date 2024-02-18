let num=[1,3,4,8,20]

let add=num.reduce(function(acc, val) {
    let updated=acc+val;
    return updated;
},0)
console.log("ADDITION IS :"+add)

//let num=[1,3,4,8,20]

let MUL=num.reduce(function(acc, val) {
    let updated=acc*val;
    return updated;
},1)
console.log("MUL IS :"+MUL)