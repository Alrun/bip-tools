import React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { ArrowDownIcon, ArrowUpIcon } from '../Icons/Icons';
import { isTouch } from '../../utils/featuresDetect';
import StyledSelect from './SelectStyles';
import { SelectProps, SelectOptionsInterface } from './Select.d';
import Typography from '../Typography/Typography';

const Select = ({
    id,
    defaultValue = '',
    defaultOpen = false,
    disabled,
    maxItem = 8,
    native,
    nativeEmptyOptionLabel = 'Not selected',
    options = [],
    size,
    ...props
}: SelectProps) => {
    const defineOption = (value: string): SelectOptionsInterface => {
        const currentOption = options.filter((item) => item.value === value);
        return !currentOption.length ? { value: '', label: undefined } : currentOption[0];
    };

    console.log(defaultValue);

    const [selected, setSelected] = React.useState<string>(() =>
        defaultValue ? defineOption(defaultValue).value : ''
    );

    const [open, setOpen] = React.useState<boolean>(false);
    const isNative = native || isTouch();
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleOpen = (bool: boolean) => () => {
        if (!disabled) setOpen(bool);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

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

    const handleSelect = (option: string) => () => {
        setSelected(defineOption(option).value);
        setOpen(false);
    };

    React.useEffect(() => {
        if (defaultOpen) setOpen(true);
    }, []);

    return isNative ? (
        <div>
            <StyledSelect
                select
                id={id}
                value={selected}
                SelectProps={{
                    native: true
                }}
                onChange={handleChange}
                inputRef={anchorRef}
                aria-controls={open && id ? `${id}-composition-menu` : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                disabled={disabled}
                size={size}
                {...props}
            >
                {!defaultValue && <option>{nativeEmptyOptionLabel}</option>}
                {options.map((option) => (
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
                value={selected ? defineOption(selected).label : ''}
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
                    'aria-haspopup': true
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
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom-start' ? 'top' : 'bottom'
                        }}
                    >
                        <Paper elevation={6} sx={{ maxHeight: maxItem * 34.5, overflowX: 'hidden' }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id={id && `${id}-composition-menu`}
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {options.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            selected={option.value === selected}
                                            onClick={handleSelect(option.value)}
                                            dense={size === 'small'}
                                            disabled={option.disabled}
                                            sx={{
                                                paddingLeft: '10px',
                                                paddingRight: '10px'
                                            }}
                                        >
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
