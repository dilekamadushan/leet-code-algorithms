/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {string}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let i=0;
    let j=0;
    const mergedArray = [];

    while (i< nums1.length || j < nums2.length) {
        console.log("in else "+i+" "+j+" "+mergedArray.toString());
        if(i ===nums1.length){
            mergedArray.push(nums2[j]);
            j++;
        }
        else if(j ===nums2.length){
            mergedArray.push(nums1[i]);
            i++;
            console.log("array2 has ended")
        }
        else if (i< nums1.length && j < nums2.length && nums1[i]<= nums2[j]){
                mergedArray.push(nums1[i]);
                i++
        }
        else if(i< nums1.length && j < nums2.length && nums1[i]> nums2[j]){
            mergedArray.push(nums2[j]);
            j++

        }


    }
    if(mergedArray.length%2 ===1){
        console.log("returning "+mergedArray.toString());
        const median = (mergedArray.length+1)/2;
        const ans = mergedArray [median-1];
        return ans.toFixed(4);
    }
    const median = mergedArray.length/2;
    console.log("returning "+mergedArray.length+" "+median);
    const  ans =  (mergedArray[median-1]+ mergedArray[median])/2;
    return ans.toFixed(4);


};

 const answer = findMedianSortedArrays([0,0],[0,0]);
 console.log(answer);
