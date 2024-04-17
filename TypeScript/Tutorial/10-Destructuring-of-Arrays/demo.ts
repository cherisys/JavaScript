//Array destructuring uses square brackets []

let arr1 = ["Mohd","Arshad","Mohd Arshad"];
let [firstName,lastName,fullName] = arr1;
console.log(firstName);
console.log(lastName);
console.log(fullName);

//Getting partially destructured values
let arr2 = ["Mohd","Asjad","Mohd Asjad"];
let [,,fullName1] = arr2;
console.log(fullName1);

//setting default values, while destructuring.
//if not mapped in array, then default value willbe used.
let arr3 = ["Mohd","Yaseen"];
let [fname,lname,flname = "Mohd Yaseen"] = arr3;
console.log(flname);

//using REST operator.
let colorsArr = ["List of Colors:","Red","Green","Blue"];
let [message,...colors] = colorsArr;
console.log(message);
console.log(colors);



