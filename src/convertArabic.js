const convertArabicLesserThanFour = (arabic) => {
    const roman = [];
    if (arabic > 0) {
        for (let i = 0; arabic - i > 0; i++) {
            roman.push("I");
        }
        return roman.join('');
    } else return null;
}

const convertArabicLesserThanNine = (arabic) => {
    if (arabic > 3) {
        const roman = (arabic - 5 < 0) ? [convertArabicLesserThanFour(5 - arabic), "V"] : ["V", convertArabicLesserThanFour(arabic - 5)];
        return roman.join('');
    } else return convertArabicLesserThanFour(arabic);
}

const convertArabicLesserThanEleven = (arabic) => {
    if (arabic > 8) {
        const roman = [convertArabicLesserThanNine(10 - arabic), "X"];
        return roman.join('');
    }
    else return convertArabicLesserThanNine(arabic);
}

const convertArabicLesserThanTwenty = (arabic) => {
    if (arabic > 10) {
        const roman = ["X", convertArabicLesserThanEleven(arabic - 10)]
        return roman.join('');
    } else return convertArabicLesserThanEleven(arabic);
}

const convertArabicLesserThanFourty = (arabic) => {
    if (arabic > 20) {
        const roman = ["XX", convertArabicLesserThanTwenty(arabic - 20)];
        return roman.join('');
    } else return convertArabicLesserThanTwenty(arabic);
}

const convertArabicLesserThanFiftyOne = (arabic) => {
    if (arabic > 39) {
        const roman = ["X", "L", convertArabicLesserThanFourty(arabic + 10 - 50)];
        return roman.join('');
    } else return convertArabicLesserThanFourty(arabic);
}

const convertArabicLesserThanNinety = (arabic) => {
    if (arabic > 49) {
        const roman = ["L", convertArabicLesserThanFiftyOne(arabic - 50)];
        return roman.join('');
    } else return convertArabicLesserThanFiftyOne(arabic);
}

const convertArabicLesserThanHundred = (arabic) => {
    if (arabic > 89) {
        const roman = ["X", "C", convertArabicLesserThanFourty(arabic + 10 - 100)];
        return roman.join('');
    } else return convertArabicLesserThanNinety(arabic);
}

const convertArabicEqualHundred = (arabic) => {
    if (arabic > 99) {
        const roman = ["C", convertArabicLesserThanFourty(arabic - 100)];
        return roman.join('');
    } else return convertArabicLesserThanHundred(arabic);
}

const convertArabic = convertArabicEqualHundred;
export { convertArabic };