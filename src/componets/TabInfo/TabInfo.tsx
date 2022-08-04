import React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '../../ui/Tooltip/Tooltip';
import Typography from '../../ui/Typography/Typography';
// import Typography from '@mui/material/Typography';
import { InfoOutlinedIcon } from '../../ui/Icons/Icons';
import Link from '../../ui/Link/Link';

const TabInfo = (props: any) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    //
    // const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };
    //
    // const handlePopoverClose = () => {
    //     setAnchorEl(null);
    // };
    //
    // const open = Boolean(anchorEl);

    React.useEffect(() => {
        console.log('mount');
        return () => console.log('unmount');
    }, []);

    return (
        <div>
            <Typography>
                BIP39 Mnemonic code for generating deterministic keys{' '}
                <Tooltip
                    enterTouchDelay={50}
                    leaveTouchDelay={5000}
                    placement="top"
                    arrow
                    title={<Box>Read more at the official BIP39 spec</Box>}
                >
                    <Box component="span">
                        <InfoOutlinedIcon color="primary" fontSize="inherit" />
                    </Box>
                </Tooltip>
            </Typography>

            <Typography>BIP32 Hierarchical Deterministic Wallets</Typography>
            <Typography>
                Read more at the{' '}
                <Link href="/" external>
                    official BIP32 spec
                </Link>
            </Typography>

            <Typography>See the demo at bip32.org</Typography>

            <Typography>BIP44 Multi-Account Hierarchy for Deterministic Wallets</Typography>
            <Typography>Read more at the official BIP44 spec</Typography>

            <Typography>BIP49 Derivation scheme for P2WPKH-nested-in-P2SH based accounts</Typography>
            <Typography>Read more at the official BIP49 spec</Typography>

            <Typography>BIP85 Deterministic Entropy From BIP32 Keychains</Typography>
            <Typography>Read more at the official BIP85 spec</Typography>
        </div>
    );
};

export default TabInfo;
