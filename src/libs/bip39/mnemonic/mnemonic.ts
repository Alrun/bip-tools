import { bufferToHex, hexToBin, sha256, strToChunks } from '../../../utils/crypto/crypto';
import enWordList from '../wordlists/english';

export const wordCountList = [12, 15, 18, 21, 24] as const;

export const getChecksum = (hex: string) => {
    const raw = hexToBin(hex);
    const list = strToChunks(raw, 11) || [];
    const listLastItem = list.length ? list[list.length - 1] : '';
    // Calculate checksum
    const strChunkList = strToChunks(hex, 2, '0') || [];
    const hexChunkList = strChunkList.map((item) => parseInt(item, 16));
    const hexByteArray = new Uint8Array(hexChunkList);
    const digest = sha256(hexByteArray);
    const hexChecksum = bufferToHex(new Uint8Array(digest));
    const binChecksum = hexToBin(hexChecksum);
    const checksum = listLastItem.length !== 11 ? binChecksum.slice(listLastItem.length - 11) : '';

    list[list.length - 1] = `${listLastItem}${binChecksum}`.slice(0, 11);

    return { list, raw, checksum };
};

export const getIndex = (value: string) => parseInt(value, 2);

export const getWord = (value: string) => enWordList[parseInt(value, 2)];
