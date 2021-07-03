const countPalindromes = (string)=>{
    let sum =0;

    for(let i=0;i<string.length;i++){
        const remainingString = string.substring(i, string.length);
        console.log("Passing strings:"+remainingString);
        for(let j=1; j<remainingString.length+1; j++){
            const checkString = remainingString.substring(0,j);
            console.log("Checking palindrome for string "+checkString);
            if(checkPalindrome(checkString)){
                console.log("Palindrome found:"+checkString);
                sum+=1;
            }
        }

    }
    return sum;

};

const checkPalindrome = (string) =>{

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string === reverseString) {
        console.log('It is a palindrome');
        return true;
    }
    console.log('It is not a palindrome');
    return false;
};



const string = "abaab";
const number = countPalindromes(string);
console.log("The number of palindromes "+number);