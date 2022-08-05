import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '../Typography/Typography';
import {
    ArrowDownIcon,
    ArrowUpIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    ComponentIcon,
    CopyIcon,
    CrossIcon,
    DashboardIcon,
    DotsVerticalIcon,
    DragIcon,
    FavoriteBorderIcon,
    FavoriteIcon,
    InfoOutlinedIcon,
    MenuIcon,
    ModeAutoIcon,
    ModeDarkIcon,
    ModeLightIcon,
    PCIcon,
    PlusIcon,
    QrCodeIcon,
    SearchIcon,
    ShowOffIcon,
    ShowOnIcon,
    StarBorderIcon,
    StarIcon
} from '../Icons/Icons';
import ExternalIcon from '../Icons/ExternalIcon';

interface IconComponentProps {
    label: string;
    component: React.ReactSVGElement;
}

const IconComponent = ({ component, label }: IconComponentProps) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
        <Typography variant="smRegular">{label}</Typography>
    </Box>
);

export default {
    title: 'Theme/Icons',
    component: IconComponent,
    parameters: {
        controls: {
            exclude: ['items', 'children']
        }
    }
} as ComponentMeta<typeof IconComponent>;

const GroupTemplate: ComponentStory<any> = ({ items, ...args }) => (
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap'
        }}
    >
        {items.map((item: IconComponentProps, idx: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <IconComponent key={idx} {...args} {...item} />
        ))}
    </Box>
);

/**
 * Palette
 */
export const Icons = GroupTemplate.bind({});

Icons.args = {
    items: [
        {
            label: 'Arrow Down',
            component: <ArrowDownIcon />
        },
        {
            label: 'Arrow Up',
            component: <ArrowUpIcon />
        },
        {
            label: 'Chevron Down',
            component: <ChevronDownIcon />
        },
        {
            label: 'Chevron Up',
            component: <ChevronUpIcon />
        },
        {
            label: 'Chevron Left',
            component: <ChevronLeftIcon />
        },
        {
            label: 'Chevron Right',
            component: <ChevronRightIcon />
        },
        {
            label: 'Component',
            component: <ComponentIcon />
        },
        {
            label: 'Copy',
            component: <CopyIcon />
        },
        {
            label: 'Cross',
            component: <CrossIcon />
        },
        {
            label: 'Dashboard',
            component: <DashboardIcon />
        },
        {
            label: 'Dots Vertical',
            component: <DotsVerticalIcon />
        },
        {
            label: 'Drag',
            component: <DragIcon />
        },
        {
            label: 'External',
            component: <ExternalIcon />
        },
        {
            label: 'Favorite',
            component: <FavoriteIcon />
        },
        {
            label: 'Favorite Border',
            component: <FavoriteBorderIcon />
        },
        {
            label: 'Info Outlined',
            component: <InfoOutlinedIcon />
        },
        {
            label: 'Menu',
            component: <MenuIcon />
        },
        {
            label: 'Mode Auto',
            component: <ModeAutoIcon />
        },
        {
            label: 'Mode Dark',
            component: <ModeDarkIcon />
        },
        {
            label: 'Mode Light',
            component: <ModeLightIcon />
        },
        {
            label: 'PC',
            component: <PCIcon />
        },
        {
            label: 'Plus',
            component: <PlusIcon />
        },
        {
            label: 'Search',
            component: <SearchIcon />
        },
        {
            label: 'Star',
            component: <StarIcon />
        },
        {
            label: 'Star Border',
            component: <StarBorderIcon />
        },
        {
            label: 'Show On',
            component: <ShowOnIcon />
        },
        {
            label: 'Show Off',
            component: <ShowOffIcon />
        },
        {
            label: 'Qr Code',
            component: <QrCodeIcon />
        }
    ]
};
