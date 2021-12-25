/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    return converter(num, "");
};

const converter = (number, answer) => {
    if (number >= 1000) {
        const digits = Math.floor(number / 1000);
        answer += stringConcatenation(digits, "M")
        number = number % 1000;
    }
    // 100th place
    if (100<=number && number<400) {
        const digits = Math.floor(number/100);
        answer += stringConcatenation(digits, "C")
        number = number %100;
    }
    if (400 <= number && number<500) {
        answer+="CD"
        number = number % 100;
    }

    if (500<=number && number<900) {
        const digits = Math.floor((number-500)/100);
        answer+="D"
        answer += stringConcatenation(digits, "C")
        number = number %100;
    }

    if (900 <= number) {
        answer+="CM"
        number = number %100;
    }
    // 10th place

    if (10 <= number && number<40) {
        const digits = Math.floor(number / 10);
        answer += stringConcatenation(digits, "X")
        number = number%10;
    }
    if (40 <= number && number<50) {
        answer += "XL"
        number = number%10;
    }
    if (50 <= number && number<90) {
        const digits = Math.floor((number-50) / 10);
        answer+="L"
        answer += stringConcatenation(digits, "X")
        number = number%10;
    }
    if (90 <= number) {
        answer+="XC"
        number = number%10;
    }

    // unit place
    if (1 <= number && number<4) {
        answer += stringConcatenation(number, "I")
    }
    if (4 <= number && number<5) {
        answer += "IV"
    }
    if (5 <= number && number<9) {
        const digits = Math.floor((number-5) );
        answer+="V"
        answer += stringConcatenation(digits, "I")
    }
    if (9 <= number) {
        answer+="IX"
    }
    return answer;
}

const stringConcatenation = (number, letter) => {
    let final = '';
    for (let i = 0; i < number; i++) {
        final += letter;
    }
    return final;
}

console.log(intToRoman(1000));