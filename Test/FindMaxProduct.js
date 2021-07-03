const findMaxProduct =(arr,i,k) => {
    if(i>arr.length-1) return 0;
    //if(k===0 && i>= arr.length) return 0
    if(k===3) return 0
    return Math.max (arr[i]+findMaxProduct(arr,i+1,k+1),findMaxProduct(arr,i+1,k))

}

const arr = [10,100,1000,5000,3000]

console.log(findMaxProduct(arr,0,0))