import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ComponentIcon, ExternalIcon } from '../../ui/Icons/Icons';

const SidebarMenuUILink = () => (
    <ListItem role="listitem" aria-labelledby="ui" disablePadding>
        <ListItemButton onClick={() => window.open('/storybook-static', '_blank', 'noopener,noreferrer')}>
            <ListItemIcon>
                <ComponentIcon />
            </ListItemIcon>
            <ListItemText primary="UI Kit" />
            <ExternalIcon sx={{ mt: 0.5 }} />
        </ListItemButton>
    </ListItem>
);

export default SidebarMenuUILink;
