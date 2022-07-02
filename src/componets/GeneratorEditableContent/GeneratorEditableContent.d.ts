export interface GeneratorEditableContentProps {
    words: string[];
    wordList: ReadonlyArray<string>;
    onChange: (hex: string) => void
}
