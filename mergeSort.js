const mergeSort = (n)=>{
    if(n.length===1) return n;
    const a = mergeSort(n.slice(0,n.length/2))
    const b = mergeSort(n.slice(n.length/2,n.length))
    return merge(a,b)
}

const merge =(a,b)=>{
    let i=0,j=0;
    const c =[];
    while (i<a.length && j< b.length){
        if(a[i]<b[j]){
            c.push(a[i]);
            i++;
        }
        else{
            c.push(b[j]);
            j++
        }
    }

    while(i<a.length){
        c.push(a[i]);
        i++
    }
    while(j<b.length){
        c.push(b[j]);
        j++
    }
    return c;
}

console.log(mergeSort([1,3,7,5,4,0,-3]))

/*
[[1,2,3]
[4,5,6]
[7,8,9]

[[1,2,3]
[4,5,6]
[7,8,9]
 */

const multiply=(a,b)=>{
    const c = []
    let row = []
    for(let i= 0;i<a.length;i++){
        c[i][j] = 0
        for(let j=0;j<a[i].length;j++){
            for(let k=0;k<b.length<;k++){
                c[i][j] += a[i][k] * b[k][j]
            }
            row.push(sum);
        }
        ans.push(row);

    }
    return ans;
}
