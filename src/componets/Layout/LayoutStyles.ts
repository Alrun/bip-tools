import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { openedMixin, closedMixin } from '../Sidebar/SidebarStyles';

const StyledWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'widthOpen' && prop !== 'widthClose'
})<{
    open: boolean;
    widthOpen: string;
    widthClose: string;
}>(({ theme, open, widthOpen, widthClose }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    maxWidth: '100%',
    ...(open && {
        [theme.breakpoints.up('md')]: {
            ...openedMixin(theme, widthOpen),
            width: `calc(100% - ${widthClose})`
        }
    }),
    ...(!open && {
        [theme.breakpoints.up('md')]: {
            // width: '100%'
            ...closedMixin(theme, widthClose),
            width: `calc(100% - ${widthOpen})`
        }
    })
}));

export default StyledWrapper;
