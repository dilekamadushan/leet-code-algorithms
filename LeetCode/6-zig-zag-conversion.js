/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    const multiDimensionalArray = [];

    for (let i = 0; i < numRows; i++) {
        multiDimensionalArray.push([]);
    }

    const charArray = s.split('');
    let flag = true;
    let i = 0;
    while (i < charArray.length) {
        if (flag) {
            const limit = charArray.length > i + numRows ? numRows : charArray.length - i
            for (let rows = 0; rows < limit; rows++) {
                multiDimensionalArray[rows].push(charArray[i]);
                i++
            }
        } else {
            const limit = i + numRows - 3 <= charArray.length - 1 ? 0 : numRows - 3 - (charArray.length - i - 1)
            for (let rows = numRows - 2; rows > limit; rows--) {
                multiDimensionalArray[rows].push(charArray[i]);
                i++
            }
        }
        flag = !flag;

    }
    console.log(multiDimensionalArray);
    let ans = ""
    for (let i = 0; i < numRows; i++) {
        ans += multiDimensionalArray[i].join('');
    }
    return ans

};

convert("A", 1);
