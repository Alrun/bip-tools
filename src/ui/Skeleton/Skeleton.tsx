import React from 'react';
import MuiSkeleton from '@mui/material/Skeleton';
import { SkeletonProps } from './Skeleton.d';

const Skeleton = ({ variant = 'default', sx, ...props }: SkeletonProps) => (
    <MuiSkeleton
        variant={variant === 'default' ? 'rectangular' : variant}
        sx={{ borderRadius: variant === 'default' ? '6px/10px' : undefined, ...sx }}
        animation="wave"
        {...props}
    />
);

export default Skeleton;
