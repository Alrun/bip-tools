import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

export const StyledEditableContent = styled(Box)(({ theme }) => ({
    '& .Mui-error': {
        '& + * [class*="word"]:not(.valid)': {
            color: theme.palette.error.main
        }
    },
    '& [role="textbox"]': {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        counterReset: 'list 0',
        width: '100%',
        padding: '16px 20px 6px 10px',
        cursor: 'text',
        fontSize: theme.typography.h5.fontSize,
        outline: 0,
        border: 0,
        minHeight: 58,
        '& span': {
            paddingLeft: 18,
            marginBottom: 12,
            height: 24,
            position: 'relative',
            cursor: 'text',
            textDecoration: 'none !important',
            outline: 0,
            '&::before': {
                content: 'counter(list, decimal)',
                counterIncrement: 'list',
                position: 'absolute',
                bottom: 1,
                width: '2ch',
                left: 18,
                color: theme.palette.text.secondary,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                opacity: 0,
                textAlign: 'center',
                fontSize: 13
            },
            '&.valid': {
                color: theme.palette.primary.main,
                paddingLeft: 36,
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 16,
                    right: -6,
                    bottom: -1,
                    top: -1,
                    pointerEvents: 'none',
                    border: '1px solid',
                    borderColor: theme.palette.divider,
                    borderRadius: '4px'
                },
                '&::before': {
                    opacity: 0.5
                }
            }
        }
    }
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
    // marginBottom: 20,
    '&:hover': {
        '& fieldset': {
            borderColor: theme.palette.text.primary
        }
    },
    '& .MuiInputLabel-root': {
        '&.MuiInputLabel-shrink': {
            transform: 'translate(10px, -8px) scale(0.75)'
        },
        '&.Mui-focused + *': {
            '& fieldset': {
                borderWidth: 2,
                borderColor: theme.palette.primary.main
            }
        },
        '&.Mui-error + *': {
            '& fieldset': {
                borderColor: theme.palette.error.main
            }
        }
    },
    '& fieldset': {
        textAlign: 'left',
        position: 'absolute',
        bottom: 0,
        right: 0,
        top: -5,
        left: 0,
        margin: 0,
        padding: '0 8px',
        pointerEvents: 'none',
        borderRadius: 'inherit',
        borderStyle: 'solid',
        borderWidth: 1,
        overflow: 'hidden',
        minWidth: 0,
        borderColor:
            theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.23)
                : alpha(theme.palette.common.black, 0.23)
    },
    '& legend': {
        float: 'unset',
        overflow: 'hidden',
        display: 'block',
        width: 'auto',
        padding: 0,
        height: '11px',
        fontSize: '0.75em',
        visibility: 'hidden',
        maxWidth: '100%',
        whiteSpace: 'nowrap'
    },
    '& .MuiFormHelperText-root': {
        lineHeight: 1.25
    }
}));
