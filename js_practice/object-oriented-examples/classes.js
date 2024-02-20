class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        console.log(this.name+" is eating")
    }
    sleep(){
        console.log(this.name+" is sleeping")
    }
}

let myObj=new person("sree",20)

console.log(myObj)
myObj.eat()
myObj.sleep()


