import React from 'react';
import { styled, Theme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledModal = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(4)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(4)
    }
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const ModalTitle = ({ children, onClose, ...other }: DialogTitleProps) => (
    <DialogTitle sx={{ m: 0, p: 4 }} {...other}>
        {children}
        {onClose && (
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500]
                }}
            >
                <CloseIcon />
            </IconButton>
        )}
    </DialogTitle>
);

const Modal = ({ open, onClose, children, title, dialogActions, scroll = 'paper', headerProps, ...other }: any) => {
    const fullScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const handleClose = () => {
        onClose();
    };

    return (
        <div>
            <StyledModal
                open={open}
                onClose={handleClose}
                scroll={scroll}
                fullScreen={fullScreen}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...other}
            >
                <ModalTitle id="modal-title" onClose={handleClose} {...headerProps}>
                    {title}
                </ModalTitle>
                <DialogContent dividers={(title || dialogActions) && scroll === 'paper'}>{children}</DialogContent>
                {dialogActions && <DialogActions>{dialogActions}</DialogActions>}
            </StyledModal>
        </div>
    );
};

export default Modal;
