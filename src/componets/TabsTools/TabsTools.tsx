import React from 'react';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TabMnemonic from '../TabMnemonic/TabMnemonic';
import TabAddress from '../TabAddress/TabAddress';
import TabInfo from '../TabInfo/TabInfo';
import Tabs from '../../ui/Tabs/Tabs';

const tabList = [
    {
        label: 'Generator',
        content: <TabMnemonic />
    },
    {
        label: 'Addresses',
        content: <TabAddress />
    },
    {
        label: 'Info',
        content: <TabInfo />
    }
];

const TabsTools = () => {
    const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

    return <Tabs idPrefix="mnemonic" tabList={tabList} variant={mdUp ? 'standard' : 'fullWidth'} />;
};

export default TabsTools;
