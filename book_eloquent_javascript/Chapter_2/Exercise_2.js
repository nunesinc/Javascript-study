//FizzBuzz
let n = 1;

for (n; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }

/*
  Going over the numbers is clearly a looping job, and selecting what to print is
a matter of conditional execution. Remember the trick of using the remainder
(%) operator for checking whether a number is divisible by another number (has
a remainder of zero)


For the clever solution, build up a string containing
the word or words to output and print either this word or the number if there
is no word, potentially by making good use of the || operator.
*/