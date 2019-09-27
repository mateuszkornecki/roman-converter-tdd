const toRoman = (arabic) => {
    let roman = [];
    const uniquePairs =
    {
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

    switch (true) {
        case arabic >= arabicNumbers[0] && arabic < 4000:
            roman = [romanNumbers[0], toRoman(arabic - arabicNumbers[0])];
            break;
        case arabic >= arabicNumbers[1]:
            roman = [romanNumbers[1], toRoman(arabic - arabicNumbers[1])];
            break;
        case arabic >= arabicNumbers[2]:
            roman = [romanNumbers[2], toRoman(arabic - arabicNumbers[2])];
            break;
        case arabic >= arabicNumbers[3]:
            roman = [romanNumbers[3], toRoman(arabic - arabicNumbers[3])];
            break;
        case arabic >= arabicNumbers[4]:
            roman = [romanNumbers[4], toRoman(arabic - arabicNumbers[4])];
            break;
        case arabic >= arabicNumbers[5]:
            roman = [romanNumbers[5], toRoman(arabic - arabicNumbers[5])];
            break;
        case arabic >= arabicNumbers[6]:
            roman = [romanNumbers[6], toRoman(arabic - arabicNumbers[6])];
            break;
        case arabic >= arabicNumbers[7]:
            roman = [romanNumbers[7], toRoman(arabic - arabicNumbers[7])];
            break;
        case arabic >= arabicNumbers[8]:
            roman = [romanNumbers[8], toRoman(arabic - arabicNumbers[8])];
            break;
        case arabic >= arabicNumbers[9]:
            roman = [romanNumbers[9], toRoman(arabic - arabicNumbers[9])];
            break;
        case arabic >= arabicNumbers[10]:
            roman = [romanNumbers[10]];
            break;
        case arabic >= arabicNumbers[11]:
            roman = [romanNumbers[11], toRoman(arabic - arabicNumbers[11])];
            break;
        case arabic >= arabicNumbers[12]:
            roman = [romanNumbers[12]];
            break;
        case arabic >= arabicNumbers[13]:
            roman = [romanNumbers[13]];
            break;
        case arabic >= arabicNumbers[14]:
            roman = [romanNumbers[14]];
            break;
        case arabic >= arabicNumbers[15]:
            roman = [romanNumbers[15]];
            break;
        default:
            return null;
    }
    return roman.join('');
}

export { toRoman };