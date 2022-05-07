import { styled } from '@mui/material/styles';
import Input from '../Input/Input';

const StyledSelect = styled(Input)({
    maxWidth: '100%',
    '& .MuiInputLabel-root': {
        cursor: 'pointer',
        pointerEvents: 'none',
        '&.Mui-disabled': {
            cursor: 'default'
        }
    },
    '& .MuiInputBase-root': {
        cursor: 'pointer',
        '&.Mui-disabled': {
            cursor: 'default'
        },
        '&.MuiInputBase-adornedEnd': {
            paddingRight: 0
        },
        '&.MuiInput-underline': {
            paddingRight: 0,
            '& .MuiInputBase-input': {
                paddingRight: 26,
                minWidth: 46,
                '&.MuiInputBase-inputSizeSmall': {
                    paddingRight: 22,
                    minWidth: 40
                }
            },
            '& .MuiInputAdornment-positionEnd': {
                right: 0
            }
        }
    },
    '& .MuiInputBase-input': {
        cursor: 'pointer',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'inherit',
        paddingTop: 8.5,
        paddingBottom: 8.5,
        paddingRight: 32,
        '&.MuiInputBase-inputSizeSmall': {
            paddingTop: 5.5,
            paddingBottom: 5.5,
            paddingRight: 26
        },
        '&.Mui-disabled': {
            cursor: 'default'
        }
    },
    '& .MuiInputAdornment-positionEnd': {
        pointerEvents: 'none',
        position: 'absolute',
        right: 8,
        '&.MuiInputAdornment-sizeSmall': {
            right: 5
        }
    },
    '& .MuiNativeSelect-select[multiple]': {
        margin: '5px 5px 5px 0px',
        overflowY: 'scroll',
        '& option': {
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
    }
});

export default StyledSelect;
