import MuiDrawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import { CSSObject, styled, Theme } from '@mui/material/styles';

export const openedMixin = (theme: Theme, width: string): CSSObject => ({
    width,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    })
});

export const closedMixin = (theme: Theme, width: string): CSSObject => ({
    width,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    })
});

export const StyledDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'widthOpen' && prop !== 'widthClose'
})<{
    widthOpen: string;
    widthClose: string;
}>(({ theme, open, widthOpen, widthClose }) => ({
    width: widthOpen,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    overflow: 'hidden',
    '.MuiDrawer-paper': {
        overflow: 'hidden'
    },
    ...(open && {
        ...openedMixin(theme, widthOpen),
        '& .MuiDrawer-paper': openedMixin(theme, widthOpen)
    }),
    ...(!open && {
        ...closedMixin(theme, widthClose),
        '& .MuiDrawer-paper': closedMixin(theme, widthClose)
    })
    // '&:hover': {
    //     '.MuiDrawer-paper': {
    //         width: widthOpen
    //     }
    // }
}));

export const StyledLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    alignItems: 'center',
    color: theme.palette.text.primary,
    border: 0
}));
