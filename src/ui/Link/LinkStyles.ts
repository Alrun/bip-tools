import { styled, alpha } from '@mui/material/styles';
import Link from '@mui/material/Link';
// import { LinkProps } from './Link.d';

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    // padding: size === 'medium' ? '.525rem' : '.335rem',
    // margin: `0 ${size === 'medium' ? '-.7rem' : '-.5rem'}`,
    '& .MuiSvgIcon-root': {
        // fontSize: '1.524rem',
    },
    '&:hover': {
        '&.MuiCheckbox-colorPrimary': {
            // color: theme.palette.primary.main
        },
    }
}));

export default StyledLink;
