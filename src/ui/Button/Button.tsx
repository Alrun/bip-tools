import React from 'react';
import { StyledButton, StyledIconButton } from './ButtonStyles';
import { ButtonProps } from './Button.d';

const Button = ({
    isRound,
    size = 'medium',
    variant = 'contained',
    // eslint-disable-next-line react/jsx-props-no-spreading
    ...props
}: ButtonProps) =>
    isRound ? (
        <StyledIconButton
            size={size}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...props}
        />
    ) : (
        <StyledButton
            variant={variant}
            size={size}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...props}
        />
    );

export default Button;
