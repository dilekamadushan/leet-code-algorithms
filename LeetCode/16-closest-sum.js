/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    const size = nums.length;
    console.log("Sorted array" + nums)

    let minDifference = null
    let maxSum = null;


    for (let i = 0; i <= size; i++) {
        for (let j = i + 1; j <= size; j++) {
            let previousDifference = null;
            for (let k = j + 1; k <= size; k++) {
                const tempSum = nums[i] + nums[j] + nums[k];
                const tempDifference = Math.abs(target - tempSum);
                if (minDifference === null || tempDifference < minDifference) {
                    minDifference = tempDifference
                    maxSum = tempSum;
                    previousDifference = tempDifference;
                    // console.log(i,j,k,nums[i],nums[j],nums[k])

                } else if (previousDifference !== null && tempDifference > previousDifference) {
                    console.log("returning", maxSum, tempSum, minDifference, tempDifference, i, j, k)
                    break;
                }
            }
        }

    }
    return maxSum;

};

console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82))
