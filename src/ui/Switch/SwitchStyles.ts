import { alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { SwitchSize } from './Switch.d';

export const StyledSwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 36,
    padding: 10,
    marginLeft: -10,
    marginRight: -10,

    '&:hover': {
        '& .MuiSwitch-colorPrimary + .MuiSwitch-track': {
            borderColor: theme.palette.primary.main
        },
        '& .MuiSwitch-colorSecondary + .MuiSwitch-track': {
            borderColor: theme.palette.secondary.main
        },
        '& .MuiSwitch-colorError + .MuiSwitch-track': {
            borderColor: theme.palette.error.main
        },
        '& .MuiSwitch-colorSuccess + .MuiSwitch-track': {
            borderColor: theme.palette.success.main
        },
        '& .MuiSwitch-colorInfo + .MuiSwitch-track': {
            borderColor: theme.palette.info.main
        },
        '& .MuiSwitch-colorWarning + .MuiSwitch-track': {
            borderColor: theme.palette.warning.main
        },
        '& .MuiSwitch-colorDefault + .MuiSwitch-track': {
            borderColor: theme.palette.text.primary
        }
    },

    '&:active': {
        '& .MuiSwitch-switchBase:not(.Mui-disabled)': {
            '&.Mui-checked': {
                transform: 'translateX(11px)'
            },
            '& .MuiSwitch-thumb': {
                width: 15
            }
        }
    },

    '&.MuiSwitch-sizeSmall': {
        width: 40,
        height: 28,
        padding: 7,
        marginLeft: -7,
        marginRight: -7,

        '& .MuiSwitch-switchBase': {
            padding: 8
        },

        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(12px)'
        },

        '& .MuiSwitch-thumb': {
            width: 10,
            height: 10
        },

        '&:active': {
            '& .MuiSwitch-switchBase:not(.Mui-disabled)': {
                '&.Mui-checked': {
                    transform: 'translateX(10px)'
                },
                '& .MuiSwitch-thumb': {
                    width: 12
                }
            }
        }
    },

    '& .MuiSwitch-switchBase': {
        padding: 11,
        color: theme.palette.text.primary,

        '&.Mui-checked': {
            transform: 'translateX(14px)'
        }
    },

    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        opacity: 1,
        width: 12,
        height: 12,
        margin: 1,
        transition: theme.transitions.create(['width'], {
            duration: 200
        })
    },

    '& .MuiSwitch-track': {
        border: `1px solid ${theme.palette.text.primary}`,
        background: 'transparent',
        opacity: 1,
        borderRadius: 22 / 2
    },

    '& .Mui-checked': {
        '&.MuiSwitch-colorDefault + .MuiSwitch-track': {
            background: theme.palette.text.primary
        },

        '& + .MuiSwitch-track': {
            border: '1px solid transparent'
        },

        '&:not(.Mui-disabled)': {
            '& + .MuiSwitch-track': {
                opacity: 1
            }
        },
        '& .MuiSwitch-thumb': {
            background: theme.palette.background.default
        }
    }
}));

export const StyledSwitchFormControlLabel = styled(FormControlLabel)<{ size: SwitchSize }>(({ theme, size }) => ({
    margin: 0,
    '&.MuiFormControlLabel-labelPlacementEnd': {
        '& .MuiFormControlLabel-label': {
            marginLeft: size === 'medium' ? 10 : 7
        }
    },
    '&.MuiFormControlLabel-labelPlacementStart': {
        '& .MuiFormControlLabel-label': {
            marginRight: size === 'medium' ? 10 : 7
        }
    },
    '& .MuiFormControlLabel-label': {
        fontSize: size === 'medium' ? theme.typography.body1.fontSize : theme.typography.smRegular.fontSize,
        userSelect: 'none',
        marginBottom: '-.2rem',
        marginTop: '-.2rem'
    },
    '&:hover': {
        '& .MuiSwitch-colorPrimary:not(.Mui-disabled)': {
            '& + .MuiSwitch-track': {
                borderColor: theme.palette.primary.main
            },
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.primary.main, 0.02)
            }
        },
        '& .MuiSwitch-colorSecondary:not(.Mui-disabled)': {
            '& + .MuiSwitch-track': {
                borderColor: theme.palette.secondary.main
            },
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.secondary.main, 0.02)
            }
        },
        '& .MuiSwitch-colorError:not(.Mui-disabled)': {
            '& + .MuiSwitch-track': {
                borderColor: theme.palette.error.main
            },
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.error.main, 0.02)
            }
        },
        '& .MuiSwitch-colorInfo:not(.Mui-disabled)': {
            '& + .MuiSwitch-track': {
                borderColor: theme.palette.info.main
            },
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.info.main, 0.02)
            }
        },
        '& .MuiSwitch-colorSuccess:not(.Mui-disabled)': {
            '& + .MuiSwitch-track': {
                borderColor: theme.palette.success.main
            },
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.success.main, 0.02)
            }
        },
        '& .MuiSwitch-colorWarning:not(.Mui-disabled)': {
            '& + .MuiSwitch-track': {
                borderColor: theme.palette.warning.main
            },
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.warning.main, 0.02)
            }
        },
        '& .MuiSwitch-colorDefault:not(.Mui-disabled)': {
            '& + .MuiSwitch-track': {
                borderColor: theme.palette.text.primary
            },
            '& .MuiTouchRipple-root': {
                backgroundColor: alpha(theme.palette.text.primary, 0.02)
            }
        }
    }
}));
