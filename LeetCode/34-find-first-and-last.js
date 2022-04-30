/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * [1,2,3]
 */
var searchRange = function (nums, target) {
    if (nums.length === 0) return [-1, -1]
    const indexes = [-1, -1]
    binarySearch(nums, target, 0, nums.length, indexes)
    return indexes;


};

const binarySearch = (nums, target, start, end, indexes) => {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] > target) return binarySearch(nums, target, start, mid, indexes)
    if (nums[mid] < target) return binarySearch(nums, target, mid + 1, end, indexes);
    if (indexes[0] === -1) {
        indexes [0] = mid;
        indexes [1] = mid;
        binarySearch(nums, target, 0, mid, indexes);
        binarySearch(nums, target, mid + 1, end, indexes)
        return;
    }
    if (mid < indexes[0]) {
        indexes[0] = mid;
        binarySearch(nums, target, 0, mid, indexes);
    }
    if (mid > indexes[1]) {
        indexes[1] = mid;
        binarySearch(nums, target, mid + 1, end, indexes);

    }
}

console.log(searchRange([5,7,7,8,8,10], 8));
