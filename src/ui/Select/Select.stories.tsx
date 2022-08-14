import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';
import { SelectOptions } from './Select.d';

const options: SelectOptions[] = [
    {
        label: 'Option 1',
        value: '1'
    },
    {
        label: 'Option 2',
        value: '2'
    },
    {
        label: 'Option 3',
        value: '3'
    }
];

export default {
    title: 'UI/Select',
    component: Select,
    argTypes: {
        defaultValue: {
            options: ['1', '2', '3']
        },
        helperText: { control: { type: 'text' } },
        value: { control: { type: 'text' } },
        onChange: { control: { type: null }, table: { category: 'Events' } },
        onBlur: { control: { type: null }, table: { category: 'Events' } },
        onFocus: { control: { type: null }, table: { category: 'Events' } }
    },
    parameters: { controls: { exclude: ['items'] } }
} as ComponentMeta<typeof Select>;

const wrapperDecorator = (Story: any) => (
    <div
        style={{
            gap: '1rem',
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'wrap'
        }}
    >
        {Story()}
    </div>
);

const BaseTemplate: ComponentStory<typeof Select> = ({ multiple, value, ...args }) => {
    const [selected, setSelected] = React.useState(() => (multiple ? [value] : value));

    const handleChange = (val: any) => {
        setSelected(val);
    };

    return <Select {...args} onChange={handleChange} multiple={multiple} value={selected} />;
};

const GroupTemplate: ComponentStory<any> = ({ items, value, ...args }) => {
    const { multiple } = items[0];
    const [selected, setSelected] = React.useState(() => (multiple ? [value] : value));

    const handleChange = (val: any) => {
        setSelected(val);
    };

    return (
        <>
            {items.map((item: any, idx: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <Select key={idx} {...args} {...item} value={selected} onChange={handleChange} />
            ))}
        </>
    );
};

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    label: 'Select',
    value: '',
    options,
    sx: {
        minWidth: 180
    }
};

Base.parameters = {
    docs: {
        source: {
            code: `
<Select
    label="Select"
    options={[
        {
            label: 'Option 1',
            value: '1'
        },
        {
            label: 'Option 2',
            value: '2'
        },
        {
            label: 'Option 3',
            value: '3'
        }
    ]}
/>`
        }
    }
};

/**
 * Native
 */
export const Native = BaseTemplate.bind({});

Native.args = {
    label: 'Select',
    options,
    native: true,
    sx: {
        minWidth: 180
    }
};

Native.parameters = {
    docs: {
        source: {
            code: `
<Select
    label="Select"
    native
    options={[
        {
            label: 'Option 1',
            value: '1'
        },
        {
            label: 'Option 2',
            value: '2'
        },
        {
            label: 'Option 3',
            value: '3'
        }
    ]}
/>`
        }
    }
};

/**
 * Variants
 */
export const Variants = GroupTemplate.bind({});

Variants.decorators = [wrapperDecorator];

Variants.args = {
    ...Base.args,
    items: [
        {
            label: 'Outlined'
        },
        {
            label: 'Standard',
            variant: 'standard'
        },
        {
            label: 'Filled',
            variant: 'filled'
        }
    ]
};

Variants.parameters = {
    docs: {
        source: {
            code:
                '<Select options={options} label="Outlined" />\n' +
                '<Select options={options} label="Standard" variant="standard" />\n' +
                '<Select options={options} label="Filled" variant="filled" />'
        }
    }
};

/**
 * Multiple
 */
export const Multiple = GroupTemplate.bind({});

Multiple.decorators = [wrapperDecorator];

Multiple.args = {
    ...Base.args,
    items: [
        {
            label: 'Multiple',
            multiple: true,
            sx: {
                minWidth: 180,
                maxWidth: 180
            }
        },
        {
            label: 'Multiple Native',
            multiple: true,
            native: true
        }
    ]
};

Multiple.parameters = {
    docs: {
        source: {
            code:
                '<Select options={options} label="Multiple" multiple />\n' +
                '<Select options={options} label="Multiple Native" multiple native />'
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
    value: '1',
    focused: true,
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
                '<Select options={options} label="Primary" />\n' +
                '<Select options={options} label="Secondary" color="secondary" />\n' +
                '<Select options={options} label="Success" color="success" />\n' +
                '<Select options={options} label="Error" color="error" />\n' +
                '<Select options={options} label="Warning" color="warning" />\n' +
                '<Select options={options} label="Info" color="info" />'
        }
    }
};

/**
 * Disabled
 */
export const Disabled = GroupTemplate.bind({});

Disabled.decorators = [wrapperDecorator];

Disabled.args = {
    ...Base.args,
    items: [
        {
            label: 'Outlined',
            disabled: true
        },
        {
            label: 'Standard',
            variant: 'standard',
            disabled: true
        },
        {
            label: 'Filled',
            variant: 'filled',
            disabled: true
        }
    ]
};

Disabled.parameters = {
    docs: {
        source: {
            code:
                '<Select options={options} label="Outlined" disabled />\n' +
                '<Select options={options} label="Standard" variant="standard" disabled />\n' +
                '<Select options={options} label="Filled" variant="filled" disabled />'
        }
    }
};

/**
 * Sizes
 */
export const Sizes = GroupTemplate.bind({});

Sizes.decorators = [wrapperDecorator];

Sizes.args = {
    ...Base.args,
    items: [
        {
            label: 'Medium',
            size: 'medium'
        },
        {
            label: 'Small',
            size: 'small'
        }
    ]
};

Sizes.parameters = {
    docs: {
        source: {
            code:
                '<Select options={options} label="Medium" />\n' +
                '<Select options={options} label="Small" size="small" />'
        }
    }
};

/**
 * HelperText
 */
export const HelperText = GroupTemplate.bind({});

HelperText.decorators = [wrapperDecorator];

HelperText.args = {
    ...Base.args,
    items: [
        {
            label: 'Select',
            helperText: 'Helper Text'
        },
        {
            label: 'Select',
            helperText: 'Error text',
            error: true
        },
        {
            label: 'Select',
            helperText: 'Long long long long long long long long long text',
            sx: { maxWidth: 180 }
        }
    ]
};

HelperText.parameters = {
    docs: {
        source: {
            code:
                '<Select options={options} label="Select" helperText="Helper Text" />\n' +
                '<Select options={options} label="Select" helperText="Error text" error />\n' +
                '<Select options={options} label="Select" helperText="Long long long long long long long long long text" />'
        }
    }
};
