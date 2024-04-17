class Person1{
    name:any;

    //we can define only one constructor in a class.
    constructor(name:string){
        this.name = name;
        console.log(this.name + " from constructor");
    }

    //we can define static methods, which can be called without instantiating a class.
    static staticMethod(){
        console.log("from Static Method");
    }

    //we can define prototype methods.
    greetPerson(){
        console.log("Hi " + this.name);
    }
}

//instantiating class and calling constructor method.
var p1 = new Person1("Arshad");
//calling static method.
Person1.staticMethod();
//calling prototype method.
p1.greetPerson();
