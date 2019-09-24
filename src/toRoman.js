const toRoman = (arabic) => {
    let roman = "none";
    if (arabic == 5) {
        roman = "V"
    } else if (arabic == 1) {
        roman = "I"
    }
    return roman;
}

export default toRoman;