import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Fade from '@mui/material/Fade';
import TabGenerator from '../TabGenerator/TabGenerator';
import TabAddress from '../TabAddress/TabAddress';
import TabInfo from '../TabInfo/TabInfo';
import { TabPanelProps } from '../../ui/Tabs/Tabs.d';

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`mnemonic-tabpanel-${index}`}
            aria-labelledby={`mnemonic-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ py: 5 }}>{children}</Box>}
        </div>
    );
};

const a11yProps = (index: number) => ({
    id: `mnemonic-tab-${index}`,
    'aria-controls': `mnemonic-tabpanel-${index}`
});

const TabsMnemonic = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    const handleChangeTab = (event: React.SyntheticEvent, tab: number) => setActiveTab(tab);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={activeTab} onChange={handleChangeTab} aria-label="mnemonic tabs">
                    <Tab label="Generator" {...a11yProps(0)} />
                    <Tab label="Addresses" {...a11yProps(1)} />
                    <Tab label="Info" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={activeTab} index={0}>
                <Fade in>
                    <Box>
                        <TabGenerator />
                    </Box>
                </Fade>
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
                <Fade in>
                    <Box>
                        <TabAddress />
                    </Box>
                </Fade>
            </TabPanel>
            <TabPanel value={activeTab} index={2}>
                <Fade in>
                    <Box>
                        <TabInfo />
                    </Box>
                </Fade>
            </TabPanel>
        </Box>
    );
};

export default TabsMnemonic;
