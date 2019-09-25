import { convertArabic } from './convertArabic';

const toRoman = (arabic) => {
    let roman = null;
    if (arabic < 4000) {
        roman = convertArabic(arabic);
    }
    return roman;
}

export { toRoman };