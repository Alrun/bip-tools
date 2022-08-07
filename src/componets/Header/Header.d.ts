import { ThemeModeSwitchProps } from '../ThemeModeSwitch/ThemeModeSwitch';
import { SidebarProps } from '../Sidebar/Sidebar';

export interface HeaderProps extends Pick<ThemeModeSwitchProps, 'changeMode' | 'mode'> {
    /**
     * Sets the drawer state to closed or open.
     *
     * @param {boolean} open The `open` state of the drawer.
     */
    drawerOpen: (open: boolean) => void
    /**
     * Header height.
     */
    height?: string,
    /**
     * Changes layout for mobile devices.
     */
    isMobile: boolean,
}
