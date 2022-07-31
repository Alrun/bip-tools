import { darken, lighten, styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export const StyledAccordion = styled(Accordion)({
    '&.MuiPaper-outlined': {
        marginBottom: '-1px',
        '&:before': {
            display: 'none'
        }
    },
    '& .MuiCollapse-root': {
        overflow: 'hidden',
        borderBottomLeftRadius: 'inherit',
        borderBottomRightRadius: 'inherit'
    }
});

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    padding: theme.spacing(0, 2.7),
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    '&:hover': {
        backgroundColor:
            theme.palette.mode === 'dark'
                ? lighten(theme.palette.background.paper, 0.015)
                : darken(theme.palette.background.default, 0.015)
    }
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2.7),
    backgroundColor:
        theme.palette.mode === 'dark'
            ? darken(theme.palette.background.paper, 0.15)
            : darken(theme.palette.background.default, 0.04)
}));
