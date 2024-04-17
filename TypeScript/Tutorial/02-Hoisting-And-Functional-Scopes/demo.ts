function greetPerson(name:string){
    // Any var declarations are hoisted here.
    // var greet automatically comes here as the top statement of the function.
    if(name==="Arshad")
    {
        greet = "Hello Arshad";
        var greet1 = "Hi";
    }
    else
    {
        greet = "Hi there";
        var greet1 = "Hello";
    }
    console.log(greet);
    //However the var declaration for greet1 is inside a block, but it will give us result "Hello".
    //A (var) variable declared anywhere inside a function has (whole) functional scope. 
    console.log(greet1); 
    var greet;
}
greetPerson("Arshad1");