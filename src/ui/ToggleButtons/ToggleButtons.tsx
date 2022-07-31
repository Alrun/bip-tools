import React from 'react';
import { StyledToggleButtonGroup, StyledToggleButton } from './ToggleButtonStyles';
import { ToggleButtonsProps } from './ToggleButtons.d';

const ToggleButtons = ({
    options,
    selected,
    isAllowUnselected = false,
    isMultiple = false,
    color = 'primary',
    onChange,
    ButtonsProps,
    ...props
}: ToggleButtonsProps) => {
    const [current, setCurrent] = React.useState<string | number | (string | number)[] | undefined>(() => selected);

    const handleChangeCurrent = (e: React.MouseEvent<HTMLElement>, newValue: string | number) => {
        if (onChange) {
            onChange(newValue);
        } else if (!isAllowUnselected && newValue !== null) {
            setCurrent(newValue);
        } else if (isAllowUnselected) {
            setCurrent(newValue);
        }
    };

    React.useEffect(() => {
        if (selected) setCurrent(selected);
    }, [selected]);

    return (
        <StyledToggleButtonGroup
            color={color}
            value={current}
            exclusive={!isMultiple}
            onChange={handleChangeCurrent}
            {...props}
        >
            {options.map(({ children, value, disabled }) => (
                <StyledToggleButton key={value} value={value} disabled={disabled} {...ButtonsProps}>
                    {children}
                </StyledToggleButton>
            ))}
        </StyledToggleButtonGroup>
    );
};

export default ToggleButtons;
