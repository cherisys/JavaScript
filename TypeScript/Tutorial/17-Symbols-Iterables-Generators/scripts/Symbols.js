//ES2015 introduces new primitive type, known as Symbol
//Purpose of Symbol is to generate unique identities.
let s1 = Symbol();
console.log(typeof s1);
let s2 = Symbol("Arshad"); //passing description of symbol.
console.log(s2.toString());
let s3 = Symbol();
let s4 = Symbol();
console.log(s3 === s4);
//logs flase, because two symbols have uniqe ids.
let s5 = Symbol.for("MySymbol");
//checks if a Symbol exists for description MySymbol
//if do not exists, then creates new. Otherwise retrieve existing.
console.log(s5.toString());
let s6 = Symbol.for("MySymbol");
console.log(s5 === s6);
//logs true, because the same Symbol created in s5, is retrieved in s6.
console.log(Symbol.keyFor(s5));
console.log(Symbol.keyFor(s6));
//key for both s5 and s6 is same.
//using symbol as object properties
//property name always be uniqe, need not worry about any conflicting names.
let symName = Symbol("name");
let Person = {
    [symName]: "Arshad",
    fname: "Mohd"
};
console.log(Object.getOwnPropertyNames(Person));
console.log(Object.getOwnPropertySymbols(Person));
//To check iterables, using Symbol.iterator
let arr = [1, 2, 3];
let str = "Arshad";
let num = 10;
let obj = {
    fname: "Mohd",
    lname: "Arshad"
};
let func = function () {
    return "Arshad";
};
console.log("Array --> " + typeof arr[Symbol.iterator]);
console.log("String --> " + typeof str[Symbol.iterator]);
console.log("Number --> " + typeof num[Symbol.iterator]);
console.log("Object --> " + typeof obj[Symbol.iterator]);
console.log("Function --> " + typeof func[Symbol.iterator]);
//Statement of which return method/function that element is iterable.
//That means Iterator method is available for those elements.
//Iterable elements can be used for For...Of Loop.
//According to above statements:
//Array and String are iterable.
//Number, Object and Function are not iterable.
//However we can write custom iterator method for objects.
//# sourceMappingURL=Symbols.js.map