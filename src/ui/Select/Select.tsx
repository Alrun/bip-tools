import React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { isTouch } from '../../utils/featuresDetect';
import { ArrowDownIcon, ArrowUpIcon } from '../Icons/Icons';
import Typography from '../Typography/Typography';
import Checkbox from '../Checkbox/Checkbox';
import StyledSelect from './SelectStyles';
import { SelectProps, SelectOptionsInterface } from './Select.d';

/**
 * TODO: Add display of multiple selected options on overflow
 * (el.offsetWidth < el.scrollWidth);
 */

const Select = ({
    id,
    defaultValue,
    defaultOpen,
    disabled,
    maxItem = 8,
    multiple,
    native,
    nativeOnTouch = true,
    nativeEmptyOptionLabel = 'Not selected',
    options = [],
    size,
    ...props
}: SelectProps) => {
    // Converts value options to lowercase
    const lowercaseValuesOptions = options.map((option) => ({ ...option, value: option.value.toLowerCase() }));
    // Converts defaultValue to lowercase
    const lowercaseDefaultValue = React.useMemo((): string | string[] => {
        if (!defaultValue) return '';
        if (typeof defaultValue === 'string') return defaultValue.toLowerCase();

        return defaultValue.map((val) => val.toLowerCase());
    }, [defaultValue]);
    /**
     * Filters options by value
     * @param {string | string[]} value Input value to be filtered.
     * @returns {SelectOptionsInterface[]}
     */
    const filterOptions = (value: string | string[]): SelectOptionsInterface[] =>
        typeof value === 'string'
            ? lowercaseValuesOptions.filter((option) => option.value === value)
            : lowercaseValuesOptions.filter((option) => value.includes(option.value));
    /**
     * Gets the initial selected options
     * @returns {string[]}
     */
    const getInitialSelect = (): string[] => {
        if (lowercaseDefaultValue) {
            return multiple
                ? filterOptions(lowercaseDefaultValue).map((item) => item.value)
                : [filterOptions(lowercaseDefaultValue)[0].value];
        }

        return [];
    };

    const [selected, setSelected] = React.useState(() => getInitialSelect());
    const [open, setOpen] = React.useState(false);

    const isNative = native || (nativeOnTouch && isTouch());
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    /**
     * Native select handler.
     * @param {React.ChangeEvent<HTMLSelectElement>} event The event source of the callback.
     */
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (multiple) {
            const values = Array.from(event.target.options)
                .filter((option) => option.selected)
                .map((option) => option.value);

            setSelected(values);
        } else {
            setSelected([event.target.value]);
        }
    };

    const handleOpen = (bool: boolean) => () => {
        if (!disabled) setOpen(bool);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return;

        setOpen(false);
    };

    const handleListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    };

    const handleSelect = (val: string) => () => {
        if (multiple) {
            setSelected((prevState) =>
                prevState.includes(val) ? prevState.filter((item) => item !== val) : [...prevState, val]
            );
        } else {
            setSelected([filterOptions(val)[0].value]);
            setOpen(false);
        }
    };

    React.useEffect(() => {
        if (defaultOpen) setOpen(true);
    }, []);

    return isNative ? (
        <div>
            <StyledSelect
                select
                id={id}
                value={multiple ? selected : selected.join()}
                SelectProps={{
                    native: true,
                    multiple
                }}
                InputLabelProps={{
                    shrink: true
                }}
                onChange={handleChange}
                inputRef={anchorRef}
                onClick={handleOpen(!open)}
                disabled={disabled}
                size={size}
                {...props}
            >
                {!lowercaseDefaultValue && !multiple && <option>{nativeEmptyOptionLabel}</option>}
                {lowercaseValuesOptions.map((option) => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
        </div>
    ) : (
        <>
            <StyledSelect
                id={id}
                value={filterOptions(selected)
                    .map((item) => item.label)
                    .join(', ')}
                onClick={handleOpen(!open)}
                focused={open ? true : undefined}
                inputRef={anchorRef}
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
                disabled={disabled}
                size={size}
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
                                <MenuList
                                    autoFocusItem={open}
                                    id={id && `${id}-composition-menu`}
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {lowercaseValuesOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            selected={selected.includes(option.value)}
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
                                                    checked={selected.includes(option.value)}
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
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};

export default Select;
