/**
 * @param {number} number
 * @return {boolean}
 */
var isPalindrome = function (number) {
    if (number < 0 || number > 2147483647) return false;
    const reversedNumber = reverse(number)
    return reversedNumber === number;

};
/**
 * @param {number} number
 * @return {number}
 * This function reverses a number by using modulus and quotient. The number is not converted to a string
 * The time complexity could be improved
 */
const reverse = (number) => {
    let reverse = 0;
    while (number > 0) {
        reverse = (number % 10) + reverse * 10;
        number = Math.floor(number / 10)
    }
    if (reverse > 2147483647) return 0;
    return reverse;

};


console.log(isPalindrome(121));
