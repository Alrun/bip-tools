import { hmac } from '@noble/hashes/hmac';
import { pbkdf2 as pbkdf2Noble, Pbkdf2Opt } from '@noble/hashes/pbkdf2';
import { sha256 as sha256Noble } from '@noble/hashes/sha256';
import { ripemd160 as ripemd160Noble } from '@noble/hashes/ripemd160';
import { sha512 as sha512Noble } from '@noble/hashes/sha512';
import { keccak_256 } from '@noble/hashes/sha3';
import {
    bytesToHex as bytesToHexNoble,
    hexToBytes as hexToBytesNoble,
    utf8ToBytes,
    randomBytes,
    Input
} from '@noble/hashes/utils';

export const hexToBuffer = hexToBytesNoble;
export const bufferToHex = bytesToHexNoble;
// Encodes the passed utf-8 string into a Uint8Array.
export const strToBuffer = utf8ToBytes;

/**
 * Generate random hex string.
 *
 * @param {number} length Output hex string length.
 */
export const getRandomHex = (length: number) => bufferToHex(randomBytes(length / 2));

export const sha256 = sha256Noble;
export const sha512 = sha512Noble;
export const ripemd160 = ripemd160Noble;
export const keccak256 = keccak_256;

/**
 * Hash160.
 *
 * @param {string} hex String in hex.
 */
export const hash160 = (hex: string) => {
    const publicKeyToSha = sha256(hexToBuffer(hex));

    return bufferToHex(ripemd160(publicKeyToSha));
};

/**
 * Encodes PBKDF2 with SHA512 function algorithm.
 *
 * @param {Uint8Array | string} password Input data.
 * @param {Uint8Array | string} salt Unique data.
 * @param {{ c: number, dkLen?: number, asyncTick?: number }} options Hash options.
 */
export const pbkdf2sha512 = (password: Input, salt: Input, options: Pbkdf2Opt): Uint8Array =>
    pbkdf2Noble(sha512, password, salt, options);

/**
 * Encodes HMAC with SHA512 function algorithm.
 *
 * @param {Uint8Array} key Message key.
 * @param {Uint8Array} data Message data.
 */
export const hmac512 = (key: Uint8Array, data: Uint8Array) => hmac.create(sha512, key).update(data).digest();

/**
 * Splits a string into chunks.
 *
 * @param {string} str Input string.
 * @param {number} length Chunk length. Must be greater than 0.
 * @param {string} padStart Pads characters to the beginning of the chunk.
 * @param {string} padEnd Pads characters to the end of the chunk.
 */
export const strToChunks = (str: string, length: number, padStart: string = '', padEnd: string = ''): string[] => {
    const regex = new RegExp(`.{1,${length}}`, 'ig');
    const match = str.match(regex);

    if (match) {
        return match.map((item) => item.padStart(length, padStart).padEnd(length, padEnd));
    }

    return [];
};

/**
 * Filter string.
 *
 * @param {string} str Input string.
 * @param {string} chars Allowed characters.
 * @param {number} limit Allowed input string length.
 */
export const filterStr = (str: string, chars: string, limit?: number) => {
    const strToArr = str.trim().toLowerCase().split('', limit);
    const filteredValue = strToArr.filter((item) => chars.includes(item));

    return filteredValue.join('');
};

/**
 * Convert bin string into hex string.
 *
 * @param {string} str Binary string.
 */
export const binToHex = (str: string) => {
    const filteredStr = filterStr(str, '01');
    const strToArr = strToChunks(filteredStr, 4, '0000');
    const arrBinToHex = strToArr.map((item) => parseInt(item, 2).toString(16));

    return arrBinToHex.join('');
};

/**
 * Convert hex string into bin string.
 *
 * @param {string} str String in hex.
 */
export const hexToBin = (str: string) => {
    const filteredStr = filterStr(str, '0123456789abcdef');

    return filteredStr
        .split('')
        .map((item) => parseInt(item, 16).toString(2).padStart(4, '0'))
        .join('');
};
