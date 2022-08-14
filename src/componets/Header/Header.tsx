import React from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Button from '../../ui/Button/Button';
import { MenuIcon } from '../../ui/Icons/Icons';
import { flatLinkList } from '../Navigation/Navigation';
import ThemeModeSwitch from '../ThemeModeSwitch/ThemeModeSwitch';
import { HeaderProps } from './Header.d';

const Header = ({ changeMode, setSidebarOpen, isMobile, mode, height = '50px' }: HeaderProps) => {
    const [title, setTitle] = React.useState('');
    const location = useLocation();

    React.useEffect(() => {
        const currentLabel = () => {
            const currentLink = flatLinkList.find((item) => item.to === location.pathname);

            return currentLink ? currentLink.label : 'Not Found';
        };

        setTitle(currentLabel);
    }, [location.pathname]);

    return (
        <AppBar
            elevation={0}
            position="relative"
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary'
            }}
        >
            <Toolbar variant="dense" sx={{ height, minHeight: 'auto', px: { lg: 8 } }}>
                <Grid container justifyContent="space-between" alignItems="center" spacing={4}>
                    <Grid item sx={{ display: isMobile ? 'block' : 'none' }}>
                        <Button
                            aria-label="menu"
                            color="inherit"
                            isRound
                            onClick={() => setSidebarOpen(true)}
                            size="large"
                            sx={{ zIndex: 'drawer' }}
                        >
                            <MenuIcon fontSize="large" />
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            ml: { xs: -56, md: 0 }
                        }}
                    >
                        <Typography variant="h3" data-testid={title}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <ThemeModeSwitch mode={mode} changeMode={changeMode} size="small" />
                    </Grid>
                </Grid>
            </Toolbar>
            <Divider />
        </AppBar>
    );
};

export default Header;
