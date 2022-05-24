import React from 'react';
import Typography from '../../ui/Typography/Typography';
import Input from '../../ui/Input/Input';

const Derivation = () => (
    <>
        <Input
            label="Passphrase (optional)"
            value=""
            fullWidth
            margin="dense"
        />
        <Input
            label="BIP32 Root Key"
            multiline
            value="xprv9s21ZrQH143K2QzM5x6dR9Af5cGE1YUGaN3Fh7Ajpw3d8YE3uNPWscTjn3sfkx3tJvMhU3t44MLNrHseqRgcL8hzT6UHJ2RbyniGo87ggam"
            fullWidth
            margin="dense"
        />
        <Input
            label="Extended Private Key"
            multiline
            value="xprv9tuexUwePS8MEpdFFq1jnF3BPPbXnaJP3MU1mpEc9V9m4A9Tx7woUExA5FKPEPMkjwVyyGCmBKomCMxTU2nW7B3uGzXWTS4nzZVCxFQ3Uba"
            fullWidth
            margin="dense"
            disabled
            // variant="filled"
        />
        <Input
            label="Extended Public Key"
            multiline
            value="xpub67u1MzUYDogeTJhiMrYk9NyuwRS2C32EQaPcaCeDhpgjvxUcVfG423GdvV9vvq6VuA6RyLJpqvaokw2z4L8ziEczofte13J9BFhka1APK5c"
            fullWidth
            margin="dense"
            disabled
            // variant="filled"
        />
    </>
);

export default Derivation
