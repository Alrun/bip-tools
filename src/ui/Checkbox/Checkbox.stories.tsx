import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Checkbox from './Checkbox';

export default {
    title: 'UI/Checkbox',
    component: Checkbox,
    parameters: {
        controls: {
            exclude: ['items', 'onChange']
        }
    }
} as ComponentMeta<typeof Checkbox>;

const wrapperDecorator = (Story: any) => (
    <div
        style={{
            gap: '2rem',
            display: 'flex',
            alignItems: 'baseline',
            flexWrap: 'wrap'
        }}
    >
        {Story()}
    </div>
);

const BaseTemplate: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

const GroupTemplate: ComponentStory<any> = (args) => {
    const { items, ...rest } = args;

    return (
        <>
            {items.map((item: any, idx: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <Checkbox key={idx} {...rest} {...item} />
            ))}
        </>
    );
};

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    label: 'Checkbox',
    defaultChecked: true
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
            // TODO: Add to icon component
            icon: <FavoriteBorder />,
            checkedIcon: <Favorite />
        }
    ]
};

Variants.parameters = {
    docs: {
        source: {
            code:
                '<Checkbox label="Default" />\n' +
                '<Checkbox label="indeterminate" indeterminate />\n' +
                '<Checkbox label="Icon" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />'
        }
    }
};

/**
 * Colors
 */
export const Colors = GroupTemplate.bind({});

Colors.decorators = [wrapperDecorator];

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
    items: [
        {
            label: 'Checked disabled',
            disabled: true
        },
        {
            label: 'Unchecked disabled',
            defaultChecked: false,
            disabled: true
        }
    ]
};

Disabled.parameters = {
    docs: {
        source: {
            // eslint-disable-next-line no-useless-concat
            code: '<Checkbox label="Checked disabled" defaultChecked />\n' + '<Checkbox label="Unchecked disabled" />'
        }
    }
};

/**
 * Placement
 */
export const Placement = GroupTemplate.bind({});

Placement.decorators = [wrapperDecorator];

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

Size.decorators = [wrapperDecorator];

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
