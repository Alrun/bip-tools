import React from 'react';
import Slide from '@mui/material/Slide';
import MuiGrow from '@mui/material/Grow';
import MuiFade from '@mui/material/Fade';
import { TransitionProps } from '@mui/material/transitions';

export type TransitionRefProps = TransitionProps & { children: React.ReactElement<any, any> };

export const SlideUp = React.forwardRef<TransitionRefProps, any>(
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    function TransitionRef({ children, ...props }: TransitionRefProps, ref) {
        return (
            <Slide {...props} direction="up" ref={ref}>
                {children}
            </Slide>
        );
    }
);

export const SlideDown = React.forwardRef<TransitionRefProps, any>(
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    function TransitionRef({ children, ...props }: TransitionRefProps, ref) {
        return (
            <Slide {...props} direction="down" ref={ref}>
                {children}
            </Slide>
        );
    }
);

export const SlideLeft = React.forwardRef<TransitionRefProps, any>(
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    function TransitionRef({ children, ...props }: TransitionRefProps, ref) {
        return (
            <Slide {...props} direction="left" ref={ref}>
                {children}
            </Slide>
        );
    }
);

export const SlideRight = React.forwardRef<TransitionRefProps, any>(
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    function TransitionRef({ children, ...props }: TransitionRefProps, ref) {
        return (
            <Slide {...props} direction="right" ref={ref}>
                {children}
            </Slide>
        );
    }
);

export const Grow = React.forwardRef<TransitionRefProps, any>(
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    function TransitionRef({ children, ...props }: TransitionRefProps, ref) {
        return (
            <MuiGrow {...props} ref={ref}>
                {children}
            </MuiGrow>
        );
    }
);

export const Fade = React.forwardRef<TransitionRefProps, any>(
    /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
    function TransitionRef({ children, ...props }: TransitionRefProps, ref) {
        return (
            <MuiFade {...props} ref={ref}>
                {children}
            </MuiFade>
        );
    }
);
