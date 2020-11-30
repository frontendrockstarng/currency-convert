import '../index.css';
import '../images/4063402.jpg';
const css = require('../index.css').toString();


import * as main from './view/view' //this is using a destructing method to import all commands from the folder


const newfunc = main.myFunction("leni", "kind")
const newfunc2 = main.theFunction("mulan", "brave")

console.log(newfunc)
console.log(newfunc2)


//you can import multiple functions like this import * as variablename from 'folder path' then call each function like this, variablename.Functionname in the other js file e.g const print = variablename.functionname(parameters) console.log(print)