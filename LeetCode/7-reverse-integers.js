/**
 * @param {number} number
 * @return {number}
 */
var reverse = function(number) {
    const limit = Math.pow(2,31);
    console.log(number> 2147483647, limit)

    if(number< -2147483648 || number> 2147483647) return 0;

    const reversedString = number.toString().split('').reverse().join('');
    console.log("Reversed array ",reversedString)
    if(reversedString[reversedString.length-1]==="-") {
        number= - parseInt(reversedString.substring(0,reversedString.length-1))
    }
    else {
        number = parseInt(reversedString)
    }
    if(number< -2147483648 || number> 2147483647) return 0;
    return number;

};

console.log(reverse(-2147483648));