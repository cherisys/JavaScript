let a; //Declaration without initialization is totally fine for let keyword.
//const b; //Declaration without initialization is not fine for const keyword.
const b=12;

if(a===12)
{
    
    //b=13; //const keywords are readonly and values cannot be changed.
    const b=13; //const keywords are block scoped so can be redeclared in a block.
}

//1. const keywords are not hoisted. You cannot use before declaring.
//2. values of properties of the const type object can be changed. But const object itself  cannot be.

const obj = {
    name : "arshad"
};
console.log(obj.name);

//obj = {position:"Engineer"}; //re-initialization of const object is not allowed.
obj.name = "Asjad"; //changing property values are allowed.

console.log(obj.name);


//--------------------USES SCENARIOS OF CONST AND LET --------------------

//const declarations are used when re-assignment of values not expected. e.g. value of PI, MAX_SIZE of array.

const PI = 3.14;
const MAX_SIZE = 100;

//let declarations are used when values are frequently re-assigned/changing. e.g. swapping of two numbers.

let m =13;
let n=15;

m=m+n;
n=m-n;
m=m-n;