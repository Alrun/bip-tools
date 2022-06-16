export interface GeneratorGroupProps {
    list: { id: number; item: string }[];
    wordList: readonly string[];
    onChange: (idx: number, val: string) => void;
}
