//The && operator represents logical and. It is a binary operator, and its result is true only if both the values given to it are true.
console.log("--- Logical Operators : ---")
console.log(true && false)
// → false
console.log(true && true)
// → true
//The || operator denotes logical or. It produces true if either of the values given to it is true.
console.log(false || true)
// → true
console.log(false || false)
// → false

let test = 1 + 1 == 2 && 10 * 10 > 50;
console.log(test);

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

//Automatic Type convertion

console.log ("--- Automatic Type convertion : ---");
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
18// → NaN
console.log(false == 0)
// → true

console.log(null == undefined);
// → true
console.log(null == 0);
// → false


That behavior is often useful. When you want to test whether a value has a
real value instead of null or undefined, you can compare it to null with the
== (or !=) operator.
But what if you want to test whether something refers to the precise value
false? Expressions like 0 == false and "" == false are also true because
of automatic type conversion. When you do not want any type conversions
to happen, there are two additional operators: === and !==. The first tests
whether a value is precisely equal to the other, and the second tests whether it
is not precisely equal. So "" === false is false as expected.


//We saw binary operators for arithmetic (+, -, *, /, and %),
//string concatenation (+),
//comparison (==, !=, ===, !==, <, >, <=, >=), 
//and logic (&&, ||), 
//as well as several unary operators (- to negate a number, ! to negate logically, 
//and typeof to find a value’s type) and a ternary operator (?:)
// to pick one of two values based on a third value.
