import React, { ReactElement, ReactSVGElement } from 'react';
import { TabProps } from '@mui/material';

export interface TabItem {
    /**
     * The label tab.
     */
    label: string;
    icon?: ReactElement<ReactSVGElement>;
    content: React.ReactNode;
}

export interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface StyledTabProps extends TabProps {
    // label: string;
    // icon?: ReactElement<ReactSVGElement>;
}

export interface TabsProps extends TabProps {
    tabsList: TabItem[];
    swipeablePanel?: boolean;
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
