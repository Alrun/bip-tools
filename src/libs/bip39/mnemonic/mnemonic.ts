import { binToHex, bufferToHex, hexToBin, sha256, strToChunks } from '../../../utils/crypto/crypto';
import enWordList from '../wordlists/english';

export const wordCountList = [12, 15, 18, 21, 24] as const;

/**
 * Gets mnemonic list with checksum.
 *
 * @param {string} entropy Entropy in hex.
 */
export const getMnemonicList = (entropy: string) => {
    if (entropy) {
        const raw = hexToBin(entropy);
        const list = strToChunks(raw, 11);
        // Calculate checksum
        const listLastItem = list[list.length - 1];
        const strChunkList = strToChunks(entropy, 2, '0');
        const hexChunkList = strChunkList.map((item) => parseInt(item, 16));
        const hexByteArray = new Uint8Array(hexChunkList);
        const digest = sha256(hexByteArray);
        const hexChecksum = bufferToHex(new Uint8Array(digest));
        const binChecksum = hexToBin(hexChecksum);

        const checksum = listLastItem.length !== 11 ? binChecksum.slice(listLastItem.length - 11) : '';

        list[list.length - 1] = `${listLastItem}${binChecksum}`.slice(0, 11);

        return { list, raw, checksum };
    }

    return { list: [], raw: '', checksum: '' };
};

/**
 * Gets the decimal index of a word from a binary value.
 *
 * @param {string} bin Binary value.
 */
export const getIndex = (bin: string) => parseInt(bin, 2);

/**
 * Get a word from a wordlist by its index.
 *
 * @param {string} bin Binary value.
 */
export const getWord = (bin: string) => enWordList[parseInt(bin, 2)];

/**
 * Extracts entropy from mnemonic phrase words.
 *
 * @param words Mnemonic phrase words.
 */
export const extractEntropy = (words: string[]) => {
    const indexList: number[] = words.map((item) => enWordList.indexOf(item)).filter((item) => item !== -1);
    const rawBinList = indexList.map((item) => item.toString(2).padStart(11, '0'));
    const binEntropyStr = rawBinList.join('').slice(0, 256);
    const binEntropy = binEntropyStr.slice(0, Math.trunc(binEntropyStr.length / 8) * 8);
    const hexEntropy = binToHex(binEntropy);

    return { binEntropy, hexEntropy, rawBinList };
};
