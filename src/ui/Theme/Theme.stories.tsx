import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '../Typography/Typography';

interface PaletteComponentProps {
    color: string;
    label: string;
    caption: string;
}

const PaletteComponent = ({ color, label, caption }: PaletteComponentProps) => (
    <Box sx={{ display: 'flex', mb: 2 }}>
        <Box sx={{ background: color, width: 50, height: 50, mr: 3 }} />
        <Box sx={{ color }}>
            <Typography variant="h6">{label}</Typography>
            <Typography>{caption}</Typography>
        </Box>
    </Box>
);

export default {
    title: 'Theme/Palette',
    component: PaletteComponent,
    parameters: {
        controls: {
            exclude: ['items', 'children']
        }
    }
} as ComponentMeta<typeof PaletteComponent>;

const GroupTemplate: ComponentStory<any> = (args) => {
    const { items, ...rest } = args;

    return (
        <Box
            sx={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridAutoColumns: '1fr',
                gridAutoRows: '1fr',
                gridTemplateColumns: 'repeat(3,minmax(160px,160px))',
                gridTemplateRows: 'repeat(6,minmax(60px,60px))'
            }}
        >
            {items.map((item: PaletteComponentProps, idx: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <PaletteComponent key={idx} {...rest} {...item} />
            ))}
        </Box>
    );
};

/**
 * Palette
 */
export const Palette = GroupTemplate.bind({});

Palette.args = {
    items: [
        {
            label: 'Primary',
            caption: 'light',
            color: (theme: Theme) => theme.palette.primary.light
        },
        {
            label: 'Primary',
            caption: 'main',
            color: (theme: Theme) => theme.palette.primary.main
        },
        {
            label: 'Primary',
            caption: 'dark',
            color: (theme: Theme) => theme.palette.primary.dark
        },
        {
            label: 'Secondary',
            caption: 'light',
            color: (theme: Theme) => theme.palette.secondary.light
        },
        {
            label: 'Secondary',
            caption: 'main',
            color: (theme: Theme) => theme.palette.secondary.main
        },
        {
            label: 'Secondary',
            caption: 'dark',
            color: (theme: Theme) => theme.palette.secondary.dark
        },
        {
            label: 'Success',
            caption: 'light',
            color: (theme: Theme) => theme.palette.success.light
        },
        {
            label: 'Success',
            caption: 'main',
            color: (theme: Theme) => theme.palette.success.main
        },
        {
            label: 'Success',
            caption: 'dark',
            color: (theme: Theme) => theme.palette.success.dark
        },
        {
            label: 'Error',
            caption: 'light',
            color: (theme: Theme) => theme.palette.error.light
        },
        {
            label: 'Error',
            caption: 'main',
            color: (theme: Theme) => theme.palette.error.main
        },
        {
            label: 'Error',
            caption: 'dark',
            color: (theme: Theme) => theme.palette.error.dark
        },
        {
            label: 'Warning',
            caption: 'light',
            color: (theme: Theme) => theme.palette.warning.light
        },
        {
            label: 'Warning',
            caption: 'main',
            color: (theme: Theme) => theme.palette.warning.main
        },
        {
            label: 'Warning',
            caption: 'dark',
            color: (theme: Theme) => theme.palette.warning.dark
        },
        {
            label: 'Info',
            caption: 'light',
            color: (theme: Theme) => theme.palette.info.light
        },
        {
            label: 'Info',
            caption: 'main',
            color: (theme: Theme) => theme.palette.info.main
        },
        {
            label: 'Info',
            caption: 'dark',
            color: (theme: Theme) => theme.palette.info.dark
        }
    ]
};
