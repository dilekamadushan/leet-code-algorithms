/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    console.log(x.countDecimals())
    return Math.pow(x,n).toFixed();

};

Number.prototype.countDecimals = function () {
    console.log(Math.floor(this.valueOf()));
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0;
}

console.log(myPow(2,-2));
