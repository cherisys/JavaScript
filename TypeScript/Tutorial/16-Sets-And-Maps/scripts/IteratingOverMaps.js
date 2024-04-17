let myMap3 = new Map([
    ["c1", "red"],
    ["c2", "green"],
    ["c3", "blue"],
    ["c4", "orange"],
    ["c5", "brown"]
]);
console.log("************KEYS***************");
for (let key of myMap3.keys()) {
    console.log(key);
}
console.log("************VALUES***************");
for (let val of myMap3.values()) {
    console.log(val);
}
console.log("************ENTRIES***************");
for (let entry of myMap3.entries()) {
    console.log(`${entry[0]}  --> ${entry[1]}`);
}
console.log("************KEY-VAL PAIRS***************");
for (let [key, val] of myMap3.entries()) {
    console.log(`${key}  --> ${val}`);
}
//# sourceMappingURL=IteratingOverMaps.js.map