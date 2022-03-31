import { SwitchProps } from '@mui/material/Switch/Switch';
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel';

export type SwitchSize = 'small' | 'medium'

export interface SwitchPropsInterface extends SwitchProps {
    /**
     * The label element.
     */
    label?: FormControlLabelProps['label'];
    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: SwitchSize;
    /**
     * The position of the label.
     */
    labelPlacement?: FormControlLabelProps['labelPlacement'];
}
