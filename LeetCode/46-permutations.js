/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    return swap(nums,0,[])
};

const swap = (nums,index,solutions)=>{
    if(nums.length === index){
        return solutions;
    }

    let tempNums = [...nums];
    if(index!==0){
        const tempOne = tempNums[index];
        tempNums[index] = tempNums[0];
        tempNums[0] = tempOne;
    }
    solutions.push([...tempNums]);
    console.log("pushing",solutions)
    const tempOriginal = [...tempNums];
    for (let i=1;i<tempNums.length-1;i++){
            const temp = tempNums[i]
            tempNums[i] = tempNums[i+1];
            tempNums[i+1] = temp;
            console.log("pushing",tempNums,i,solutions)
            solutions.push([...tempNums]);
            tempNums = [...tempOriginal]

    }
    return swap(nums,index+1,solutions);

}

console.log(permute([1,2,3]))

//[1,2,3]
/// 1,2,3 1,3,2
