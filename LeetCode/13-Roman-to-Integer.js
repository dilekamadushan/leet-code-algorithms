var romanToInt = function (s) {
    let i = s.length - 2
    let current = convertToInteger(s[s.length - 1])
    let sum = current;
    while (i >= 0) {
        let next = convertToInteger(s[i]);
        if (next < current) {
            sum = sum - next;
        } else {
            sum = sum + next
            current = next
        }

        i--;
    }
    return sum;

};

const convertToInteger = (roman) => {
    switch (roman) {
        case "I":
            value = 1
            break;
        case "V":
            value = 5
            break;
        case "X":
            value = 10
            break;
        case "L":
            value = 50
            break;
        case "C":
            value = 100
            break;
        case "D":
            value = 500
            break;
        case "M":
            value = 1000
            break;
        default:
            value = 0;
    }
    return value;
}

console.log(romanToInt("LXXVIII"));
