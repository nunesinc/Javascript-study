/*If you write an = operator after a parameter, followed by an expression, the
value of that expression will replace the argument when it is not given.
For example, this version of power makes its second argument optional. If
you don’t provide it or pass the value undefined, it will default to two, and the
function will behave like square.
*/
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
}
    return result;
}
    console.log(power(4));
    // → 16
    console.log(power(2, 6));
    // → 64

 /*   The following code shows an example of this. It defines a function, wrapValue,
that creates a local binding. It then returns a function that accesses and returns
this local binding.
*/
console.log(" --- Closure : ---");

function wrapValue(n) {
let local = n;
return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2


/* With a slight change, we can turn the previous example into a way to create
functions that multiply by an arbitrary amount.
*/
console.log(" --- Closure 2 : ---");
function multiplier(factor) {
return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10


/*Recursion
It is perfectly okay for a function to call itself, as long as it doesn’t do it so
often that it overflows the stack. A function that calls itself is called recursive.
Recursion allows some functions to be written in a different style. Take, for
example, this alternative implementation of power:
*/
console.log(" --- Recursion : ---");
function power1(base, exponent) {
    if (exponent == 0) {
    return 1;
    } else {
    console.log(base + ':' + exponent);
    return base * power(base, exponent - 1);
    }
}
let result = power1(2, 3);
console.log(result);
//console.log(power1(2, 3));
// → 8

console.log(" --- Recursion 2 : ---");
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
        return history;
    } else if (current > target) {
        return null;
    } else {
        return find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`);
    }
    }
    return find(1, "1");
}
    console.log(findSolution(24));
    // → (((1 * 3) + 5) * 3


 /*   We want to write a program that prints two numbers: the numbers of cows
and chickens on a farm, with the words Cows and Chickens after them and zeros
padded before both numbers so that they are always three digits long.
007 Cows
011 Chickens
This asks for a function of two arguments—the number of cows and the
number of chickens. Let’s get coding.
*/
console.log(" --- Farma Invetory I : ---");
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

//There has to be a better way.
//Here’s a first attempt:
console.log(" --- Farma Invetory II : ---");
function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}
function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}
printFarmInventory(7, 11, 3);


/*Instead of lifting out the repeated part of our program wholesale, let’s try
to pick out a single concept.*/
console.log(" --- Farma Invetory III : ---");
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
return string;
}
function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);