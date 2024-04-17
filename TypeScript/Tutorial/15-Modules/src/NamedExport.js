//either we can write export keyword before each statement 
// or we can use signle export statement at end.

//Way 1
//export let empFName = "Mohd";
//export let empLName = "Asjad";

//Way 2
let empFName = "Mohd";
let empLName = "Asjad";
let obj = {
    name: "Mohd Yaseen"
}
console.log("Named Export Module Loaded.");
export {empFName,empLName,obj};
