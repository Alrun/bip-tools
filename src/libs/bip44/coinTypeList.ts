import BitcoinIcon from '../../assets/icons/coins/bitcoin.svg';
import EthereumIcon from '../../assets/icons/coins/ethereum.svg';

interface CoinTypeList {
    type: string;
    symbol: string;
    coin: string;
    iconURL?: string;
}

const coinTypeList: Readonly<CoinTypeList[]> = [
    {
        type: '0',
        symbol: 'BTC',
        coin: 'Bitcoin',
        iconURL: BitcoinIcon
    },
    {
        type: '60',
        symbol: 'ETH',
        coin: 'Ethereum',
        iconURL: EthereumIcon
    }
];

export default coinTypeList;
