import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FavoriteIcon, FavoriteBorderIcon, StarIcon, StarBorderIcon } from '../Icons/Icons';
import Checkbox from './Checkbox';

export default {
    title: 'UI/Checkbox',
    component: Checkbox,
    argTypes: {
        icon: {
            options: ['Default', 'Favorite', 'Star'],
            mapping: {
                Default: undefined,
                Favorite: <FavoriteBorderIcon />,
                Star: <StarBorderIcon />
            }
        },
        checkedIcon: {
            options: ['Default', 'Favorite', 'Star'],
            mapping: {
                Default: undefined,
                Favorite: <FavoriteIcon />,
                Star: <StarIcon />
            }
        },
        checked: { control: { type: null } },
        defaultChecked: { control: { type: null } },
        onChange: { control: { type: null }, table: { category: 'Events' } },
        onFocusVisible: { control: { type: null }, table: { category: 'Events' } }
    },
    parameters: { controls: { exclude: ['items'] } }
} as ComponentMeta<typeof Checkbox>;

const BaseTemplate: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

const GroupTemplate: ComponentStory<any> = ({ items, ...args }) =>
    items.map((item: any, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Checkbox key={idx} {...args} {...item} />
    ));

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    label: 'Checkbox',
    defaultChecked: true,
    formGroupProps: {
        sx: {
            display: 'inline-flex',
            mr: 6
        }
    }
};

Base.parameters = {
    docs: {
        source: {
            code: '<Checkbox label="Checkbox" defaultChecked />'
        }
    }
};

/**
 * Variants
 */
export const Variants = GroupTemplate.bind({});

Variants.args = {
    ...Base.args,
    items: [
        {
            label: 'Default'
        },
        {
            label: 'indeterminate',
            indeterminate: true
        },
        {
            label: 'Icon',
            icon: <FavoriteBorderIcon />,
            checkedIcon: <FavoriteIcon />
        }
    ]
};

Variants.parameters = {
    docs: {
        source: {
            code:
                '<Checkbox label="Default" />\n' +
                '<Checkbox label="indeterminate" indeterminate />\n' +
                '<Checkbox label="Icon" icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} />'
        }
    }
};

/**
 * Colors
 */
export const Colors = GroupTemplate.bind({});

Colors.args = {
    ...Base.args,
    items: [
        {
            label: 'Primary',
            color: 'primary'
        },
        {
            label: 'Secondary',
            color: 'secondary'
        },
        {
            label: 'Success',
            color: 'success'
        },
        {
            label: 'Error',
            color: 'error'
        },
        {
            label: 'Warning',
            color: 'warning'
        },
        {
            label: 'Info',
            color: 'info'
        }
    ]
};

Colors.parameters = {
    docs: {
        source: {
            code:
                '<Checkbox color="primary" label="Primary" />\n' +
                '<Checkbox color="secondary" label="Secondary" />\n' +
                '<Checkbox color="success" label="Success" />\n' +
                '<Checkbox color="error" label="Error" />\n' +
                '<Checkbox color="warning" label="Warning" />\n' +
                '<Checkbox color="info" label="Info" />'
        }
    }
};

/**
 * Disabled
 */
export const Disabled = GroupTemplate.bind({});

Disabled.args = {
    ...Base.args,
    disabled: true,
    items: [
        {
            label: 'Checked disabled'
        },
        {
            label: 'Unchecked disabled',
            defaultChecked: false
        }
    ]
};

Disabled.parameters = {
    docs: {
        source: {
            code:
                '<Checkbox label="Checked disabled" defaultChecked disabled />\n' +
                '<Checkbox label="Unchecked disabled" disabled />'
        }
    }
};

/**
 * Placement
 */
export const Placement = GroupTemplate.bind({});

Placement.args = {
    ...Base.args,
    items: [
        {
            label: 'End'
        },
        {
            label: 'Start',
            labelPlacement: 'start'
        },
        {
            label: 'Top',
            labelPlacement: 'top'
        },
        {
            label: 'Bottom',
            labelPlacement: 'bottom'
        }
    ]
};

Placement.parameters = {
    docs: {
        source: {
            code:
                '<Checkbox label="End" />\n' +
                '<Checkbox label="Start" labelPlacement="start" />\n' +
                '<Checkbox label="Top" labelPlacement="top" />\n' +
                '<Checkbox label="Bottom" labelPlacement="bottom" />'
        }
    }
};

/**
 * Size
 */
export const Size = GroupTemplate.bind({});

Size.args = {
    ...Base.args,
    items: [
        {
            label: 'Medium'
        },
        {
            label: 'Small',
            size: 'small'
        }
    ]
};

Size.parameters = {
    docs: {
        source: {
            // eslint-disable-next-line no-useless-concat
            code: '<Checkbox label="Medium" />\n' + '<Checkbox label="Small" size="small" />'
        }
    }
};
