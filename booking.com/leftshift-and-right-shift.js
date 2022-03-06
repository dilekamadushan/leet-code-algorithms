// "GeeksforGeeks" -> eeksforGeeksG
// "GeeksforGeeks" -> skGeeksforGee
// abcde -> eabcd->deabc
const shift = (word, left, right) => {
    if (left === right) return word;
    if (left > right) {
        const difference = (left - right) % word.length;
        return word.substring(difference) + word.substring(0, difference);
    }
    const difference = (right - left) % word.length;
    return word.substring(word.length - difference) + word.substring(0, word.length-difference);
}

console.log(shift("abcde",2,4))
