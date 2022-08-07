import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { isTouch } from '../../utils/featuresDetection/featuresDetection';
import { drawerDenseToggle } from '../../redux/slices/app/app';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import StyledWrapper from './LayoutStyles';
import { LayoutProps } from './Layout.d';

/**
 * Width of layout with expanded and collapsed sidebar for layout.
 */
const sidebarWidth: Record<'expanded' | 'collapsed', string> = {
    expanded: '15rem',
    collapsed: '4rem'
};

/**
 * Header and footer height.
 */
const layoutHeight: Record<'header' | 'footer', string> = {
    header: '3.5rem',
    footer: '3.5rem'
};

const Layout = ({ mode, changeMode }: LayoutProps) => {
    const { drawerDense } = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();

    const isMobile = isTouch() || useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const [isOpen, setOpen] = React.useState(false);

    const handleOpen = React.useCallback((open: boolean) => setOpen(open), []);
    const handleCollapse = React.useCallback((collapse: boolean) => dispatch(drawerDenseToggle(collapse)), []);

    return (
        <Box sx={{ display: 'flex', height: '100%' }}>
            <Sidebar
                heightHeader={layoutHeight.header}
                heightFooter={layoutHeight.footer}
                widthExpanded={sidebarWidth.expanded}
                widthCollapsed={sidebarWidth.collapsed}
                isMobile={isMobile}
                open={isOpen}
                setOpen={handleOpen}
                isCollapsed={drawerDense}
                setCollapsed={handleCollapse}
                mode={mode}
                changeMode={changeMode}
            />
            <StyledWrapper open={drawerDense} widthOpen={sidebarWidth.expanded} widthClose={sidebarWidth.collapsed}>
                <Header
                    height={layoutHeight.header}
                    mode={mode}
                    isMobile={isMobile}
                    drawerOpen={handleOpen}
                    changeMode={changeMode}
                />
                <Main />
                <Footer height={layoutHeight.footer} />
            </StyledWrapper>
        </Box>
    );
};

export default Layout;
