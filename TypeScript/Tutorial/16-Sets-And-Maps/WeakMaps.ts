let myMapW = new WeakMap();
let ob1 = {};
myMapW.set(ob1,"Arshad");
console.log(myMapW.get(ob1));
console.log(myMapW.has(ob1));
ob1 = null;
console.log(myMapW.get(ob1));
console.log(myMapW.has(ob1));

//likewise in WeakSets, in WeakMaps reference to object is cleared when it becomes null.
//This avoids memory leakage, and better handles garbage collection.