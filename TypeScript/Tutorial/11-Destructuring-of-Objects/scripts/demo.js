"use strict";
//Object destructuring uses curly brackets {}
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var obj1 = { fname: "Mohd", lname: "Arshad", flname: "Mohd Arshad" };
//ensure that property names in object must match with destructured variable names.
//if property name is lengthy then we can use alias, but then we can use only alias.
var fname = obj1.fname, lname = obj1.lname, fln = obj1.flname;
console.log(fname);
console.log(lname);
//console.log(flname); //cannot be used.
console.log(fln); //using alias.
//Getting partially destructured values
var obj2 = { obj2Fname: "Mohd", obj2Mname: "Asjad", obj2Lname: "Malik" };
//let {,obj2Lname} = obj2; //not allowed, only one at a time allowed.
var obj2Mname = obj2.obj2Mname;
var obj2Fname = obj2.obj2Fname;
var obj2Lname = obj2.obj2Lname;
console.log(obj2Fname);
console.log(obj2Mname);
console.log(obj2Lname);
//setting default values, not allowed.
//using REST operator.
var colorsObj = { Message: "List of Colors:", Color1: "Red", Color2: "Green", Color3: "Blue" };
var Message = colorsObj.Message, colors = __rest(colorsObj, ["Message"]);
console.log(Message);
console.log(colors);
//# sourceMappingURL=demo.js.map