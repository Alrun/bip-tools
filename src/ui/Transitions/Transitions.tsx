import React from 'react';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

export type TransitionRefProps = TransitionProps & { children: React.ReactElement<any, any> };

export const SlideUp = React.forwardRef<TransitionRefProps, any>(
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    function TransitionRef({ children, ...props }: TransitionRefProps, ref) {
        return (
            <Slide direction="up" ref={ref} {...props}>
                {children}
            </Slide>
        );
    }
);

export const SlideDown = React.forwardRef<TransitionRefProps, any>(
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    function TransitionRef({ children, ...props }: TransitionRefProps, ref) {
        return (
            <Slide direction="down" ref={ref} {...props}>
                {children}
            </Slide>
        );
    }
);

export const SlideLeft = React.forwardRef<TransitionRefProps, any>(
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    function TransitionRef({ children, ...props }: TransitionRefProps, ref) {
        return (
            <Slide direction="left" ref={ref} {...props}>
                {children}
            </Slide>
        );
    }
);

export const SlideRigth = React.forwardRef<TransitionRefProps, any>(
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    function TransitionRef({ children, ...props }: TransitionRefProps, ref) {
        return (
            <Slide direction="right" ref={ref} {...props}>
                {children}
            </Slide>
        );
    }
);
