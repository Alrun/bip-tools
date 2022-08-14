import { Address } from '../../hooks/useAddresses/useAddresses';
import { AddressListProps } from '../AddressList/AddressList.d'

export interface AddressListGridProps extends Pick<AddressListProps, 'length' | 'list' | 'showBalances'> {
    /**
     * If 'true', the component is rendered, if 'false', the skeleton preloader is rendered.
     */
    isLoaded: boolean;
}
