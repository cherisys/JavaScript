var mySet = Object.create(null);
mySet.id = "0";
//mySet.id = 0; //for int value zero mySet.id doesn't exists.
if(mySet.id){
    console.log("Id exists");
}

var myMap = Object.create(null);
myMap.name = "Arshad";
var val = myMap.name;
console.log(val);

myMap[100] = "100val";
console.log(myMap[100]);
console.log(myMap["100"]); 
// both of these 100 numeric and string are same.
// creates confusion.

let obj1 = {};
let obj2 = {};

//myMap[obj1] = "World"; // object cannot be used as an index type.