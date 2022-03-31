import React from 'react';
import { StyledTabs, StyledTab } from './TabsStyles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { TabPanelProps, TabsProps } from './Tabs.d';

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`default-tabpanel-${index}`}
            aria-labelledby={`default-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `default-tab-${index}`,
        'aria-controls': `default-tabpanel-${index}`
    };
}

// const Tabs = ({ label, size = 'medium', labelPlacement, ...props }: RadioPropsInterface) =>
const Tabs = ({ tabsList, swipeablePanel }: TabsProps) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <StyledTabs value={value} onChange={handleChange} aria-label="default tabs">
                    {tabsList.map(({ label, icon, ...rest }, idx) => (
                        <StyledTab
                            key={label}
                            label={label}
                            icon={icon}
                            // iconPosition="start"
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...a11yProps(idx)}
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...rest}
                        />
                    ))}
                </StyledTabs>
            </Box>
            {swipeablePanel ? (
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </SwipeableViews>
            ) : (
                <>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </>
            )}
        </Box>
    );
};

// const Tabs = ({ label, size = 'medium', labelPlacement, ...props }: RadioPropsInterface) =>
//     label ? (
//         <FormGroup>
//             <StyledRadioFormControlLabel
//                 size={size}
//                 label={label}
//                 labelPlacement={labelPlacement}
//                 control={
//                     <StyledRadio
//                         size={size}
//                         /* eslint-disable-next-line react/jsx-props-no-spreading */
//                         {...props}
//                     />
//                 }
//             />
//         </FormGroup>
//     ) : (
//         <StyledRadio
//             size={size}
//             /* eslint-disable-next-line react/jsx-props-no-spreading */
//             {...props}
//         />
//     );
//
export default Tabs;
