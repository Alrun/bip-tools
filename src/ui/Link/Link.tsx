import React from 'react';
import StyledLink from './LinkStyles';
import { LinkProps } from './Link.d';

const Link = ({ href, external, children, ...props }: LinkProps) => (
    <StyledLink component={href ? 'a' : 'span'} href={href} {...props}>
        {children}
    </StyledLink>
);

export default Link;
