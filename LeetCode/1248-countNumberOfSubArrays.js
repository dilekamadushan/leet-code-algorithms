/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let answer=0;
    nums = transformArray(nums);

    for(let i=0;i<nums.length;i++){
        for (let j=i; j< nums.length;j++){
            console.log(nums.slice(i,j))
            const oddCount = countSum(nums.slice(i,j))
            if (oddCount === k){
                answer+=1;
            }
            if (oddCount>k) break;

        }
    }
    return answer;

};

const transformArray = (arr)=>
     arr.map(num => {
       if (num%2===0){
           return 0
       }
       return 1
   })
;

const countSum = (arr)=>
    arr.filter(num=> num===1).length
;

const countOdd = (arr)=> {
   const count = arr.filter(num => num%2===1).length
    return count;
};

const getFirstIndex = arr =>{
    for(let i=0; i< arr.length;i++){
        if (arr[i]%2===1) return i;
    }
    return undefined;
}

console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2],2));
