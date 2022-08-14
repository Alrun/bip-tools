import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { binToHex } from '../../utils/crypto/crypto';
import enWordList from '../../libs/bip39/wordlists/english';
import { setCaret } from './setCaret';
import { StyledEditableContent, StyledFormControl } from './MnemonicEditableContentStyles';
import { MnemonicEditableContentProps } from './MnemonicEditableContent.d';
import ButtonCopy from '../ButtonCopy/ButtonCopy';

/**
 * HTML template
 *
 * @param l
 */
export const getHtml = (l: string[]) =>
    l.reduce((acc, cur, idx) => {
        const span = `<span id="word-${idx + 1}" class="word${enWordList.includes(cur) ? ' valid' : ''}">${cur}</span>`;

        return acc.concat(`${span}`);
    }, '');

/**
 * Extracts entropy from words.
 *
 * @param words
 */
export const extractEntropy = (words: string[]) => {
    const indexList: number[] = words.map((item) => enWordList.indexOf(item)).filter((item) => item !== -1);
    const rawBinList = indexList.map((item) => item.toString(2).padStart(11, '0'));
    const binEntropyStr = rawBinList.join('');
    const binEntropy = binEntropyStr.slice(0, Math.trunc(binEntropyStr.length / 8) * 8);
    const hexEntropy = binToHex(binEntropy);

    return { binEntropy, hexEntropy, rawBinList };
};

const validatePhrase = (wordsArr: string[]) => {
    const invalidWords = wordsArr.filter((item) => !enWordList.includes(item));

    if (invalidWords.length) {
        return `The word${invalidWords.length > 1 ? 's' : ''} "${invalidWords.join(', ')}" ${
            invalidWords.length > 1 ? 'are' : 'is'
        } incorrect!`;
    }

    return '';
};

const MnemonicEditableContent = ({ words, onChange }: MnemonicEditableContentProps) => {
    const [error, setError] = React.useState('');
    const [focused, setFocused] = React.useState(false);
    const [text, setText] = React.useState(words);

    const rootRef = React.useRef<HTMLDivElement>(null);

    const handleFocus = () => setFocused(true);

    const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
        const selection = window.getSelection();
        const innerText = e.target.innerText
            .toLowerCase()
            .replace(/[^a-z\s]/gi, '') // TODO: add multilingual support
            .replace(/(\r\n|\n|\r)$/, '') // remove last newline
            .replace(/(\r\n|\n|\r)/gm, ' ') // replace newlines with spaces
            .replace(/\s+/g, ' ') // disable double spaces
            .trimStart(); // remove space from start
        const textArr = innerText ? innerText.split(' ') : [];

        if (selection) {
            const { anchorNode, anchorOffset } = selection;

            if (anchorNode && anchorNode.parentElement) {
                const target: HTMLElement | null = anchorNode.parentElement;
                const siblingNext: Element | null = anchorNode.parentElement.nextElementSibling;

                if (rootRef.current) {
                    rootRef.current.innerHTML = getHtml(textArr);
                    setCaret(target, siblingNext, anchorNode, anchorOffset, selection, rootRef.current);
                }
            }
        }

        setError('');
    };

    const handleCopy = async (e: React.SyntheticEvent) => {
        if (e.type === 'copy') {
            const selectedText = `${window.getSelection()}`;

            if (selectedText.length) {
                const replacedText = selectedText.replace(/(\r\n|\n|\r)/gm, ' ');

                (e as React.ClipboardEvent).clipboardData.setData('text/plain', replacedText);
                e.preventDefault();
            }
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();

        const selection = window.getSelection();
        const data = e.clipboardData.getData('text/plain');
        const editedData = ` ${data} `;

        if (selection && selection.rangeCount) {
            selection.deleteFromDocument();
            selection.getRangeAt(0).insertNode(document.createTextNode(editedData));
            handleChange({ target: rootRef.current } as React.ChangeEvent<HTMLDivElement>);
        }
    };

    const handleBlur = (e: any) => {
        const inputText = e.target.innerText;

        if (inputText) {
            const arr: string[] = inputText.split(/\r?\n/);
            const { hexEntropy } = extractEntropy(arr);
            const errorMessage = validatePhrase(arr);

            if (errorMessage) {
                setError(errorMessage);
                onChange('');
            } else {
                onChange(hexEntropy);
            }
        } else {
            onChange('');
        }

        setFocused(false);
    };

    React.useEffect(() => {
        setText(words);
        setError('');
    }, [words]);

    // TODO: Remove after render check
    const rendersCount = React.useRef(0);

    return (
        <StyledEditableContent>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <Box sx={{ display: 'inline-flex' }}>
                    <ButtonCopy
                        // TODO: Fix copy
                        // text={rootRef.current ? rootRef.current.innerText.replace(/(\r\n|\n|\r)/gm, ' '): ''}
                        text={text.join(' ')}
                    />
                </Box>
            </Box>
            <StyledFormControl fullWidth error={!!error} focused={focused}>
                <InputLabel
                    htmlFor="mnemonic-phrase"
                    aria-labelledby="mnemonic-phrase"
                    shrink
                    onClick={() => setFocused(true)}
                >
                    Mnemonic phrase
                </InputLabel>
                <Box
                    sx={{
                        position: 'relative',
                        borderRadius: (theme) => `${theme.shape.borderRadius}px`,
                        color: (theme) => theme.palette.text.primary,
                        mb: 2
                    }}
                >
                    <div
                        id="mnemonic-phrase"
                        ref={rootRef}
                        role="textbox"
                        aria-label="Enter your phrase"
                        tabIndex={0}
                        spellCheck={false}
                        contentEditable
                        suppressContentEditableWarning
                        onInput={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onCopy={handleCopy}
                        onPaste={handlePaste}
                        dangerouslySetInnerHTML={{ __html: getHtml(text) }}
                    />
                    <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline">
                        <legend>
                            <span>Mnemonic phrase</span>
                        </legend>
                    </fieldset>
                    <b style={{position: "fixed", bottom: 120, zIndex: 2200}}>
                        {/* eslint-disable-next-line no-plusplus */}
                        Editcontent RENDER COUNT: {++rendersCount.current}
                    </b>
                </Box>
                {!!error && (
                    <FormHelperText sx={{ mt: -1.5 }} color="error">
                        {error}
                    </FormHelperText>
                )}
            </StyledFormControl>
        </StyledEditableContent>
    );
};

export default React.memo(MnemonicEditableContent);
