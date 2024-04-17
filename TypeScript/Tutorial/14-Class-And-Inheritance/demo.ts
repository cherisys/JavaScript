class Person {}
var p = new Person();
console.log(typeof p);
//when we log type of p, it gives us object.
console.log(typeof Person);
//when we log type of Person, it gives us funciton.
//so classes are nothing but special type of functions.

//unlike functions, classes are not hoiseted.

//we can call a function before its declaration, without error.
employee();
function employee() {}
employee();

//we cannot instantitate a class before declaration.
//let e = new Employee(); // this statement gives error.
class Employee{
    greet() {}
}
let e1 = new Employee();
console.log(e1.greet === Employee.prototype.greet); //gives true.
//so adding a method to the class is same as adding a method to the prototype object.
//class syntax is not introducing a new object model to javascript.
//but its only a syntax to configure protoype based inheritance.


