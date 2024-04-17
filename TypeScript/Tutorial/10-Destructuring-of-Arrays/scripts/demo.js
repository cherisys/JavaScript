"use strict";
//Array destructuring uses square brackets []
var arr1 = ["Mohd", "Arshad", "Mohd Arshad"];
var firstName = arr1[0], lastName = arr1[1], fullName = arr1[2];
console.log(firstName);
console.log(lastName);
console.log(fullName);
//Getting partially destructured values
var arr2 = ["Mohd", "Asjad", "Mohd Asjad"];
var fullName1 = arr2[2];
console.log(fullName1);
//setting default values, while destructuring.
//if not mapped in array, then default value willbe used.
var arr3 = ["Mohd", "Yaseen"];
var fname = arr3[0], lname = arr3[1], _a = arr3[2], flname = _a === void 0 ? "Mohd Yaseen" : _a;
console.log(flname);
//using REST operator.
var colorsArr = ["List of Colors:", "Red", "Green", "Blue"];
var message = colorsArr[0], colors = colorsArr.slice(1);
console.log(message);
console.log(colors);
//# sourceMappingURL=demo.js.map