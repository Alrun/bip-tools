import { styled } from '@mui/material/styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)({});

export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    fontSize: theme.typography.body1.fontSize,
    padding: '0.615em',
    height: 36,
    lineHeight: 1,
    '&.MuiToggleButton-sizeSmall': {
        fontSize: theme.typography.smRegular.fontSize,
        padding: '0.484em',
        height: 28
    },
    '&.MuiToggleButton-sizeLarge': {
        fontSize: theme.typography.h5.fontSize,
        padding: '0.648em',
        height: 42
    },
    '& .MuiSvgIcon-root': {
        fontSize: '1.2em'
    }
}));
