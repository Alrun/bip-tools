import React from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useExtendedKeys from '../../hooks/useExtendedKeys/useExtendedKeys';
import useAddresses, { Address } from '../../hooks/useAddresses/useAddresses';
import {
    setCoinType,
    setEntropy,
    setSeed,
    setExpandedPanel,
    setPassphrase,
    setWordList,
    setBip,
    setHardened,
    setScript,
    setShowBalances,
    setPath
} from '../../redux/slices/mnemonic/mnemonic';
import AddressExtendedRoot from '../AddressExtended/AddressExtended';
import AddressExtendedDerivation from '../AddressDerivation/AddressDerivation';
import AddressList from '../AddressList/AddressList';
import useSeed from '../../hooks/useSeed/useSeed';
import useDerivationKeys from '../../hooks/useDerivationKeys/useDerivationKeys';
import { Bip, Script } from '../../libs/bips/bips.d';

const START_COUNT = 0;
const ITEMS_COUNT = 20;

const TabAddress = () => {
    const {
        entropy,
        seed,
        passphrase,
        wordList,
        bip,
        coinType,
        path,
        derivationPath,
        isHardened,
        script,
        showBalances,
        expandedPanel
    } = useAppSelector((state) => state.mnemonic);
    const dispatch = useAppDispatch();

    const [startIndex, setStartIndex] = React.useState(START_COUNT);
    const [addresses, setAddresses] = React.useState<Address[]>([]);

    const words = React.useMemo(() => wordList.map((item) => item.wordString), [wordList]);

    const currentSeed = useSeed(words.join(' '), passphrase);

    const { serializedExtendedPrivateKey, serializedExtendedPublicKey } = useExtendedKeys(seed);

    const { extendedDerivedPrivateKey, extendedDerivedPublicKey } = useDerivationKeys(
        serializedExtendedPrivateKey,
        bip,
        derivationPath
    );

    const addressList = useAddresses(
        extendedDerivedPrivateKey,
        derivationPath,
        coinType,
        script,
        isHardened,
        startIndex,
        ITEMS_COUNT
    );

    const handleChangeSeed = React.useCallback((newSeed: string) => {
        if (newSeed) {
            dispatch(setSeed(newSeed));
        } else {
            dispatch(setSeed(''));
        }

        dispatch(setEntropy(''));
        dispatch(setPassphrase(''));
        dispatch(setWordList([]));
    }, []);

    const handleExpandPanel = React.useCallback((panel: string) => () => dispatch(setExpandedPanel(panel)), []);
    const handleChangePassphrase = React.useCallback((pass: string) => dispatch(setPassphrase(pass)), []);
    const handleShowBalances = React.useCallback((show: boolean) => dispatch(setShowBalances(show)), []);

    const handleChangeBip = React.useCallback((newBip: Bip) => {
        setStartIndex(START_COUNT);
        dispatch(setBip(newBip));
    }, []);

    const handleChangeCoin = React.useCallback((coin: string) => {
        setStartIndex(START_COUNT);
        dispatch(setCoinType(coin));
    }, []);

    const handleChangeHardened = React.useCallback((bool: boolean) => {
        setStartIndex(START_COUNT);
        dispatch(setHardened(bool));
    }, []);

    const handleChangeScript = React.useCallback((newScript: `${Script}`) => {
        setStartIndex(START_COUNT);
        dispatch(setScript(newScript));
    }, []);

    const handleChangePath = React.useCallback((newPath: string) => {
        setStartIndex(START_COUNT);
        dispatch(setPath(newPath));
    }, []);

    const handleShowMore = React.useCallback(() => {
        setStartIndex((prevState) => prevState + ITEMS_COUNT);
    }, [startIndex]);

    React.useEffect(() => {
        if (currentSeed) {
            dispatch(setSeed(currentSeed));
        }
    }, [currentSeed]);

    React.useEffect(() => {
        if (startIndex === START_COUNT) {
            setAddresses(addressList);
        } else {
            setAddresses((prevState) => [...new Set([...prevState, ...addressList])]);
        }
    }, [addressList, startIndex]);

    return (
        <>
            <Box sx={{ mt: -1.5 }}>
                <AddressExtendedRoot
                    seed={seed}
                    entropy={entropy}
                    passphrase={passphrase}
                    expandedPanel={expandedPanel}
                    serializedExtendedPrivateKey={serializedExtendedPrivateKey}
                    serializedExtendedPublicKey={serializedExtendedPublicKey}
                    onExpandPanel={handleExpandPanel}
                    onChangeSeed={handleChangeSeed}
                    onChangePassphrase={handleChangePassphrase}
                />
            </Box>
            <AddressExtendedDerivation
                extendedDerivedPrivateKey={extendedDerivedPrivateKey}
                extendedDerivedPublicKey={extendedDerivedPublicKey}
                derivationPath={path}
                onChangePathDerivation={handleChangePath}
                bip={bip}
                onChangeBip={handleChangeBip}
                coinType={coinType}
                onChangeCoin={handleChangeCoin}
                isHardened={isHardened}
                onChangeHardened={handleChangeHardened}
                script={script}
                onChangeScript={handleChangeScript}
                expandedPanel={expandedPanel}
                onExpandPanel={handleExpandPanel}
                showBalances={showBalances}
                onChangeShowBalances={handleShowBalances}
            />
            <AddressList
                list={addresses}
                length={ITEMS_COUNT}
                showBalances={showBalances}
                onShowMore={handleShowMore}
            />
        </>
    );
};

export default TabAddress;
