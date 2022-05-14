/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 1 2 3
 * 1 3 2
 * 2 1 3
 * 2 3 1
 * 3 1 2
 * 3 2 1
 */
var nextPermutation = function (nums) {
    const origNumbers = [...nums];
    origNumbers.sort((a, b) => a - b);
    const result = [nums];

    recursiveSwap(origNumbers, result, nums.length - 2, true);
    console.log(result);
};

const recursiveSwap = (nums, result, startIndex, isRecursive) => {
    if (startIndex >= nums.length - 1 || startIndex<0) return;
    for (let end = startIndex + 1; end < nums.length; end++) {
        const tempNums = [...nums];
        const swaped = swap(tempNums, result, startIndex, end);
        recursiveSwap(swaped, result, startIndex+1, false)
    }
    if (startIndex === 0) return;
    if(isRecursive) recursiveSwap(nums, result, startIndex - 1, true)


}

const swap = (nums, result, start, end) => {
    const temp = nums [start];
    nums[start] = nums [end];
    nums [end] = temp;
    const sorted = nums.slice(start+1, nums.length);
    sorted.sort((a,b)=>a-b);
    nums = [...nums.slice(0,start+1), ...sorted]
    result.push(nums);
    return nums;
}

nextPermutation([1, 2, 3])

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 1 2 3 4 5
 * 1 2 3 5 4
 * 1 2 4 3 5
 * 1 2 4 5 3
 * 1 2 5 3 4
 * 1 2 5 4 3
 * 1 3 2 4 5
 * 1 3 2 5 4
 * 1 3 4 2 5
 * 1 3 4 5 2
 * 1 3 5 2 4
 * 1 3 5 4 2
 * 1 4 2 3 5
 */
