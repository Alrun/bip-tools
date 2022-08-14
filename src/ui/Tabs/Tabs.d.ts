import React from 'react';
import { TabProps as MuiTabProps } from '@mui/material/Tab';
import { TabsProps as MuiTabsProps } from '@mui/material/Tabs';

export interface TabProps {
    /**
     * This prop isn't supported.
     */
    children?: null;
    /**
     * Tab panel content.
     */
    content?: React.ReactNode;
    /**
     * If 'true', the component is disabled.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * If 'true', the  keyboard focus ripple is disabled.
     *
     * @default false
     */
    disableFocusRipple?: boolean;
    /**
     * The icon to display.
     */
    icon?: string | React.ReactElement;
    /**
     * The position of the icon relative to the label.
     *
     * @default 'top'
     */
    iconPosition?: 'top' | 'bottom' | 'start' | 'end';
    /**
     * The component orientation (layout flow direction).
     */
    isVertical?: boolean;
    /**
     * The label element.
     */
    label?: string;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: MuiTabProps['sx'];
    /**
     * Child position index.
     */
    value?: number;
    /**
     * Tab labels appear in a single row. They can use a second line if needed.
     *
     * @default false
     */
    wrapped?: boolean;
}

export interface StyledTabsProps {
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * The component orientation (layout flow direction).
     *
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Callback fired when the value changes.
     *
     * @param {React.SyntheticEvent} event The event source of the callback.
     * **Warning**: This is a generic event not a change event.
     * @param {number} value We default to the index of the child (number)
     */
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
    /**
     * The value of the currently selected 'Tab'.
     */
    value: number;
}

export interface TabsProps {
    /**
     * Sets the active tab.
     */
    activeTab?: number;
    /**
     * If 'true', the scroll buttons aren't forced hidden on mobile.
     * By default, the scroll buttons are hidden on mobile and takes precedence over 'scrollButtons'.
     *
     * @default false
     */
    allowScrollButtonsMobile?: boolean;
    /**
     * The label for the Tabs as a string.
     */
    'aria-label'?: string;
    /**
     * An id or list of ids separated by a space that label the Tabs.
     */
    'aria-labelledby'?: string;
    /**
     * If 'true', the tabs are centered. This prop is intended for large views.
     *
     * @default false
     */
    centered?: boolean;
    /**
     * ID used as a prefix for the current Tabs.
     */
    idPrefix: string;
    /**
     * Determines the color of the indicator.
     *
     * @default 'primary'
     */
    indicatorColor?: 'secondary' | 'primary';
    /**
     * The component orientation (layout flow direction).
     */
    isVertical?: boolean;
    /**
     * This uses react-swipeable-views to animate tab transitions and allows tab swiping on touch devices.
     */
    isSwipeable?: boolean;
    /**
     * Callback fired when the value changes.
     *
     * @param {any} value We default to the index of the child (number)
     */
    onChange?: (value: any) => void;
    /**
     * The component used to render the scroll buttons.
     *
     * @default TabScrollButton
     */
    ScrollButtonComponent?: React.ElementType;
    /**
     * Determine behavior of scroll buttons when tabs are set to scroll:
     *
     * - 'auto' will only present them when not all the items are visible.
     * - 'true' will always present them.
     * - 'false' will never present them.
     *
     * By default, the scroll buttons are hidden on mobile.
     * This behavior can be disabled with 'allowScrollButtonsMobile`.
     *
     * @default 'auto'
     */
    scrollButtons?: 'auto' | true | false;
    /**
     * If `true` the selected tab changes on focus. Otherwise, it only
     * changes on activation.
     */
    selectionFollowsFocus?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: MuiTabsProps['sx'];
    /**
     * Tab list.
     */
    tabList: TabProps[];
    /**
     * Props applied to the tab indicator element.
     *
     * @default  {}
     */
    TabIndicatorProps?: MuiTabsProps['TabIndicatorProps'];
    /**
     * Props applied to the [`TabScrollButton`](https://mui.com/material-ui/api/tab-scroll-button/) element.
     *
     * @default {}
     */
    TabScrollButtonProps?: MuiTabsProps['TabScrollButtonProps'];
    /**
     * Determines the color of the `Tab`.
     *
     * @default 'primary'
     */
    textColor?: 'secondary' | 'primary' | 'inherit';
    /**
     * The value of the currently selected `Tab`.
     * If you don't want any selected `Tab`, you can set this prop to `false`.
     */
    value?: number;
    /**
     *  Determines additional display behavior of the tabs:
     *
     *  - `scrollable` will invoke scrolling properties and allow for horizontally
     *  scrolling (or swiping) of the tab bar.
     *  -`fullWidth` will make the tabs grow to use all the available space,
     *  which should be used for small views, like on mobile.
     *  - `standard` will render the default state.
     *
     * @default 'standard'
     */
    variant?: 'standard' | 'scrollable' | 'fullWidth';
    /**
     * If `true`, the scrollbar is visible. It can be useful when displaying
     * a long vertical list of tabs.
     *
     * @default false
     */
    visibleScrollbar?: boolean;
}

export interface TabPanelProps {
    /**
     * Content of the component.
     */
    children?: React.ReactNode;
    /**
     * ID used as a prefix for the current Tabs.
     */
    idPrefix: string;
    /**
     * Tab index.
     */
    index: number;
    /**
     * Scroll direction if swipeable enabled.
     */
    dir?: string;
    /**
     * Tab value.
     */
    value: number;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: MuiTabsProps['sx'];
}
