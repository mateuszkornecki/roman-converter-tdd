const convertArabic = (arabic) => {
    let roman = [];
    switch (true) {
        case (arabic > 0 && arabic < 4):
            for (let i = 0; arabic - i > 0; i++) {
                roman.push("I");
            }
            break;
        case arabic >= 4 && arabic < 9:
            roman = (arabic - 5 < 0) ? [convertArabic(5 - arabic), "V"] : ["V", convertArabic(arabic - 5)];
            break;
        case arabic >= 9 && arabic < 11:
            roman = [convertArabic(10 - arabic), "X"];
            break;
        case arabic > 11 && arabic < 20:
            roman = ["X", convertArabic(arabic - 10)];
            break;
        case arabic >= 20 && arabic < 40:
            roman = ["XX", convertArabic(arabic - 20)];
            break;
        case arabic >= 40 && arabic < 50:
            roman = ["X", "L", convertArabic(arabic + 10 - 50)];
            break;
        case arabic >= 50 && arabic < 90:
            roman = ["L", convertArabic(arabic - 50)];
            break;
        case arabic >= 90 && arabic < 100:
            roman = ["X", "C", convertArabic(arabic + 10 - 100)];
            break;
        case arabic >= 100 && arabic < 400:
            roman = ["C", convertArabic(arabic - 100)];
            break;
        case arabic >= 400 && arabic < 500:
            roman = ["C", "D", convertArabic(arabic + 100 - 500)];
            break;
        case arabic >= 500 && arabic < 900:
            roman = ["D", convertArabic(arabic - 500)];
            break;
        case arabic >= 900 && arabic < 1000:
            roman = ["C", "M", convertArabic(arabic + 100 - 1000)];
            break;
        case arabic >= 1000 && arabic < 4000:
            roman = ["M", convertArabic(arabic - 1000)];
            break;
        default:
            return null;
    }
    return roman.join('');
}

export { convertArabic };