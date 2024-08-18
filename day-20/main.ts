// Day 20
// ### Question 1: Check for Prime Number
// *Problem:*  
// Write a TypeScript function that takes a positive integer as input and checks whether it is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself. If the number is prime, return true; otherwise, return false.

// *Hint:*  
// - Use a loop to check divisibility from 2 up to the square root of the number.
// - If the number is divisible by any of these, it is not prime.

// typescript

function is_Prime(num: number): boolean {
    
    if(num <= 1) return false;

        for(let i = 2; i < Math.sqrt(num); i++){
     
            if(num % i === 0) return false;
        
    }
    return true;
}

const prime_1 = 7;
const prime_2 = is_Prime(prime_1);

console.log(`${prime_1} is prime`,prime_2); // OUTPUT: true


// ### Question 2: Reverse a Number
// *Problem:*  
// Write a TypeScript function that takes a number as input and returns the number with its digits reversed. For example, if the input is 1234, the output should be 4321.

// *Hint:*  
// - Convert the number to a string, reverse the string, and then convert it back to a number.

// typescript

    function reverseNumber(num: number): number {

        let reversedNum = 0;
        let remainingNum = Math.abs(num); 
    
        while (remainingNum > 0) {
            const lastDigit = remainingNum % 10;
    
            reversedNum = (reversedNum * 10) + lastDigit;

            remainingNum = Math.floor(remainingNum / 10);
        }
        return num < 0 ? -reversedNum : reversedNum;
    };
    
    const inputNumber = 1234;
    const result = reverseNumber(inputNumber);

    console.log(`Original Number: ${inputNumber}`);// Output: Originail Number: 1234
    console.log(`Reversed Number: ${result}`);  // Output: Reversed Number: 4321





