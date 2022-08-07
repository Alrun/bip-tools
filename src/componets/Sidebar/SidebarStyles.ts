import { CSSObject, styled, Theme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

export const openedMixin = (theme: Theme, width: string | number): CSSObject => ({
    width,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    })
});

export const closedMixin = (theme: Theme, width: string | number): CSSObject => ({
    width,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    })
});

export const StyledDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'widthOpen' && prop !== 'widthClose'
})<{
    widthOpen: string | number;
    widthClose: string | number;
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
    }),
    '&:hover': {
        '.MuiDrawer-paper': {
            width: widthOpen
        }
    }
}));

export const StyledScrollWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'heightHeader' && prop !== 'heightFooter'
})<{
    heightHeader: string | number;
    heightFooter: string | number;
}>(({ theme, heightHeader, heightFooter }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: `calc(100% - ${heightHeader} - ${heightFooter})`,
    overflowX: 'hidden',
    overscrollBehavior: 'none',
    msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
    scrollbarWidth: 'none', // Hide scrollbar for Firefox
    // Hide scrollbar for Chrome, Safari and Opera
    '::-webkit-scrollbar': {
        display: 'none'
    },
    ':hover': {
        msOverflowStyle: 'auto', // Show scrollbar for IE and Edge
        scrollbarWidth: 'auto', // Show scrollbar for Firefox
        // Show scrollbar for Chrome, Safari and Opera
        '::-webkit-scrollbar': {
            display: 'block'
        }
    }
}));
