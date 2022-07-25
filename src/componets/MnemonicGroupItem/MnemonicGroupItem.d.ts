import { InputProps } from '../../ui/Input/Input';

export interface MnemonicGroupItemProps {
    id: number;
    wordBinary: string;
    wordIndex: string;
    wordString: string;
    onChange: (idx: number, val: string) => void;
    color?: InputProps['color'];
    disabled?: boolean;
}
