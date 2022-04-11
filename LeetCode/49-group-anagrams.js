/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const resultJson = {}
    strs.forEach((string) => {
        const baseForm = getSortedWord(string);
        if (!Array.isArray(resultJson[baseForm])) {
            resultJson[baseForm] = [string]
        } else {
            resultJson[baseForm].push(string)
        }
    })
    const resultArray = [];
    for (const key in resultJson) {
        resultArray.push(resultJson[key])
    }
    return resultArray;

};

// function to print string in sorted order
const getSortedWord = (str) => {

    // Hash array to keep count of characters.
    // Initially count of all characters is
    // initialized to zero.
    const MAX_CHAR = 26
    let charCount = new Array(MAX_CHAR);
    charCount.fill(0);

    // Traverse string and increment
    // count of characters
    for (let i = 0; i < str.length; i++)

        // 'a'-'a' will be 0, 'b'-'a' will be 1,
        // so for location of character in count
        // array we will do str[i]-'a'.
        charCount[str[i].charCodeAt() - 'a'.charCodeAt()]++;

    // Traverse the hash array and print
    // characters
    let result = ''
    for (let i = 0; i < MAX_CHAR; i++)
        for (let j = 0; j < charCount[i]; j++)
            result = result.concat(String.fromCharCode('a'.charCodeAt() + i));
    return result
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

