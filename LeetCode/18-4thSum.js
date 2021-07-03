/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums=nums.sort((a, b) => a - b)
    const size = nums.length;
    const answers = new Set();

    for(let i=0; i<size; i++ ){
        if(nums[i]===nums[i-1]){
            continue;
        }
        for (let j = i+1; j<size;j++){
            for (let k= j+1; k<size; k++){
                const temp = target - (nums[i]+nums[j]+nums[k])
                if(temp<nums[k]) continue;
                const index = bSearch(nums,temp,k+1,size-1)
                if(index!==-1){

                    answers.add(JSON.stringify([nums[i],nums[j],nums[k],temp]))
                }

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
let arr = [2,2,2,2,2];
let target = 8;
console.log("Final Answer",fourSum(arr,target));

