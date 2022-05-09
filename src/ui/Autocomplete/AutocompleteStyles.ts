import { styled } from '@mui/material/styles';
import Popper from '@mui/material/Popper';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';

export const StyledAutocomplete = styled(Autocomplete)({
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
    '& .MuiPaper-root': {
        boxShadow: theme.shadows[6]
    },
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
            fontWeight: 'bolder'
        }
    },
    '& .MuiAutocomplete-noOptions': {
        paddingLeft: 10,
        paddingRight: 10
    }
}));
