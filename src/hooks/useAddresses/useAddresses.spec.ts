import { renderHook } from '@testing-library/react-hooks';
import useAddresses from './useAddresses';

// const seed =
//     '67f93560761e20617de26e0cb84f7234aaf373ed2e66295c3d7397e6d7ebe882' +
//     'ea396d5d293808b0defd7edd2babd4c091ad942e6a9351e6d075a29d4df872af';

const keyX = 'xprvA1b5BqCPyrzHyuSSdoE4aJHu5u2hK8G1ypiUgrjbTKf4dBDpjZd1m2NgcvYMHoNYdwoU77vXBUYYHuTZkkcinP4mpBbvngaBxPjXUM1QZi5'
const keyY = 'yprvALh599GFQyWK8nT4jAX1KU73UhnM8Fsae95YtJ6EKGPvLDHqKBd1EFtpVSrCvdfpxAwCH5Wb3Nm8LBRHvck9TnK8e8nQyjAoxXaZoBjJCJf'
const keyZ = 'zprvAf2eYucivBis9AsjmPr38kZJ2nS8Rvbzjxm2kZDLJGK3y7BjGk8t9ZsWuuWLbY2R6GqDuCV64T2uTgjpCpvcuP7tipRiqsMrmGZrA3zduVn'

describe('useDeriveKeys hook', () => {
    it('should derive keys', () => {
        const { result } = renderHook(() => useAddresses(keyX, "m/44'/0'/0'/0"));

        expect(result.current[0]).toEqual({
            path: "m/44'/0'/0'/0/0",
            address: '1AZnveys2k5taGCCF743RtrWGwc58UMeq',
            publicKey: '0357a9f40b7e3e03bc62276ae66bb8884e39d0e059bcdc2f11c6debe697eaff7e2',
            privateKey: 'KwSNyhhfXJracGr59pq6s1PhgqhRdkJ3TLBL7HWb1wUpCy1G8RP2'
        });
    });

    it('should derive keys', () => {
        const { result } = renderHook(() => useAddresses(keyY, "m/49'/0'/0'/0"));

        expect(result.current[0]).toEqual({
            path: "m/49'/0'/0'/0/0",
            address: '3PfdXXVGY2HQUBvDfBsbF1HPYCbJzn2pCn',
            publicKey: '0365da2a9461360de4e09bacb54193920bc978eb90ca73b42b707c8cbd8f81eab8',
            privateKey: 'KwVUgeRced5p5KrrEHNWrk8NKcv3ERqArVqVASwDoJ8i11NjqsHE'
        });
    });

    it('should derive keys', () => {
        const { result } = renderHook(() => useAddresses(keyZ, "m/84'/0'/0'/0"));

        expect(result.current[0]).toEqual({
            path: "m/84'/0'/0'/0/0",
            address: 'bc1qacwy02va0hajhuge9xf5cl3mrm9hmj7jhpvc87',
            publicKey: '02560c0584fdb4cd1ba8be142a7a825d18741dfd01f77c5949792c6a790d7eeb15',
            privateKey: 'KxKxrqkNmQwNtRgy9HcLnXfQr1h1uGMasSzAeoE17VQ3g2a94qRq'
        });
    });
});

// function createData(path: string, address: string, publicKey: string, privateKey: string) {
//     return { path, address, publicKey, privateKey };
// }
//
// const rows = [
//     createData(
//         "m/49'/0'/0'/0/0",
//         '38RnvRxrBkXT7oTwuUBCi12bcZ8jkz1hLU',
//         '0211a35b50fa9978f2574792e4bb0133e570a1487fda4368c14badc7f885b0fcfa',
//         'L4h83LK8RZdn8KR2iSkitqsjL4gLHo8CHgbAhYHp6uwMH74HEmJV\n'
//     ),
//     createData(
//         "m/49'/0'/0'/0/1",
//         '3EHVkweEcPat1vn7gVBK2CVLgpVpsoSBhX',
//         '02d247d45909e824a5cb7815094e0f763485cd88b26d715edd6483158627fc8c00',
//         'KxHSYQLTvW8teHLZVPtRyBKxW85sGMU9b3h5MKjg6RFGkPiNufgp\n'
//     ),
//     createData(
//         "m/49'/0'/0'/0/2",
//         '3HVgj36w2PR2vunyBULD4zMj4rdgSwz69S',
//         '0261feb1ee0b105b5514f3d45eec65936511754fe4a450ed49e54513e93baf4e19',
//         'L2pKAvPcrZLKAmqNTqoEnVEDkg3nV2L3vgMuPC1dtV4NL7nM4vZg'
//     ),
//     createData(
//         "m/49'/0'/0'/0/3",
//         '3K55uAiT7JDmx1DA8GMv9chjgxsMXm68sJ',
//         '028abcb43d7e2ca014a60e3d4430aba1dc4ecb0defdfb32bd7107a784635303f10',
//         'L4Qr4bsPV6jiuM39fLJLLrzrA9gMdkXZQSV794Q9Ut1SgigJBKDw\n'
//     ),
//     createData(
//         "m/49'/0'/0'/0/4",
//         '36n14AQ4BzGctXTUKSmygHw1CNdCyKHhr6',
//         '039cfef68e26fa451d1b02a215d1f6e4b0dad7efc3d893ca104b22db4063ed845c',
//         'KzSvYt9L3MndbFJgeBCyag56kRkeiK3cu86aEgWxczH8uHjVfzi8'
//     )
// ];
