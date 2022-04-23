import React, { ReactElement, ReactSVGElement } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { DragIcon, ModeDarkIcon, ModeLightIcon } from './Icons';
import ExternalIcon from './ExternalLink';

interface IconListInterface {
    name: string;
    component: ReactElement<ReactSVGElement>;
}

const IconList: IconListInterface[] = [
    {
        name: 'Drag',
        component: <DragIcon />
    },
    {
        name: 'Mode Dark',
        component: <ModeDarkIcon />
    },
    {
        name: 'Mode Light',
        component: <ModeLightIcon />
    },
    {
        name: 'External',
        component: <ExternalIcon />
    }
];

const IconsExample = () => (
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap'
        }}
    >
        {IconList.map(({ name, component }) => (
            <Box
                key={name}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // justifyContent: 'flex-start',
                    textAlign: 'center',
                    width: '5rem',
                    mr: '.5rem',
                    mb: '1rem'
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '4rem',
                        height: '4rem',
                        pt: '1.2rem',
                        mb: '.5rem',
                        backgroundColor: (theme) => theme.palette.background.default,
                        transition: (theme) =>
                            theme.transitions.create(['background-color', 'box-shadow'], {
                                easing: theme.transitions.easing.sharp,
                                duration: theme.transitions.duration.shortest
                            }),
                        '&:hover': {
                            boxShadow: (theme) => theme.shadows[4],
                            backgroundColor: (theme) => theme.palette.background.paper
                        }
                    }}
                >
                    <Box>{component}</Box>
                </Paper>
                <Typography variant="smRegular">{name}</Typography>
            </Box>
        ))}
    </Box>
);

export default IconsExample;
