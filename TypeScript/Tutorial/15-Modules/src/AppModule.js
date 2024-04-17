//A program can be divided into modules, these are pieces of related codes kept together.
//Modules support separation of concerns. 

// For writing modules, standard syntax is provided in ES2015.
// When we use modules, we need module loader. 
// There is no standard systax available for loading modules in ES2015.
// As module loader we need to use Babble, Traceur or Typescript.
// Here in our examples I'll be using Traceur as Transpiler.
// npm install es6-module-loader traceur systemjs


//For default import 
//there is no need to add curly braces
//no need to match variable name to exported variable name
//allows alias as well
import fname from './DefaultExport.js';
import {default as f} from './DefaultExport.js';
console.log(fname);
console.log(f);

//For named import
//we need to add curly braces
//we need to match variable names to exported variable name
//allows alias as well
import {empFName,empLName as e2, obj} from './NamedExport.js'; // prints Named Export Module Loaded.
// Named Export Module is printed on top, because import statements are hoisted.
//empFName = "Mohamed"; // imports are readonly. 
//we can change the property value of imported object. But not the object itself;
obj.name = "Mohammed Yas";
console.log(`${empFName} ${e2} ${obj.name}`);

//For function import
//We need to match function names to exported function names.
//allows alias
import {greetEmployee as grtE} from './FuncExport.js';
grtE("Hello World");

//For class import
//Class name must match with exported class name.
//allows alias
import {Person as Pers} from './ClassExport.js';
let p = new Pers();
p.greetPerson();