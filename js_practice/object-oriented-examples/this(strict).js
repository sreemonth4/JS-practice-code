'use strict'

function display(){
    console.log(this)
}
display() //undefined

// let myObj={
//     name:"sree",
//     age:20,
//     myFn1:function(){
//         console.log(this.name)
//     }
// }
// myObj.myFn1() //answers

// let myObj={
//     name:"sree",
//     age:20,
//     myFn1:function()
//     {
//         function myfn3(){
//             console.log(this.name)
//         }

//         myfn3()
//     }
    
// }
// myObj.myFn1() //undefined