import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputAdornment from '@mui/material/InputAdornment';
import Input from './Input';
import { ModeLightIcon } from '../Icons/Icons';

export default {
    title: 'UI/Input',
    component: Input,
    argTypes: {
        helperText: { control: { type: 'text' } },
        icon: { control: { type: 'text' } },
        type: { control: { type: 'text' } },
        value: { control: { type: 'text' } },
        rows: { control: { type: 'number' } },
        minRows: { control: { type: 'number' } },
        maxRows: { control: { type: 'number' } },
        onChange: { control: { type: null }, table: { category: 'Events' } },
        onBlur: { control: { type: null }, table: { category: 'Events' } },
        onFocus: { control: { type: null }, table: { category: 'Events' } }
    },
    parameters: { controls: { exclude: ['items'] } }
} as ComponentMeta<typeof Input>;

const wrapperDecorator = (Story: any) => (
    <div
        style={{
            gap: '1rem',
            display: 'flex',
            alignItems: 'baseline',
            flexWrap: 'wrap'
        }}
    >
        {Story()}
    </div>
);

const BaseTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const GroupTemplate: ComponentStory<any> = ({ items, ...args }) =>
    items.map((item: any, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Input key={idx} {...args} {...item} />
    ));

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    label: 'Input'
};

Base.parameters = {
    docs: {
        source: {
            code: '<Input label="Input" />'
        }
    }
};

/**
 * TextArea
 */
export const TextArea = BaseTemplate.bind({});

TextArea.args = {
    label: 'Text Area',
    multiline: true
};

TextArea.parameters = {
    docs: {
        source: {
            code: '<Input label="Text Area" multiline />'
        }
    }
};

/**
 * Types
 */
export const Types = GroupTemplate.bind({});

Types.decorators = [wrapperDecorator];

Types.args = {
    ...Base.args,
    items: [
        {
            label: 'Text'
        },
        {
            label: 'Number',
            type: 'number'
        },
        {
            label: 'Password',
            type: 'password'
        }
    ]
};

Types.parameters = {
    docs: {
        source: {
            code:
                '<Input label="Text" />\n' +
                '<Input label="Number" type="number" />\n' +
                '<Input label="Password" type="password" />'
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
                '<Input label="Outlined" />\n' +
                '<Input label="Standard" variant="standard" />\n' +
                '<Input label="Filled" variant="filled" />'
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
                '<Input label="Primary" />\n' +
                '<Input label="Secondary" color="secondary" />\n' +
                '<Input label="Success" color="success" />\n' +
                '<Input label="Error" color="error" />\n' +
                '<Input label="Warning" color="warning" />\n' +
                '<Input label="Info" color="info" />'
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
    disabled: true,
    defaultValue: 'Disabled',
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

Disabled.parameters = {
    docs: {
        source: {
            code:
                '<Input label="Outlined" defaultValue="Disabled" disabled />\n' +
                '<Input label="Standard" variant="standard" defaultValue="Disabled" disabled />\n' +
                '<Input label="Filled" variant="filled" defaultValue="Disabled" disabled />'
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
            code: '<Input label="Medium" />\n' + '<Input label="Small" size="small" />'
        }
    }
};

/**
 * WithIcon
 */
export const WithIcon = GroupTemplate.bind({});

WithIcon.decorators = [wrapperDecorator];

WithIcon.args = {
    ...Base.args,
    items: [
        {
            label: 'Icon Start',
            icon: <ModeLightIcon />,
            iconPosition: 'start'
        },
        {
            label: 'Icon End',
            icon: <ModeLightIcon />,
            iconPosition: 'end'
        },
        {
            label: 'Icon Text Start',
            icon: <InputAdornment position="start">$</InputAdornment>,
            iconPosition: 'start'
        },
        {
            label: 'Icon Text End',
            icon: <InputAdornment position="end">$</InputAdornment>,
            iconPosition: 'end'
        }
    ]
};

WithIcon.parameters = {
    docs: {
        source: {
            code:
                '<Input label="Icon Start" iconPosition="start" icon={<ModeLightIcon />} />\n' +
                '<Input label="Icon End" iconPosition="end" icon={<ModeLightIcon />} />\n' +
                '<Input label="Icon Text Start" iconPosition="start" icon={<InputAdornment position="start">$</InputAdornment>} />\n' +
                '<Input label="Icon Text End" iconPosition="end" icon={<InputAdornment position="end">$</InputAdornment>} />'
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
            label: 'Input',
            helperText: 'Helper Text'
        },
        {
            label: 'Input',
            helperText: 'Error text',
            defaultValue: 'Error',
            error: true
        },
        {
            label: 'Input',
            helperText: 'Long long long long long long long long long text',
            sx: { maxWidth: 180 }
        }
    ]
};

HelperText.parameters = {
    docs: {
        source: {
            code:
                '<Input label="Input" helperText="Helper Text" />\n' +
                '<Input label="Input" helperText="Error text" error defaultValue="Error" />\n' +
                '<Input label="Input" helperText="Long long long long long long long long long text" />'
        }
    }
};
