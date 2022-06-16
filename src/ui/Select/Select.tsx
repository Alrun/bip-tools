import React from 'react';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import toLowercase from '../../utils/toLowercase/toLowercase';
import { isTouch } from '../../utils/featuresDetection/featuresDetection';
import { ArrowDownIcon, ArrowUpIcon } from '../Icons/Icons';
import Typography from '../Typography/Typography';
import Checkbox from '../Checkbox/Checkbox';
import StyledSelect from './SelectStyles';
import { SelectProps, SelectOptionsInterface } from './Select.d';

/**
 * Converts the options to the required shape.
 * @param {any[]} options Raw options.
 * @returns {SelectOptionsInterface[]}
 */
export const getFormattedOptions = (options: any[]): SelectOptionsInterface[] =>
    options.map((option) => {
        if (typeof option === 'string') return { value: option.toLowerCase(), label: option };
        if (typeof option === 'number') return { value: option, label: option };

        if (typeof option === 'object' && option !== null) {
            return { ...option, value: option.value.toLowerCase() };
        }

        return [];
    });
/**
 * Filters options by value.
 * @param {SelectOptionsInterface[]} options Options to filter.
 * @param {SelectProps['value'] | SelectProps['defaultValue']} value Input value to be filtered.
 * @returns {SelectOptionsInterface[]}
 */
export const filterOptions = (
    options: SelectOptionsInterface[],
    value: SelectProps['value'] | SelectProps['defaultValue']
): SelectOptionsInterface[] => {
    if (typeof value === 'string' || typeof value === 'number') {
        return options.filter((option) => option.value === value);
    }

    if (Array.isArray(value)) {
        return options.filter((option) => value.includes(option.value));
    }

    return [];
};
/**
 * Gets the text of the option label.
 * @param {SelectOptionsInterface[]} options Array of options.
 * @param {SelectProps['value'] | SelectProps['defaultValue']} value Value by which options are selected.
 * @param {boolean | undefined} multiple Multiple selections.
 * @returns {string | undefined}
 */
export const getLabelOption = (
    options: SelectOptionsInterface[],
    value: SelectProps['value'] | SelectProps['defaultValue'],
    multiple?: boolean
): string | undefined => {
    if (value) {
        const currentOptions = filterOptions(options, value);
        /**
         * TODO: Add display of multiple selected options on overflow.
         * (el.offsetWidth < el.scrollWidth);
         */
        if (multiple) return currentOptions.map((item) => item.label).join(', ');

        return currentOptions[0].label as string;
    }

    return undefined;
};
/**
 * Gets option is selected.
 * @param {SelectOptionsInterface} option Checked option.
 * @param {SelectProps['value'] | undefined} value The value against which the option is checked.
 * @param {SelectProps['defaultValue'] | undefined} defaultValue The value against which the option is checked if the default value.
 * @returns {boolean}
 */
export const getChecked = (
    option: SelectOptionsInterface,
    value?: SelectProps['value'],
    defaultValue?: SelectProps['defaultValue']
): boolean => {
    if (value) {
        if (Array.isArray(value)) return value.includes(option.value);

        return value === option.value;
    }

    if (defaultValue) {
        if (Array.isArray(defaultValue)) return defaultValue.includes(option.value);

        return defaultValue === option.value;
    }

    return false;
};

const Select = ({
    id,
    defaultOpen,
    defaultValue,
    disabled,
    maxItem = 8,
    multiple,
    native,
    nativeEmptyOptionText = 'Not selected',
    nativeOnTouch = true,
    noOptionsText = 'No options',
    onChange,
    options = [],
    size,
    value,
    ...props
}: SelectProps) => {
    const formattedOptions = getFormattedOptions(options as any[]);
    const lowercaseDefaultValue = React.useMemo(() => toLowercase(defaultValue), [defaultValue]);
    const [open, setOpen] = React.useState(false);
    const isNative = native || (nativeOnTouch && isTouch());
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    /**
     * Native select handler.
     * @param {React.ChangeEvent<HTMLSelectElement>} event The event source of the callback.
     */
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (!onChange) return;

        if (multiple) {
            const values = Array.from(event.target.options)
                .filter((option) => option.selected)
                .map((option) => option.value);

            onChange(values);
        } else onChange(event.target.value);
    };

    const handleOpen = (bool: boolean) => () => {
        if (!disabled) setOpen(bool);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return;

        setOpen(false);
    };

    const handleListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Escape') setOpen(false);
        else if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    };

    const handleSelect = (nextValue: string | number) => () => {
        if (!onChange) return;

        if (multiple) {
            const checkedOptions: Array<string | number> = value.includes(nextValue)
                ? value.filter((item: string | number) => item !== nextValue)
                : [...value, nextValue];
            onChange(checkedOptions);
        } else {
            onChange(filterOptions(formattedOptions, nextValue)[0].value);
            setOpen(false);
        }
    };

    React.useEffect(() => {
        if (defaultOpen) setOpen(true);
    }, []);

    return isNative ? (
        <div>
            <StyledSelect
                defaultValue={defaultValue}
                disabled={disabled}
                id={id}
                inputRef={anchorRef}
                InputLabelProps={{
                    shrink: true
                }}
                onChange={handleChange}
                onClick={handleOpen(!open)}
                select
                SelectProps={{
                    native: true,
                    multiple
                }}
                size={size}
                value={value}
                {...props}
            >
                {!lowercaseDefaultValue && !multiple && <option>{nativeEmptyOptionText}</option>}
                {formattedOptions.map((option) => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
        </div>
    ) : (
        <>
            <StyledSelect
                defaultValue={getLabelOption(formattedOptions, lowercaseDefaultValue, multiple)}
                disabled={disabled}
                focused={open ? true : undefined}
                id={id}
                icon={open ? <ArrowUpIcon fontSize="medium" /> : <ArrowDownIcon fontSize="medium" />}
                iconPosition="end"
                inputProps={{
                    readOnly: true,
                    type: 'button',
                    tabIndex: 0,
                    'aria-label': 'Select',
                    'aria-haspopup': true,
                    'aria-expanded': open,
                    'aria-controls': open && id ? `${id}-composition-menu` : undefined
                }}
                inputRef={anchorRef}
                onClick={handleOpen(!open)}
                size={size}
                value={value ? getLabelOption(formattedOptions, value, multiple) : value}
                {...props}
            />
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal={false}
                style={{
                    zIndex: 1,
                    width: anchorRef.current?.parentElement?.offsetWidth
                }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        timeout={{
                            appear: 0,
                            enter: 100,
                            exit: 100
                        }}
                        style={{
                            transformOrigin: placement === 'bottom-start' ? 'top' : 'bottom'
                        }}
                        {...TransitionProps}
                    >
                        <Paper elevation={6} sx={{ maxHeight: maxItem * 34.5, overflowX: 'hidden' }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                {!options.length ? (
                                    <Box sx={{ padding: '10px' }}> {noOptionsText} </Box>
                                ) : (
                                    <MenuList
                                        autoFocusItem={open}
                                        id={id && `${id}-composition-menu`}
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        {formattedOptions.map((option) => (
                                            <MenuItem
                                                key={option.value}
                                                selected={getChecked(option, value, defaultValue)}
                                                onClick={handleSelect(option.value)}
                                                dense={size === 'small'}
                                                disabled={option.disabled}
                                                sx={{
                                                    paddingLeft: '10px',
                                                    paddingRight: '10px'
                                                }}
                                            >
                                                {multiple && (
                                                    <Checkbox
                                                        checked={getChecked(option, value, defaultValue)}
                                                        sx={{ mr: 0 }}
                                                        disableRipple
                                                    />
                                                )}
                                                <Typography variant="inherit" noWrap>
                                                    {option.label}
                                                </Typography>
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                )}
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};

export default Select;
