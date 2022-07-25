import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
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
        <Accordion
            expanded={expandedPanel.includes('generator-panel-1')}
            TransitionProps={{ unmountOnExit: true }}
            elevation={0}
            variant="outlined"
            onChange={onExpandPanel('generator-panel-1')}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="generator-panel-1-content"
                id="generator-panel-1-header"
            >
                <Typography>Extended</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {!(entropy && list.length) ? (
                    <Box>Press generate button or enter your entropy value.</Box>
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
            </AccordionDetails>
            <b>
                {/* eslint-disable-next-line no-plusplus */}
                Mnemonic extend RENDER COUNT: {++rendersCount.current}
            </b>
        </Accordion>
    );
};

export default React.memo(MnemonicGroup);
