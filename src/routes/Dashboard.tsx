import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Input from '../ui/Input/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { ModeLightIcon } from '../ui/Icons/Icons';

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

            <Grid container spacing={8} sx={{px: 24}}>
                <Grid item xs={12} sm={5}>
                    <Input label="Default" icon={<ModeLightIcon />} iconPosition="start" fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input label="Default" icon={<ModeLightIcon />} iconPosition="end" fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input label="Multiline" icon={<ModeLightIcon />} iconPosition="start" multiline fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input label="Multiline" icon={<ModeLightIcon />} iconPosition="end" multiline fullWidth defaultValue="888888888888888888" />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Input variant="standard" label="Default" icon={<ModeLightIcon />} iconPosition="start" fullWidth defaultValue="88888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input variant="standard" label="Default" icon={<ModeLightIcon />} iconPosition="end" fullWidth defaultValue="88888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input variant="standard" label="Multiline" icon={<ModeLightIcon />} iconPosition="start" multiline fullWidth defaultValue="88888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input variant="standard" label="Multiline" icon={<ModeLightIcon />} iconPosition="end" multiline fullWidth defaultValue="88888888888888888888" />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Input variant="filled" label="Default" icon={<ModeLightIcon />} iconPosition="start" fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input variant="filled" label="Default" icon={<ModeLightIcon />} iconPosition="end" fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input variant="filled" label="Multiline" icon={<ModeLightIcon />} iconPosition="start" multiline fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input variant="filled" label="Multiline" icon={<ModeLightIcon />} iconPosition="end" multiline fullWidth defaultValue="888888888888888888" />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Input size="small" label="Default" icon={<ModeLightIcon />} iconPosition="start" fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input size="small" label="Default" icon={<ModeLightIcon />} iconPosition="end" fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input size="small" label="Multiline" icon={<ModeLightIcon />} iconPosition="start" multiline fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input size="small" label="Multiline" icon={<ModeLightIcon />} iconPosition="end" multiline fullWidth defaultValue="888888888888888888" />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Input size="small" variant="standard" label="Default" icon={<ModeLightIcon />} iconPosition="start" fullWidth defaultValue="88888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input size="small" variant="standard" label="Default" icon={<ModeLightIcon />} iconPosition="end" fullWidth defaultValue="88888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input size="small" variant="standard" label="Multiline" icon={<ModeLightIcon />} iconPosition="start" multiline fullWidth defaultValue="88888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input size="small" variant="standard" label="Multiline" icon={<ModeLightIcon />} iconPosition="end" multiline fullWidth defaultValue="88888888888888888888" />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Input size="small" variant="filled" label="Default" icon={<ModeLightIcon />} iconPosition="start" fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input size="small" variant="filled" label="Default" icon={<ModeLightIcon />} iconPosition="end" fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input size="small" variant="filled" label="Multiline" icon={<ModeLightIcon />} iconPosition="start" multiline fullWidth defaultValue="888888888888888888" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Input size="small" variant="filled" label="Multiline" icon={<ModeLightIcon />} iconPosition="end" multiline fullWidth defaultValue="888888888888888888" />
                </Grid>




            </Grid>
        </>
    );
};

export default React.memo(Dashboard);
