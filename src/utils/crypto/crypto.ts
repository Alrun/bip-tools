import { hmac } from '@noble/hashes/hmac';
import { pbkdf2 as pbkdf2Noble, Pbkdf2Opt } from '@noble/hashes/pbkdf2';
import { sha256 as sha256Noble } from '@noble/hashes/sha256';
import { ripemd160 as ripemd160Noble } from '@noble/hashes/ripemd160';
import { sha512 as sha512Noble } from '@noble/hashes/sha512';
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
 * @param {number} length Output hex string length.
 */
export const getRandomHex = (length: number) => bufferToHex(randomBytes(length / 2));

export const sha256 = sha256Noble;

export const sha512 = sha512Noble;

export const ripemd160 = ripemd160Noble;

export const hash160 = (hex: string) => {
    const publicKeyToSha = sha256(hexToBuffer(hex));

    return bufferToHex(ripemd160(publicKeyToSha));
};

/**
 * Encodes PBKDF2 with SHA512 function algorithm.
 * @param password
 * @param salt
 * @param options
 */
export const pbkdf2sha512 = (password: Input, salt: Input, options: Pbkdf2Opt): Uint8Array =>
    pbkdf2Noble(sha512, password, salt, options);

/**
 * Encodes HMAC with SHA512 function algorithm.
 * @param {Uint8Array} key Message key.
 * @param {Uint8Array} data Message data.
 */
export const hmac512 = (key: Uint8Array, data: Uint8Array) => hmac.create(sha512, key).update(data).digest();

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
 * @param chars
 * @param limit
 */
export const filterStr = (value: string, chars: string, limit?: number) => {
    const strToArr = value.trim().toLowerCase().split('', limit);
    const filteredValue = strToArr.filter((item) => chars.includes(item));

    return filteredValue.join('');
};

// /**
//  * Convert ByteArray into hex string
//  * @param byteArray
//  */
// export const byteArrayToHexString = (byteArray: Uint8Array) =>
//     byteArray.reduce((output, elem) => output + `0${elem.toString(16)}`.slice(-2), '');

// export const byteArrayToHexString = (byteArray: ArrayBuffer) => {
//     const extractedBuffer = [...Array.from(new Uint8Array(byteArray))];
//
//     return extractedBuffer.reduce((output, elem) => output + `0${elem.toString(16)}`.slice(-2), '');
// };

// This function converts a hex string into an ArrayBuffer for hash processing.
// export const hexToBuffer = (hex: string) => {
//     const strChunkList = strToChunks(hex, 2, '0') || [];
//     const hexChunkList = strChunkList.map((item) => parseInt(item, 16));
//
//     return new Uint8Array(hexChunkList);
// };

// function randomBytes(bytesLength = 32) {
//     if (crypto_1.crypto.web) {
//         return crypto_1.crypto.web.getRandomValues(new Uint8Array(bytesLength));
//     }
//     else if (crypto_1.crypto.node) {
//         return new Uint8Array(crypto_1.crypto.node.randomBytes(bytesLength).buffer);
//     }
//     else {
//         throw new Error("The environment doesn't have randomBytes function");
//     }
// }

// Web Crypto Api
// export const crypto = window.crypto || (window as any).msCrypto;
// export const cryptoSubtle = crypto?.subtle || (crypto as any)?.webkitSubtle;
// export const secureRandom = () => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;

// export const getRandomHex = (length: number) => {
//     const letters = '0123456789abcdef';
//     let color = '';
//
//     // console.log(crypto.getRandomValues(new Uint32Array(1))[0]);
//     console.log(bufferToHex(randomBytes(16)));
//     // console.log(randomBytes(1)[0] / 2**32);
//     // console.log(Math.floor((randomBytes(1)[0] / 2**32) * 16));
//
//     // eslint-disable-next-line no-plusplus
//     for (let i = 0; i < length; i++) {
//         // console.log(secureRandom() * 16);
//         color += letters[Math.floor(secureRandom() * 16)]
//     };
//
//     return color;
// };
