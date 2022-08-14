import { ThemeMode } from '../../../componets/ThemeModeSwitch/ThemeModeSwitch';

export interface AppState {
    /**
     * Locale string containing the language. [BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag).
     *
     * @example 'en-US'
     */
    locale: string;
    /**
     * Theme Mode.
     */
    mode: ThemeMode;
    /**
     * Sidebar Density. if 'true' sidebar is dense.
     */
    sidebarDense: boolean;
    /**
     * Expand panel menu.
     */
    menuExpanded: false | string;
}
