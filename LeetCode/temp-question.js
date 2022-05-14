/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * [4,5,6,7,0,1,2]
 * [5,1,3]
 * [1,3]
 */

var search = function(nums, target) {
    return searchRecursively(nums,target,0,nums.length-1)
};


const searchRecursively = (nums, key, start, end) => {
    if (start > end ) return -1;
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === key) return mid;
    if(nums[mid]<key){
        const index = searchRecursively(nums, key, mid+1, end);
        if (index !== -1) return index;
        return searchRecursively(nums, key, start, mid-1)

    }
    const index = searchRecursively(nums, key, start, mid - 1);
    if (index !== -1) return index;
    return searchRecursively(nums, key, mid + 1, end)
}

console.log(search( [3,4,5,6,1,2],2));

