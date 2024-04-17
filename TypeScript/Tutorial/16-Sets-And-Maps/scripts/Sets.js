let mySet1 = new Set();
mySet1.add("Mohd");
mySet1.add("Arshad");
mySet1.add(1); //we can add hetrogenous values.
mySet1.add("Mohd"); //duplicate values are ignored automatically.
console.log(mySet1.size); //logs 3.
let objt1 = {};
let objt2 = {};
mySet1.add(objt1); //objects can be added.
mySet1.add(objt2);
console.log(mySet1.size); // logs 5.
//Declare and initialize
let mySet2 = new Set([1, 2, 3, 4, 4, 4, 4]);
console.log(mySet2.size); // logs 4, ignores duplicate.
// To check if value exists.
console.log(mySet2.has(2)); //logs true
console.log(mySet2.has(8)); //logs false
// To remove values
mySet2.delete(1);
console.log(mySet2.has(1)); // logs false
console.log(mySet2.size); // logs 3
//Chaining of set
let mySet3 = new Set().add("Mohd").add("Arshad");
console.log(mySet3.size);
//# sourceMappingURL=Sets.js.map