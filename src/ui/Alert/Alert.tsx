import React from 'react';
import { StyledAlert } from './AlertStyles';
import { AlertProps } from './Alert.d';

const Alert = ({ children, ...props }: AlertProps) => <StyledAlert {...props}>{children}</StyledAlert>;

export default Alert;
