var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i< nums.length; i++){
        let checkValue = target - nums[i];
        if(map.has(checkValue)){
            return [map.get(checkValue), i]
        }
        else {
            map.set(nums[i],i);
        }
    }
    return undefined;
};

const answer = twoSum([3,3], 6);
console.log(answer);