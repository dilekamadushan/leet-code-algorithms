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

    recursiveSwap(sortedNumbers, result,map, nums.length - 2, true,target,flag);
    console.log(JSON.stringify(result));
    nums.forEach((element,index)=>{
        nums[index] = result[result.length-1][index];
    })
};

const recursiveSwap = (nums, result, map,startIndex, isRecursive, target, flag) => {
    if (startIndex >= nums.length - 1 || startIndex<0 || flag[0] === 2) return;
    if(startIndex< nums.length-2 && !isRecursive){
        for (let i = nums.length-2; i > startIndex; i--) {
            recursiveSwap(nums, result,map, i, false, target, flag)
        }
    }


    for (let end = startIndex + 1; end < nums.length; end++) {
        const tempNums = [...nums];
        const swaped = swap(tempNums, result,map, startIndex, end, target, flag);
        recursiveSwap(swaped, result,map, startIndex+1, false, target, flag)
    }
    if (startIndex === 0) return;
    if(isRecursive) recursiveSwap(nums, result,map, startIndex - 1, true, target, flag)


}

const swap = (nums, result,map, start, end, target, flag) => {
    const temp = nums [start];
    nums[start] = nums [end];
    nums [end] = temp;
    const sorted = nums.slice(start+1, nums.length);
    sorted.sort((a,b)=>a-b);
    nums = [...nums.slice(0,start+1), ...sorted]
    store(nums,result,map, target, flag);
    return nums;
}

const store = (nums,result, map, target, flag) => {
    const key = nums.join('');
    if (!map.has(key)){
        map.set(key,map.size);
        result.push(nums);
        if(key === target){
            flag[0] = 1;
        }
        if(flag[0]===1){
            flag[0]=2;
        }
    }
    else{
        console.log(`duplicate key found ${nums} ${key} ${map.get(key)}`)
    }
}

const nums = [1,1,5];
nextPermutation(nums);
console.log(nums);
