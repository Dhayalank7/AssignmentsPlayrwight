var factorial = function (a) {
    var k = 1;
    if (a < 0) {
        return ("The number is negative");
    }
    else {
        for (var i = 2; i <= a; i++) {
            k = k * i;
        }
        return (k);
    }
};
console.log(factorial(3));
console.log(factorial(9));
console.log(factorial(-3));
