"use strict";
var v = function () {
    return 10;
};
console.log(v());
var v1 = function () {
    return 10;
};
console.log(v1());
//if we have only one statement in arrow function,
//we can omit parentheses, as well as return keyword.
var v2 = function () { return 10; };
console.log(v2());
//In case of parameters.
var v3 = function (m) { return 10 * m; };
console.log(v3(5));
//for multiple body lines parentheses are required.
var v5 = function (m, bonus) { return 10 * m + bonus; };
console.log(v5(5, 25));
var v6 = function (m, bonus) {
    var val = 10 * m;
    return val + bonus;
};
console.log(v6(5, 25));
//# sourceMappingURL=demo.js.map