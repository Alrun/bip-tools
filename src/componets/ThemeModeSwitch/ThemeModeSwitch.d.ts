export type ThemeModeType = 'auto' | 'light' | 'dark';

export interface ThemeModeSwitchProps {
    /**
     * Theme mode.
     */
    mode: ThemeModeType;
    /**
     * The callback fires when the theme mode changes.
     *
     * @param {ThemeModeType} mode Theme mode.
     */
    changeMode?: (mode: ThemeModeType) => void;
    /**
     * If `true`, expands the collapsed component.
     */
    expanded?: boolean;
    /**
     * The size of the component.
     *
     * @default 'medium'
     */
    size?: 'small' | 'medium';
}
