import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { linkList } from '../Navigation/Navigation';
import { SidebarProps } from './SidebarMenu.d';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { sidebarExpand } from '../../redux/slices/app/app';

export default function SidebarMenu({ width = '100%', setDrawerOpen }: SidebarProps) {
    const { sidebarExpanded } = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    // TODO: Render optimisation
    const handleExpand = (panel: string) => (): void => {
        dispatch(sidebarExpand(sidebarExpanded === panel ? false : panel));
    };
    // TODO: Render optimisation
    const handleLinkClick = (url: string, label: string): void => {
        navigate(url, { state: { label } });
        // Close drawer after click on mobile
        if (setDrawerOpen) setDrawerOpen(false);
    };

    return (
        <List
            // subheader={<li />}
            sx={{
                width,
                position: 'relative',
                // overflow: 'auto',
                '& ul': { padding: 0 }
            }}
            subheader={<li />}
            // component="nav"
            aria-labelledby="nested-list-subheader"
            // subheader={
            //     <ListSubheader component="div" id="nested-list-subheader">
            //         Nested List Items
            //     </ListSubheader>
            // }
        >
            {linkList.map(({ header, links }) => (
                <li key={header}>
                    <ul className="static-list">
                        <ListSubheader /* sx={{ color: (theme) => theme.palette.error.main }} */>
                            {header}
                        </ListSubheader>

                        {links.map(({ label, to, icon, requireAuth, nested }) =>
                            nested ? (
                                <ListItem key={label} disablePadding sx={{ flexDirection: 'column' }}>
                                    <ListItemButton
                                        sx={{ width: '100%' }}
                                        onClick={handleExpand(label)}
                                        selected={location.pathname.split('/')[1] === to.split('/')[1]}
                                    >
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText primary={label} />
                                        {sidebarExpanded === label ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>

                                    <Collapse
                                        sx={{ width: '100%' }}
                                        timeout="auto"
                                        unmountOnExit
                                        in={sidebarExpanded === label}
                                    >
                                        <List role="list" disablePadding>
                                            {nested.map((nestedLink) => (
                                                <ListItemButton
                                                    key={nestedLink.label}
                                                    component="li"
                                                    sx={{ pl: 4 }}
                                                    role="listitem"
                                                    aria-labelledby={nestedLink.label}
                                                    selected={location.pathname === nestedLink.to}
                                                    onClick={() => handleLinkClick(nestedLink.to, nestedLink.label)}
                                                >
                                                    <ListItemIcon>
                                                        {/* TODO: StyledIcon component */}
                                                        {nestedLink.icon || (
                                                            <span
                                                                style={{
                                                                    width: '1.25em',
                                                                    textAlign: 'center',
                                                                    fontSize: '1.25em',
                                                                    textTransform: 'uppercase'
                                                                }}
                                                            >
                                                                {nestedLink.label[0]}
                                                            </span>
                                                        )}
                                                    </ListItemIcon>
                                                    <ListItemText primary={nestedLink.label} />
                                                </ListItemButton>
                                            ))}
                                        </List>
                                    </Collapse>
                                </ListItem>
                            ) : (
                                <ListItem key={label} role="listitem" aria-labelledby={label} disablePadding>
                                    <ListItemButton
                                        selected={location.pathname === to}
                                        onClick={() => handleLinkClick(to, label)}
                                    >
                                        {/* TODO: StyledIcon component */}
                                        <ListItemIcon>
                                            {icon || (
                                                <span
                                                    style={{
                                                        width: '1.25em',
                                                        textAlign: 'center',
                                                        fontSize: '1.25em',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    {label[0]}
                                                </span>
                                            )}
                                        </ListItemIcon>
                                        <ListItemText primary={label} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        )}
                    </ul>
                </li>
            ))}
        </List>
    );
}
