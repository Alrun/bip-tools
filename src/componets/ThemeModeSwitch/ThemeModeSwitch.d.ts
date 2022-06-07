export type ThemeModeType = 'auto' | 'light' | 'dark';

export interface ThemeModeSwitchProps {
    mode: ThemeModeType;
    changeMode?: (mode: ThemeModeType) => () => void;
    expanded?: boolean;
    size?: 'small' | 'medium';
}
