import React from 'react';
import Grid from '@mui/material/Grid';
import Accordion from '../../ui/Accordiron/Accordion';
import Typography from '../../ui/Typography/Typography';
import MnemonicGroupItem from '../MnemonicGroupItem/MnemonicGroupItem';
import MnemonicGroupItemSkeleton from '../MnemonicGroupItem/MnemonicGroupItemSkeleton';
import { MnemonicGroupProps } from './MnemonicGroup.d';

const MnemonicGroup = ({
    entropy,
    list,
    wordList,
    expandedPanel,
    onExpandPanel,
    onChangeGroup
}: MnemonicGroupProps) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    // Allows to finish the animation of the tabs before rendering the heavy component.
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (list.length && expandedPanel.includes('mnemonic-panel')) setIsLoaded(true);
        }, 400);

        return () => clearTimeout(timer);
    }, [list, expandedPanel]);

    return (
        <Accordion
            headerText="Extended"
            TransitionProps={{ unmountOnExit: true }}
            expanded={expandedPanel.includes('mnemonic-panel')}
            onChange={onExpandPanel('mnemonic-panel')}
            AccordionSummaryProps={{
                'aria-controls': 'mnemonic-panel-content',
                id: 'mnemonic-panel-header'
            }}
        >
            {!(entropy && list.length) ? (
                <Typography
                    sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark') }}
                >
                    Press generate button or enter your entropy value.
                </Typography>
            ) : (
                <Grid container spacing={4}>
                    {wordList.map(({ id, wordBinary, wordIndex, wordString }) => (
                        <Grid item key={id} xs={6} sm={4} md={3} lg={2}>
                            {isLoaded ? (
                                <MnemonicGroupItem
                                    id={id}
                                    wordBinary={wordBinary}
                                    wordIndex={wordIndex}
                                    wordString={wordString}
                                    disabled={list.length === id + 1}
                                    onChange={onChangeGroup}
                                />
                            ) : (
                                <MnemonicGroupItemSkeleton />
                            )}
                        </Grid>
                    ))}
                </Grid>
            )}
        </Accordion>
    );
};

export default React.memo(MnemonicGroup);
