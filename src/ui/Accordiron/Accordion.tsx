import React from 'react';
import Typography from '../Typography/Typography';
import { ChevronDownIcon } from '../Icons/Icons';
import { StyledAccordion, StyledAccordionDetails, StyledAccordionSummary } from './AccordionStyles';
import { AccordionProps } from './Accordion.d';

const Accordion = ({
    headerText,
    children,
    headerContent,
    variant = 'outlined',
    AccordionSummaryProps,
    ...props
}: AccordionProps) => (
    <StyledAccordion elevation={variant === 'elevation' ? 4 : 0} variant={variant} {...props}>
        <StyledAccordionSummary expandIcon={<ChevronDownIcon />} {...AccordionSummaryProps}>
            {headerContent || <Typography>{headerText}</Typography>}
        </StyledAccordionSummary>
        <StyledAccordionDetails>{children}</StyledAccordionDetails>
    </StyledAccordion>
);

export default Accordion;
