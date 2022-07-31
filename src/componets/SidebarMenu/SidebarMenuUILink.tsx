import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ComponentIcon } from '../../ui/Icons/Icons';
import ExternalIcon from '../../ui/Icons/ExternalIcon';

const SidebarMenuUILink = () => (
    <ListItem
        role="listitem"
        aria-labelledby="ui"
        disablePadding
        secondaryAction={<ExternalIcon />}
        sx={{ '& .MuiListItemSecondaryAction-root': { mt: 0.5 } }}
    >
        <ListItemButton onClick={() => window.open('./storybook-static/index.html', '_blank', 'noopener,noreferrer')}>
            <ListItemIcon>
                <ComponentIcon />
            </ListItemIcon>
            <ListItemText primary="UI Kit" />
        </ListItemButton>
    </ListItem>
);

export default SidebarMenuUILink;
