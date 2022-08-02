import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '../Typography/Typography';
import {
    ArrowDownIcon,
    ArrowThinDownIcon, ArrowThinUpIcon, ArrowUpIcon,
    ChevronDownIcon, ComponentIcon, CrossIcon, DashboardIcon,
    DotsVerticalIcon,
    DragIcon, FavoriteBorderIcon, FavoriteIcon, HideIcon, InfoOutlinedIcon, ModeAutoIcon,
    ModeDarkIcon,
    ModeLightIcon, PCIcon, PlusIcon, SearchIcon, ShowIcon, StarBorderIcon, StarIcon
} from '../Icons/Icons';
import ExternalIcon from '../Icons/ExternalIcon';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StraightIcon from '@mui/icons-material/Straight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExtensionIcon from '@mui/icons-material/Extension';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import CloseIcon from '@mui/icons-material/Close';
import MuiSearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MuiDashboardIcon from '@mui/icons-material/Dashboard';
import MuiInfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';

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

const GroupTemplate: ComponentStory<any> = (args) => {
    const { items, ...rest } = args;

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {items.map((item: IconComponentProps, idx: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <IconComponent key={idx} {...rest} {...item} />
            ))}
        </Box>
    );
};

/**
 * Palette
 */
export const Icons = GroupTemplate.bind({});

Icons.args = {
    items: [
        {
            label: 'External',
            component: <ExternalIcon />
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
            label: 'Drag',
            component: <DragIcon />
        },
        {
            label: 'DotsVerticalIcon',
            component: <DotsVerticalIcon />
        },
        {
            label: 'ArrowThinUpIcon',
            component: <ArrowThinUpIcon />
        },
        {
            label: 'ArrowThinDownIcon',
            component: <ArrowThinDownIcon />
        },
        {
            label: 'ChevronDownIcon',
            component: <ChevronDownIcon />
        },
        {
            label: 'ComponentIcon',
            component: <ComponentIcon />
        },
        {
            label: 'PCIcon',
            component: <PCIcon />
        },
        {
            label: 'ArrowUpIcon',
            component: <ArrowUpIcon />
        },
        {
            label: 'ArrowDownIcon',
            component: <ArrowDownIcon />
        },
        {
            label: 'PlusIcon',
            component: <PlusIcon />
        },
        {
            label: 'FavoriteIcon',
            component: <FavoriteIcon />
        },
        {
            label: 'FavoriteBorderIcon',
            component: <FavoriteBorderIcon />
        },
        {
            label: 'StarIcon',
            component: <StarIcon />
        },
        {
            label: 'StarBorderIcon',
            component: <StarBorderIcon />
        },
        {
            label: 'CrossIcon',
            component: <CrossIcon />
        },
        {
            label: 'SearchIcon',
            component: <SearchIcon />
        },
        {
            label: 'ShowIcon',
            component: <ShowIcon />
        },
        {
            label: 'HideIcon',
            component: <HideIcon />
        },
        {
            label: 'DashboardIcon',
            component: <DashboardIcon />
        },
        {
            label: 'InfoOutlinedIcon',
            component: <InfoOutlinedIcon />
        },
        {
            label: 'ModeAutoIcon',
            component: <ModeAutoIcon />
        }
    ]
};
