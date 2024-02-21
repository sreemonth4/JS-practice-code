const fs=require('fs')

console.log('First line');

let data=fs.readFileSync('f1.txt')

console.log('data in file ->'+data)

console.log('last line')

//synchronously

