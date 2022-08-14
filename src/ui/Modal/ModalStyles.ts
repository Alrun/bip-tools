import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export const StyledModalHeader = styled(DialogTitle)(({ theme }) => ({
    fontSize: theme.typography.h4.fontSize,
    padding: theme.spacing(4, 16, 4, 3)
}));

export const StyledModalContent = styled(DialogContent)(({ theme }) => ({
    padding: theme.spacing(4, 3),
    borderBottom: 'none'
}));

export const StyledModalFooter = styled(DialogActions)(({ theme }) => ({
    padding: theme.spacing(3)
}));

export const StyledModal = styled(Dialog)(({ theme }) => ({
    '.MuiDialogContent-dividers + .MuiDialogActions-root': {
        borderTop: `1px solid ${theme.palette.divider}`
    }
}));
