import React from 'react';
import Grid from '@mui/material/Grid';
import Accordion from '../../ui/Accordiron/Accordion';
import Typography from '../../ui/Typography/Typography';
import MnemonicGroupItem, { GeneratorGroupItemSkeleton } from '../MnemonicGroupItem/MnemonicGroupItem';
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

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 400);

        return () => clearTimeout(timer);
    }, []);

    // TODO: Remove after render check
    const rendersCount = React.useRef(0);

    return (
        <>
            <Accordion
                headerText="Extended"
                TransitionProps={{ unmountOnExit: true }}
                expanded={expandedPanel.includes('generator-panel')}
                onChange={onExpandPanel('generator-panel')}
                AccordionSummaryProps={{
                    'aria-controls': 'generator-panel-content',
                    id: 'generator-panel-header'
                }}
            >
                {!(entropy && list.length) ? (
                    <Typography>Press generate button or enter your entropy value.</Typography>
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
                                    <GeneratorGroupItemSkeleton />
                                )}
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Accordion>
            <b>
                {/* eslint-disable-next-line no-plusplus */}
                Mnemonic extend RENDER COUNT: {++rendersCount.current}
            </b>
        </>
    );
};

export default React.memo(MnemonicGroup);
