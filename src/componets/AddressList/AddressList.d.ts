import { Address } from '../../hooks/useAddresses/useAddresses';

export interface AddressListProps {
    /**
     * Initial number of elements, used for preloader.
     */
    length: number;
    /**
     * Address list.
     */
    list: Address[];
    /**
     * The callback fires when the show more button is clicked.
     */
    onShowMore: () => void;
    /**
     * If 'true', balances are shown.
     */
    showBalances: boolean;
}
