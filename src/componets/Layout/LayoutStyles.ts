import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { openedMixin, closedMixin } from '../Sidebar/SidebarStyles';

const StyledWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'widthFull' && prop !== 'widthSlim'
})<{
    open: boolean;
    widthFull: string;
    widthSlim: string;
}>(({ theme, open, widthFull, widthSlim }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    maxWidth: '100%',
    ...(open && {
        [theme.breakpoints.up('md')]: {
            ...openedMixin(theme, widthFull),
            width: `calc(100% - ${widthSlim})`
        }
    }),
    ...(!open && {
        [theme.breakpoints.up('md')]: {
            ...closedMixin(theme, widthSlim),
            width: `calc(100% - ${widthFull})`
        }
    })
}));

export default StyledWrapper;
