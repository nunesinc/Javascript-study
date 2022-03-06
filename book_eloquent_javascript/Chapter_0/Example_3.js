function factorial(n) {
    if (n == 0) {
    return 1;
    } else {
    return factorial(n - 1) * n;
    }
    }
console.log(factorial(8));
console.log(factorial(7));
console.log(factorial(10));
