import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

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
    }
}));

export const StyledIconButton = styled(IconButton)({
    width: '1.715em',
    height: '1.715em',
    '&.MuiIconButton-sizeSmall': {
        fontSize: '1.167rem'
    },
    // '&.MuiIconButton-sizeLarge': {
    //
    // }
    // boxShadow: 'none',
    // textTransform: 'none',
    // fontSize: 16,
    // padding: '6px 12px',
    // border: '1px solid',
    // lineHeight: 1.5,
    // backgroundColor: '#0063cc',
    // borderColor: '#0063cc',
    // '&:hover': {
    //     backgroundColor: '#0069d9',
    //     borderColor: '#0062cc',
    //     boxShadow: 'none',
    // },
    // '&:active': {
    //     boxShadow: 'none',
    //     backgroundColor: '#0062cc',
    //     borderColor: '#005cbf',
    // },
    // '&:focus': {
    //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    // },
});
