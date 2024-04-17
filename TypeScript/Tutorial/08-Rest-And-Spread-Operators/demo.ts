let displayColors = function(message:any, ...colors:any){
    console.log(message);
    for(let i in colors)
        console.log(colors[i]);
}
displayColors('Hi','red');
displayColors('Hi','red','green','blue');

//Rest operator is represented by three dots (...).
//Rest operator is used to convert any number of arguments into an array.
//We use it when the number of parameters is not predefined.

//if we are getting colors as an array from a datasource,
//And we want to use same method to display colors.
//We need to use Spread Operator (...).

var  colorsArr = ['Purple','Orange','Pink'];
displayColors('Hello',...colorsArr);

//Spread operator looks exactly same as Rest operator.
//Spread operator is used to convert an array into separate elements.
//However, Rest operator is used to turn individual elements into an array.
//Usually, Rest is used in function definition, and Spread is used in function call.