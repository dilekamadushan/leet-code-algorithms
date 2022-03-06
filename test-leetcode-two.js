var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        console.log(1)
        let left = 0;
        let right = n;
        console.log(2)
        while(true){
            console.log(3)
            const mid = Math.floor((left+right)/2);
            if(isBadVersion(mid) && !isBadVersion(mid+1) )return mid;
            console.log(4)
            if(isBadVersion(mid)) {
                left = mid+1;
            }
            console.log(5)
            if(!isBadVersion(mid)){
                left = mid +1
            }
            else {
                right = mid+1;
            }
            console.log(6)

        }

    };
};

const isBadVersion =(n) => n===4;
const ans = solution(isBadVersion);
console.log("finally",ans(5))
