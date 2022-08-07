import React from 'react';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Tooltip from '../../ui/Tooltip/Tooltip';
import Button from '../../ui/Button/Button';
import { ModeAutoIcon, ModeDarkIcon, ModeLightIcon } from '../../ui/Icons/Icons';
import { ThemeModeSwitchProps, ThemeModeType } from './ThemeModeSwitch.d';

const ThemeModeSwitch = ({ changeMode, mode, expanded, size = 'medium' }: ThemeModeSwitchProps) => {
    const [expand, setExpand] = React.useState(expanded || false);

    const changeModeHandle = (newMode: ThemeModeType) => () => changeMode && changeMode(newMode);

    return (
        <Box
            sx={{
                display: 'flex',
                background: (theme) =>
                    theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
                borderRadius: 20,
                p: '2px',
                alignItems: 'center'
            }}
            onMouseEnter={!expanded ? () => setExpand(true) : undefined}
            onMouseLeave={!expanded ? () => setExpand(false) : undefined}
        >
            <Collapse orientation="horizontal" in={expand}>
                <Box sx={{ display: 'flex' }}>
                    <Tooltip title="Light">
                        <div>
                            <Button
                                size={size}
                                variant={mode === 'light' ? 'contained' : 'text'}
                                isRound
                                onClick={changeModeHandle('light')}
                                color="secondary"
                                aria-label="Light"
                            >
                                <ModeLightIcon fontSize={size} />
                            </Button>
                        </div>
                    </Tooltip>
                    <Tooltip title="Dark">
                        <div>
                            <Button
                                size={size}
                                isRound
                                variant={mode === 'dark' ? 'contained' : 'text'}
                                onClick={changeModeHandle('dark')}
                                color="secondary"
                                aria-label="Dark"
                            >
                                <ModeDarkIcon fontSize={size} />
                            </Button>
                        </div>
                    </Tooltip>
                </Box>
            </Collapse>
            <Tooltip title="System">
                <div>
                    <Button size={size} isRound onClick={changeModeHandle('auto')} color="secondary" aria-label="Auto">
                        <ModeAutoIcon fontSize={size} />
                    </Button>
                </div>
            </Tooltip>
        </Box>
    );
};

export default ThemeModeSwitch;
