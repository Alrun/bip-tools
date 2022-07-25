import getSeed from './seed';

describe('generateMasterKeys', () => {
    it('should return the seed from the passed phrase', () => {
        const seed = getSeed('afraid consider example arctic embody legend wide rebuild whisper medal tomato minute');

        expect(seed).toBe('c2a939ac9881088eccf13774af5145a864bbfa66e9a46b51b80cc1a9c0ce3b088773eb347bf34840fe162c992fe866f06eccacb500ff75322c46fed75438dee0');
    });
});
