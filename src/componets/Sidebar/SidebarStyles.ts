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
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'widthFull' && prop !== 'widthSlim'
})<{
    widthFull: string | number;
    widthSlim: string | number;
}>(({ theme, open, widthFull, widthSlim }) => ({
    width: widthFull,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    overflow: 'hidden',
    '.MuiDrawer-paper': {
        overflow: 'hidden'
    },
    ...(open && {
        ...openedMixin(theme, widthFull),
        '& .MuiDrawer-paper': openedMixin(theme, widthFull)
    }),
    ...(!open && {
        ...closedMixin(theme, widthSlim),
        '& .MuiDrawer-paper': closedMixin(theme, widthSlim)
    }),
    '&:hover': {
        '.MuiDrawer-paper': {
            width: widthFull
        }
    }
}));

export const StyledScrollWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'heightHeader' && prop !== 'heightFooter'
})<{
    heightHeader: string | number;
    heightFooter: string | number;
}>(({ heightHeader, heightFooter }) => ({
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
