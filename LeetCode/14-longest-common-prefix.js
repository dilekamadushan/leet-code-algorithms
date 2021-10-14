/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    const min = strs.reduce((a, b) => a.length <= b.length ? a : b)
    let commonPrefix = "";
    let temp = '';
    for (let i = 0; i < min.length; i++) {
        temp += min[i];

        const element = strs.find(s => !(s.includes(temp) && 0 === s.indexOf(temp)));

        if (!element) {
            commonPrefix += min[i];
        } else {
            return commonPrefix
        }

    }
    return commonPrefix;

};

