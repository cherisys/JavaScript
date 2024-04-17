//Iterating over array

var numbers = [2,4,5,6];
numbers.forEach((element,index,array)=>{
    console.log("arr[" + index + "] --> " + element);
});

//Iterating over map
let myMap4 = new Map([
    ["c1","red"],
    ["c2","green"],
    ["c3","blue"]
]);

myMap4.forEach((value,key,callingMap)=>{
    console.log(`${key} --> ${value}`);
    console.log(myMap4 === callingMap);
});

//Iterating over set
let mySet5 = new Set([4,5,6,7,7,7]);
mySet5.forEach((value,key,callingSet)=>{
    console.log(`${key} --> ${value}`); //in sets keys and values are same.
    console.log(mySet5 === callingSet);
});