import { styled } from '@mui/material/styles';
import Popper from '@mui/material/Popper';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';

export const StyledAutocomplete = styled(Autocomplete)({
    '&.MuiAutocomplete-hasPopupIcon': {
        '& .MuiOutlinedInput-root.MuiInputBase-adornedEnd': {
            paddingRight: 32
        },
        '& .MuiFilledInput-underline.MuiInputBase-adornedEnd': {
            paddingRight: 32
        },
        '&.MuiAutocomplete-hasClearIcon': {
            '& .MuiOutlinedInput-root.MuiInputBase-adornedEnd': {
                paddingRight: 56
            },
            '& .MuiFilledInput-underline.MuiInputBase-adornedEnd': {
                paddingRight: 56
            }
        }
    },
    '& .MuiOutlinedInput-root': {
        padding: 0,
        '&.MuiInputBase-sizeSmall': {
            padding: 0,
            '& .MuiInputBase-input': {
                paddingLeft: 10
            }
        },
        '& .MuiInputBase-input': {
            paddingLeft: 10
        },
        '& .MuiAutocomplete-endAdornment': {
            top: 'calc(50% - 12.5px)'
        }
    },
    '& .MuiInputLabel-root': {
        '&.MuiInputLabel-outlined': {
            '&:not(.MuiInputLabel-shrink)': {
                maxWidth: 'calc(100% - 36px)'
            }
        },
        '&.MuiInputLabel-standard': {
            '&:not(.MuiInputLabel-shrink)': {
                maxWidth: 'calc(100% - 20px)'
            }
        },
        '&.MuiInputLabel-filled': {
            '&:not(.MuiInputLabel-shrink)': {
                maxWidth: 'calc(100% - 40px)'
            }
        }
    },
    '& .MuiInput-underline': {
        '& .MuiAutocomplete-endAdornment': {
            top: 'calc(50% - 10px)'
        }
    },
    '& .MuiFilledInput-root': {
        '& .MuiInputBase-input': {
            paddingLeft: 2
        },
        '&.MuiInputBase-sizeSmall': {
            paddingTop: 5,
            '& .MuiInputBase-input': {
                paddingLeft: 2
            }
        },
        '& .MuiAutocomplete-endAdornment': {
            top: 'calc(50% - 9.5px)'
        }
    }
});

export const StyledPopper = styled(Popper)(({ theme }) => ({
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0,
            '& li:before': {
                content: 'none'
            }
        },
        '& .MuiAutocomplete-option': {
            paddingLeft: 10,
            paddingRight: 10
        },
        '& .MuiListSubheader-root': {
            paddingLeft: 10,
            paddingRight: 10,
            fontWeight: theme.typography.fontWeightMedium
        }
    },
    '& .MuiAutocomplete-noOptions': {
        paddingLeft: 10,
        paddingRight: 10
    },
    '& .MuiAutocomplete-loading': {
        paddingLeft: 10,
        paddingRight: 10
    }
}));
