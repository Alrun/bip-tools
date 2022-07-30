import React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import {
    AutocompleteCloseReason,
    AutocompleteHighlightChangeReason,
    AutocompleteInputChangeReason,
    FilterOptionsState
} from '@mui/base/AutocompleteUnstyled/useAutocomplete';
import { AutocompleteRenderOptionState } from '@mui/material/Autocomplete/Autocomplete';
import { InputProps } from '../Input/Input';

export interface AutocompleteOptionInterface {
    label: string;

    [key: string]: string | number;
}

export interface AutocompleteProps {
    /**
     * If the value is true, when selecting options using the keyboard,
     * sets the value of the input field
     * @default true
     */
    autoComplete?: boolean;
    /**
     * If `true`, the first option is automatically highlighted.
     * @default false
     */
    autoHighlight?: boolean;
    /**
     * If `true`, the selected option becomes the value of the input
     * when the Autocomplete loses focus unless the user chooses
     * a different option or changes the character string in the input.
     * @default false
     */
    autoSelect?: boolean;
    /**
     * Control if the input should be blurred when an option is selected:
     * - `false` the input is not blurred.
     * - `true` the input is always blurred.
     * - `touch` the input is blurred after a touch event.
     * - `mouse` the input is blurred after a mouse event.
     * @default false
     */
    blurOnSelect?: 'touch' | 'mouse' | true | false;
    /**
     * Override the default text for the *clear* icon button.
     * @default 'Clear'
     */
    clearText?: string;
    /**
     * Override the default text for the *close popup* icon button.
     * @default 'Close'
     */
    closeText?: string;
    /**
     * If `true`, the input's text is cleared on blur if no value is selected.
     * Set to `true` if you want to help the user enter a new value.
     * Set to `false` if you want to help the user resume their search.
     * @default !props.freeSolo
     */
    clearOnBlur?: boolean;
    /**
     * If `true`, clear all values when the user presses escape and the popup is closed.
     * @default false
     */
    clearOnEscape?: boolean;
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: AutocompleteOptionInterface | string;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the input can't be cleared.
     * @default false
     */
    disableClearable?: boolean;
    /**
     * If `true`, the popup won't close when a value is selected.
     * @default false
     */
    disableCloseOnSelect?: boolean;
    /**
     * If `true`, will allow focus on disabled items.
     * @default false
     */
    disabledItemsFocusable?: boolean;
    /**
     * Force the visibility display of the popup icon.
     * @default true
     */
    forcePopupIcon?: boolean;
    /**
     * If `true`, the input will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * A function that determines the filtered options to be rendered on search.
     * @param {T[]} options The options to render.
     * @param {object} state The state of the component.
     * @returns {T[]}
     */
    filterOptions?: (options: T[], state: FilterOptionsState<T>) => T[];
    /**
     * If `true`, hide the selected options from the list box.
     * @default false
     */
    filterSelectedOptions?: boolean;
    /**
     * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
     * @default false
     */
    freeSolo?: boolean;
    /**
     * Used to determine the disabled state for a given option.
     * @param {T} option The option to test.
     * @returns {boolean}
     */
    getOptionDisabled?: (option: T) => boolean;
    /**
     * If provided, the options will be grouped under the returned string.
     * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
     * @param {T} options The options to group. (option) => (option as string)[0].toUpperCase()
     * @returns {string}
     */
    groupBy?: (option: T) => string;
    /**
     * Highlighting text in autosuggest.
     */
    highlight?: boolean;
    /**
     * If `true`, the component handles the "Home" and "End" keys when the popup is open.
     * It should move focus to the first option and last option, respectively.
     * @default !props.freeSolo
     */
    handleHomeEndKeys?: boolean;
    /**
     * This prop is used to help implement the accessibility logic.
     * If you don't provide an id it will fall back to a randomly generated one.
     */
    id?: string;
    /**
     * Props used by the input element that is a part of a Autocomplete.
     */
    inputProps?: Omit<InputProps, 'label'>;
    /**
     * The input value.
     */
    inputValue?: string;
    /**
     * The label content.
     */
    label?: React.ReactNode;
    /**
     * If `true`, the component is in a loading state.
     * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
     * @default false
     */
    loading?: boolean;
    /**
     * Text to display when in a loading state.
     * For localization purposes, you can use the provided.
     * @default 'Loading…'
     */
    loadingText?: React.ReactNode;
    /**
     * The number of list items to display if the list is virtualized.
     */
    maxItems?: number;
    /**
     * Text to display when there are no options.
     * For localization purposes, you can use the provided.
     * @default 'No options'
     */
    noOptionsText?: React.ReactNode;
    /**
     * Override the default text for the *open popup* icon button.
     * For localization purposes, you can use the provided.
     * @default 'Open'
     */
    openText?: string;
    /**
     * Array of options.
     * {AutocompleteOption[] | string[]}
     */
    options: ReadonlyArray<T>;
    /**
     * Callback fired when the value changes.
     * @param {React.SyntheticEvent} event The event source of the callback.
     * @param {T|T[]} value The new value of the component.
     * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
     * @param {string} [details]
     * @default []
     */
    onChange?: (value: string) => void;
    /**
     * Callback fired when the popup requests to be closed.
     * Use in controlled mode (see open).
     * @param {React.SyntheticEvent} event The event source of the callback.
     * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
     */
    onClose?: (event: React.SyntheticEvent, reason: AutocompleteCloseReason) => void;
    /**
     * Callback fired when the input value changes.
     * @param {React.SyntheticEvent} event The event source of the callback.
     * @param {string} value The new value of the text input.
     * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
     */
    onInputChange?: (
        event: React.SyntheticEvent,
        value: string,
        reason: AutocompleteInputChangeReason,
    ) => void;
    /**
     * Callback fired when the popup requests to be opened.
     * Use in controlled mode (see open).
     * @param {React.SyntheticEvent} event The event source of the callback.
     */
    onOpen?: (event: React.SyntheticEvent) => void;
    /**
     * Callback fired when the highlight option changes.
     * @param {React.SyntheticEvent} event The event source of the callback.
     * @param {T} option The highlighted option.
     * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`.
     */
    onHighlightChange?: (
        event: React.SyntheticEvent,
        option: T | null,
        reason: AutocompleteHighlightChangeReason,
    ) => void;
    /**
     * If `true`, the component is shown.
     */
    open?: boolean;
    /**
     * If `true`, the popup will open on input focus.
     * @default false
     */
    openOnFocus?: boolean;
    /**
     * The icon to display in place of the default popup icon.
     * @default <ArrowDownIcon />
     */
    popupIcon?: React.ReactNode;
    /**
     * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
     * @default false
     */
    readOnly?: boolean;
    /**
     * Render the option, use `getOptionLabel` by default.
     * @param {object} props The props to apply on the li element.
     * @param {T} option The option to render.
     * @param {object} state The state of the component.
     * @returns {ReactNode}
     */
    renderOption?: (
        props: React.HTMLAttributes<HTMLLIElement>,
        option: T,
        state: AutocompleteRenderOptionState,
    ) => React.ReactNode;
    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: 'small' | 'medium';
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * If `true`, the input's text is selected on focus.
     * It helps the user clear the selected value.
     * @default !props.freeSolo
     */
    selectOnFocus?: boolean;
    /**
     * The value of the autocomplete.
     * The value must have reference equality with the option in order to be selected.
     * You can customize the equality behavior with the `isOptionEqualToValue` prop.
     */
    value?: AutocompleteOptionInterface | string;
    /**
     * If true, then the list will be virtualized.
     * @default false
     */
    virtualize?: boolean;
}

export interface PopperComponentProps {
    anchorEl?: any;
    disablePortal?: boolean;
    open: boolean;
    children?: any;
}

export interface ListboxComponentProps extends React.HTMLAttributes<HTMLElement> {
    maxItems: number;
    hightlight?: number;
}
