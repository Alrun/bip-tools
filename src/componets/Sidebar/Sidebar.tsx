import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { StyledDrawer, StyledScrollWrapper } from './SidebarStyles';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import Button from '../../ui/Button/Button';
import ThemeModeSwitch from '../ThemeModeSwitch/ThemeModeSwitch';
import { isIOS } from '../../utils/featuresDetection/featuresDetection';
import { ChevronLargeLeftIcon, ChevronLargeRightIcon } from '../../ui/Icons/Icons';
import Typography from '../../ui/Typography/Typography';
import { SidebarProps, SidebarContainerProps } from './Sidebar.d';
import LogoDarkIcon from '../../assets/logo-dark.svg';
import LogoLightIcon from '../../assets/logo-light.svg';
import Tooltip from '../../ui/Tooltip/Tooltip';

const drawerBleeding = 10;
const title = 'BIP Tools';

const SidebarContainer = ({
    open,
    children,
    isCollapsed,
    isMobile,
    heightHeader,
    heightFooter,
    setCollapsed,
    setOpen
}: SidebarContainerProps) => {
    const theme = useTheme();

    const handleCollapse = (collapse: boolean) => () => {
        if (setCollapsed) setCollapsed(collapse);
    };

    const handleSetOpen = (isOpen: boolean) => () => {
        if (setOpen) setOpen(isOpen);
    };

    return (
        <Box sx={{ height: '100%' }}>
            <Box sx={{ p: theme.spacing(0, 2, 0, 4) }}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: heightHeader }}>
                    <Tooltip title="Go to Homepage">
                        <Link
                            to="/"
                            reloadDocument
                            style={{
                                display: 'flex',
                                textDecoration: 'none',
                                alignItems: 'center',
                                color: theme.palette.text.primary,
                                border: 0,
                                marginTop: theme.spacing(-1)
                            }}
                        >
                            <img
                                src={theme.palette.mode === 'dark' ? LogoDarkIcon : LogoLightIcon}
                                alt="Logo"
                                style={{ display: 'block', width: 32, height: 32 }}
                            />
                            <Typography variant="h4" component="span" sx={{ m: 0, pl: 6, mt: 2 }}>
                                {title}
                            </Typography>
                        </Link>
                    </Tooltip>
                    <Button
                        isRound
                        size="large"
                        color="inherit"
                        sx={{ display: isMobile ? 'flex' : 'none', ml: 'auto', mr: -0.25 }}
                        onClick={handleSetOpen(false)}
                    >
                        <ChevronLargeLeftIcon sx={{ fontSize: '2rem' }} />
                    </Button>
                </Box>
            </Box>
            <StyledScrollWrapper
                heightHeader={typeof heightHeader === 'number' ? `${heightHeader}px` : heightHeader}
                heightFooter={typeof heightFooter === 'number' ? `${heightFooter}px` : heightFooter}
            >
                {children}
            </StyledScrollWrapper>
            <Box
                sx={{
                    display: open ? 'none' : 'block',
                    position: 'absolute',
                    height: heightFooter,
                    px: 3,
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
            >
                <Divider sx={{ mb: 1 }} />
                {isCollapsed ? (
                    <Button
                        isRound
                        sx={{ ml: -1, mt: -0.25 }}
                        size="large"
                        color="inherit"
                        aria-label="Expand main navigation"
                        onClick={handleCollapse(false)}
                    >
                        <ChevronLargeRightIcon sx={{ fontSize: '2rem' }} />
                    </Button>
                ) : (
                    <Button
                        isRound
                        sx={{ ml: -1, mt: -0.25 }}
                        color="inherit"
                        size="large"
                        aria-label="Shrink main navigation"
                        onClick={handleCollapse(true)}
                    >
                        <ChevronLargeLeftIcon sx={{ fontSize: '2rem' }} />
                    </Button>
                )}
            </Box>
        </Box>
    );
};

const Sidebar = ({
    changeMode,
    isCollapsed,
    isMobile,
    open,
    mode,
    heightHeader = 50,
    heightFooter = 50,
    setOpen,
    setCollapsed,
    widthExpanded = 200,
    widthCollapsed = 60
}: SidebarProps) => {
    const container = window !== undefined ? () => window.document.body : undefined;

    return isMobile ? (
        <SwipeableDrawer
            container={container}
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            disableBackdropTransition={!isIOS}
            disableDiscovery={isIOS}
            ModalProps={{
                keepMounted: true,
                sx: {
                    '.MuiPaper-root': { width: widthExpanded }
                }
            }}
        >
            <SidebarContainer
                heightHeader={heightHeader}
                heightFooter={heightFooter}
                widthExpanded={widthExpanded}
                widthCollapsed={widthCollapsed}
                isMobile={isMobile}
                open={open}
                setOpen={setOpen}
            >
                <SidebarMenu setDrawerOpen={setOpen} />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '8px',
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <ThemeModeSwitch mode={mode} changeMode={changeMode} expanded />
                </Box>
            </SidebarContainer>
        </SwipeableDrawer>
    ) : (
        <StyledDrawer variant="permanent" open={!isCollapsed} widthOpen={widthExpanded} widthClose={widthCollapsed}>
            <SidebarContainer
                isMobile={isMobile}
                isCollapsed={isCollapsed}
                heightHeader={heightHeader}
                heightFooter={heightFooter}
                setCollapsed={setCollapsed}
                widthExpanded={widthExpanded}
                widthCollapsed={widthCollapsed}
            >
                <SidebarMenu />
            </SidebarContainer>
        </StyledDrawer>
    );
};

export default React.memo(Sidebar);
