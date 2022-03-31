import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const Footer = ({ height = 50 }: any) => {
    // TODO: Remove after render check
    const rendersCount = React.useRef<number>(0);

    return (
        <Box component="footer" sx={{ height, minHeight: height }}>
            <Divider />
            <Box sx={{ p: 3 }}>
                Footer
                {/* TODO: Remove after render check */}
                <b>
                    {/* eslint-disable-next-line no-plusplus */}
                    Footer RENDER COUNT: {++rendersCount.current}
                </b>
            </Box>
        </Box>
    );
};

export default React.memo(Footer);
