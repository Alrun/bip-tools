import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Switch from './Switch';

const SwitchExample = () => (
    <Box sx={{ '& > *': { mb: 8 } }}>
        <Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 8, mb: 4 }}>
                <Switch />
                <Switch defaultChecked />
                <Switch label="Label" />
                <Switch defaultChecked label="Label" />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 8, mb: 4 }}>
                <Switch disabled />
                <Switch defaultChecked disabled />
                <Switch label="Label" disabled />
                <Switch defaultChecked label="Label" disabled />
            </Box>
        </Box>
        <Box>
            <Typography variant="h2" gutterBottom>
                Colors
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 8, mb: 4 }}>
                <Switch defaultChecked />
                <Switch defaultChecked color="secondary" />
                <Switch defaultChecked color="error" />
                <Switch defaultChecked color="info" />
                <Switch defaultChecked color="success" />
                <Switch defaultChecked color="warning" />
                <Switch defaultChecked color="default" />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem 2rem', mb: 4 }}>
                <Switch defaultChecked label="Primary" />
                <Switch defaultChecked label="Secondary" color="secondary" />
                <Switch defaultChecked label="Error" color="error" />
                <Switch defaultChecked label="Info" color="info" />
                <Switch defaultChecked label="Success" color="success" />
                <Switch defaultChecked label="Warning" color="warning" />
                <Switch defaultChecked label="Default" color="default" />
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                Size
            </Typography>
            <Box>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                    <Switch defaultChecked size="small" />
                    <Switch label="Small" size="small" />
                </Stack>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                    <Switch defaultChecked />
                    <Switch label="Medium" />
                </Stack>
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                Label placement
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 8, mb: 4 }}>
                <Switch defaultChecked label="End" />
                <Switch defaultChecked label="Start" labelPlacement="start" />
                <Switch defaultChecked label="Top" labelPlacement="top" />
                <Switch defaultChecked label="Bottom" labelPlacement="bottom" />
            </Box>
        </Box>
    </Box>
);

export default SwitchExample;
