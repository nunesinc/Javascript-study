
console.log("--- Chapter  2 - Examples ---")
let caught = 5 * 5;
console.log(caught);

let ten = 10;
console.log(ten * ten);
// → 100

//The = operator can be used at any time on existing bindings to disconnect them from their current value and have them point to a new one.
let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

//More use of =
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

//A single let statement may define multiple bindings. The definitions must be separated by commas.
let one = 1, two = 2;
console.log(one + two);
// → 3

//The words var and const can also be used to create bindings, in a way similar to let.
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda