const toRoman = (arabic) => {
    let roman = [];
    switch (true) {
        case (arabic > 0 && arabic < 4):
            for (let i = 0; arabic - i > 0; i++) {
                roman.push("I");
            }
            break;
        case arabic >= 4 && arabic < 5:
            roman = [toRoman(5 - arabic), "V"];
            break;
        case arabic >= 5 && arabic < 9:
            roman = ["V", toRoman(arabic - 5)];
            break;
        case arabic >= 9 && arabic < 11:
            roman = [toRoman(10 - arabic), "X"];
            break;
        case arabic > 11 && arabic < 20:
            roman = ["X", toRoman(arabic - 10)];
            break;
        case arabic >= 20 && arabic < 40:
            roman = ["XX", toRoman(arabic - 20)];
            break;
        case arabic >= 40 && arabic < 50:
            roman = ["XL", toRoman(arabic + 10 - 50)];
            break;
        case arabic >= 50 && arabic < 90:
            roman = ["L", toRoman(arabic - 50)];
            break;
        case arabic >= 90 && arabic < 100:
            roman = ["XC", toRoman(arabic + 10 - 100)];
            break;
        case arabic >= 100 && arabic < 400:
            roman = ["C", toRoman(arabic - 100)];
            break;
        case arabic >= 400 && arabic < 500:
            roman = ["CD", toRoman(arabic + 100 - 500)];
            break;
        case arabic >= 500 && arabic < 900:
            roman = ["D", toRoman(arabic - 500)];
            break;
        case arabic >= 900 && arabic < 1000:
            roman = ["CM", toRoman(arabic + 100 - 1000)];
            break;
        case arabic >= 1000 && arabic < 4000:
            roman = ["M", toRoman(arabic - 1000)];
            break;
        default:
            return null;
    }
    return roman.join('');
}

export { toRoman };