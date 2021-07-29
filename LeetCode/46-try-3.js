/**
 * @param {number[]} nums
 * @return {number[][]} //[1,2,3]  [1,2,3] [1,3,2] [2,1,3] [2,3,1] [3,1,2] [3,2,1]
 */
var permute = function (nums) {
    return swap(nums, 0, []);
};

const swap = (nums) => {
    console.log("start", nums)
    if (nums.length === 0) {
        return nums;
    }
    if (nums.length === 1) {
        return [nums];
    }

    const first = [nums[0]]
    console.log("first", first)
    const rest = swap(nums.slice(1))
    console.log("rest", rest)
    const solutions = []
    for (let i = 0; i < rest.length; i++) {
        const temp = rest[i]
        console.log("temp", temp)
        solutions.push([...first,...temp])
        for (let j = 0; j < temp.length; j++) {
            const left = temp.slice(0,j+1);
            const right = temp.slice(j+1)
            const newAns = [...left,...first,...right]
            console.log("new ans", newAns)
            solutions.push(newAns)

        }
    }
    return solutions;

}

console.log(permute([]));

//[1,2,3]
/// 1,2,3 1,3,2
