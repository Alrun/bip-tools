import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '../ui/Typography/Typography';
import TabGenerator from '../componets/TabGenerator/TabGenerator';
import TabAddress from '../componets/TabAddress/TabAddress';
import TabInfo from '../componets/TabInfo/TabInfo';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
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
}

function a11yProps(index: number) {
    return {
        id: `mnemonic-tab-${index}`,
        'aria-controls': `mnemonic-tabpanel-${index}`
    };
}

const Mnemonic = () => {
    const rendersCount = React.useRef<number>(0);
    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="mnemonic tabs">
                        <Tab label="Generator" {...a11yProps(0)} />
                        <Tab label="Addresses" {...a11yProps(1)} />
                        <Tab label="Info" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <TabGenerator />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TabAddress />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <TabInfo />
                </TabPanel>
            </Box>

            <b>
                {/* eslint-disable-next-line no-plusplus */}
                Mnemonic RENDER COUNT: {++rendersCount.current}
            </b>
        </>
    );
};

export default React.memo(Mnemonic);
