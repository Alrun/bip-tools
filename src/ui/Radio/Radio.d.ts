import { RadioProps } from '@mui/material/Radio/Radio';
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel';

export type RadioSize = 'small' | 'medium'

export interface RadioPropsInterface extends RadioProps {
    /**
     * The label element.
     */
    label?: FormControlLabelProps['label'];
    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: RadioSize;
    /**
     * The position of the label.
     */
    labelPlacement?: FormControlLabelProps['labelPlacement'];
}
