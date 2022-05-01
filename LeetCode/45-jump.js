/**
 * @param {number[]} nums
 * @return {number}
 * nums = [2,3,1,1,4]
 */
var jump = function (nums) {
    // if only one element no need to jump
    if (!nums || nums.length === 1 || nums.length === 0) return 0;
    if (nums[0] === 0) return Infinity;
    let totalJumps = 0;
    let currentStep = 0;
    // if he can jump with the current step
    if (nums.length - 1 <= nums[0]) return 1;
    const maxLength = nums.length;
    let isFinished = false;
    while (!isFinished) {
        if (nums[currentStep] === 1) {
            currentStep++;
        } else if (nums[currentStep] === 0) return Infinity;
        else {
            const possibleJumps = nums.slice(currentStep + 1, currentStep + 1 + nums[currentStep]);
            let minimumJump = totalJumps + 1 + jump(nums.slice(currentStep + nums[currentStep]));
            for (let i = 0; i < possibleJumps.length; i++) {
                const tempAns = totalJumps + 1 + jump(nums.slice(currentStep + 1 + i))
                if (tempAns < minimumJump) {
                    minimumJump = tempAns;
                }
            }
            return minimumJump;
        }

        totalJumps++;

        const maxJumpPossible = nums [currentStep];
        if (!maxJumpPossible) {
            isFinished = false;
            totalJumps++
            break;
        }
        if (maxJumpPossible > (maxLength - (currentStep + 1))) {
            isFinished = false;
            totalJumps++
            break;
        }
        if (maxJumpPossible === (maxLength - (currentStep + 1))) {
            isFinished = false;
            totalJumps++
            break;
        }


    }

    return totalJumps;

};

console.log(jump([5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]))
