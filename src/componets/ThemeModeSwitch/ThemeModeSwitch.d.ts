export type ThemeMode = 'auto' | 'light' | 'dark';

export interface ThemeModeSwitchProps {
    /**
     * The callback fires when the theme mode changes.
     *
     * @param {ThemeMode} mode Theme mode.
     */
    changeMode?: (mode: ThemeMode) => void;
    /**
     * If `true`, expands the collapsed component.
     */
    expanded?: boolean;
    /**
     * Theme mode.
     */
    mode: ThemeMode;
    /**
     * The size of the component.
     *
     * @default 'medium'
     */
    size?: 'small' | 'medium';
}
