import { convertArabicLesserThanTwenty } from './convertArabic';

const toRoman = (arabic) => {
    let roman = null;
    if (arabic <= 20) {
        roman = convertArabicLesserThanTwenty(arabic);
    }
    return roman;
}

export { toRoman };