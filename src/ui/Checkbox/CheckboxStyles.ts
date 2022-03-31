import { styled, alpha } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CheckboxSize } from './Checkbox.d';

export const StyledCheckbox = styled(Checkbox)<{ size: CheckboxSize }>(({ theme, size }) => ({
    padding: size === 'medium' ? '.525rem' : '.335rem',
    margin: `0 ${size === 'medium' ? '-.7rem' : '-.5rem'}`,
    '& .MuiSvgIcon-root': {
        fontSize: '1.524rem',

        '&.MuiSvgIcon-fontSizeSmall': {
            fontSize: '1.334rem'
        }
    },
    '&:hover': {
        '&.MuiCheckbox-colorPrimary': {
            color: theme.palette.primary.main
        },
        '&.MuiCheckbox-colorSecondary': {
            color: theme.palette.secondary.main
        },
        '&.MuiCheckbox-colorError': {
            color: theme.palette.error.main
        },
        '&.MuiCheckbox-colorInfo': {
            color: theme.palette.info.main
        },
        '&.MuiCheckbox-colorSuccess': {
            color: theme.palette.success.main
        },
        '&.MuiCheckbox-colorWarning': {
            color: theme.palette.warning.main
        },
        '&.MuiCheckbox-colorDefault': {
            color: theme.palette.text.primary
        }
    }
}));

export const StyledCheckboxFormControlLabel = styled(FormControlLabel)<{ size: CheckboxSize }>(({ theme, size }) => ({
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
        '& .MuiCheckbox-colorPrimary:not(.Mui-disabled)': {
            color: theme.palette.primary.main,
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.primary.main, 0.02)
            }
        },
        '& .MuiCheckbox-colorSecondary:not(.Mui-disabled)': {
            color: theme.palette.secondary.main,
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.secondary.main, 0.02)
            }
        },
        '& .MuiCheckbox-colorError:not(.Mui-disabled)': {
            color: theme.palette.error.main,
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.error.main, 0.02)
            }
        },
        '& .MuiCheckbox-colorInfo:not(.Mui-disabled)': {
            color: theme.palette.info.main,
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.info.main, 0.02)
            }
        },
        '& .MuiCheckbox-colorSuccess:not(.Mui-disabled)': {
            color: theme.palette.success.main,
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.success.main, 0.02)
            }
        },
        '& .MuiCheckbox-colorWarning:not(.Mui-disabled)': {
            color: theme.palette.warning.main,
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.warning.main, 0.02)
            }
        },
        '& .MuiCheckbox-colorDefault:not(.Mui-disabled)': {
            color: theme.palette.text.primary,
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.text.primary, 0.02)
            }
        }
    }
}));
