"use strict";
var Person1 = /** @class */ (function () {
    //we can define only one constructor in a class.
    function Person1(name) {
        this.name = name;
        console.log(this.name + " from constructor");
    }
    //we can define static methods, which can be called without instantiating a class.
    Person1.staticMethod = function () {
        console.log("from Static Method");
    };
    //we can define prototype methods.
    Person1.prototype.greetPerson = function () {
        console.log("Hi " + this.name);
    };
    return Person1;
}());
//instantiating class and calling constructor method.
var p1 = new Person1("Arshad");
//calling static method.
Person1.staticMethod();
//calling prototype method.
p1.greetPerson();
//# sourceMappingURL=demo1.js.map