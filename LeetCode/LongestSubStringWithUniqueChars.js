/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {

    let maxLength = 0;
    let startIndex = 0;
    let endIndex = 0;
    const map = new Map();
    for (let i=0;i<s.length; i++) {
        if(map.has(s[i])){
            const lastIndex = map.get(s[i]);
            if(lastIndex>=startIndex){
                startIndex = lastIndex +1;
            }
            endIndex= i+1;
            maxLength = Math.max(maxLength,endIndex-startIndex);
            map.set(s[i],i);
            console.log("Element already in map",i, s[i], lastIndex,startIndex, endIndex,maxLength)
        }else{
            map.set(s[i],i);
            endIndex+=1;
            maxLength = Math.max(maxLength,endIndex-startIndex);
            console.log("Element not in map",i, s[i], startIndex, endIndex, maxLength)
        }


    }

    console.log("Final Strings",maxLength);
    return maxLength;


};
//abcadebb
lengthOfLongestSubstring("dvdf");
//lengthOfLongestSubstring("dvdf");