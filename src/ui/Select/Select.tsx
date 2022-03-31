import React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Input from '../Input/Input';
import { ArrowDownIcon, ArrowUpIcon } from '../Icons/Icons';
import { isTouch } from '../../utils/featuresDetect';

interface SelectProps {
    id: string;
    label: string;
    options: {
        value: string;
        label: string;
    }[];
    defaultValue: string;
    helperText?: string;
    variant?: 'standard' | 'outlined' | 'filled';
}

const Select = ({ id, label, options, defaultValue, variant = 'outlined', helperText }: SelectProps) => {
    const defineOption = (value: string) => options.filter((item) => item.value === value)[0].label;

    const [selected, setSelected] = React.useState(() => defineOption(defaultValue));
    const [open, setOpen] = React.useState(false);

    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
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

    const handleSelect = (option: string) => {
        setSelected(defineOption(option));
        setOpen(false);
    };

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (open) {
                anchorRef.current?.focus();
            }
        });
        return () => clearTimeout(timer);
    }, [open]);

    return isTouch() ? (
        <div>
            <Input
                select
                id={id}
                label={label}
                value={selected}
                variant={variant}
                SelectProps={{
                    native: true
                }}
                onChange={handleChange}
                helperText={helperText}
                inputRef={anchorRef}
                aria-controls={open ? `${id}-composition-menu"}` : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Input>
        </div>
    ) : (
        <>
            <Input
                id={id}
                label={label}
                value={selected}
                variant={variant}
                onClick={handleToggle}
                helperText={helperText}
                inputRef={anchorRef}
                icon={open ? <ArrowUpIcon fontSize="medium" /> : <ArrowDownIcon fontSize="medium" />}
                iconPosition="end"
                inputProps={{
                    readOnly: true,
                    role: 'button',
                    tabIndex: 0,
                    'aria-haspopup': true
                }}
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
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id={`${id}-composition-menu"}`}
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {options.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            selected={option.value === selected}
                                            onClick={() => handleSelect(option.value)}
                                        >
                                            {option.label}
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
