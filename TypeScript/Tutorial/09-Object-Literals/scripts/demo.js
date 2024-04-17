"use strict";
var _a;
var firstName = "Mohd";
var lastName = "Arshad";
var person = {
    firstName: firstName,
    lastName: lastName
};
console.log(person);
//In ES2015, if object literal property name is same as variable name. 
//then we can reduce that notation only to property name.
var person1 = { firstName: firstName, lastName: lastName };
console.log(person1);
//We can also use short-notation while returning an object from function.
//(without using colon and assignment)
var CreatePerson = function (firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    return { firstName: firstName, lastName: lastName, fullName: fullName };
};
var personFn = CreatePerson("Mohd", "Asjad");
console.log(personFn.firstName);
console.log(personFn.lastName);
console.log(personFn.fullName);
//short-notation for functions in objects.
var CreatePerson1 = function (firstName, lastName, age) {
    var fullName = firstName + ' ' + lastName;
    return { firstName: firstName, lastName: lastName, fullName: fullName,
        //** Regular way
        // isSenior:function(){
        //         return age>60;
        // }
        //** First Shorcut way; eleminated function keyword
        isSenior: function () {
            return age > 60;
        }
        //** Second Shorcut way; using arrow function
        //isSenior : () => age>60
    };
};
var personFn1 = CreatePerson1("Mohd", "Yaseen", 50);
console.log(personFn1.fullName);
console.log("Senior:", personFn1.isSenior());
//We can use space in property name. 
//This kind of property name must be enclosed in quotes.
//This kind of property name cannot be used with dot-notation while accessing values.
var person2 = { firstName: firstName, lastName: lastName, "full name": "Mohd Arshad" };
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2["full name"]); //dot-notation not allowed.
//we can use variable names as property names.
var fullName = "full name";
var person3 = (_a = { firstName: firstName, lastName: lastName }, _a[fullName] = "Mohd Arshad", _a);
console.log(person3.firstName);
console.log(person3["full name"]);
console.log(person3[fullName]);
//# sourceMappingURL=demo.js.map