var colors = ['red','green','blue'];

for(let i in colors){
    console.log(colors[i]);
}

for(let color of colors){
    console.log(color);
}

//for of loop directly access the value of element.
//for in loop access the index of element.

var letters = "ABC";

for(let letter of letters){
    console.log(letter);
}