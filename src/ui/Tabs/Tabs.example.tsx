import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from './Tabs';
import { PlusIcon } from '../Icons/Icons';

const tabsList1 = [
    {
        label: 'Tab 1',
        content: 'Tab 1 content'
    },
    {
        label: 'Tab 2',
        icon: <PlusIcon fontSize="small" />,
        iconPosition: 'start',
        content: 'Tab 2 content'
    },
    {
        label: 'Tab 3',
        icon: <PlusIcon fontSize="small" />,
        iconPosition: 'start',
        content: <div>Tab 3</div>
    }
];

const TabsExample = () => (
    <Box sx={{ '& > *': { mb: 8 } }}>
        <Box>
            <Typography variant="h2" gutterBottom>
                Colors
            </Typography>
            <Box>
                <Tabs tabsList={tabsList1} />
            </Box>
        </Box>
        <Box>
            <Typography variant="h2" gutterBottom>
                Swipeable
            </Typography>
            <Box>
                <Tabs swipeablePanel tabsList={tabsList1} />
            </Box>
        </Box>
    </Box>
);

export default TabsExample;
