/**
 *
 * @param {string[]} nums
 * @return void
 *
 * subarrays could be defined as a recursive function
 * S(n) = nums[n] + S(n-1)
 */
const getSubArrays = nums => {
    const results = [];
    getSubArraysRecursively(nums,results,0)
    results.push([]);
    console.log(results);
}

const getSubArraysRecursively = (nums,result, start) => {
    if(start===nums.length-1) {
        result.push([nums[nums.length-1]]);
        return;
    }
    /**
     * The number of sub-arrays from the current element to the end index of the array is equal when you include the current
     * element in all the sub-arrays  generated from the next element to the last index of the array
     *
     */
    getSubArraysRecursively(nums, result, start+1)
    const tempResults = [[nums[start]]]
    result.forEach( element => {
        if(element.length>0){
            tempResults.push([nums[start],...element]);
        }
        else{
            tempResults.push([nums[start],element]);
        }

    })
    result.push(...tempResults);

}
getSubArrays([1,2,3,4,5,6])
