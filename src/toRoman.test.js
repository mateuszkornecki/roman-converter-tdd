import { toRoman } from './toRoman';

describe('toRoman', () => {

    it.each([
        [1, "I"],
        [2, "II"],
        [3, "III"],
        [4, "IV"],
        [5, "V"],
        [8, "VIII"],
        [9, "IX"],
        [10, "X"],
        [19, "XIX"],
        [20, "XX"],
        [39, "XXXIX"],
        [40, "XL"],
        [49, "XLIX"],
        [50, "L"],
        [51, "LI"],
        [89, "LXXXIX"],
        [99, "XCIX"],
        [100, "C"],
        [399, "CCCXCIX"]

    ])('converts %d to %s',
        (arabic, expectedRoman) => {
            expect(toRoman(arabic)).toEqual(expectedRoman);
        }
    );

    it('does not convert 0 to any roman number ', () => {
        expect(toRoman(0)).toEqual(null);
    });
});