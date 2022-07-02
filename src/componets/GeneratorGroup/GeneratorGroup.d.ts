export interface GeneratorGroupProps {
    list: { id: number; item: string }[];
    wordList: ReadonlyArray<string>;
    onChange: (idx: number, val: string) => void;
}
