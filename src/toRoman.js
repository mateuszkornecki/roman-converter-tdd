const toRoman = (arabic) => {
    let roman = [];
    switch (true) {

        case arabic >= 1000 && arabic < 4000:
            roman = ["M", toRoman(arabic - 1000)];
            break;
        case arabic >= 900:
            roman = ["CM", toRoman(arabic - 900)];
            break;
        case arabic >= 500:
            roman = ["D", toRoman(arabic - 500)];
            break;
        case arabic >= 400:
            roman = ["CD", toRoman(arabic - 400)];
            break;
        case arabic >= 100:
            roman = ["C", toRoman(arabic - 100)];
            break;
        case arabic >= 90:
            roman = ["XC", toRoman(arabic - 90)];
            break;
        case arabic >= 50:
            roman = ["L", toRoman(arabic - 50)];
            break;
        case arabic >= 40:
            roman = ["XL", toRoman(arabic - 40)];
            break;
        case arabic >= 20:
            roman = ["XX", toRoman(arabic - 20)];
            break;
        case arabic > 11:
            roman = ["X", toRoman(arabic - 10)];
            break;
        case arabic >= 9:
            roman = [toRoman(10 - arabic), "X"];
            break;
        case arabic >= 5:
            roman = ["V", toRoman(arabic - 5)];
            break;
        case arabic >= 4:
            roman = [toRoman(5 - arabic), "V"];
            break;
        case arabic > 0:
            for (let i = 0; arabic - i > 0; i++) {
                roman.push("I");
            }
            break;
        default:
            return null;
    }
    return roman.join('');
}

export { toRoman };