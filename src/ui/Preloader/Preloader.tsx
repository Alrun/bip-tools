import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { PreloaderProps } from './Preloader.d';
import StyledLinearProgress from './PreloaderStyles';

const Preloader = ({
    circularVariant,
    disableShrink = true,
    height = 3,
    isLinear = false,
    linearVariant,
    size = 28,
    thickness,
    valueBuffer,
    ...props
}: PreloaderProps) =>
    isLinear ? (
        <StyledLinearProgress height={height} valueBuffer={valueBuffer} variant={linearVariant} {...props} />
    ) : (
        <CircularProgress
            size={size}
            disableShrink={disableShrink}
            variant={circularVariant}
            thickness={thickness}
            {...props}
        />
    );

export default Preloader;
