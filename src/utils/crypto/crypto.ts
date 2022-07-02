import { hmac } from '@noble/hashes/hmac';
import { sha512 } from '@noble/hashes/sha512';

// Web Crypto Api
export const crypto = window.crypto || (window as any).msCrypto;
export const cryptoSubtle = crypto?.subtle || (crypto as any)?.webkitSubtle;
export const secureRandom = () => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;

// TODO: For to Array.reduce()
/**
 * Generate random hex string
 * @param length
 */
export const getRandomHex = (length: number) => {
    const letters = '0123456789abcdef';
    let color = '';

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) color += letters[Math.floor(secureRandom() * 16)];

    return color;
};

/**
 * Splits a string into chunks
 * @param str
 * @param length
 * @param padStart
 * @param padEnd
 */
export const strToChunks = (str: string, length: number, padStart: string = '', padEnd: string = '') => {
    const regex = new RegExp(`.{1,${length}}`, 'ig');

    return str.match(regex)?.map((item) => item.padStart(length, padStart).padEnd(length, padEnd));
};

// /**
//  * Convert ByteArray into hex string
//  * @param byteArray
//  */
// export const byteArrayToHexString = (byteArray: Uint8Array) =>
//     byteArray.reduce((output, elem) => output + `0${elem.toString(16)}`.slice(-2), '');

/**
 * Convert hex string into bin string
 * @param str
 */
export const hexToBin = (str: string) =>
    str
        .split('')
        .map((item) => parseInt(item, 16).toString(2).padStart(4, '0'))
        .join('');

/**
 * Convert bin string into hex string
 * @param str
 */
export const binToHex = (str: string) => {
    const strToArr = strToChunks(str, 4, '0000') || [];
    const arrBinToHex = strToArr.map((item) => parseInt(item, 2).toString(16));

    return arrBinToHex.join('');
};

/**
 * Filter string
 * @param value
 * @param letters
 * @param limit
 */
export const filterStr = (value: string, letters: string, limit: number) => {
    const strToArr = value.trim().toLowerCase().split('', limit);
    const filteredValue = strToArr.filter((item) => letters.includes(item));

    return filteredValue.join('');
};

export const byteArrayToHexString = (byteArray: ArrayBuffer) => {
    const extractedBuffer = [...Array.from(new Uint8Array(byteArray))];

    return extractedBuffer.reduce((output, elem) => output + `0${elem.toString(16)}`.slice(-2), '');
};

// This function converts a hex string into an ArrayBuffer for hash processing.
export const hexToBuffer = (hex: string) => {
    const strChunkList = strToChunks(hex, 2, '0') || [];
    const hexChunkList = strChunkList.map((item) => parseInt(item, 16));

    return new Uint8Array(hexChunkList);
};

/**
 * HMAC with SHA512 function algorithm.
 * @param {Uint8Array} key Message key.
 * @param {Uint8Array} data Message data.
 */
export const hmac512 = (key: Uint8Array, data: Uint8Array) => hmac.create(sha512, key).update(data).digest();
