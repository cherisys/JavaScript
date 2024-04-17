//Object destructuring uses curly brackets {}

let obj1 = {fname:"Mohd",lname:"Arshad",flname:"Mohd Arshad"};
//ensure that property names in object must match with destructured variable names.
//if property name is lengthy then we can use alias, but then we can use only alias.
let {fname,lname,flname:fln} = obj1;
console.log(fname);
console.log(lname);
//console.log(flname); //cannot be used.
console.log(fln); //using alias.

//Getting partially destructured values
let obj2 = {obj2Fname:"Mohd",obj2Mname: "Asjad", obj2Lname:"Malik"};
//let {,obj2Lname} = obj2; //not allowed, only one at a time allowed.
let {obj2Mname,} = obj2; 
let {obj2Fname} = obj2;
let {obj2Lname} = obj2;
console.log(obj2Fname);
console.log(obj2Mname);
console.log(obj2Lname);

//setting default values, to destructed variables not allowed.
//any variable which cannot map to object property is not allowed.

//using REST operator.
let colorsObj = {Message:"List of Colors:",Color1:"Red",Color2:"Green",Color3:"Blue"};
let {Message,...colors} = colorsObj;
console.log(Message);
console.log(colors);