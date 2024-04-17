//Sets manage list of values.
/*Maps provide ability to keep sort
of association between, keys and values. */
//Map is an ordered list of key-value pairs.
//In Map both the key and value can be of any type.
let myMap1 = new Map();
myMap1.set("fname", 'Mohd');
myMap1.set(1, "Arshad"); //number key
myMap1.set("age", 34); //number value
console.log(myMap1.get("fname"));
console.log(myMap1.get(1));
console.log(myMap1.get("age"));
//we can also use objects as keys
let objMap1 = {};
let objMap2 = {};
myMap1.set(objMap1, 10);
myMap1.set(objMap2, 50);
console.log(myMap1.get(objMap2));
//Size,has,delete,clear
console.log(myMap1.size);
myMap1.delete("age");
console.log(myMap1.has("age"));
console.log(myMap1.size);
myMap1.clear();
console.log(myMap1.size);
//# sourceMappingURL=Maps.js.map