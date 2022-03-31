import { CheckboxProps } from '@mui/material/Checkbox/Checkbox';
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel';

export type CheckboxSize = 'small' | 'medium'

export interface CheckboxPropsInterface extends CheckboxProps {
    /**
     * The label element.
     */
    label?: FormControlLabelProps['label'];
    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: CheckboxSize;
    /**
     * The position of the label.
     */
    labelPlacement?: FormControlLabelProps['labelPlacement'];
}
