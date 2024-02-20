class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        console.log(this.name+" is eating")
    }
}

class teacher extends person{
    constructor(name,age,_students_count){
        super(name,age);
        this.students_count=_students_count;
       
    }
    food(){
        super.eat();
    }
}

class student extends person{
    constructor(name,age,cgpa){
        super(name,age);
        this.cgpa=cgpa;
       
    }
}

let person1=new person("sree",20);

console.log(person1);

let teacher1=new teacher("sreemonth",20,10);

console.log(teacher1);

let student1=new student("raju",20,3.5);

console.log(student1);

teacher1.food();
student1.eat 

