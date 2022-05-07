import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputLabel-root': {
        '&.MuiInputLabel-sizeSmall': {
            fontSize: theme.typography.smRegular.fontSize
        }
    },
    '& .MuiInputLabel-outlined': {
        transform: 'translate(10px, 14px) scale(1)',
        '&.MuiInputLabel-shrink': {
            transform: 'translate(10px, -1px) scale(0.75)'
        },
        '&.MuiInputLabel-sizeSmall': {
            transform: 'translate(10px, 11px) scale(1)',
            '&.MuiInputLabel-shrink': {
                transform: 'translate(10px, 0) scale(0.75)'
            }
        }
    },
    '& .MuiInputLabel-standard': {
        transform: 'translate(0, 14px) scale(1)',
        '&.MuiInputLabel-shrink': {
            transform: 'translate(0, -1px) scale(0.75)'
        },
        '&.MuiInputLabel-sizeSmall': {
            transform: 'translate(0, 11px) scale(1)',
            '&.MuiInputLabel-shrink': {
                transform: 'translate(0, 0px) scale(0.75)'
            }
        }
    },
    '& .MuiInputLabel-filled': {
        transform: 'translate(10px, 14px) scale(1)',
        '&.MuiInputLabel-shrink': {
            transform: 'translate(10px, -1px) scale(0.75)'
        },
        '&.MuiInputLabel-sizeSmall': {
            transform: 'translate(10px, 11px) scale(1)',
            '&.MuiInputLabel-shrink': {
                transform: 'translate(10px, 0px) scale(0.75)'
            }
        }
    },
    '& .MuiInputBase-root': {
        '&.MuiInputBase-sizeSmall': {
            fontSize: '.85714rem'
        },
        '&.Mui-disabled': {
            '& .MuiInputAdornment-root': {
                color: theme.palette.text.disabled,
                '& .MuiTypography-root': {
                    color: theme.palette.text.disabled
                }
            }
        }
    },
    '& .MuiInputBase-input': {
        boxSizing: 'border-box',
        height: 36,
        padding: '8px 10px',
        '&.MuiInputBase-inputSizeSmall': {
            fontSize: theme.typography.smRegular.fontSize,
            height: 28,
            padding: '6px 10px'
        },
        '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
            boxShadow: 'none',
            transition: 'background-color 5000s ease-in-out 0s'
        }
    },
    '& .MuiOutlinedInput-root': {
        marginTop: 6,
        '&.MuiInputBase-adornedStart': {
            paddingLeft: 10,
            '& .MuiInputAdornment-positionStart': {
                marginRight: 0
            }
        },
        '& .MuiInputAdornment-positionEnd': {
            marginLeft: 0
        },
        '& fieldset': {
            padding: '0 6px',
            '& legend': {
                '& span': {
                    paddingLeft: 3,
                    paddingRight: 3
                }
            }
        },
        '&.MuiInputBase-multiline': {
            padding: '8px 10px',
            '&.MuiInputBase-sizeSmall': {
                paddingTop: 5,
                paddingBottom: 6
            },
            '& .MuiInputBase-input': {
                padding: 0
            },
            '.MuiInputAdornment-positionStart': {
                marginRight: 10
            },
            '.MuiInputAdornment-positionEnd': {
                marginLeft: 10
            }
        },
        '&.MuiInputBase-adornedEnd': {
            paddingRight: 10,
            '& .MuiInputAdornment-positionStart': {
                marginRight: 0
            }
        },
        '& + .MuiFormHelperText-root': {
            marginRight: 10,
            marginLeft: 10
        }
    },
    '& .MuiInput-underline': {
        marginTop: 0,
        paddingTop: 6,
        '& .MuiInputBase-input': {
            paddingLeft: 0,
            paddingRight: 0
        },
        '& .MuiInputAdornment-positionStart': {
            marginRight: 6
        },
        '& .MuiInputAdornment-positionEnd': {
            marginLeft: 10,
            '& .MuiInputAdornment-positionStart': {
                marginRight: 0
            }
        },
        '&.Mui-error::after': {
            borderWidth: 1
        },
        '&.Mui-error:hover::after': {
            borderWidth: 2
        },
        '&.Mui-error.Mui-focused::after': {
            borderWidth: 2
        },
        '&.MuiInputBase-multiline': {
            padding: '15px 0px 7px',
            '&.MuiInputBase-sizeSmall': {
                paddingTop: 12,
                paddingBottom: 5
            },
            '& .MuiInputBase-input': {
                padding: 0
            }
        }
    },
    '& .MuiFilledInput-underline': {
        marginTop: 0,
        paddingTop: 6,
        '&.MuiInputBase-adornedStart': {
            paddingLeft: 10,
            '& .MuiInputAdornment-positionStart': {
                marginRight: 0
            }
        },
        '& .MuiInputAdornment-positionEnd': {
            marginLeft: 0
        },
        '&.MuiInputBase-adornedEnd': {
            paddingRight: 10,
            '& .MuiInputAdornment-positionStart': {
                marginRight: 0
            }
        },
        '& .MuiInputAdornment-root': {
            '&.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)': {
                marginTop: 0
            }
        },
        '&.MuiInputBase-multiline': {
            padding: '15px 8px 7px',
            '&.MuiInputBase-sizeSmall': {
                paddingTop: 12,
                paddingBottom: 5
            },
            '& .MuiInputBase-input': {
                padding: 0
            },
            '.MuiInputAdornment-positionStart': {
                marginRight: 10
            },
            '.MuiInputAdornment-positionEnd': {
                marginLeft: 10
            }
        },
        '& + .MuiFormHelperText-root': {
            marginRight: 10,
            marginLeft: 10
        },
        '&.Mui-error::after': {
            borderWidth: 1
        },
        '&.Mui-error:hover::after': {
            borderWidth: 2
        },
        '&.Mui-error.Mui-focused::after': {
            borderWidth: 2
        }
    },
    '& .MuiFormHelperText-root': {
        marginTop: 2,
        lineHeight: 1.25
    },
    '& .MuiFormHelperText-sizeSmall': {
        fontSize: theme.typography.smRegular.fontSize
    },
    '& .MuiInputAdornment-root': {
        color: theme.palette.mode === 'dark' && theme.palette.text.secondary
    }
}));

export default StyledInput;
