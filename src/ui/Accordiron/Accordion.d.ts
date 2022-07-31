import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions/transition';
import { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion/Accordion';
import { AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material/AccordionSummary/AccordionSummary';

export interface AccordionProps extends Omit<MuiAccordionProps, 'ref'> {
    /**
     * Props applied to the AccordionSummary component.
     */
    AccordionSummaryProps?: MuiAccordionSummaryProps;
    /**
     * If `true`, expands the accordion by default.
     *
     * @default false
     */
    defaultExpanded?: boolean;
    /**
     * If `true`, the component is disabled.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, it removes the margin between two expanded accordion items and the increase of height.
     *
     * @default false
     */
    disableGutters?: boolean;
    /**
     * The content of the component.
     */
    children: NonNullable<React.ReactNode>;
    /**
     * If `true`, expands the accordion, otherwise collapse it.
     * Setting this prop enables control over the accordion.
     */
    expanded?: boolean;
    /**
     * The text of the header component.
     */
    headerText?: string;
    /**
     * The content of the header component.
     */
    headerContent?: React.ReactNode;
    /**
     * Callback fired when the expand/collapse state is changed.
     *
     * @param {React.SyntheticEvent} event The event source of the callback.
     * **Warning**: This is a generic event not a change event.
     * @param {boolean} expanded The `expanded` state of the accordion.
     */
    onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     */
    TransitionProps?: TransitionProps;
    /**
     * Component display variant.
     *
     * @default 'outlined'.
     */
    variant?: 'outlined' | 'elevation';
}
