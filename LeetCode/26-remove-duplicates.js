/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const map = new Map()
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            nums[k] = nums[i];
            map.set(nums[i], nums[i]);
            k += 1
        }
    }
    return k;

};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums))
console.log(nums)
