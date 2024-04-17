var v = function()
{
    return 10;
}
console.log(v());

var v1 = () => {
    return 10;
}
console.log(v1());

//if we have only one statement in arrow function,
//we can omit parentheses, as well as return keyword.

var v2 = () => 10;
console.log(v2());

//In case of parameters.

var v3 = (m:any) => 10*m;
console.log(v3(5));

var v5 = (m:any,bonus:any) => 10*m+bonus;
console.log(v5(5,25));

//for multiple body lines parentheses are required.
var v6 = (m:any,bonus:any) => {
    var val = 10*m;
    return val+bonus;
}
console.log(v6(5,25));

