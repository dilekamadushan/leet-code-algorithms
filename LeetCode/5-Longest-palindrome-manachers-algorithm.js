

/* C = centre of the main palindrome
   R = right boundary of the main palindrome
   mirr =  mirror location for i
 */

const Manacher = (T) => {
    const P = new Array(T.length);
    console.log(P);
    let C = 0;
    let R =0;


    for(let i =1; i< T.length-1; i++){
        P[i]=0;
        const mirror = (2*C)-i;
        if(i<R){
            P[i] = Math.min(R-i,P[mirror]);
        }

        console.log("start while",T[i+(1+P[i])],T[i-(1+P[i])],P[i]);
        while (T[i+(1+P[i])] === T[i-(1+P[i])] && T[i+(1+P[i])] !==undefined && T[i-(1+P[i])]!==undefined){
            P[i]++;
            console.log("while",T[i+(1+P[i])],T[i-(1+P[i])],P[i],i);

           // if(P[i]===5) break;
        }

        if(i+P[i] > R){
            C = i;
            R = i + P[i];
        }


    }

    return P.toString();
};

const fillInString= (string)=>{
    const start ="$#";
    const end = "@";
    let formattedString = '';
    for (let i=0;i<string.length; i++){
            const temp = string[i]+"#";
            formattedString+=temp;

    }

    return start+formattedString+end;


};

const formattedString = fillInString("ABABABA");
console.log("Formatted String:",formattedString);

console.log(Manacher(formattedString));