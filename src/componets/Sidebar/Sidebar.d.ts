import React from 'react';
import { ThemeModeSwitchProps } from '../ThemeModeSwitch/ThemeModeSwitch';

export interface SidebarProps extends Pick<ThemeModeSwitchProps, 'changeMode' | 'mode'> {
    /**
     * If `true`, the component is shown.
     */
    open: boolean;
    /**
     * If `true`, the component is collapse.
     */
    isCollapsed?: boolean;
    /**
     * Header height.
     */
    heightHeader?: string | number;
    /**
     * Footer height.
     */
    heightFooter?: string | number;
    /**
     * Changes layout on mobile screens.
     */
    isMobile: boolean;
    /**
     * Invokes collapsed or expanded view depending on the passed parameter.
     *
     * @param {boolean} collapse The `collapse` state of the sidebar.
     */
    setCollapsed?: (collapse: boolean) => void;
    /**
     * Invokes open/close on mobile depending on the passed parameter.
     *
     * @param {boolean} open The `open` state of the sidebar.
     */
    setOpen: (open: boolean) => void;
    /**
     * Sidebar width when open.
     */
    widthExpanded?: string | number;
    /**
     * Sidebar width when close.
     */
    widthCollapsed?: string | number;
}

export interface SidebarContainerProps extends Partial<Omit<SidebarProps, 'changeMode' | 'mode'>> {
    /**
     * The content of the component.
     */
    children: React.ReactNode;
    heightHeader: string | number;
    heightFooter: string | number;
}
