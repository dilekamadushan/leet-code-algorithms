/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

    while (s[0] === " ") {
        s = s.substring(1);
    }
    if ((s[0] === "-" || s[0] === "+") && (s.length === 1 || isNaN(parseInt(s[1])))) return 0;

    if (isNaN(parseInt(s[0])) && s[0] !== "-" && s[0] !== "+") {
        return 0;
    } else {
        if (!isNaN(parseInt(s))) return checkForLimits(parseInt(s));
        let lastIndex = 1;
        const arr = s.split('')
        console.log(arr, arr.length)

        for (let i = 1; i < arr.length; i++) {
            if (isNaN(parseInt(arr[i]))) {
                lastIndex = i
                break;
            }
            lastIndex = i;
        }
        if (lastIndex !== 1) return checkForLimits(parseInt(s.substring(0, lastIndex)));
        return 0;

    }

};

const checkForLimits = (number) => {
    const limit = Math.pow(2, 31);
    if (number < -limit) return -limit;
    if (number > limit - 1) return limit - 1;
    return number;
}
