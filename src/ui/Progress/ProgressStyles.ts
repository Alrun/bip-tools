import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

const StyledProgress = styled(LinearProgress, {
    shouldForwardProp: (prop) => prop !== 'height'
})<{ height: number }>(({ theme, height }) => ({
    height
}));

export default StyledProgress;
