const toRoman = (arabic) => {
    const initialValue = arabic;
    let roman = [];
    const uniquePairs =
    {
        2000: "MM",
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        20: "XX",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        3: "III",
        2: "II",
        1: "I"
    }

    const arabicNumbers = Object.keys(uniquePairs).reverse();
    const romanNumbers = Object.values(uniquePairs).reverse();

    arabicNumbers.forEach((number, index) => {
        if (arabic - number >= 0) {
            while (arabic - number >= 0) {
                roman.push(romanNumbers[index]);
                arabic = arabic - number;
            }
        }
    })
    return (initialValue <= 0) ? null : (initialValue >= 4000) ? "please enter number < 4000" : roman.join('');
}

export { toRoman };