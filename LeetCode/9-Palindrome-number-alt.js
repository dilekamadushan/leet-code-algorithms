/**
 * @param {number} number
 * @return {boolean}
 * Has a better complexity since it only iterates through half the digits
 */
var isPalindrome = function (number) {
    let head = number;
    let tail = 0;
    while (head !== tail && head > tail) {
        const number = head;
        head = Math.floor(number / 10);

        tail = tail * 10 + number % 10
    }
    return head === tail || head === Math.floor(tail / 10);

};


console.log(isPalindrome(12121));
