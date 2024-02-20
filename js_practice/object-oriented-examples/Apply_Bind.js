// call , apply, bind functions
let person={
    firstname: 'John',

    lastname: 'Doe',
    age: 20,



}

let printDetails = function(city, state){


        console.log(this.firstname + " " + this.lastname + " lives in " + city + ", " + state);
}

let person2={
    firstname: 'green',
    lastname: 'paker',
    age: 20,
    
}

//call function
printDetails.call(person, 'Newyork' ,'At_USA')

//applY FUNCTION
printDetails.apply(person2, ['LONDON' ,'At_UK'])

//bind function
let myFun=printDetails.bind(person2, 'TUNI','ANDHRA')
console.log(myFun);
myFun()