import React from 'react';
import Grid from '@mui/material/Grid';
import GeneratorGroupItem, { GeneratorGroupItemSkeleton } from '../GeneratorGroupItem/GeneratorGroupItem';
import { GeneratorGroupProps } from './GeneratorGroup.d';

const GeneratorGroup = ({ list, wordList, onChange }: GeneratorGroupProps) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Grid container spacing={4}>
            {list.map(({ id, item }) => (
                <Grid item key={id} xs={6} sm={4} md={3} lg={2}>
                    {isLoaded ? (
                        <GeneratorGroupItem
                            id={id}
                            value={item}
                            wordList={wordList}
                            disabled={list.length === id + 1}
                            onChange={onChange}
                        />
                    ) : (
                        <GeneratorGroupItemSkeleton />
                    )}
                </Grid>
            ))}
        </Grid>
    );
};
export default GeneratorGroup;
