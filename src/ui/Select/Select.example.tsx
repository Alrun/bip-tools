import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from './Select';

const values = [
    {
        value: 'USD',
        label: '$'
    },
    {
        value: 'EUR',
        label: '€'
    },
    {
        value: 'BTC',
        label: '฿'
    },
    {
        value: 'JPY',
        label: '¥'
    }
];

const SelectExample = () => (
    <Box sx={{ '& > *': { mb: 8 } }}>
        <Box>
            <Typography variant="h2" gutterBottom>
                Variants
            </Typography>
            <Box
                sx={{
                    ml: -2,
                    '& .MuiTextField-root': { m: 2, width: '15em' }
                }}
            >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Select id="select-1" label="Select" options={values} defaultValue="EUR" />
                    <Select variant="standard" id="select-2" label="Select" options={values} defaultValue="EUR" />
                    <Select variant="filled" id="select-3" label="Select" options={values} defaultValue="EUR" />
                </Box>
            </Box>
        </Box>
    </Box>
);

export default SelectExample;
