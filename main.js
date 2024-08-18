// Day 21
// ### Question 1: Sum of Digits
// *Problem:*  
// Write a function sumOfDigits that takes a number as input and returns the sum of its digits.
// *Example:*  
// typescript
// sumOfDigits(123); // Output: 6 (1 + 2 + 3)
// sumOfDigits(4567); // Output: 22 (4 + 5 + 6 + 7)
// *Hint:*  
// You can convert the number to a string, split it into individual digits, and then sum them up.
// ---
function sumOfDigits(num) {
    var sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(sumOfDigits(123)); // Output: 6
console.log(sumOfDigits(4567)); // Output: 22
// ### Question 2: Count Consonants in a String
// *Problem:*  
// Write a function countConsonants that takes a string as input and returns the number of consonants in the string. Consonants are all alphabetical characters except a, e, i, o, u (both lowercase and uppercase).
// *Example:*  
// typescript
// countConsonants("hello"); // Output: 3
// countConsonants("TypeScript"); // Output: 7
// *Hint:*  
// Loop through the string and check each character to see if it is a consonant by excluding vowels.
function countConsonants(str) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (char >= 'a' && char <= 'z' && !isVowel(char, vowels)) {
            count++;
        }
    }
    return count;
}
function isVowel(char, vowels) {
    for (var i = 0; i < vowels.length; i++) {
        if (char === vowels[i]) {
            return true;
        }
    }
    return false;
}
console.log(countConsonants("hello")); // Output: 3
console.log(countConsonants("TypeScript")); // Output: 8
