
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
    } else {
        return convertArabicLesserThanFour(arabic);
    }
}

// const convertArabicBetweenNineAndTen = (arabic) => {
//     const roman = 
// }

const toRoman = (arabic) => {
    let roman = null;
    if (arabic <= 8) {
        roman = convertArabicLesserThanNine(arabic);
    } else if (arabic == 10) {
        roman = "X"
    }
    return roman;
}

export { toRoman };