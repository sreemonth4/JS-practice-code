function person(_name,_age){
    var name=_name;
    var age=_age;


    this.getName=function(){
        return name;
    }
    this.getAge=function(){
        return age;
    }
}

let myObj=new person("sree",20);

console.log(myObj.getAge(),myObj.getName(),myObj.person);