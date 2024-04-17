"use strict";
var a; //Declaration without initialization is totally fine for let keyword.
//const b; //Declaration without initialization is not fine for const keyword.
var b = 12;
if (a === 12) {
    //b=13; //const keywords are readonly and values cannot be changed.
    var b_1 = 13; //const keywords are block scoped so can be redeclared in a block.
}
//1. const keywords are not hoisted. You cannot use before declaring.
//2. values of properties of the const type object can be changed. But const object itself  cannot be.
var obj = {
    name: "arshad"
};
console.log(obj.name);
//obj = {position:"Engineer"}; //re-initialization of const object is not allowed.
obj.name = "Asjad"; //changing property values are allowed.
console.log(obj.name);
//# sourceMappingURL=demo.js.map