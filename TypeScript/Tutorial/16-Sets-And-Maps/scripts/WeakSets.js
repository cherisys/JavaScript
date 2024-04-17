let mySet4 = new Set();
let key = { name: "Arshad" };
mySet4.add(key);
console.log(mySet4.size); //logs 1
key = null;
console.log(mySet4.size); //logs 1, reference exists.
//Weaksets are used to avoid memory leakage
//and do garbage collection.
//Memory is handled properly in Weaksets.
/*References of objects stored in Weaksets
are weak. Whenever, values
of objects itself become null, references
in weaksets are automatically cleared.*/
let mySetW = new WeakSet();
let keyW = { name: "Arshad" };
mySetW.add(keyW);
console.log(mySetW.has(keyW)); //logs true.
keyW = null;
console.log(mySetW.has(keyW)); //logs false, reference cleared.
//# sourceMappingURL=WeakSets.js.map