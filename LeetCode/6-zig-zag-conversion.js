/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    const multiDimensionalArray = [];

    for (let i=0;i<numRows;i++){
        multiDimensionalArray.push([]);
    }
    console.log("Start of multi Dimensional Array",multiDimensionalArray);

    const charArray = s.split('');
    let flag = true;
    let i = 0;
    while (i< charArray.length){
        if(flag){
            console.log("on top")
            const limit = charArray.length > i+numRows? numRows: charArray.length-i
            console.log("limit",limit);
            for (let rows=0;rows<limit;rows++){
                multiDimensionalArray[rows].push(charArray[i]);
                i++
            }
            console.log("multi array and i",multiDimensionalArray,i);
        }
        else {
            console.log("down")
           // const limit = charArray.length-1 > i+numRows-2? 0: charArray.length-i-1
            const limit = i+numRows-3 <= charArray.length-1 ? 0: numRows-3-(charArray.length-i-1)
            console.log("limit",limit);
            for (let rows=numRows-2;rows>limit;rows--){
                multiDimensionalArray[rows].push(charArray[i]);
                i++
            }
            console.log("multi array and i",multiDimensionalArray,i);
        }
        flag = !flag;

    }
    console.log(multiDimensionalArray);
    let ans =""
    for (let i=0;i<numRows;i++){
        ans+=multiDimensionalArray[i].join('');
    }
    console.log("Final ans", ans)
    return ans

};

convert("A",1);
