import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import LogoDarkIcon from '../../assets/logo-dark.svg';
import LogoLightIcon from '../../assets/logo-light.svg';
import { GitHubIcon } from '../../ui/Icons/Icons';
import Typography from '../../ui/Typography/Typography';
import Link from '../../ui/Link/Link';
import Tooltip from '../../ui/Tooltip/Tooltip';
import { FooterProps } from './Footer.d';

const Footer = ({ height = 50 }: FooterProps) => {
    const theme = useTheme();

    return (
        <Box component="footer" sx={{ height, minHeight: height }}>
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', px: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <RouterLink
                        to="/"
                        reloadDocument
                        style={{
                            display: 'flex',
                            textDecoration: 'none',
                            alignItems: 'center',
                            color: theme.palette.text.primary,
                            border: 0,
                            marginTop: theme.spacing(-1)
                        }}
                    >
                        <Tooltip title="Go to Homepage">
                            <img
                                src={theme.palette.mode === 'dark' ? LogoLightIcon : LogoDarkIcon}
                                alt="Bitcoin"
                                style={{ display: 'block', width: 24, height: 24, marginRight: theme.spacing(3) }}
                            />
                        </Tooltip>
                    </RouterLink>
                    <Typography component="span">© 2022 BIP Tools</Typography>
                </Box>
                <Tooltip title="Open GitHub in a new tab">
                    <div style={{ marginLeft: 'auto' }}>
                        <Link
                            href="https://github.com/alrun/bip-tools"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                border: 'none',
                                color: 'inherit'
                            }}
                        >
                            <GitHubIcon sx={{ fontSize: 28 }} />
                        </Link>
                    </div>
                </Tooltip>
            </Box>
        </Box>
    );
};

export default React.memo(Footer);
