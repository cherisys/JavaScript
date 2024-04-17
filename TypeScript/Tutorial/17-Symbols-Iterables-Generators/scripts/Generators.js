/*
Functions: once they starts executing,
they always goes to completion before any other code to run.

Generators: Special types of functions, which can be paused
in the middle of execution, run some other code and then
resumes where we left off.

Yield Keyword: Pausing and Execution of Generators is done
through yield keyword.

With every execution generator reaches the next yield point.
Done is set to true, when it reaches last yield statement.
*/
function* createGenerator() {
    yield 1;
    console.log("After yield 1");
    yield 2;
}
let myGen = createGenerator();
console.log(myGen.next()); //logs yield 1
console.log(myGen.next()); //logs message & yield 2
console.log(myGen.next()); //logs done
//Generators can be used to simplify our code 
//when we write custom iterators, e.g. For Object.
let Employee = {
    fname: "Mohd",
    lname: "Asjad",
    age: 20
};
Employee[Symbol.iterator] = function* () {
    let properties = Object.keys(Employee);
    for (let p of properties) {
        let pval = this[p];
        yield [p, pval];
    }
};
let EmployeeIter = Employee[Symbol.iterator]();
for (let [key, val] of EmployeeIter) {
    console.log(`${key} --> ${val}`);
}
//# sourceMappingURL=Generators.js.map