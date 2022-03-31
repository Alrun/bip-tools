import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Input from './Input';
import { ModeLightIcon } from '../Icons/Icons';

const InputExample = () => (
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
                    <Input label="Outlined" />
                    <Input label="Outlined" defaultValue="Filled" />
                    <Input label="Outlined" disabled />
                    <Input label="Outlined" defaultValue="Filled disabled" disabled />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Input variant="standard" label="Standard" />
                    <Input variant="standard" label="Standard" defaultValue="Filled" />
                    <Input variant="standard" label="Standard" disabled />
                    <Input variant="standard" label="Standard" defaultValue="Filled disabled" disabled />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Input variant="filled" label="Filled" />
                    <Input variant="filled" label="Filled" defaultValue="Filled" />
                    <Input variant="filled" label="Filled" disabled />
                    <Input variant="filled" label="Filled" defaultValue="Filled disabled" disabled />
                </Box>
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                Colors
            </Typography>
            <Box
                sx={{
                    ml: -2,
                    '& .MuiTextField-root': { m: 2, width: '15em' }
                }}
            >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Input label="Primary" color="primary" focused />
                    <Input label="Secondary" color="secondary" focused />
                    <Input label="Error" color="error" focused />
                    <Input label="Info" color="info" focused />
                    <Input label="Success" color="success" focused />
                    <Input label="Warning" color="warning" focused />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Input variant="standard" label="Primary" color="primary" focused />
                    <Input variant="standard" label="Secondary" color="secondary" focused />
                    <Input variant="standard" label="Error" color="error" focused />
                    <Input variant="standard" label="Info" color="info" focused />
                    <Input variant="standard" label="Success" color="success" focused />
                    <Input variant="standard" label="Warning" color="warning" focused />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Input variant="filled" label="Primary" color="primary" focused />
                    <Input variant="filled" label="Secondary" color="secondary" focused />
                    <Input variant="filled" label="Error" color="error" focused />
                    <Input variant="filled" label="Info" color="info" focused />
                    <Input variant="filled" label="Success" color="success" focused />
                    <Input variant="filled" label="Warning" color="warning" focused />
                </Box>
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                Size
            </Typography>
            <Box
                sx={{
                    ml: -2,
                    '& .MuiTextField-root': { m: 2, width: '15em' }
                }}
            >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Input label="Outlined normal" />
                    <Input variant="standard" label="Standard normal" />
                    <Input variant="filled" label="Filled normal" />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Input label="Outlined small" size="small" />
                    <Input variant="standard" label="Standard small" size="small" />
                    <Input variant="filled" label="Filled small" size="small" />
                </Box>
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                With helper text
            </Typography>
            <Box
                sx={{
                    ml: -2,
                    '& .MuiTextField-root': { m: 2, width: '15em' }
                }}
            >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline' }}>
                    <Input helperText="Helper Text" label="Number" type="number" iconPosition="end" />
                    <Input
                        error
                        helperText="Error text"
                        variant="standard"
                        label="Error"
                        defaultValue="Error"
                        iconPosition="end"
                    />
                    <Input
                        size="small"
                        helperText="Long long long long long long long helper text"
                        variant="filled"
                        label="Small"
                        iconPosition="end"
                    />
                </Box>
            </Box>
        </Box>
        <Box>
            <Typography variant="h2" gutterBottom>
                With icon
            </Typography>
            <Box
                sx={{
                    ml: -2,
                    '& .MuiTextField-root': { m: 2, width: '15em' }
                }}
            >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Input label="Icon Start" icon={<InputAdornment position="start">$</InputAdornment>} />
                    <Input label="Icon End" iconPosition="end" defaultValue="Filled" icon={<ModeLightIcon />} />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Input
                        variant="standard"
                        label="Icon Start"
                        icon={<InputAdornment position="start">$</InputAdornment>}
                    />
                    <Input
                        variant="standard"
                        label="Icon End"
                        iconPosition="end"
                        defaultValue="Filled"
                        icon={<ModeLightIcon />}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <Input
                        variant="filled"
                        label="Icon Start"
                        icon={<InputAdornment position="start">$</InputAdornment>}
                    />
                    <Input
                        variant="filled"
                        label="Icon End"
                        iconPosition="end"
                        defaultValue="Filled"
                        icon={<ModeLightIcon />}
                    />
                </Box>
            </Box>
        </Box>
    </Box>
);

export default InputExample;
