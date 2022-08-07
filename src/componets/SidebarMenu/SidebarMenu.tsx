import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { linkList } from '../Navigation/Navigation';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { sidebarExpand } from '../../redux/slices/app/app';
import SidebarMenuUILink from './SidebarMenuUILink';
import { ChevronDownIcon, ChevronUpIcon } from '../../ui/Icons/Icons';
import Typography from '../../ui/Typography/Typography';
import { StyledList } from './SidebarMenuStyles';
import { SidebarMenuProps } from './SidebarMenu.d';

const CharIcon = ({ char }: { char: string }) => (
    <Typography
        sx={{
            width: '1.5em',
            height: '1.5em',
            textAlign: 'center',
            fontSize: '1.15em',
            textTransform: 'uppercase',
            fontWeight: (theme) => theme.typography.fontWeightMedium
        }}
    >
        {char}
    </Typography>
);

const SidebarMenu = ({ setDrawerOpen }: SidebarMenuProps) => {
    const { sidebarExpanded } = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const handleExpand = (panel: string) => () => dispatch(sidebarExpand(sidebarExpanded === panel ? false : panel));

    const handleLinkClick = (url: string, label: string) => () => {
        navigate(url, { state: { label } });
        // Close drawer after click on mobile
        if (setDrawerOpen) setDrawerOpen(false);
    };

    return (
        <StyledList subheader={<li />} aria-labelledby="list-subheader">
            {linkList.map(({ header, links }, idx) => (
                <li key={header}>
                    <ul className="static-list">
                        <ListSubheader
                            sx={{
                                userSelect: 'none',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {header}
                        </ListSubheader>
                        {links.map(({ label, to, icon, nested }) =>
                            nested ? (
                                <ListItem key={label} disablePadding sx={{ flexDirection: 'column' }}>
                                    <ListItemButton
                                        sx={{ width: '100%' }}
                                        onClick={handleExpand(label)}
                                        selected={location.pathname.split('/')[1] === to.split('/')[1]}
                                    >
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText primary={label} />
                                        {sidebarExpanded === label ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                    </ListItemButton>
                                    <Collapse
                                        sx={{ width: '100%' }}
                                        timeout="auto"
                                        unmountOnExit
                                        in={sidebarExpanded === label}
                                    >
                                        <StyledList role="list" disablePadding>
                                            {nested.map((nestedLink) => (
                                                <ListItemButton
                                                    key={nestedLink.label}
                                                    component="li"
                                                    sx={{ pl: 4 }}
                                                    role="listitem"
                                                    aria-labelledby={nestedLink.label}
                                                    selected={location.pathname === nestedLink.to}
                                                    onClick={handleLinkClick(nestedLink.to, nestedLink.label)}
                                                >
                                                    <ListItemIcon>
                                                        {nestedLink.icon || <CharIcon char={nestedLink.label[0]} />}
                                                    </ListItemIcon>
                                                    <ListItemText primary={nestedLink.label} />
                                                </ListItemButton>
                                            ))}
                                        </StyledList>
                                    </Collapse>
                                </ListItem>
                            ) : (
                                <ListItem key={label} role="listitem" aria-labelledby={label} disablePadding>
                                    <ListItemButton
                                        selected={location.pathname === to}
                                        onClick={handleLinkClick(to, label)}
                                    >
                                        <ListItemIcon>{icon || <CharIcon char={label[0]} />}</ListItemIcon>
                                        <ListItemText primary={label} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        )}
                        {idx === 1 && <SidebarMenuUILink />}
                    </ul>
                </li>
            ))}
        </StyledList>
    );
};

export default SidebarMenu;
