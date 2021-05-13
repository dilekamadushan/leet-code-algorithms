
let stringArray=["1234","34","56","12","78","5678","7","8"];

function generateSpaces(baseString,i,numberOfSpaces, wordsFound) {
    console.log("Base String"+baseString);

    if (i===stringArray.length || baseString==="") return wordsFound;
    if (stringArray[i]===baseString) return Math.max(1, generateSpaces(baseString,i+1,numberOfSpaces, wordsFound));

    // if the substring is at the end of the base string and there's no space
    if(baseString.endsWith(stringArray[i])){
        let originalString = baseString;
        baseString = baseString.replace(stringArray[i],"");

        return Math.max(generateSpaces(baseString,i+1,numberOfSpaces+1,wordsFound+1), generateSpaces(originalString,i+1,numberOfSpaces,wordsFound));

    }

/*    // if the substring is at the end of the base string and there's a space
    if(baseString.endsWith(stringArray[i]) && baseString.charAt(baseString.indexOf(stringArray[i])-1)===' '){

        return calculateLeastSum(baseString,i+1,numberOfSpaces,wordsFound+1);

    }*/

    // if the substring is at the start of the base string and there's no space at the end of the word
    if(baseString.startsWith(stringArray[i])){
        let originalString = baseString;
        baseString = baseString.replace(stringArray[i],"");

        return Math.max(generateSpaces(baseString,i+1,numberOfSpaces+1,wordsFound+1),generateSpaces(originalString,i+1,numberOfSpaces,wordsFound));

    }

    // if the substring is at the start of the base string and there's a space at the end of the word
    if(baseString.startsWith(stringArray[i]) && baseString.charAt(stringArray[i].length)===' '){

        return generateSpaces(baseString,i+1,numberOfSpaces,wordsFound+1);

    }

    // Two spaces are already there on either side of the string
    if (baseString.includes(" "+stringArray[i]+" ")){
        return generateSpaces(baseString,i+1,numberOfSpaces,wordsFound+1);
    }

    // One space is already there on right side of the string
    if (baseString.includes(stringArray[i]+" ")){
        let originalString = baseString;
        baseString = baseString.replace(stringArray[i]+" "," "+stringArray[i]+" ");

        return Math.max(generateSpaces(baseString,i+1,numberOfSpaces+1,wordsFound+1),generateSpaces(originalString,i+1,numberOfSpaces,wordsFound));
    }

    // One space is already there on left side of the string
    if (baseString.includes(" "+stringArray[i])){
        let originalString = baseString;
        baseString = baseString.replace(" "+stringArray[i]," "+stringArray[i]+" ");

        return Math.max(generateSpaces(baseString,i+1,numberOfSpaces+1,wordsFound+1),generateSpaces(originalString,i+1,numberOfSpaces,wordsFound));
    }

    // Sub string is included but there's no space on either side
    if (baseString.includes(stringArray[i])){
        let originalString = baseString;
        baseString = baseString.replace(stringArray[i]," "+stringArray[i]+" ");

        return Math.max(generateSpaces(baseString,i+1,numberOfSpaces+2,wordsFound+1),generateSpaces(originalString,i+1,numberOfSpaces,wordsFound));
    }

    // the base string doesn't contain the substring
    return generateSpaces(baseString,i+1,numberOfSpaces,wordsFound);


}

function mainFunction() {

    let wordsFound = generateSpaces("12345678",0,0,0);
    console.log("Number of words Found:"+wordsFound);

}

mainFunction();
