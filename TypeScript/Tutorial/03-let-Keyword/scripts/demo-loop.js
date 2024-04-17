"use strict";
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 1000);
};
//instead of printing 1 to 5, above loop will print 6 five times.
//this is because loop has completed all it's iteration before priting for iteration first started.
//this is becuase not the actual value of i but reference of i is passed in closure function.
//To get the desired result, i should be declared as let.
//while dealing with closures or function expressions inside loop better choice is to use let declarations.
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
//# sourceMappingURL=demo-loop.js.map