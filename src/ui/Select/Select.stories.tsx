import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import SelectAdornment from '@mui/material/SelectAdornment';
import Select from './Select';
import { ModeLightIcon } from '../Icons/Icons';

export default {
    title: 'UI/Select',
    component: Select,
    argTypes: {
        // helperText: { control: { type: 'text' } },
        // icon: { control: { type: 'text' } },
        // type: { control: { type: 'text' } },
        // value: { control: { type: 'text' } },
        // rows: { control: { type: 'number' } },
        // minRows: { control: { type: 'number' } },
        // maxRows: { control: { type: 'number' } },
        onChange: { control: { type: null }, table: { category: 'Events' } },
        onBlur: { control: { type: null }, table: { category: 'Events' } },
        onFocus: { control: { type: null }, table: { category: 'Events' } }
        // onChange: { action: 'onchange' } ,
    },
    parameters: {
        actions: {
            argTypesRegex: '' // Disable actions addon to enable native onChange
        },
        controls: { exclude: ['items'] }
    }
} as ComponentMeta<typeof Select>;

const wrapperDecorator = (Story: any) => (
    <div
        style={{
            gap: '1rem',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}
    >
        {Story()}
    </div>
);

const BaseTemplate: ComponentStory<typeof Select> = (args) => <Select {...args} />;

// const BaseTemplate: ComponentStory<any> = (args) => {
//     const { native, ...rest } = args;
//     const [val, setVal] = React.useState('');
//
//     const handleChange = (e: any) => {
//         console.log(e.target.value);
//         // setVal(e.target.value)
//     };
//
//     console.log(val);
//
//     return <Select onChange={() => handleChange} native={native} {...rest} />;
// };

const GroupTemplate: ComponentStory<any> = (args) => {
    const { items, ...rest } = args;

    return (
        <>
            {items.map((item: any, idx: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <Select key={idx} {...rest} {...item} />
            ))}
        </>
    );
};

const options = [
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

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    label: 'Select',
    options,
    sx: {
        minWidth: 180
    }
};

Base.parameters = {
    docs: {
        source: {
            code: '<Select label="Select" />'
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
            code: '<Select label="Select" />'
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
                '<Select label="Outlined" />\n' +
                '<Select label="Standard" variant="standard" />\n' +
                '<Select label="Filled" variant="filled" />'
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
    defaultValue: '1',
    focused: true,
    items: [
        {
            label: 'Primary',
            color: 'primary',

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
                '<Select label="Primary" />\n' +
                '<Select label="Secondary" color="secondary" />\n' +
                '<Select label="Success" color="success" />\n' +
                '<Select label="Error" color="error" />\n' +
                '<Select label="Warning" color="warning" />\n' +
                '<Select label="Info" color="info" />'
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
                '<Select label="Outlined" defaultValue="Disabled" disabled />\n' +
                '<Select label="Standard" variant="standard" defaultValue="Disabled" disabled />\n' +
                '<Select label="Filled" variant="filled" defaultValue="Disabled" disabled />'
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
                '<Select label="Medium" />\n' +
                '<Select label="Small" size="small" />'
        }
    }
};

// /**
//  * WithIcon
//  */
// export const WithIcon = GroupTemplate.bind({});
//
// WithIcon.decorators = [wrapperDecorator];
//
// WithIcon.args = {
//     ...Base.args,
//     items: [
//         {
//             label: 'Icon Start',
//             icon: <ModeLightIcon />,
//             iconPosition: 'start'
//         },
//         {
//             label: 'Icon End',
//             icon: <ModeLightIcon />,
//             iconPosition: 'end'
//         },
//         {
//             label: 'Icon Text Start',
//             icon: <SelectAdornment position="start">$</SelectAdornment>,
//             iconPosition: 'start'
//         },
//         {
//             label: 'Icon Text End',
//             icon: <SelectAdornment position="end">$</SelectAdornment>,
//             iconPosition: 'end'
//         }
//     ]
// };
//
// WithIcon.parameters = {
//     docs: {
//         source: {
//             code:
//                 '<Select label="Icon Start" iconPosition="start" icon={<ModeLightIcon />} />\n' +
//                 '<Select label="Icon End" iconPosition="end" icon={<ModeLightIcon />} />\n' +
//                 '<Select label="Icon Text Start" iconPosition="start" icon={<SelectAdornment position="start">$</SelectAdornment>} />\n' +
//                 '<Select label="Icon Text End" iconPosition="end" icon={<SelectAdornment position="end">$</SelectAdornment>} />'
//         }
//     }
// };

// /**
//  * HelperText
//  */
// export const HelperText = GroupTemplate.bind({});
//
// HelperText.decorators = [wrapperDecorator];
//
// HelperText.args = {
//     ...Base.args,
//     items: [
//         {
//             label: 'Select',
//             helperText: 'Helper Text'
//         },
//         {
//             label: 'Select',
//             helperText: 'Error text',
//             defaultValue: 'Error',
//             error: true
//         },
//         {
//             label: 'Select',
//             helperText: 'Long long long long long long long long long text',
//             sx: { maxWidth: 180 }
//         }
//     ]
// };
//
// HelperText.parameters = {
//     docs: {
//         source: {
//             code:
//                 '<Select label="Select" helperText="Helper Text" />\n' +
//                 '<Select label="Select" helperText="Error text" error defaultValue="Error" />\n' +
//                 '<Select label="Select" helperText="Long long long long long long long long long text" />'
//         }
//     }
// };
