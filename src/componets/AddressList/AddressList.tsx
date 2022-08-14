import React from 'react';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '../../ui/Button/Button';
import AddressListTable from '../AddressListTable/AddressListTable';
import AddressListGrid from '../AddressListGrid/AddressListGrid';
import { AddressListProps } from './AddressList.d';

const AddressList = ({ length, list, onShowMore, showBalances }: AddressListProps) => {
    const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
    const xlUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));

    const [isLoaded, setIsLoaded] = React.useState(false);
    // Allows to finish the animation of the tabs before rendering the heavy component.
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (list.length) setIsLoaded(true);
        }, 500);

        return () => clearTimeout(timer);
    }, [list]);

    return list.length ? (
        <>
            {lgUp ? (
                <AddressListTable
                    isLoaded={isLoaded}
                    length={length}
                    list={list}
                    showBalances={showBalances}
                    xlUp={xlUp}
                />
            ) : (
                <AddressListGrid isLoaded={isLoaded} length={length} list={list} showBalances={showBalances} />
            )}
            {list.length && (
                <Box sx={{ textAlign: 'center', mt: 4 }} onClick={onShowMore}>
                    <Button variant="text">Show next 20</Button>
                </Box>
            )}
        </>
    ) : null;
};

export default React.memo(AddressList);
