var a=10;
var a=11; //var re-declaration with same name is allowed in same scope.

let b=10;
//let b=12; //let re-declaration with same name is not allowed in same scope.

function greetVisitor(name:string){
    let greet;
    if(name==='Arshad')
    {
        greet = "Hello Arshad";
        let greet1 = "Hi";
        // greet2 = "Hey";
    }
    else
    {
        greet = "Hi there";
        let greet1 = "Hello";
        // greet2 = "Howdy";
    }

    console.log(greet); // this will work because 'greet' is declared in it's scope.
    //console.log(greet1); // this will not work because 'greet1' is declared in blocked scope, using let keyword.
    // console.log(greet2); // this will not work because 'greet2' is used before it's declared, using let keyword.
    let greet2;
}

greetVisitor("Arshad");

/*
1. let variable cannot be redeclared in same scope with same name.
2. let variable is not hoisted.
3. let variable is has blocked scope.
*/

var c=10;
let d=20;
if(c===10)
{
    var c=20;
    let d=30;
    console.log(c); // 20
    console.log(d); // 30
}
console.log(c); // 20 - value changed to 20 in if block.
console.log(d); // 20 - if block value will not be considered.