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

    