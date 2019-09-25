import { convertArabic } from './convertArabic';

const toRoman = (arabic) => {
    let roman = null;
    if (arabic < 400) {
        roman = convertArabic(arabic);
    }
    return roman;
}

export { toRoman };