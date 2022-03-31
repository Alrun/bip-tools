import React from 'react';
import Box from '@mui/material/Box';
import Binary from '../componets/Binary/Binary';

const Mnemonic = () => {
    const rendersCount = React.useRef<number>(0);

    return (
        <>
            <Box>
                <Binary />
            </Box>
            <div>
                <b>
                    {/* eslint-disable-next-line no-plusplus */}
                    Mnemonic RENDER COUNT: {++rendersCount.current}
                </b>
            </div>
        </>
    );
};

export default React.memo(Mnemonic);
