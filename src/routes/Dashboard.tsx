import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Autocomplete from '../ui/Autocomplete/Autocomplete';
import enList from '../wordlist/english';
import Input from '../ui/Input/Input';
import Select from '../ui/Select/Select';

const options = [
    {
        label: 'Option 1',
        value: '1'
    },
    {
        label: 'Option 2',
        value: '2'
    },
    {
        label: 'Option 3',
        value: '3'
    }
];

const Item = styled(Paper)(({ theme }) => ({
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow: theme.shadows[4]
}));

const Dashboard = () => {
    const rendersCount = React.useRef<number>(0);
    const [count, setCount] = React.useState(0);
    const [value, setValue] = React.useState(0);

    const handleClick = () => {
        setTimeout(() => {
            setCount(count + 1);
            setValue(value + 1);
        });
    };

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Item>{count}</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Item>{value}</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Item>
                        <button type="button" onClick={handleClick}>
                            Add
                        </button>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Item>
                        <input type="button" value="Input" tabIndex={0} />
                    </Item>
                </Grid>
            </Grid>
            Dashboard 3
            <div>
                <b>
                    {/* eslint-disable-next-line no-plusplus */}
                    Dashboard RENDER COUNT: {++rendersCount.current}
                </b>
            </div>
            <Grid container spacing={8} sx={{ px: 24 }}>
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Autocomplete*/}
                {/*        options={enList.slice(2000, 2048)}*/}
                {/*        label="Autocomplete"*/}
                {/*        onChange={() => {}}*/}
                {/*        maxItems={5}*/}
                {/*    />*/}
                {/*</Grid>*/}
                <Grid item xs={12} sm={5}>
                    <Autocomplete
                        options={enList.slice(2000, 2048)}
                        label="Autocomplete Grouped"
                        onChange={() => {}}
                        // maxItems={5}
                        groupBy={(option: any) => option[0].toUpperCase()}
                    />
                </Grid>
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Autocomplete options={enList} label="Virtualize" virtualize onChange={() => {}} maxItems={5} />*/}
                {/*</Grid>*/}
                <Grid item xs={12} sm={5}>
                    <Autocomplete
                        options={enList}
                        label="Virtualize Grouped"
                        virtualize
                        groupBy={(option: any) => option[0].toUpperCase()}
                        onChange={() => {}}
                        // maxItems={5}
                    />
                </Grid>
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Autocomplete*/}
                {/*        options={enList}*/}
                {/*        label="Grouped"*/}
                {/*        groupBy={(option: any) => option[0].toUpperCase()}*/}
                {/*        onChange={() => {}}*/}
                {/*        maxItems={5}*/}
                {/*    />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Select label="Input" options={options} sx={{ minWidth: 180 }} />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Autocomplete*/}
                {/*        variant="standard"*/}
                {/*        options={enList}*/}
                {/*        label="Autocomplete"*/}
                {/*        onChange={() => {}}*/}
                {/*        listHeight={5}*/}
                {/*    />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Select label="Input" options={options} sx={{ minWidth: 180 }} variant="standard" />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Autocomplete*/}
                {/*        variant="filled"*/}
                {/*        options={enList}*/}
                {/*        label="Autocomplete"*/}
                {/*        onChange={() => {}}*/}
                {/*        listHeight={5}*/}
                {/*    />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Select label="Input" options={options} sx={{ minWidth: 180 }} variant="filled" />*/}
                {/*</Grid>*/}

                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Autocomplete size="small" options={enList} label="Autocomplete" onChange={() => {}} listHeight={5} />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Select size="small" label="Input" options={options} sx={{ minWidth: 180 }} />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Autocomplete size="small"*/}
                {/*        variant="standard"*/}
                {/*        options={enList}*/}
                {/*        label="Autocomplete"*/}
                {/*        onChange={() => {}}*/}
                {/*        listHeight={5}*/}
                {/*    />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Select size="small" label="Input" options={options} sx={{ minWidth: 180 }} variant="standard" />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Autocomplete size="small"*/}
                {/*        variant="filled"*/}
                {/*        options={enList}*/}
                {/*        label="Autocomplete"*/}
                {/*        onChange={() => {}}*/}
                {/*        listHeight={5}*/}
                {/*    />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={5}>*/}
                {/*    <Select size="small" label="Input" options={options} sx={{ minWidth: 180 }} variant="filled" />*/}
                {/*</Grid>*/}
            </Grid>
        </>
    );
};

export default React.memo(Dashboard);
