import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: theme.typography.body1.fontSize,
    padding: '.661em 1em',
    minWidth: 'auto',
    borderRadius: theme.shape.borderRadius,
    lineHeight: '1.25em',
    '&:hover': {
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none'
    },
    '&.MuiButton-sizeSmall': {
        fontSize: theme.typography.smRegular.fontSize,
        lineHeight: '1.1em',
        padding: '.618em 1em'
    },
    '&.MuiButton-sizeLarge': {
        fontSize: theme.typography.h5.fontSize,
        padding: '.686em 1.1em'
    },
    '& .MuiButton-startIcon > *:nth-of-type(1)': {
        fontSize: '1.2em'
    },
    '& .MuiButton-startIcon': {
        marginRight: '.5em',
        marginLeft: '-.25em'
    },
    '& .MuiButton-endIcon > *:nth-of-type(1)': {
        fontSize: '1.2em'
    },
    '& .MuiButton-endIcon': {
        marginLeft: '.5em',
        marginRight: '-.25em'
    },
    '&.MuiButton-outlinedSecondary.Mui-disabled': {
        border: `1px solid ${theme.palette.divider}`
    }
}));

export const StyledIconButton = styled(Button)({
    width: '1.715em',
    height: '1.715em',
    fontSize: '1.5rem',
    padding: '8px',
    borderRadius: '50%',
    minWidth: 'auto',
    lineHeight: 1,
    '&.MuiButton-sizeSmall': {
        fontSize: '1.167rem'
    },
    '&.MuiButton-sizeLarge': {
        fontSize: '1.75rem'
    }
});
