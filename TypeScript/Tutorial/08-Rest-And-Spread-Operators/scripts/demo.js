"use strict";
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i in colors)
        console.log(colors[i]);
};
displayColors('Hi', 'red');
displayColors('Hi', 'red', 'green', 'blue');
//Rest operator is represented by three dots (...).
//Rest operator is used to convert any number of arguments into an array.
//We use it when the number of parameters is not predefined.
//if we are getting colors as an array from a datasource,
//And we want to use same method to display colors.
//We need to use Spread Operator (...).
var colorsArr = ['Purple', 'Orange', 'Pink'];
displayColors.apply(void 0, ['Hello'].concat(colorsArr));
//# sourceMappingURL=demo.js.map