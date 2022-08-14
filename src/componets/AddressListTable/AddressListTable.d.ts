import { Address } from '../../hooks/useAddresses/useAddresses';
import { AddressListProps } from '../AddressList/AddressList.d';

export interface AddressListTableProps extends Pick<AddressListProps, 'length' | 'list' | 'showBalances'> {
    /**
     * If 'true', the component is rendered, if 'false', the skeleton preloader is rendered.
     */
    isLoaded: boolean;
    /**
     * If 'true' changes the layout at the breakpoint xl up.
     */
    xlUp: boolean;
}
