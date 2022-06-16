import { InputProps } from '../../ui/Input/Input';

export interface GeneratorGroupItemProps {
    id: number;
    value: string;
    onChange: (idx: number, val: string) => void;
    wordList: readonly sting[];
    color?: InputProps['color'];
    disabled?: boolean;
}
