// Day 20
// ### Question 1: Check for Prime Number
// *Problem:*  
// Write a TypeScript function that takes a positive integer as input and checks whether it is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself. If the number is prime, return true; otherwise, return false.
// *Hint:*  
// - Use a loop to check divisibility from 2 up to the square root of the number.
// - If the number is divisible by any of these, it is not prime.
// typescript
function is_Prime(num) {
    if (num <= 1)
        return false;
    for (var i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
var prime_1 = 7;
var prime_2 = is_Prime(prime_1);
console.log("".concat(prime_1, " is prime"), prime_2); // OUTPUT: true
// ### Question 2: Reverse a Number
// *Problem:*  
// Write a TypeScript function that takes a number as input and returns the number with its digits reversed. For example, if the input is 1234, the output should be 4321.
// *Hint:*  
// - Convert the number to a string, reverse the string, and then convert it back to a number.
// typescript
function reverseNumber(num) {
    var reversedNum = 0;
    var remainingNum = Math.abs(num);
    while (remainingNum > 0) {
        var lastDigit = remainingNum % 10;
        reversedNum = (reversedNum * 10) + lastDigit;
        remainingNum = Math.floor(remainingNum / 10);
    }
    return num < 0 ? -reversedNum : reversedNum;
}
;
var inputNumber = 1234;
var result = reverseNumber(inputNumber);
console.log("Original Number: ".concat(inputNumber)); // Output: Originail Number: 1234
console.log("Reversed Number: ".concat(result)); // Output: Reversed Number: 4321
function foo() {
    return;
    {
        message: "hello world";
    }
}
console.log(foo());
