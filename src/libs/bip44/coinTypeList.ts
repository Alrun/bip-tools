import BitcoinIcon from '../../assets/icons/coins/bitcoin.svg';
import LitecoinIcon from '../../assets/icons/coins/litecoin.svg';
import EtherIcon from '../../assets/icons/coins/ether.svg';

const coinTypeList = [
    {
        type: '0',
        symbol: 'BTC',
        coin: 'Bitcoin',
        icon: BitcoinIcon
    },
    {
        type: '2',
        symbol: 'LTC',
        coin: 'Litecoin',
        icon: LitecoinIcon
    },
    {
        type: '60',
        symbol: 'ETH',
        coin: 'Ether',
        icon: EtherIcon
    }
];

export default coinTypeList;
