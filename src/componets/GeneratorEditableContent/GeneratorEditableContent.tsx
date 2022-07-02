import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import Button from '../../ui/Button/Button';
import { binToHex } from '../../utils/crypto/crypto';
import { StyledEditableContent, StyledFormControl } from './GeneratorEditableContentStyles';
import { GeneratorEditableContentProps } from './GeneratorEditableContent.d';
import { setCaret } from './setCaret';

const SlideTransition = ({ children, ...props }: SlideProps) => (
    <Slide {...props} direction="up">
        {children}
    </Slide>
);

/**
 * HTML template
 * @param l
 * @param wordList
 */
export const getHtml = (l: string[], wordList: GeneratorEditableContentProps['wordList']) =>
    l.reduce((acc, cur, idx) => {
        const span = `<span id="word-${idx + 1}" class="word${wordList.includes(cur) ? ' valid' : ''}">${cur}</span>`;

        return acc.concat(`${span}`);
    }, '');

/**
 * Extracts entropy from words.
 * @param words
 * @param wordList
 */
export const extractEntropy = (words: string[], wordList: GeneratorEditableContentProps['wordList']) => {
    const indexList: number[] = words.map((item) => wordList.indexOf(item)).filter((item) => item !== -1);
    const rawBinList = indexList.map((item) => item.toString(2).padStart(11, '0'));
    const binEntropyStr = rawBinList.join('');
    const binEntropy = binEntropyStr.slice(0, Math.trunc(binEntropyStr.length / 8) * 8);
    const hexEntropy = binToHex(binEntropy);

    return { binEntropy, hexEntropy, rawBinList };
};

const validatePhrase = (wordsArr: string[], wordList: GeneratorEditableContentProps['wordList']) => {
    const invalidWords = wordsArr.filter((item) => !wordList.includes(item));

    if (invalidWords.length) {
        return `The word${invalidWords.length > 1 ? 's' : ''} "${invalidWords.join(', ')}" ${
            invalidWords.length > 1 ? 'are' : 'is'
        } incorrect!`;
    }

    return '';
};

const GeneratorEditableContent = ({ words, wordList, onChange }: GeneratorEditableContentProps) => {
    const [error, setError] = React.useState('');
    const [focused, setFocused] = React.useState(false);
    const [text, setText] = React.useState(words);
    const [showSnack, setShowSnack] = React.useState(false);

    const rootRef = React.useRef<HTMLDivElement>(null);

    const handleSnackClose = () => setShowSnack(false);
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
                    rootRef.current.innerHTML = getHtml(textArr, wordList);
                    setCaret(target, siblingNext, anchorNode, anchorOffset, selection, rootRef.current);
                }
            }
        }

        setError('');
    };

    const handleCopy = async (e: React.SyntheticEvent) => {
        if (e.type === 'click' && rootRef.current && 'clipboard' in navigator) {
            const textFromStr = rootRef.current.innerText.replace(/(\r\n|\n|\r)/gm, ' ');

            if (textFromStr) {
                await navigator.clipboard.writeText(textFromStr);
                setShowSnack(true);
            }
        }

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
            const { hexEntropy } = extractEntropy(arr, wordList);
            const errorMessage = validatePhrase(arr, wordList);

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
        <>
            <StyledEditableContent>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                    <Tooltip title="Copy">
                        <div>
                            <Button isRound onClick={handleCopy} aria-label="Copy">
                                <ContentCopyIcon fontSize="small" />
                            </Button>
                        </div>
                    </Tooltip>
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
                            dangerouslySetInnerHTML={{ __html: getHtml(text, wordList) }}
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
            <Snackbar
                autoHideDuration={1500}
                open={showSnack}
                onClose={handleSnackClose}
                TransitionComponent={SlideTransition}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                key="Copied"
            >
                <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
                    Copied to clipboard!
                </Alert>
            </Snackbar>
        </>
    );
};

export default GeneratorEditableContent;
