// console.log("Starting")

// console.log(this)

// //by using this keyword in browser we will get window properties as output

// function getWindowProperties(){
//     console.log(this)
// }

// getWindowProperties()


// let myObj={
//     name:"sree",
//     age:20,
//     myFn1:function(){
//         console.log(this.name)
//     }
// }
// myObj.myFn1() //answers


let myObj={
    name:"sree",
    age:20,
    myFn1:function()
    {
        function myfn3(){
            console.log(this.name)
        }

        myfn3()
    }
    
}
myObj.myFn1() //undefined