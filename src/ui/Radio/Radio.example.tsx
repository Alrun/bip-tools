import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from './Radio';

const RadioExample = () => (
    <Box sx={{ '& > *': { mb: 8 } }}>
        <Box>
            <FormControl fullWidth sx={{ mb: 4 }}>
                <FormLabel>Horizontal Radio</FormLabel>
                <RadioGroup row defaultValue="radio-1" sx={{ gap: 8}}>
                    <Radio value="radio-1" />
                    <Radio value="radio-2" />
                    <Radio value="radio-3" disabled />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Radio with label</FormLabel>
                <RadioGroup defaultValue="radio-1">
                    <Radio value="radio-1" label="Label 1" />
                    <Radio value="radio-2" label="Label 2" />
                    <Radio value="radio-3" label="Label 3" disabled />
                </RadioGroup>
            </FormControl>
        </Box>
        <Box>
            <Typography variant="h2" gutterBottom>
                Colors
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 8, mb: 2 }}>
                <Radio />
                <Radio color="secondary" />
                <Radio color="error" />
                <Radio color="info" />
                <Radio color="success" />
                <Radio color="warning" />
                <Radio color="default" />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 8, mb: 4 }}>
                <Radio checked />
                <Radio checked color="secondary" />
                <Radio checked color="error" />
                <Radio checked color="info" />
                <Radio checked color="success" />
                <Radio checked color="warning" />
                <Radio checked color="default" />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem 2rem', mb: 4 }}>
                <Radio checked label="Primary" />
                <Radio checked label="Secondary" color="secondary" />
                <Radio checked label="Error" color="error" />
                <Radio checked label="Info" color="info" />
                <Radio checked label="Success" color="success" />
                <Radio checked label="Warning" color="warning" />
                <Radio checked label="Default" color="default" />
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                Size
            </Typography>
            <Box>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                    <Radio checked size="small" />
                    <Radio label="Small" size="small" />
                </Stack>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                    <Radio checked />
                    <Radio label="Medium" />
                </Stack>
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                Label placement
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 8, mb: 4 }}>
                <Radio checked label="End" />
                <Radio checked label="Start" labelPlacement="start" />
                <Radio checked label="Top" labelPlacement="top" />
                <Radio checked label="Bottom" labelPlacement="bottom" />
            </Box>
        </Box>
    </Box>
);

export default RadioExample;
