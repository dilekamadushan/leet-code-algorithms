/**
 * @param {number} number
 * @return {number} 123
 */
var reverse = function(number) {
    let reverse=0;
    const originalSign = number<0? -1:1;
    console.log("originalSign", originalSign)
    number =number * originalSign;
    console.log("number", number)
    while(number>0){
        const multiplier = Math.floor(Math.log(number)/Math.log(10))
        reverse += (number%10)* Math.pow(10,multiplier);
        console.log("reverse", reverse);
        number = Math.floor(number/10)
    }
    if(reverse> 2147483647) return 0;
   return reverse * originalSign;

};

console.log(reverse(-123));