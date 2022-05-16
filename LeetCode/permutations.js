/**
 * @param {number []} nums
 */

const showPermutations = (nums) => {
    const results = [nums];
    recursivePerm(nums, results, nums.length - 2, 0);
    console.log(results);
    console.log(results.length)
}

const recursivePerm = (nums, results, start, finish) => {
    if (start < finish || start > nums.length - 1) return;
    if (start === nums.length - 2) {
        const length = nums.length;
        const temp = [...nums];
        swap(temp, results, length - 2, length - 1);
        return recursivePerm(nums, results, start - 1, finish);
    }

    for (let end = start + 1; end < nums.length; end++) {
        const temp = [...nums];
        swap(temp, results, start, end);
        recursivePerm(temp, results, nums.length - 2, start+1);
    }
    recursivePerm(nums, results, start - 1, finish);

}

const swap = (nums, results, start, end) => {
    const temp = nums[start];
    nums[start] = nums [end];
    nums[end] = temp;
    results.push(nums);
}
showPermutations([1, 2, 3,4,5,6])
