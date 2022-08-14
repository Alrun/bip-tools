import BitcoinIcon from '../../assets/icons/coins/bitcoin.svg';
import EtherIcon from '../../assets/icons/coins/ether.svg';

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
        coin: 'Ether',
        iconURL: EtherIcon
    }
];

export default coinTypeList;
