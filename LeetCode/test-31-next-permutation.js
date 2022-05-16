/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const sortedNumbers = [...nums];
    sortedNumbers.sort((a, b) => a - b);
    const reversed = [...sortedNumbers]
    reversed.reverse();
    let isDifferent = false;
    reversed.forEach((element, index) => {
        if (element !== nums[index]){
            isDifferent = true;
        }
    })
    if(!isDifferent){
        nums.sort((a,b)=> a-b)
        return
    }

    const result = [sortedNumbers];
    const map = new Map();
    const target = nums.join('');
    const flag = [0];
    if(target === sortedNumbers.join('')){
        flag[0]=1;
    }

    recursiveSwap(sortedNumbers, result,map, nums.length - 2, true);
    console.log(JSON.stringify(result));
    console.log(result.length)
};

const recursiveSwap = (nums, result, map,startIndex, isRecursive) => {
    if (startIndex >= nums.length - 1 || startIndex<0) return;
    if(startIndex< nums.length-2 && !isRecursive){
        for (let i = nums.length-2; i > startIndex; i--) {
            recursiveSwap(nums, result,map, i, false)
        }
    }


    for (let end = startIndex + 1; end < nums.length; end++) {
        const tempNums = [...nums];
        const swaped = swap(tempNums, result,map, startIndex, end);
        recursiveSwap(swaped, result,map, startIndex+1, false)
    }
    if (startIndex === 0) return;
    if(isRecursive) recursiveSwap(nums, result,map, startIndex - 1, true)


}

const swap = (nums, result,map, start, end) => {
    const temp = nums [start];
    nums[start] = nums [end];
    nums [end] = temp;
    const sorted = nums.slice(start+1, nums.length);
    sorted.sort((a,b)=>a-b);
    nums = [...nums.slice(0,start+1), ...sorted]
    const key = nums.join('');
    if (!map.has(key)){
        map.set(key,map.size);
        result.push(nums);
    }
    return nums;
}

const nums = [1,5,1];
nextPermutation(nums);
console.log(nums);
