/*
    There is a slightly shorter way to create a function binding. When the function
    keyword is used at the start of a statement, it works differently. This is a function declaration.
*/

//function square
console.log(" --- function square : ---");

console.log(" function square:", square(2));
function square(x) {
    return x * x;
    }


console.log("The future says:", future());
function future() {
    return "You'll never have flying cars";
}

/*
Arrow functions
There’s a third notation for functions, which looks very different from the
others. Instead of the function keyword, it uses an arrow (=>) made up of an
equal sign and a greater-than character (not to be confused with the greaterthan-or-equal operator, which is written >=).
*/
console.log(" --- Arrow functions : ---");

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;  
}
return result; 
};
//power( 2, 10 );
console.log(power( 2, 10 ));
/*
I might be over-simplifying your question here so I am apologizing up front if that is the case.

result *= base; 
is shorthand for:

result = result * base;
in the same way:

result = 1;
result = result + 1; // now result is 2
result += 1;  // now result is 3
*/



/*The call stack
    The way control flows through functions is somewhat involved. Let’s take a
    closer look at it. Here is a simple program that makes a few function calls:
*/
console.log(" --- The call stack : ---");
console.log(greet("Ana")); //call function

function greet(who) {
console.log("Hello " + who);
}
//greet("Harry");
//console.log(greet("Harry")); //call function
//console.log("Bye");

//with error
function chicken() {
    return egg();
    }
    function egg() {
    //return chicken();
    }
    console.log(chicken() + " came first.");
    // → ??


/*    Optional Arguments
    The following code is allowed and executes without any problem:
*/

/* 
    We defined square with only one parameter. Yet when we call it with three,
    the language doesn’t complain. It ignores the extra arguments and computes
    the square of the first one.
*/
    console.log(" --- TOptional Arguments : ---");
    function square(x) { return x * x; }
    console.log(square(4, true, "hedgehog"));
    // → 16

/* 
    The upside is that this behavior can be used to allow a function to be called
    with different numbers of arguments. For example, this minus function tries to
    imitate the - operator by acting on either one or two arguments:
*/
    console.log(" --- Different Arguments : ---");
    function minus(a, b) {
        if (b === undefined) return -a;
        else return a - b;
    }
    console.log(minus(10));
    // → -10
    console.log(minus(10, 5));
    // → 5
