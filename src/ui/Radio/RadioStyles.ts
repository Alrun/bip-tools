import { alpha, styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { RadioProps } from './Radio.d';

export const StyledRadio = styled(Radio)<{ size: RadioProps['size'] }>(({ theme, size }) => ({
    padding: size === 'medium' ? '.605rem' : '.405rem',
    margin: `0 ${size === 'medium' ? '-.7rem' : '-.5rem'}`,
    '& .MuiSvgIcon-root': {
        fontSize: '1.372rem',

        '&.MuiSvgIcon-fontSizeSmall': {
            fontSize: '1.2rem'
        }
    },
    '&:hover': {
        '&.MuiRadio-colorPrimary': {
            color: theme.palette.primary.main
        },
        '&.MuiRadio-colorSecondary': {
            color: theme.palette.secondary.main
        },
        '&.MuiRadio-colorError': {
            color: theme.palette.error.main
        },
        '&.MuiRadio-colorInfo': {
            color: theme.palette.info.main
        },
        '&.MuiRadio-colorSuccess': {
            color: theme.palette.success.main
        },
        '&.MuiRadio-colorWarning': {
            color: theme.palette.warning.main
        },
        '&.MuiRadio-colorDefault': {
            color: theme.palette.text.primary
        }
    }
}));

export const StyledRadioFormControlLabel = styled(FormControlLabel)<{ size: RadioProps['size'] }>(
    ({ theme, size }) => ({
        margin: 0,
        '&.MuiFormControlLabel-labelPlacementEnd': {
            '& .MuiFormControlLabel-label': {
                marginLeft: size === 'medium' ? '.65rem' : '.5rem'
            }
        },
        '&.MuiFormControlLabel-labelPlacementStart': {
            '& .MuiFormControlLabel-label': {
                marginRight: size === 'medium' ? '.65rem' : '.5rem'
            }
        },
        '& .MuiFormControlLabel-label': {
            fontSize: size === 'medium' ? theme.typography.body1.fontSize : theme.typography.smRegular.fontSize,
            userSelect: 'none',
            marginBottom: '-.2rem',
            marginTop: '-.2rem'
        },
        '&:hover': {
            '& .MuiRadio-colorPrimary:not(.Mui-disabled)': {
                color: theme.palette.primary.main,
                '& .MuiTouchRipple-root': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.02)
                }
            },
            '& .MuiRadio-colorSecondary:not(.Mui-disabled)': {
                color: theme.palette.secondary.main,
                '& .MuiTouchRipple-root': {
                    backgroundColor: alpha(theme.palette.secondary.main, 0.02)
                }
            },
            '& .MuiRadio-colorError:not(.Mui-disabled)': {
                color: theme.palette.error.main,
                '& .MuiTouchRipple-root': {
                    backgroundColor: alpha(theme.palette.error.main, 0.02)
                }
            },
            '& .MuiRadio-colorInfo:not(.Mui-disabled)': {
                color: theme.palette.info.main,
                '& .MuiTouchRipple-root': {
                    backgroundColor: alpha(theme.palette.info.main, 0.02)
                }
            },
            '& .MuiRadio-colorSuccess:not(.Mui-disabled)': {
                color: theme.palette.success.main,
                '& .MuiTouchRipple-root': {
                    backgroundColor: alpha(theme.palette.success.main, 0.02)
                }
            },
            '& .MuiRadio-colorWarning:not(.Mui-disabled)': {
                color: theme.palette.warning.main,
                '& .MuiTouchRipple-root': {
                    backgroundColor: alpha(theme.palette.warning.main, 0.02)
                }
            },
            '& .MuiRadio-colorDefault:not(.Mui-disabled)': {
                color: theme.palette.text.primary,
                '& .MuiTouchRipple-root': {
                    backgroundColor: alpha(theme.palette.text.primary, 0.02)
                }
            }
        }
    })
);
