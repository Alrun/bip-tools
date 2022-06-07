import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AppleIcon from '@mui/icons-material/Apple';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import { StyledDrawer, StyledLink } from './SidebarStyles';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import Button from '../../ui/Button/Button';
import ThemeModeSwitch from '../ThemeModeSwitch/ThemeModeSwitch';
import { isIOS } from '../../utils/featuresDetection/featuresDetection';

const drawerBleeding = 10;

const SidebarContainer = ({ heightHeader, heightFooter, open, dense, isMobile, setOpen, setDense, children }: any) => {
    const rendersCount = React.useRef(0);

    return (
        <Box sx={{ height: '100%' }}>
            <Box sx={{ px: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: heightHeader
                    }}
                >
                    <StyledLink to="/" reloadDocument>
                        <AppleIcon sx={{ fontSize: 38 }} />
                        <Typography variant="h4" component="span" sx={{ m: 0, pl: 6 }}>
                            BIP Tools
                        </Typography>
                    </StyledLink>

                    <Button
                        isRound
                        size="large"
                        sx={{ display: isMobile ? 'flex' : 'none', ml: 'auto' }}
                        onClick={() => setOpen(false)}
                    >
                        <ChevronLeftIcon fontSize="large" />
                    </Button>
                </Box>
                {/* <Divider sx={{ xs: { display: 'block' } }} /> */}
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    // height: isMobile
                    //     ? `calc(100% - ${heightHeader})`
                    //     : `calc(100% - ${heightHeader} - ${heightFooter})`,
                    height: `calc(100% - ${heightHeader} - ${heightFooter})`,
                    overflowX: 'hidden',
                    overscrollBehavior: 'none',
                    msOverflowStyle: 'none' /* Hide scrollbar for IE and Edge */,
                    scrollbarWidth: 'none' /* Hide scrollbar for Firefox */,
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    '::-webkit-scrollbar': {
                        display: 'none'
                    },
                    ':hover': {
                        msOverflowStyle: 'auto' /* Show scrollbar for IE and Edge */,
                        scrollbarWidth: 'auto' /* Show scrollbar for Firefox */,
                        /* Show scrollbar for Chrome, Safari and Opera */
                        '::-webkit-scrollbar': {
                            display: 'block'
                        }

                        // overflowY: 'auto',
                        //     webkitScrollbar: {
                        //         display: 'block'
                        //     }
                    }
                }}
            >
                {children}
            </Box>

            <Box
                sx={{
                    display: open ? 'none' : 'block',
                    position: 'absolute',
                    height: heightFooter,
                    px: 3,
                    bottom: 0,
                    left: 0,
                    right: 0
                    // backgroundColor: '#fff'
                }}
            >
                <Divider
                    sx={{
                        mb: 1
                    }}
                />

                {dense ? (
                    <Button
                        isRound
                        sx={{ ml: -1 }}
                        size="small"
                        aria-label="Expand main navigation"
                        onClick={() => setDense(false)}
                    >
                        <ChevronRightIcon fontSize="large" />
                    </Button>
                ) : (
                    <Button
                        isRound
                        sx={{ ml: -1 }}
                        size="small"
                        aria-label="Shrink main navigation"
                        onClick={() => setDense(true)}
                    >
                        <ChevronLeftIcon fontSize="large" />
                    </Button>
                )}
            </Box>
            <b style={{ position: 'absolute', bottom: '130px' }}>
                {/* eslint-disable-next-line no-plusplus */}
                Sidebar RENDER: {++rendersCount.current}
            </b>
        </Box>
    );
};

const Sidebar = ({
    dense,
    heightHeader = '50px',
    heightFooter = '50px',
    widthOpen = '200px',
    widthClose = '60px',
    open,
    isMobile,
    setOpen,
    setDense,
    mode,
    changeMode
}: any) => {
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
                    '.MuiPaper-root': { width: widthOpen }
                }
            }}
        >
            <SidebarContainer
                heightHeader={heightHeader}
                heightFooter={heightFooter}
                widthOpen={widthOpen}
                widthClose={widthClose}
                open={open}
                isMobile={isMobile}
                setOpen={setOpen}
            >
                <SidebarMenu width={widthOpen} setDrawerOpen={setOpen} />
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
        <StyledDrawer variant="permanent" open={!dense} widthOpen={widthOpen} widthClose={widthClose}>
            <SidebarContainer
                isMobile={isMobile}
                dense={dense}
                heightHeader={heightHeader}
                heightFooter={heightFooter}
                setDense={setDense}
                widthOpen={widthOpen}
                widthClose={widthClose}
            >
                <SidebarMenu width={widthOpen} />
            </SidebarContainer>
        </StyledDrawer>
    );
};

export default React.memo(Sidebar);
