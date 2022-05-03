import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Input from '../ui/Input/Input';
import Select from '../ui/Select/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { ModeLightIcon } from '../ui/Icons/Icons';
import { SelectOptionsInterface } from '../ui/Select/Select.d';

const Item = styled(Paper)(({ theme }) => ({
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow: theme.shadows[4]
}));

const options = [
    {
        value: 'USD',
        label: '$'
    },
    {
        value: 'EUR',
        label: '€',
        disabled: true
    },
    {
        value: 'BTC',
        label: '฿'
    },
    {
        value: 'JPY',
        label: '¥'
    },
    {
        value: '8',
        label: '888888888888888888'
    },
    {
        value: 'Value long long long long long long long long long long long',
        label: 'Label long long long long long long long long long long long long'
    }
];

const manyOptions = (amount: number): SelectOptionsInterface[] =>
    Array(amount)
        .fill('')
        .map((item, idx) => ({
            value: `${idx}`,
            label: `Option ${idx + 1}`
        }));

console.log(manyOptions(10));
console.log(options);

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
                <Grid item xs={12} sm={5}>
                    <Select multiple label="Multiple" options={options} defaultOpen fullWidth />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Select multiple label="Multiple native" options={options} fullWidth native />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Select label="Open" fullWidth options={manyOptions(100)} defaultValue="EUR" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Select
                        label="Long Long Long Label"
                        fullWidth
                        size="small"
                        options={options}
                        defaultValue="EUR"
                    />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Select label="Required" options={options} defaultValue="EUR" required fullWidth />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Select
                        variant="standard"
                        label="Long Long Long Label"
                        size="small"
                        options={options}
                        defaultValue="EUR"
                    />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Select label="Required" options={options} defaultValue="EUR" required fullWidth />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Select
                        variant="filled"
                        label="Long Long Long Label"
                        size="small"
                        options={options}
                        defaultValue="EUR"
                    />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Select label="Native" native options={options} defaultValue="EUR" fullWidth />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Select label="Native Disabled" native options={options} defaultValue="EUR" disabled />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Select label="Disabled" options={options} defaultValue="EUR" disabled fullWidth />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input
                        label="Input"
                        icon={<InputAdornment position="end">€</InputAdornment>}
                        iconPosition="end"
                        defaultValue="€"
                        size="small"
                        disabled
                    />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Select label="Select" options={options} defaultValue="8" fullWidth />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input
                        label="Default"
                        icon={<ModeLightIcon />}
                        iconPosition="end"
                        fullWidth
                        defaultValue="888888888888888888"
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Select variant="standard" label="Select" options={options} defaultValue="8" fullWidth />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input
                        variant="standard"
                        label="Default"
                        icon={<ModeLightIcon />}
                        iconPosition="end"
                        fullWidth
                        defaultValue="888888888888888888"
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Select variant="filled" label="Select" options={options} defaultValue="8" fullWidth />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input
                        variant="filled"
                        label="Default"
                        icon={<ModeLightIcon />}
                        iconPosition="end"
                        fullWidth
                        defaultValue="888888888888888888"
                    />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Select size="small" label="Select" options={options} defaultValue="8" fullWidth />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input
                        size="small"
                        label="Default"
                        icon={<ModeLightIcon />}
                        iconPosition="end"
                        fullWidth
                        defaultValue="888888888888888888"
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Select
                        size="small"
                        variant="standard"
                        label="Select"
                        options={options}
                        defaultValue="8"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input
                        size="small"
                        variant="standard"
                        label="Default"
                        icon={<ModeLightIcon />}
                        iconPosition="end"
                        fullWidth
                        defaultValue="888888888888888888"
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Select size="small" variant="filled" label="Select" options={options} defaultValue="8" fullWidth />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input
                        size="small"
                        variant="filled"
                        label="Default"
                        icon={<ModeLightIcon />}
                        iconPosition="end"
                        fullWidth
                        defaultValue="888888888888888888"
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default React.memo(Dashboard);
