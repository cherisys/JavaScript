"use strict";
var v1 = {
    id: 1,
    greet: function () {
        console.log(this.id);
    }
};
v1.greet(); //output = 1
var v2 = {
    id: 1,
    greet: function () {
        setTimeout(function () {
            console.log(this.id);
        });
    }
};
v2.greet(); //output = undefined
//every funciton create it's own context of this keyword.
//this keyword in v2 object is bound to the context of setTimeout function.
//Workaround
var v3 = {
    id: 1,
    greet: function () {
        var self = this;
        setTimeout(function () {
            console.log(self.id);
        }, 1000);
    }
};
v3.greet(); //Output = 1
//Using ES2015 Arrow function
var v4 = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
v4.greet(); //output = 1
//# sourceMappingURL=demo.js.map