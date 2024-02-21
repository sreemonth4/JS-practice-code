const fs=require('fs')

console.log('First line');

fs.readFile('f1.txt',cb1);

function cb1(err, data) {
    if(err){
        console.log(err);
    }
    console.log('data in file 1 ->'+data);
    fs.readFile('f2.txt',cb2);
}


function cb2(err, data) {
    if(err){
        console.log(err);
    }
    console.log('data in file 2 ->'+data);
    fs.readFile('f3.txt',cb3);
}


function cb3(err, data) {
    if(err){
        console.log(err);
    }
    console.log('data in file 3 ->'+data);
}


console.log('last line');