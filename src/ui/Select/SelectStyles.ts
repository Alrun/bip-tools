import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

export const StyledInput = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'fontSize'
})<{
    fontSize?: string;
}>(({ theme, fontSize }) => ({
    '& .MuiInputLabel-root': {
        fontSize: '1.145rem',

        '&.MuiInputLabel-sizeSmall': {
            fontSize: '1rem',
            lineHeight: '1.2em'
        },

        // '& fieldset': {
        //     borderColor: 'red'
        //
        //     // '& legend': {
        //     //
        //     // }
        // },

        // '&:hover fieldset': {
        //     borderColor: 'yellow'
        // },
        //
        // '&.Mui-focused fieldset': {
        //     borderColor: 'green'
        // }
    },
    '& .MuiInputLabel-outlined': {
        transform: 'translate(1rem, .65em) scale(1)',
        '&.MuiInputLabel-shrink': {
            transform: 'translate(1rem, -.55em) scale(0.75)'
        },
        '&.MuiInputLabel-sizeSmall': {
            // transform: 'translate(1rem, .65em) scale(1)',
            '&.MuiInputLabel-shrink': {
                transform: 'translate(1rem, -.42em) scale(0.75)'
            }
        },

    },
    '& .MuiOutlinedInput-root': {
        fontSize: 'inherit',
        '& label': {

        },

        '& fieldset': {
            padding: '0 1em',
            // borderColor: 'red'

            '& legend': {
                height: '1em',
                marginLeft: '-.4em',
                // fontSize: '.8rem'

                '& span': {
                    paddingLeft: '0.3em',
                    paddingRight: '0.3em'
                }
            }
        },
        // '&:hover fieldset': {
        //     borderColor: 'yellow'
        // },
        // '&.Mui-focused fieldset': {
        //     borderColor: 'green'
        // }ß
    },
    '& .MuiInputBase-input': {
        fontSize: '1.145rem',
        padding: '.836rem 1rem',
        height: '1.2rem',
        '&.MuiInputBase-inputSizeSmall': {
            fontSize: '1rem',
            padding: '.6865rem 1rem'
        },

    },
    // '& label.Mui-focused': {
    //     color: 'green'
    // },
    // '& .MuiInput-underline:after': {
    //     borderBottomColor: 'green'
    // }
}));

export const StyledIconButton = styled(IconButton)({
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
