
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if(nums == null || nums.length < 3){
        return null;
    }

    nums = nums.sort((a, b) => a - b)
    let bestSum = nums[0]+nums[1]+nums[2]
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        console.log("k value",k)
        while (j < k) {
            console.log("Start of while loop",i, j,k)
            const sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(sum - target) < Math.abs(bestSum - target)) {
                bestSum = sum;
            }
            if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
                console.log("reducing k",k, sum, target)
            } else {
                return target; // we found an exact match
            }
        }
    }
}
console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82))
