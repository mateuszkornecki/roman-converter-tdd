
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
    const roman = [convertionForLesserThanFour(5 - arabic), "V"];
    return roman.join('');
}

const toRoman = (arabic) => {
    let roman = null;
    if (arabic <= 3) {
        roman = convertionForLesserThanFour(arabic);
    }
    else if (arabic <= 5) {
        roman = convertionForHigherThanThreeLesserThanFive(arabic);
    } else if (arabic == 10) {
        roman = "X"
    }
    return roman;
}

export { toRoman };