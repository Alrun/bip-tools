import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { LinkProps } from './Link.d';

const StyledLink = styled(Link, {
    shouldForwardProp: (prop) => prop !== 'external'
})<LinkProps['external']>(({ external }) => ({
    textDecoration: 'none',
    marginRight: external && '1ch',
    '& .MuiSvgIcon-root': {
        position: 'absolute'
    }
}));

export default StyledLink;
