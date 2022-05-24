import React from 'react';
import StyledLink from './LinkStyles';
import { LinkProps } from './Link.d';
import ExternalIcon from '../Icons/ExternalIcon';

const Link = ({ href, external, children, ...props }: LinkProps) =>
    external ? (
        <StyledLink
            component={href ? 'a' : 'span'}
            href={href}
            external={external}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {children}
            {external && <ExternalIcon sx={{ fontSize: '1.2em' }} />}
        </StyledLink>
    ) : (
        <StyledLink component={href ? 'a' : 'span'} href={href} {...props}>
            {children}
        </StyledLink>
    );

export default Link;
