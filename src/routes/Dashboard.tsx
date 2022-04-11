import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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

    console.log('render');

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
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
            Dashboard 3
            <div>
                <b>
                    {/* eslint-disable-next-line no-plusplus */}
                    Dashboard RENDER COUNT: {++rendersCount.current}
                </b>
            </div>
        </>
    );
};

export default React.memo(Dashboard);
