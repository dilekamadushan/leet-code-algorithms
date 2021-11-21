/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack=[];
    const perm = ['(','{','['];
    if (s.length % 2 !== 0) return false;
    for(let i=0;i<s.length;i++){
        if(perm.includes(s[i]) ){
            stack.push(s[i]);
        }
        else{
            const current = stack.pop();
            if(getClosingTag(s[i])!==current){
                return false;
            }
        }

    }
    return stack.length === 0;


};

const getClosingTag=(character)=>{
    if('}'===character) return '{';
    if(')'===character) return '(';
    if(']'===character) return '[';
    return undefined;

}

console.log(isValid('([])'))
