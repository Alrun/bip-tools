import { ThemeModeType } from '../../redux/slices/app/app';
import { Action, AnyAction } from 'redux';
import { Component, Context } from 'react';
import { ProviderProps, ReactReduxContextValue } from 'react-redux';

export interface LayoutProps {
    mode: ThemeModeType;
    handleChangeMode: () => void;
}

/**
 * Width of layout with open and closed sidebar for layout
 */
export interface DrawerWidthInterface {
    /**
     * Opened sidebar width
     */
    open: string;
    /**
     * Opened sidebar width
     */
    close: string;
}

/**
 * Header and footer height
 */
export interface LayoutHeightInterface {
    /**
     * Header height
     */
    header: string;
    /**
     * Footer height
     */
    footer: string;
}
