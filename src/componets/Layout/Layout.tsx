import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { isTouch } from '../../utils/featuresDetection/featuresDetection';
import { setSidebarDense } from '../../redux/slices/app/app';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import StyledWrapper from './LayoutStyles';
import { LayoutProps } from './Layout.d';

const SIDEBAR_WIDTH_FULL = '15rem';
const SIDEBAR_WIDTH_SLIM = '4rem';
const LAYOUT_HEADER = '3.5rem';
const LAYOUT_FOOTER = '3.5rem';

const Layout = ({ mode, changeMode }: LayoutProps) => {
    const { sidebarDense } = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();

    const isMobile = isTouch() || useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const [isOpen, setOpen] = React.useState(false);

    const handleOpen = React.useCallback((open: boolean) => setOpen(open), []);
    const handleDense = React.useCallback((collapse: boolean) => dispatch(setSidebarDense(collapse)), []);

    return (
        <Box sx={{ display: 'flex', height: '100%' }}>
            <Sidebar
                heightHeader={LAYOUT_HEADER}
                heightFooter={LAYOUT_FOOTER}
                widthFull={SIDEBAR_WIDTH_FULL}
                widthSlim={SIDEBAR_WIDTH_SLIM}
                isMobile={isMobile}
                open={isOpen}
                setOpen={handleOpen}
                dense={sidebarDense}
                setDense={handleDense}
                mode={mode}
                changeMode={changeMode}
            />
            <StyledWrapper open={sidebarDense} widthFull={SIDEBAR_WIDTH_FULL} widthSlim={SIDEBAR_WIDTH_SLIM}>
                <Header
                    height={LAYOUT_HEADER}
                    isMobile={isMobile}
                    mode={mode}
                    changeMode={changeMode}
                    setSidebarOpen={handleOpen}
                />
                <Main />
                <Footer height={LAYOUT_FOOTER} />
            </StyledWrapper>
        </Box>
    );
};

export default Layout;
