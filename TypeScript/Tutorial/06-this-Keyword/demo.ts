let v1 = {
    id: 1,
    greet:function(){
        console.log(this.id);
    }
};

v1.greet();  //output = 1

let v2 = {
    id: 1,
    greet:function(){
        setTimeout(function(this:any){
            console.log(this.id);
        });
    }
};

v2.greet(); //output = undefined
//every funciton create it's own context of this keyword.
//this keyword in v2 object is bound to the context of setTimeout function.

//Workaround
let v3 = {
    id:1,
    greet:function()
    {
        let self = this;
        setTimeout(function(){
            console.log(self.id);
        },1000);
    }
};
v3.greet(); //Output = 1
//Here we are saving the context of outside function's this keyword to a variable.
//And saving that variable in inside function.

//Using ES2015 Arrow function
let v4 = {
    id: 1,
    greet: function(){
        setTimeout(()=>{console.log(this.id);},1000);
    }
};
v4.greet(); //output = 1
//Arrow functions doesn't create there own this keyword, 
//but refers to the this keyword of parent's context.
//So when a separate this for a function is needed we should not use arrow function.