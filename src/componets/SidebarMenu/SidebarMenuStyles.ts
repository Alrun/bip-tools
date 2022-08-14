import { darken, styled } from '@mui/material/styles';
import List from '@mui/material/List';
// eslint-disable-next-line import/prefer-default-export
export const StyledList = styled(List)(({ theme }) => ({
    position: 'relative',
    '& ul': { padding: 0 },
    '& ul ul': {
        backgroundColor:
            theme.palette.mode === 'dark'
                ? darken(theme.palette.background.paper, 0.15)
                : darken(theme.palette.background.default, 0.04)
    },
    '& .MuiListItemButton-root.Mui-selected': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        transition: theme.transitions.create(['background-color', 'color'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.getContrastText(theme.palette.primary.main)
        }
    },
    '& .MuiListItemIcon-root': {
        color: 'inherit',
        transition: theme.transitions.create('color', { duration: 50 })
    }
}));
