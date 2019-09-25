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

const convertArabicEqualFifty = (arabic) => {
    if (arabic == 50) {
        const roman = "L"
        return roman;
    } else return convertArabicLesserThanFourty(arabic);
}

const convertArabic = convertArabicEqualFifty;
export { convertArabic };