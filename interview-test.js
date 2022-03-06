/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target,suffix) {
    if(nums.length===0) return -1;
    const mid = Math.floor((nums.length)/2);
    const temp = nums[mid]
    if(temp === target) return suffix+mid;
    if(nums.length === 1) return -1;
    if (temp< target) return search(nums.slice(mid+1, nums.length), target,suffix+mid+1)
    return search(nums.slice(0,mid), target,suffix)
};
//console.log(search([-1,0,3,5,9,12], 9,0))

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0;
        let right = n;
        while(true){
            const mid = Math.floor((left+right)/2);
            if(isBadVersion(mid) && !isBadVersion(mid+1) )return mid;
            if(isBadVersion(mid)) {
                left = mid+1;
            }
            if(!isBadVersion(mid)){
                left = mid +1
            }
            else {
                right = mid+1;
            }

        }

    };
};

const innerFunction =  (n, isBadVersion)=> {
    let left = 0;
    let right = n;
    while(true){
        const mid = Math.floor((left+right)/2);
        if(isBadVersion(mid) && !isBadVersion(mid+1) )return mid;
        if(isBadVersion(mid)) {
            left = mid+1;
        }
        if(!isBadVersion(mid)){
            left = mid +1
        }
        else {
            right = mid+1;
        }

    }

};
/*const isBadVersion =(n) => n===1;
console.log(innerFunction(1,isBadVersion));*/

const isBadVersion =(n) => n===500;
const ans = solution(isBadVersion);
console.log(ans(1000))
