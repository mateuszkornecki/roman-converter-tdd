import { convertArabic } from './convertArabic';

const toRoman = (arabic) => {
    let roman = null;
    if (arabic < 40 || arabic == 50) {
        roman = convertArabic(arabic);
    }
    return roman;
}

export { toRoman };