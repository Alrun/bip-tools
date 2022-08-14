import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

const StyledLinearProgress = styled(LinearProgress, {
    shouldForwardProp: (prop) => prop !== 'height'
})<{ height: number }>(({ height }) => ({
    height
}));

export default StyledLinearProgress;
