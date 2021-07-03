

const getSum =(arr)=>{
    return arr.reduce((a,b)=> a+b,0)
};

function calculateLeastSum(arr, n) {
   // console.log(arr,n);

    if (n===0){
        return getSum(arr);
    }
    if(arr.length===1){
        arr[0]= Math.ceil(arr[0]/2);
        return calculateLeastSum(arr, n - 1);
    }
    else {

        const slicedArray = arr.slice(1);
        const firstElement = arr[0];
        arr[0]=Math.ceil(firstElement/2);
        console.log('In final else '+arr[0]+" "+slicedArray);
        const firstMin =calculateLeastSum(arr, n-1);
        console.log('In final else first min'+firstMin);
        const secondMin =firstElement+calculateLeastSum(slicedArray, n);
        console.log('In final else second min'+secondMin);
        return Math.min(firstMin, secondMin);
    }



}

function mainFunction() {

    const arrToBeSumed = calculateLeastSum([100,200,10],3);
    console.log("The Sum:"+arrToBeSumed);

}

mainFunction();
