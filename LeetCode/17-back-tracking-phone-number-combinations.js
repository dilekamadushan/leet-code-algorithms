/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits === "") return [];
    const map = new Map();
    map.set("2", "abc");
    map.set("3", "def");
    map.set("4", "ghi");
    map.set("5", "jkl");
    map.set("6", "mno");
    map.set("7", "pqrs");
    map.set("8", "tuv");
    map.set("9", "wxyz");

    if (digits == null || digits.length === 0) {
        return [];
    }
    return [];
}

const makeStrings = (map, digits, index, solutions, sb) => {
    if (index === digits.length) {
        solutions.push(sb);
        return;
    }
    const digit = digits.charAt(index);
    const letters = map.get(digit);
    for (const letter of letters) {
        sb = sb + letter;
        makeStrings(map, digits, index + 1, solutions, sb);
        sb = sb.slice(0, sb.length - 1)
    }
}
