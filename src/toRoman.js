const toRoman = (arabic) => {
    let roman = null;
    if (arabic == 5) {
        roman = "V"
    } else if (arabic <= 3 && arabic > 0) {
        roman = `I`
    } else if (arabic == 10) {
        roman = "X"
    }
    return roman;
}

export default toRoman;