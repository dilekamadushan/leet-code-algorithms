
const binarySearchClosest =(array, value)=>{
    if(value < array[0].amount) {
        return array[0];
    }
    if(value > array[array.length-1].amount) {
        return array[array.length-1];
    }

    let lo = 0;
    let hi = array.length - 1;

    while (lo <= hi) {
        let mid = Math.floor((hi + lo) / 2);

        if (value < array[mid].amount) {
            hi = mid - 1;
        } else if (value > array[mid].amount) {
            lo = mid + 1;
        } else {
            return array[mid];
        }
    }
    // lo == hi + 1
    return (array[lo].amount - value) < (value - array[hi].amount) ? array[lo] : array[hi];
}


const binarySearchClosestDigits =(array, value)=>{
    if(value < array[0]) {
        return array[0];
    }
    if(value > array[array.length-1]) {
        return array[array.length-1];
    }

    let lo = 0;
    let hi = array.length - 1;

    while (lo <= hi) {
        let mid = Math.floor((hi + lo) / 2);

        if (value < array[mid]) {
            hi = mid - 1;
        } else if (value > array[mid]) {
            lo = mid + 1;
        } else {
            return array[mid];
        }
    }
    // lo == hi + 1
    return (array[lo] - value) < (value - array[hi]) ? array[lo] : array[hi];
}
const arr = [{category:1,amount:-150},{category:1,amount:-150},{category:1,amount:-150},{category:1,amount:-150},{category:1,amount:-150},{category:1,amount:-150},{category:1,amount:-150}, {category:2,amount:600}]
//console.log(binarySearchClosest(arr,350));


//const arr = [{category:1,amount:-150},{category:1,amount:-150},{category:1,amount:-150},{category:1,amount:-150},{category:1,amount:-150},{category:1,amount:-150},{category:1,amount:-150}, {category:2,amount:600}]
console.log(binarySearchClosestDigits([2,65,105,120,130],100));

