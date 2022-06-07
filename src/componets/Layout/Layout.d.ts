export interface LayoutProps {
    mode: ThemeModeType | 'auto';
    changeMode: (nextMode) => void;
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
