import { convertArabic } from './convertArabic';

const toRoman = (arabic) => {
    let roman = null;
    if (arabic > 0 && arabic < 4000) {
        roman = convertArabic(arabic);
    }
    else alert("the converter supports numbers from 1 to 3999");
    return roman;
}

export { toRoman };