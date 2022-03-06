function getShiftedString(s, leftShifts, rightShifts) {
    // Write your code here
    //abcde.    bcdea
    //edcba

    // cde ab.

    // abcd -> bcd a
    const reversed = getReverse(s);
    const leftSwitchIndex = reversed.length - leftShifts;
    const firstPart = getReverse(reversed.substring(0,leftSwitchIndex))
    const secondPart = getReverse(reversed.substring(leftSwitchIndex,reversed.length))



    const leftPart = firstPart+ secondPart;
    console.log({firstPart, secondPart, leftPart});

    // right shift 2, bcda -> dabc
    const firstRightShiftPart = leftPart.substring(0, rightShifts)
    const secondRightShiftPart = leftPart.substring(rightShifts, leftPart.length)



    const rightShift = secondRightShiftPart + firstRightShiftPart;
    console.log({rightShift});
    return rightShift;
}
