import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '../Typography/Typography';

const ShadowsComponent = ({ label, shadow }: any) => (
    <Paper
        sx={{
            display: 'flex',
            mb: 6,
            width: 80,
            height: 50,
            mr: 3,
            boxShadow: shadow,
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <Typography variant="smRegular">{label}</Typography>
    </Paper>
);

export default {
    title: 'Theme/Shadows',
    component: ShadowsComponent,
    parameters: {
        controls: {
            exclude: ['items', 'children']
        }
    }
} as ComponentMeta<typeof ShadowsComponent>;

const GroupTemplate: ComponentStory<any> = ({ items, ...args }) => (
    <Box
        sx={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: '1fr',
            gridAutoRows: '1fr',
            gridTemplateColumns: 'repeat(5,minmax(160px,160px))',
            gridTemplateRows: 'repeat(5,minmax(90px,90px))'
        }}
    >
        {items.map((item: any, idx: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <ShadowsComponent key={idx} {...args} {...item} />
        ))}
    </Box>
);

/**
 * Palette
 */
export const Shadows = GroupTemplate.bind({});

Shadows.args = {
    items: Array(25)
        .fill('')
        .map((item: any, idx) => ({
            label: `Shadow ${idx}`,
            color: (theme: Theme) => theme.palette.primary.light,
            shadow: (theme: Theme) => theme.shadows[idx]
        }))
};
