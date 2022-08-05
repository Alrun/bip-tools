import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { StyledTabs, StyledTab } from './TabsStyles';
import { TabPanelProps, TabsProps } from './Tabs.d';
import { Fade } from '../Transitions/Transitions';

const a11yProps = (idPrefix: string, index: number) => ({
    id: `${idPrefix}-tab-${index}`,
    'aria-controls': `${idPrefix}-tabpanel-${index}`
});

const TabPanel = ({ idPrefix, index, value, children, ...props }: TabPanelProps) => (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`${idPrefix}-tabpanel-${index}`}
        aria-labelledby={`${idPrefix}-tab-${index}`}
        {...props}
    >
        {value === index && (
            <Fade in>
                <Box sx={{ py: 3 }}>{children}</Box>
            </Fade>
        )}
    </div>
);

const Tabs = ({ idPrefix, tabList, activeTab = 0, isSwipeable, isVertical, onChange, ...props }: TabsProps) => {
    const theme = useTheme();

    const [value, setValue] = React.useState(activeTab);

    const handleChange = (event: React.SyntheticEvent, index: number) => (onChange ? onChange(index) : setValue(index));
    const handleChangeIndex = (index: number) => (onChange ? onChange(index) : setValue(index));

    return (
        <Box sx={{ width: '100%', flexGrow: isVertical ? 1 : 0, display: isVertical ? 'flex' : 'block' }}>
            <Box sx={{ borderBottom: isVertical ? 0 : 1, borderRight: isVertical ? 1 : 0, borderColor: 'divider' }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label={`${idPrefix}-tabs`}
                    orientation={isVertical ? 'vertical' : 'horizontal'}
                    {...props}
                >
                    {tabList.map(({ label, icon, content, ...other }, idx) => (
                        <StyledTab
                            key={label || idx}
                            label={label}
                            icon={icon}
                            isVertical={isVertical}
                            {...a11yProps(idPrefix, idx)}
                            {...other}
                        />
                    ))}
                </StyledTabs>
            </Box>
            {isSwipeable ? (
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    {tabList.map(({ label, content }, idx) => (
                        <TabPanel
                            key={label || idx}
                            idPrefix={idPrefix}
                            value={value}
                            index={idx}
                            dir={theme.direction}
                        >
                            {content}
                        </TabPanel>
                    ))}
                </SwipeableViews>
            ) : (
                tabList.map(({ label, content }, idx) => (
                    <TabPanel key={label || idx} idPrefix={idPrefix} value={value} index={idx}>
                        {content}
                    </TabPanel>
                ))
            )}
        </Box>
    );
};

export default Tabs;
