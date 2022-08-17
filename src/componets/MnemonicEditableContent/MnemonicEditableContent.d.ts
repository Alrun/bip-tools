export interface MnemonicEditableContentProps {
    /**
     * List of words.
     */
    words: string[];
    /**
     * The callback fires when the words change.
     *
     * @param {string} hex
     */
    onChange: (hex: string) => void;
}
