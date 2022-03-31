import React from 'react';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import { ModeDarkIcon, ModeLightIcon } from '../../ui/Icons/Icons';
import { flatLinkList } from '../Navigation/Navigation';

const Header = ({ height = '50px', mode, isMobile, handleChangeMode, handleDrawerOpen }: any) => {
    const [title, setTitle] = React.useState<string>('');
    const location = useLocation();

    React.useLayoutEffect(() => {
        const currentLabel = () => {
            const currentLink = flatLinkList.find((item) => item.to === location.pathname);

            return currentLink ? currentLink.label : '';
        };

        setTitle(currentLabel);
    }, [location.pathname]);

    // TODO: Remove after render check
    const rendersCount = React.useRef<number>(0);

    return (
        <AppBar
            elevation={0}
            position="relative"
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary'
            }}
        >
            <Toolbar
                sx={{
                    height,
                    minHeight: 'auto',
                    px: {
                        lg: 8
                    }
                }}
                variant="dense"
            >
                <Grid container justifyContent="space-between" alignItems="center" spacing={4}>
                    <Grid item sx={{ display: isMobile ? 'block' : 'none' }}>
                        <IconButton
                            // edge="start"
                            size="small"
                            color="inherit"
                            aria-label="menu"
                            sx={{ zIndex: 'drawer' }}
                            onClick={() => handleDrawerOpen(true)}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                    <Grid item xs justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ display: 'flex' }}>
                        <Typography variant="h3">{title}</Typography>
                        {/* TODO: Remove after render check */}
                        <div style={{ position: 'fixed', right: 10, bottom: '6rem' }}>
                            <b>
                                {/* eslint-disable-next-line no-plusplus */}
                                Header RENDER COUNT: {++rendersCount.current}
                            </b>
                        </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                // sx={{ ml: 1, position: 'absolute', right: 0 }}
                                onClick={handleChangeMode}
                                color="inherit"
                                aria-label={mode === 'light' ? 'Light' : 'Dark'}
                            >
                                {mode === 'light' ? <ModeLightIcon /> : <ModeDarkIcon />}
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
            <Divider />
        </AppBar>
    );
};

export default React.memo(Header);
