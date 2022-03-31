import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from "./Button/Button";
import { ModeDarkIcon, ModeLightIcon } from './Icons/Icons';

const ButtonExample = () => (
    <Box sx={{ '& > *': { mb: 8 } }}>
        <Box>
            <Typography variant="h2" gutterBottom>
                Colors
            </Typography>
            <Typography variant="h3" gutterBottom>
                Text
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4, '& > button': { mr: 2, mb: 2 } }}>
                <Button variant="text">Primary</Button>
                <Button variant="text" color="secondary">
                    Secondary
                </Button>
                <Button variant="text" color="success">
                    Success
                </Button>
                <Button variant="text" color="error">
                    Error
                </Button>
                <Button variant="text" color="error" disabled>
                    Disabled
                </Button>
            </Box>

            <Typography variant="h3" gutterBottom>
                Filled
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4, '& > button': { mr: 2, mb: 2 } }}>
                <Button>Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="error">Error</Button>
                <Button color="error" disabled>
                    Disabled
                </Button>
            </Box>

            <Typography variant="h3" gutterBottom>
                Outlined
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4, '& > button': { mr: 2, mb: 2 } }}>
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
                <Button variant="outlined" color="error" disabled>
                    Disabled
                </Button>
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                Size
            </Typography>
            <Box sx={{ ml: -2, '& button': { m: 2 } }}>
                <Box>
                    <Button variant="text" size="small">
                        Small
                    </Button>
                    <Button variant="text">Medium</Button>
                    <Button variant="text" size="large">
                        Large
                    </Button>
                </Box>
                <Box>
                    <Button size="small">Small</Button>
                    <Button>Medium</Button>
                    <Button size="large">Large</Button>
                </Box>
                <Box>
                    <Button variant="outlined" size="small">
                        Small
                    </Button>
                    <Button variant="outlined">Medium</Button>
                    <Button variant="outlined" size="large">
                        Large
                    </Button>
                </Box>
            </Box>
        </Box>
        <Box>
            <Typography variant="h2" gutterBottom>
                With icon
            </Typography>
            <Box sx={{ ml: -2, '& button': { m: 2 } }}>
                <Box>
                    <Button variant="text" size="small" startIcon={<ModeLightIcon />} endIcon={<ModeLightIcon />}>
                        Small
                    </Button>
                    <Button variant="text" startIcon={<ModeLightIcon />} endIcon={<ModeLightIcon />}>
                        Medium
                    </Button>
                    <Button variant="text" size="large" startIcon={<ModeLightIcon />} endIcon={<ModeLightIcon />}>
                        Large
                    </Button>
                </Box>
                <Box>
                    <Button size="small" startIcon={<ModeLightIcon />} endIcon={<ModeLightIcon />}>
                        Small
                    </Button>
                    <Button startIcon={<ModeLightIcon />} endIcon={<ModeLightIcon />}>
                        Medium
                    </Button>
                    <Button size="large" startIcon={<ModeLightIcon />} endIcon={<ModeLightIcon />}>
                        Large
                    </Button>
                </Box>
                <Box>
                    <Button variant="outlined" size="small" startIcon={<ModeLightIcon />} endIcon={<ModeLightIcon />}>
                        Small
                    </Button>
                    <Button variant="outlined" startIcon={<ModeLightIcon />} endIcon={<ModeLightIcon />}>
                        Medium
                    </Button>
                    <Button variant="outlined" size="large" startIcon={<ModeLightIcon />} endIcon={<ModeLightIcon />}>
                        Large
                    </Button>
                </Box>
            </Box>
        </Box>

        <Box>
            <Typography variant="h2" gutterBottom>
                Icon Button
            </Typography>
            <Box sx={{ ml: -2, '& button': { m: 2 } }}>
                <Button isRound aria-label="delete">
                    <span style={{ fontSize: 'inherit' }}>B</span>
                </Button>
                <Button isRound aria-label="delete">
                    <ModeDarkIcon fontSize="inherit" />
                </Button>
            </Box>
            <Typography variant="h3" gutterBottom>
                Button size
            </Typography>
            <Box sx={{ ml: -2, '& button': { m: 2 } }}>
                <Button isRound aria-label="delete" size="small">
                    <ModeDarkIcon />
                </Button>
                <Button isRound aria-label="delete">
                    <ModeDarkIcon />
                </Button>
                <Button isRound aria-label="delete" size="large">
                    <ModeDarkIcon />
                </Button>
            </Box>
            <Typography variant="h3" gutterBottom>
                Button and icon size
            </Typography>
            <Box sx={{ ml: -2, '& button': { m: 2 } }}>
                <Button isRound aria-label="delete" size="small">
                    <ModeDarkIcon fontSize="inherit" />
                </Button>
                <Button isRound aria-label="delete">
                    <ModeDarkIcon fontSize="inherit" />
                </Button>
                <Button isRound aria-label="delete" size="large">
                    <ModeDarkIcon fontSize="inherit" />
                </Button>
            </Box>
        </Box>
    </Box>
);

export default ButtonExample;
