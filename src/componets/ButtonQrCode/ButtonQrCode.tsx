import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Button from '../../ui/Button/Button';
import Modal from '../../ui/Modal/Modal';
import Typography from '../../ui/Typography/Typography';
import ButtonCopy from '../ButtonCopy/ButtonCopy';

const ButtonQrCode = ({ title, text, icon, tooltipText = 'QR code' }: any) => {
    const theme = useTheme();

    const [showModal, setShowModal] = React.useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Tooltip title={tooltipText}>
                <div>
                    <Button isRound size="small" onClick={handleShowModal}>
                        <QrCode2Icon fontSize="inherit" />
                    </Button>
                </div>
            </Tooltip>
            <Modal open={showModal} title={title} onClose={handleCloseModal} scroll="body">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}
                >
                    <Box
                        sx={{
                            mb: 1
                        }}
                    >
                        <QRCodeCanvas
                            value={text}
                            fgColor={theme.palette.primary.main}
                            bgColor={theme.palette.background.paper}
                            imageSettings={
                                icon
                                    ? {
                                          src: icon,
                                          x: undefined,
                                          y: undefined,
                                          height: 24,
                                          width: 24,
                                          excavate: true
                                      }
                                    : undefined
                            }
                        />
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',

                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: `${theme.shape.borderRadius}px`,
                            mt: 2
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                                borderRight: `1px solid ${theme.palette.divider}`
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: '"Roboto Mono", monospace',
                                        wordBreak: 'break-word',
                                        p: 2
                                    }}
                                >
                                    {text}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: '3.5rem',
                                minHeight: '2.5rem'
                            }}
                        >
                            <ButtonCopy
                                text={text}
                                buttonProps={{
                                    isRound: false,
                                    variant: 'text',
                                    color: 'secondary',
                                    sx: {
                                        width: '100%',
                                        height: '100%',
                                        fontSize: '1.2rem !important',
                                        borderRadius: `0px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px`,
                                        p: '0 !important'
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default ButtonQrCode;
