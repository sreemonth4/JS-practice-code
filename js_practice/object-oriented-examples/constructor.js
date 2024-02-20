//constructor function for  creating    a new instance of the class instance with   the given   properties  and methods and properties object as arguments */

function Person(name,age){
    this.name=name;
    this.age=age;

    this.eat=function(){
        console.log(this.name+" is eating")
    }
    this.sleep=function(){
        console.log(this.name+" is sleeping")
    }
}

let myObj=new Person("sree",20)

console.log(myObj)

 let myObj2=new Person("sreemonth",20)
 console.log(myObj2)
 myObj2.eat()
 myObj2.sleep()