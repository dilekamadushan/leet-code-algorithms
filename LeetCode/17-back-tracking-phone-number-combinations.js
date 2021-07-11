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
    const solutions = [];
    makeStrings(map, digits, 0, solutions, "");
    return solutions;
}

const makeStrings = (map, digits, index, solutions, sb) => {
    console.log("starting the function", index, solutions, sb)
    if (index === digits.length) {
        solutions.push(sb);
        console.log("index equal to digits length adding to sb", sb, solutions)
        return;
    }
    const digit = digits.charAt(index);
    const letters = map.get(digit);
    console.log("letters from the map", letters, index)
    for (const letter of letters) {
        sb = sb + letter;
        console.log("in the loop", letter, sb)
        makeStrings(map, digits, index + 1, solutions, sb);
        sb = sb.slice(0, sb.length - 1)
    }
}

console.log(letterCombinations("23"))
