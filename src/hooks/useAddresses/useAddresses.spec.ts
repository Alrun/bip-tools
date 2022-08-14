import { renderHook } from '@testing-library/react-hooks';
import useAddresses from './useAddresses';

const KEY_X =
    'xprvA1b5BqCPyrzHyuSSdoE4aJHu5u2hK8G1ypiUgrjbTKf4dBDpjZd' +
    '1m2NgcvYMHoNYdwoU77vXBUYYHuTZkkcinP4mpBbvngaBxPjXUM1QZi5';

const KEY_Y =
    'yprvALh599GFQyWK8nT4jAX1KU73UhnM8Fsae95YtJ6EKGPvLDHqKBd' +
    '1EFtpVSrCvdfpxAwCH5Wb3Nm8LBRHvck9TnK8e8nQyjAoxXaZoBjJCJf';

const KEY_Z =
    'zprvAf2eYucivBis9AsjmPr38kZJ2nS8Rvbzjxm2kZDLJGK3y7BjGk8' +
    't9ZsWuuWLbY2R6GqDuCV64T2uTgjpCpvcuP7tipRiqsMrmGZrA3zduVn';

describe('useAddresses hook', () => {
    it('should return empty array', () => {
        const { result } = renderHook(() => useAddresses('', "m/44'/0'/0'/0"));

        expect(result.current).toEqual([]);
    });

    it("should derive hardened keys for path m/44'", () => {
        const { result } = renderHook(() => useAddresses(KEY_X, "m/44'/0'/0'/0", '', undefined, true));

        expect(result.current[0]).toEqual({
            path: "m/44'/0'/0'/0/0'",
            address: '1GEhdnno1tzVPsXyxhHUqUix9xS4zi5cNA',
            publicKey: '022c0025339f194d906413c77072f2c14fd8ec9a9241885ddf324e62faefa9a811',
            privateKey: 'L4BidqxHtBToTzodZ5BtNRaZzgdZpVHoccL8XjFU8Gaxs3aZvgzd'
        });
    });

    it("should derive keys for path m/44'", () => {
        const { result } = renderHook(() => useAddresses(KEY_X, "m/44'/0'/0'/0"));

        expect(result.current[0]).toEqual({
            path: "m/44'/0'/0'/0/0",
            address: '1AZnveys2k5taGCCF743RtrWGwc58UMeq',
            publicKey: '0357a9f40b7e3e03bc62276ae66bb8884e39d0e059bcdc2f11c6debe697eaff7e2',
            privateKey: 'KwSNyhhfXJracGr59pq6s1PhgqhRdkJ3TLBL7HWb1wUpCy1G8RP2'
        });

        expect(result.current[19]).toEqual({
            path: "m/44'/0'/0'/0/19",
            address: '1GDLeWJ4FcK2uiTFvLshtVcBArA7M9ECxq',
            publicKey: '024880ddacf7371a47ada29194929f8138dd7da1c89a798bf55a80c1821184ed74',
            privateKey: 'L4EabXtNC7RpufMNMK6USq1eMW98T1swzHdhLpnmwyy8kwcTyfk5'
        });
    });

    it("should derive keys for path m/49'", () => {
        const { result } = renderHook(() => useAddresses(KEY_Y, "m/49'/0'/0'/0"));

        expect(result.current[0]).toEqual({
            path: "m/49'/0'/0'/0/0",
            address: '3PfdXXVGY2HQUBvDfBsbF1HPYCbJzn2pCn',
            publicKey: '0365da2a9461360de4e09bacb54193920bc978eb90ca73b42b707c8cbd8f81eab8',
            privateKey: 'KwVUgeRced5p5KrrEHNWrk8NKcv3ERqArVqVASwDoJ8i11NjqsHE'
        });
    });

    it("should derive keys for path m/84'", () => {
        const { result } = renderHook(() => useAddresses(KEY_Z, "m/84'/0'/0'/0"));

        expect(result.current[0]).toEqual({
            path: "m/84'/0'/0'/0/0",
            address: 'bc1qacwy02va0hajhuge9xf5cl3mrm9hmj7jhpvc87',
            publicKey: '02560c0584fdb4cd1ba8be142a7a825d18741dfd01f77c5949792c6a790d7eeb15',
            privateKey: 'KxKxrqkNmQwNtRgy9HcLnXfQr1h1uGMasSzAeoE17VQ3g2a94qRq'
        });
    });
});
