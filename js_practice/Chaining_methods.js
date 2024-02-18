let numbers = [100, 300, -455, 9, 34, -33, 52, -3, -2, 83];

let p = numbers.filter(function(n) {
    return n > 0;
}).reduce(function(add,value) {
    let addition=add+value;
    return addition // simply return the boolean value
   // console.log("addition is :"+addition);
});

console.log("addition is :"+p);

