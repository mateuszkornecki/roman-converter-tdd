
const convertionForLesserThanFour = (arabic) => {
    const roman = [];
    for (let i = 0; arabic - i > 0; i++) {
        roman.push("I");
    }
    return roman.join('');
}

const toRoman = (arabic) => {
    let roman = null;
    if (arabic > 0 && arabic <= 3) {
        roman = convertionForLesserThanFour(arabic);
    }
    else if (arabic == 5) {
        roman = "V"
    } else if (arabic == 10) {
        roman = "X"
    }
    return roman;
}

export { toRoman };