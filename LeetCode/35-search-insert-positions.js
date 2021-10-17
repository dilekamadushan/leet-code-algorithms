/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    return binarySearch(0, nums.length, nums, target)
};

const binarySearch = (i, k, nums, target) => {
    console.log(i, k, nums, target);
    if (k - i === 1 && nums[i] === target) {
        return i;
    }
    if (k - i === 1 && target < nums[i]) {
        return i - 1 < 0 ? 0 : i - 1;
    }
    if (k - i === 1) {
        return i + 1;
    }

    const pivot = Math.floor((k + i) / 2)
    console.log("pivot:" + pivot + " " + nums[pivot]);
    if (nums[pivot] === target) return pivot;
    if (target < nums[pivot]) return binarySearch(i, pivot, nums, target)
    return binarySearch(pivot, k, nums, target)

}

console.log(searchInsert([1, 3, 5, 8], 9))
