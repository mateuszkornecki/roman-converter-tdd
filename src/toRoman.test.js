import { toRoman } from './toRoman';

describe('toRoman', () => {

    it.each([
        [1, "I"],
        [2, "II"],
        [5, "V"],
        [10, "X"]
    ])('converts %d to %s',
        (arabic, expectedRoman) => {
            expect(toRoman(arabic)).toEqual(expectedRoman);
        }
    );

    it('does not convert 0 to any roman number ', () => {
        expect(toRoman(0)).toEqual(null);
    });
});