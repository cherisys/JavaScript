// string templates are enclosed using backticks
// we need not to worry about using single or double quoates.
// var values need not to be concatenated but interpolated.
// multilines within backticks are allowed.
// white space within backticks is significant and rendered as is.

var myname = "Arshad";
var strTemplate = `Welcome ${myname} to ES6. 
                   Second line using 'single quotes'
                        Third line using "double quotes".`;
console.log(strTemplate);