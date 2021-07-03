/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    const min =  strs.reduce((a, b) => a.length <= b.length ? a : b)
    console.log("min "+min);
    let commonPrefix ="";
    let temp='';
    for(let i=0;i< min.length; i++){
        temp +=min[i];

        const element = strs.find(s => !(s.includes(temp) && 0===s.indexOf(temp)));

        if(!element){
            commonPrefix+=min[i];
        }
        else {
            console.log("No common prefix:"+commonPrefix);
            return commonPrefix
        }

    }
    return commonPrefix;

};

console.log(longestCommonPrefix(["flower","flow","flight",""]));

