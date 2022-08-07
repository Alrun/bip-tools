import { ThemeModeSwitchProps } from '../ThemeModeSwitch/ThemeModeSwitch';

export interface LayoutProps extends Pick<ThemeModeSwitchProps, 'changeMode' | 'mode'> {}
