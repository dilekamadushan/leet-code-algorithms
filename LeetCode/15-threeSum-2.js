/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums=nums.sort((a, b) => a - b)
    const size = nums.length;

    const answers = new Set();

    for(let i=0; i<=size;i++){
        for( let j=i+1; j<=size; j++) {
            const currentSum = nums[i]+nums[j]
            if((0-currentSum)<nums[j]) continue;
            const index = bSearch(nums,0-currentSum,j+1,size-1)
            if(index!==-1){
                let temp =[nums[i],nums[j],0-currentSum];
                answers.add(JSON.stringify(temp));
            }

        }
    }

    return Array.from(answers, JSON.parse)

};

const bSearch= (arr, x, start, end)=> {

    // Base Condition
    if (start > end) return -1;

    // Find the middle index
    let mid=Math.floor((start + end)/2);

    // Compare mid with given key x
    if (arr[mid]===x) return mid;

    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return bSearch(arr, x, start, mid-1);
    else

        // If element at mid is smaller than x,
        // search in the right half of mid
        return bSearch(arr, x, mid+1, end);
}
