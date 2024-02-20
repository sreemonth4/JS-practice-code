class Animal{
    
    sound(){
        console.log("Animal sound")
    }
}

class Dog{
    sound(){
        console.log("Dog sound")
    }
}

class Cat{
    sound(){
        console.log("Cat sound")
    }
}

let  animal=new Animal();
let dog=new Dog();

let cat=new Cat();

dog.sound();

cat.sound();

animal.sound();
