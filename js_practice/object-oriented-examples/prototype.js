function person(_name,_age){
    this.name=_name;
    this.age=_age;
}
person.prototype.getNameANDAge=function(){
    console.log(this.name,this.age)
}

let myObj=new person("sree",20);

myObj.getNameANDAge()

console.log(myObj.getNameANDAge);
