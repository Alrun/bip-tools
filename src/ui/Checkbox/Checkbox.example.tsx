import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Checkbox from './Checkbox';

const CheckboxExample = () => (
    <Box sx={{ '& > *': { mb: 8 } }}>
        <Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 8, mb: 4 }}>
                <Checkbox />
                <Checkbox defaultChecked />
                <Checkbox defaultChecked indeterminate />
                <Checkbox label="Label" />
                <Checkbox defaultChecked label="Label" />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 8, mb: 4 }}>
                <Checkbox disabled />
                <Checkbox defaultChecked disabled />
                <Checkbox defaultChecked indeterminate disabled />
                <Checkbox label="Label" disabled />
                <Checkbox defaultChecked label="Label" disabled />
            </Box>
        </Box>
        <Box>
            <Typography variant="h2" gutterBottom>
                Colors
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 8, mb: 4 }}>
                <Checkbox defaultChecked />
                <Checkbox defaultChecked color="secondary" />
                <Checkbox defaultChecked color="error" />
                <Checkbox defaultChecked color="info" />
                <Checkbox defaultChecked color="success" />
                <Checkbox defaultChecked color="warning" />
                <Checkbox defaultChecked color="default" />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem 2rem', mb: 4 }}>
                <Checkbox defaultChecked label="Primary" />
                <Checkbox defaultChecked label="Secondary" color="secondary" />
                <Checkbox defaultChecked label="Error" color="error" />
                <Checkbox defaultChecked label="Info" color="info" />
                <Checkbox defaultChecked label="Success" color="success" />
                <Checkbox defaultChecked label="Warning" color="warning" />
                <Checkbox defaultChecked label="Default" color="default" />
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                Size
            </Typography>
            <Box>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                    <Checkbox defaultChecked size="small" />
                    <Checkbox label="Small" size="small" />
                </Stack>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                    <Checkbox defaultChecked />
                    <Checkbox label="Medium" />
                </Stack>
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                Label placement
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 8, mb: 4 }}>
                <Checkbox defaultChecked label="End" />
                <Checkbox defaultChecked label="Start" labelPlacement="start" />
                <Checkbox defaultChecked label="Top" labelPlacement="top" />
                <Checkbox defaultChecked label="Bottom" labelPlacement="bottom" />
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                Icon
            </Typography>
            <Checkbox defaultChecked icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </Box>
    </Box>
);

export default CheckboxExample;
