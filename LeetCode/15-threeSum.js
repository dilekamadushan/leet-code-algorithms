/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    return recursive(nums, 0, [], [])

};
const recursive = function (arr, i, currentSelections, ansArray) {
    console.log("At the start of function", arr, i, currentSelections, ansArray)

    if (i >= arr.length){
        console.log("i greater than array", i)
        if(currentSelections.length===3){
          return  checkWhenSelectionIsThree(i,currentSelections,ansArray);
        }
        console.log("Current Selection Not 3", i)
        return ansArray;
    }

    if(currentSelections.length<3){
        console.log("below three items in the selection", i)
        recursive(arr, i + 1, [...currentSelections,arr[i]], ansArray)
        recursive(arr, i + 1, currentSelections, ansArray)
        return ansArray;
    }

    if (currentSelections.length > 3) {

        recursive(arr, i + 1, [arr[i]], ansArray)
        recursive(arr, i + 1, [], ansArray)
        return ansArray;
    }

    const sum = currentSelections.reduce((total, a) => total + a,0);
    console.log("sum", i,sum,currentSelections)


    if (sum === 0) {
        checkWhenSelectionIsThree(i,currentSelections,ansArray)
        recursive(arr, i + 1, [arr[i]], ansArray)
        recursive(arr, i + 1, [], ansArray)

        return ansArray;
    }

    console.log("Answer not Found in current selection", i,currentSelections)
    recursive(arr, i + 1, [arr[i]], ansArray)
    recursive(arr, i + 1, [], ansArray)
    console.log("In final return", i,currentSelections)
    return ansArray;

};

const checkWhenSelectionIsThree=(i,current,ansArray)=>{
    const sum = current[0]+current[1]+current[2]
    if (sum === 0) {
        const sortedArray = current.sort()
        if(!ansArray.includes(sortedArray)){
            console.log("one answer Foundaaaaaaaaaaaaaaaa", i,sortedArray, ansArray)
            ansArray.push(sortedArray)
            return ansArray;
        }
        return ansArray;
    }
    console.log("Current Selection  3 But Sum not ===0", i)
    return ansArray
}


const arr = [-1,0,1,2,-1,-4]
console.log("Final Answer",threeSum(arr));
