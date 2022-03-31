import React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { StyledTabProps, StyledTabsProps } from './Tabs.d';

export const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        selectionFollowsFocus
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
    />
))({
    minHeight: 36
});

export const StyledTab = styled((props: StyledTabProps) => (
    <Tab
        disableRipple
        tabIndex={0}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
    />
))(({ theme }) => ({
    padding: 0,
    minWidth: 'auto',
    minHeight: 36,
    textTransform: 'none',
    '&:not(:last-of-type)': {
        marginRight: theme.spacing(8)
    }
}));
