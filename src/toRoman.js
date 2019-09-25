
const convertionForLesserThanFour = (arabic) => {
    const roman = [];
    if (arabic > 0) {
        for (let i = 0; arabic - i > 0; i++) {
            roman.push("I");
        }
        return roman.join('');
    } else return null;
}

const convertionForHigherThanThreeLesserThanFive = (arabic) => {
    const roman = (arabic - 5 < 0) ? [convertionForLesserThanFour(5 - arabic), "V"] : ["V", convertionForLesserThanFour(arabic - 5)];
    return roman.join('');
}

const toRoman = (arabic) => {
    let roman = null;
    if (arabic <= 3) {
        roman = convertionForLesserThanFour(arabic);
    }
    else if (arabic <= 8) {
        roman = convertionForHigherThanThreeLesserThanFive(arabic);
    } else if (arabic == 10) {
        roman = "X"
    }
    return roman;
}

export { toRoman };