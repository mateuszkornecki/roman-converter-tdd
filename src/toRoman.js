import { convertArabic } from './convertArabic';

const toRoman = (arabic) => {
    let roman = null;
    if (arabic < 100) {
        roman = convertArabic(arabic);
    }
    return roman;
}

export { toRoman };