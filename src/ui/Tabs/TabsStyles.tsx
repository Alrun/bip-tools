import React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabProps, StyledTabsProps } from './Tabs.d';

export const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        selectionFollowsFocus
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />
        }}
        {...props}
    />
))({
    minHeight: 36,
    '& .MuiTabs-scrollButtons.Mui-disabled': {
        opacity: 0.3
    }
});

export const StyledTab = styled((props: TabProps) => <Tab disableRipple tabIndex={0} {...props} />, {
    shouldForwardProp: (prop) => prop !== 'isVertical'
})<{ isVertical?: boolean }>(({ theme, isVertical }) => ({
    padding: theme.spacing(2, 0),
    minWidth: 'auto',
    minHeight: 36,
    marginRight: theme.spacing(8),
    transition: theme.transitions.create(['color'], {
        duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
        color: theme.palette.primary.main
    },
    '&:last-of-type': {
        marginRight: isVertical ? theme.spacing(8) : 0
    }
}));
