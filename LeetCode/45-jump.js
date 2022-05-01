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
    let currentStep = startIndex;

    if (nums[currentStep] === 0) {
        map.set(currentStep, Infinity);
        return Infinity;
    }
    if (map.has(startIndex)) {
        const value = map.get(startIndex)
       // console.log(`the value for ${startIndex} already calculated: ${value}`)
        return value;
    }
    // if he can jump with the current step
    if (nums.length  <= nums[currentStep]+currentStep+1) {
        map.set(currentStep, 1);
        return 1;
    }

    let totalJumps = 0;


    const maxLength = nums.length;
    let isFinished = false;
    while (!isFinished) {
        if (map.has(currentStep)) {
            return map.get(currentStep);
        }
        if (nums[currentStep] === 1) {
            currentStep++;
            totalJumps++;

            const maxJumpPossible = nums [currentStep];
            if (!maxJumpPossible) {
                isFinished = false;
                totalJumps++
                map.set(startIndex, totalJumps);
                return totalJumps;
            }
            if (maxJumpPossible > (maxLength - (currentStep + 1))) {
                isFinished = false;
                totalJumps++
                map.set(startIndex, totalJumps);
                return totalJumps;
            }
            if (maxJumpPossible === (maxLength - (currentStep + 1))) {
                isFinished = false;
                totalJumps++
                map.set(startIndex, totalJumps);
                return totalJumps;
            }
        } else if (nums[currentStep] === 0) {
            map.set(currentStep, Infinity);
            return Infinity;
        } else {
            const endIndex = currentStep + nums[currentStep] < nums.length ? currentStep + nums[currentStep] : nums.length-1
           // console.log(endIndex)
            const possibleJumps = nums.slice(currentStep + 1, endIndex);
            let minimumJump = totalJumps + 1 + jumpRecursive(nums, endIndex, map);
            for (let i = 0; i < possibleJumps.length; i++) {
                if (map.has(currentStep + 1 + i)) {
                    const tempAns = totalJumps+1+ map.get(currentStep + 1 + i);
                    if (tempAns < minimumJump) {
                        minimumJump = tempAns;
                    }
                } else {
                    const tempAns = totalJumps + 1 + jumpRecursive(nums, (currentStep + 1 + i), map)
                    if (tempAns < minimumJump) {
                        minimumJump = tempAns;
                    }
                }

            }
            map.set(startIndex, minimumJump);
            return minimumJump;
        }


    }

    return totalJumps;

};

console.log(`The answer is ${jump([8,6,5,2,1,8,1,8,9,7,1,9,1,0,0,3,2,3,5,8,9,4,3,6,5,9,7,9,9,7,3,0,5,1,4,8,9])}`)
