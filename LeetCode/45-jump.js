/**
 * @param {number[]} nums
 * @return {number}
 * nums = [2,3,1,1,4]
 */

var jump = function (nums) {
    const map = new Map();

    return jumpRecursive(nums, 0, map);

}
const jumpRecursive = (nums, startIndex, map) => {
    // if only one element no need to jump
    if (!nums || nums.length === 1 || nums.length === 0) return 0;

    if (nums[startIndex] === 0) {
        map.set(startIndex, Infinity);
        return Infinity;
    }
    if (map.has(startIndex)) {
        return map.get(startIndex);
    }
    if (nums.length <= nums[startIndex] + startIndex + 1) {
        map.set(startIndex, 1);
        return 1;
    }

    const endIndex = startIndex + nums[startIndex] < nums.length ? startIndex + nums[startIndex] : nums.length - 1
    const possibleJumps = nums.slice(startIndex + 1, endIndex);
    let minimumJump = 1 + jumpRecursive(nums, endIndex, map);
    for (let i = 0; i < possibleJumps.length; i++) {
        if (map.has(startIndex + 1 + i)) {
            const tempAns = 1 + map.get(startIndex + 1 + i);
            if (tempAns < minimumJump) {
                minimumJump = tempAns;
            }
        } else {
            const tempAns = 1 + jumpRecursive(nums, (startIndex + 1 + i), map)
            if (tempAns < minimumJump) {
                minimumJump = tempAns;
            }
        }

    }
    map.set(startIndex, minimumJump);
    return minimumJump;

};

var jumpTest = function(nums) {
    let jump = 0;
    let step = 0;
    let max = 0;
    for(let i = 0; i < nums.length-1; i++) {
        max = Math.max(max,i+nums[i]);
        if(max <= i ) {
            return -1;
        }
        if(i === step) {
            jump++;
            step = max;
        }
    }
    return jump;
};
console.log(`The answer is ${jumpTest([3,1,9,0,4,4,8,4,7,0,8,4,3,1,2])}`)

