/**
 *
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return "1";
    const charArr = countAndSay(n - 1).split('');
    let count = 0;
    let result = '';
    charArr.forEach((char, index) => {
        count++;
        if (char !== charArr[index + 1]) {
            result += count + char;
            count = 0;
        }
    })
    return result;

};

console.log(countAndSay(5))
