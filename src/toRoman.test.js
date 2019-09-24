import toRoman from './toRoman';

describe('toRoman', () => {
    it('converts 1 to I', () => {
        expect(toRoman(1)).toEqual("I");
    });
});