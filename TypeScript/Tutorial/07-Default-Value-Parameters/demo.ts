let f1 = function(value=10)
{
    return value;
}
console.log(f1()); // output = 10
//we can specify a default value for the parameter.
//if parameter's value is not passed in function call, default taken.

let f2 = function(value=10,bonus=20){
    return value+bonus;
}

console.log(f2()); // output = 10 + 20 =30
console.log(f2(5)); // output = 5 + 20 = 25 //default value taken for bonus.
console.log(f2(undefined,100)); // output = 10 + 100 = 110 //default taken for value.

//As a default value, we can assign a scalar value or an expression.

//In the default value expressions for parameters, we can use any parameters defined in left side.
let f3 = function(value=10, bonus=value*0.1){return value+bonus;}
console.log(f3()); //output = 10 + 10*0.1 = 11
console.log(f3(20)); //output = 20 + 20*0.1 = 22
console.log(f3(20,30)); //output = 20+30 = 50

//In the default value expressions for parameters, we can use a outside function as well.
let percentFunc = () => 0.1;
let f4 = function(value=10,bonus=value*percentFunc()){return value+bonus;}
console.log(f4()); //output = 10 + 10*0.1 = 11
console.log(f4(20)); //output = 20 + 20*0.1 = 22
console.log(f4(20,30)); //output = 20+30 = 50

//In the default value expressions for parameters, we can not use parameters defined in right side of itself.
//let f5 = function(value=bonus*100, bonus=50){return value+bonus;} //will not work.
