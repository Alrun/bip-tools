import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import enWordList from '../../libs/bip39/wordlists/english';
import { setCaret } from '../../libs/setCaret/setCaret';
import { extractEntropy } from '../../libs/bip39/mnemonic/mnemonic';
import { checkPhrase } from '../../libs/bip39/validate/validate';
import ButtonCopy from '../ButtonCopy/ButtonCopy';
import { StyledEditableContent, StyledFormControl } from './MnemonicEditableContentStyles';
import { MnemonicEditableContentProps } from './MnemonicEditableContent.d';

/**
 * HTML template.
 *
 * @param {string[]} wordList Word list.
 */
export const getHtml = (wordList: string[]) =>
    wordList.reduce((acc, cur, idx) => {
        const span = `<span id="word-${idx + 1}" class="word${enWordList.includes(cur) ? ' valid' : ''}">${cur}</span>`;

        return acc.concat(`${span}`);
    }, '');

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
            .replace(/[^a-z\s]/gi, '') // remove unavailable characters
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

    const handleBlur = (e: React.SyntheticEvent) => {
        const inputText = (e.target as HTMLElement).innerText;

        if (inputText) {
            const arr: string[] = inputText.split(/\r?\n/);
            const { hexEntropy } = extractEntropy(arr);
            const errorMessage = checkPhrase(arr);

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

    return (
        <StyledEditableContent>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <Box sx={{ display: 'inline-flex' }}>
                    <ButtonCopy text={text.join(' ')} />
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
