import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { isTouch } from '../../utils/featuresDetect';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { DrawerWidthInterface, LayoutHeightInterface, LayoutProps } from './Layout.d';
import { drawerDenseToggle } from '../../redux/slices/app/app';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import StyledWrapper from './LayoutStyles';

const drawerWidth: DrawerWidthInterface = {
    open: '15rem',
    close: '4rem'
};

const layoutHeight: LayoutHeightInterface = {
    header: '3.5rem',
    footer: '3.5rem'
};

const Layout = ({ mode, handleChangeMode }: LayoutProps) => {
    const { drawerDense } = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();

    const isMobile = isTouch() || useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const [isOpen, setOpen] = React.useState<boolean>(false);

    const handleOpen = (open: boolean) => {
        setOpen(open);
    };

    const handleDense = (dense: boolean) => {
        dispatch(drawerDenseToggle(dense));
    };

    // TODO: Remove after render check
    const rendersCount = React.useRef<number>(0);

    return (
        <Box sx={{ display: 'flex', height: '100%' }}>
            <Sidebar
                heightHeader={layoutHeight.header}
                heightFooter={layoutHeight.footer}
                widthOpen={drawerWidth.open}
                widthClose={drawerWidth.close}
                isMobile={isMobile}
                isOpen={isOpen}
                isDense={drawerDense}
                handleOpen={handleOpen}
                handleDense={handleDense}
            />
            <StyledWrapper open={drawerDense} widthOpen={drawerWidth.open} widthClose={drawerWidth.close}>
                <Header
                    height={layoutHeight.header}
                    mode={mode}
                    isMobile={isMobile}
                    handleDrawerOpen={handleOpen}
                    handleChangeMode={handleChangeMode}
                />
                <Main />
                {/* TODO: Remove after render check */}
                <b style={{ position: 'absolute', bottom: 60, right: 10 }}>
                    {/* eslint-disable-next-line no-plusplus */}
                    Layout RENDER COUNT: {++rendersCount.current}
                </b>
                <Footer height={layoutHeight.footer} />
            </StyledWrapper>
        </Box>
    );
};

export default Layout;
