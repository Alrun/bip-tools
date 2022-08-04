import React from 'react';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StyledModal, StyledModalContent, StyledModalFooter, StyledModalHeader } from './ModalStyles';
import Button from '../Button/Button';
import { CrossIcon } from '../Icons/Icons';
import { ModalProps } from './Modal.d';
import { SlideDown, SlideLeft, SlideRigth, SlideUp } from '../Transitions/Transitions';

const getTransition = (slide: ModalProps['slide']) => {
    switch (slide) {
        case 'up':
            return SlideUp;
        case 'down':
            return SlideDown;
        case 'left':
            return SlideLeft;
        case 'right':
            return SlideRigth;
        default:
            return undefined;
    }
};

const Modal = ({
    idPrefix,
    children,
    footer,
    HeaderProps,
    open,
    onClose,
    title,
    scroll = 'paper',
    slide,
    ...props
}: ModalProps) => {
    const fullScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const handleClose = () => {
        if (onClose) onClose();
    };

    return (
        <StyledModal
            open={open}
            onClose={handleClose}
            scroll={scroll}
            fullScreen={fullScreen}
            aria-labelledby={`${idPrefix}-modal-title`}
            aria-describedby={`${idPrefix}-modal-description`}
            TransitionComponent={getTransition(slide)}
            {...props}
        >
            <StyledModalHeader {...HeaderProps}>
                {title}
                {onClose && (
                    <Button
                        isRound
                        aria-label="close"
                        onClick={handleClose}
                        color="secondary"
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500]
                        }}
                    >
                        <CrossIcon />
                    </Button>
                )}
            </StyledModalHeader>
            <StyledModalContent dividers={(!!title || !!footer) && scroll === 'paper'}>{children}</StyledModalContent>
            {footer && <StyledModalFooter disableSpacing>{footer}</StyledModalFooter>}
        </StyledModal>
    );
};

export default Modal;
