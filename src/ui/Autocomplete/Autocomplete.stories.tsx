import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '@mui/material/Box';
import Autocomplete from './Autocomplete';
import { AutocompleteOptionInterface } from './Autocomplete.d';
import { ChevronDownIcon } from '../Icons/Icons';

const options: AutocompleteOptionInterface[] = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
];

const manyOptions = (amount: number): AutocompleteOptionInterface[] =>
    Array.from(Array(amount)).map((item, idx) => ({
        value: `${idx}`,
        label: `Option ${idx + 1}`
    }));

interface CountryType extends AutocompleteOptionInterface {
    code: string;
    phone: string;
}

const countries: CountryType[] = [
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BA', label: 'Bosnia and Herzegovina', phone: '387' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'FR', label: 'France', phone: '33' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'DE', label: 'Germany', phone: '49' },
    { code: 'GR', label: 'Greece', phone: '30' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'PL', label: 'Poland', phone: '48' },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'GB', label: 'United Kingdom', phone: '44' }
];

export default {
    title: 'UI/Autocomplete',
    component: Autocomplete,
    argTypes: {
        defaultValue: { control: { type: null } },
        filterOptions: { control: { type: null } },
        renderOption: { control: { type: null } },
        value: { control: { type: 'text' } },
        getOptionDisabled: {
            options: ['None', 'Option 1', 'Option 2', 'Counties'],
            mapping: {
                None: (option: AutocompleteOptionInterface) => option,
                'Option 1': (option: AutocompleteOptionInterface) => option.value === options[0].value,
                'Option 2': (option: AutocompleteOptionInterface) => option.value === options[1].value
            }
        },
        groupBy: {
            options: ['None', 'By label'],
            mapping: {
                None: undefined,
                'By label': (option: any) => option.label[0].toUpperCase()
            }
        },
        blurOnSelect: {
            options: ['Touch', 'Mouse', 'True', 'False'],
            mapping: {
                Touch: 'touch',
                Mouse: 'mouse',
                True: true,
                False: false
            }
        },
        popupIcon: {
            options: ['Default', 'Chevron'],
            mapping: {
                Default: undefined,
                Chevron: <ChevronDownIcon />
            }
        },
        options: {
            options: ['Default', 'Overscroll', 'Countries'],
            mapping: {
                Default: options,
                Overscroll: manyOptions(100),
                Countries: countries
            }
        },
        clearText: { control: { type: 'text' }, table: { category: 'Localization' } },
        closeText: { control: { type: 'text' }, table: { category: 'Localization' } },
        openText: { control: { type: 'text' }, table: { category: 'Localization' } },
        loadingText: { control: { type: 'text' }, table: { category: 'Localization' } },
        noOptionsText: { control: { type: 'text' }, table: { category: 'Localization' } },
        onChange: { control: { type: null }, table: { category: 'Events' } },
        onOpen: { control: { type: null }, table: { category: 'Events' } },
        onClose: { control: { type: null }, table: { category: 'Events' } },
        onInputChange: { control: { type: null }, table: { category: 'Events' } },
        onHighlightChange: { control: { type: null }, table: { category: 'Events' } }
    },
    parameters: {
        controls: { exclude: ['items'] }
    }
} as ComponentMeta<typeof Autocomplete>;

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

const BaseTemplate: ComponentStory<typeof Autocomplete> = (args) => <Autocomplete {...args} />;

const GroupTemplate: ComponentStory<any> = (args) => {
    const { items, ...rest } = args;

    return (
        <>
            {items.map((item: any, idx: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <Autocomplete key={idx} {...rest} {...item} />
            ))}
        </>
    );
};

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    label: 'Autocomplete',
    options,
    fullWidth: true,
    sx: {
        maxWidth: 180
    }
};

Base.parameters = {
    docs: {
        source: {
            code: `
<Autocomplete
    label="Autocomplete"
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
 * DisabledOptions
 */
export const DisabledOptions = BaseTemplate.bind({});

DisabledOptions.args = {
    ...Base.args,
    label: 'Disabled Options',
    getOptionDisabled: (option: AutocompleteOptionInterface) =>
        option.value === options[0].value || option.value === options[1].value
};

DisabledOptions.parameters = {
    docs: {
        source: {
            code: `
<Autocomplete
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
    label="Disabled Options"
    getOptionDisabled={(option: AutocompleteOptionInterface) =>
        option.value === options[0].value || option.value === options[1].value
    }
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
            inputProps: {
                variant: 'standard'
            }
        },
        {
            label: 'Filled',
            inputProps: {
                variant: 'filled'
            }
        }
    ]
};

Variants.parameters = {
    docs: {
        source: {
            code:
                '<Autocomplete options={options} label="Outlined" />\n' +
                '<Autocomplete options={options} label="Standard" inputProps={{variant: "standard"}} />\n' +
                '<Autocomplete options={options} label="Filled" inputProps={{variant: "filled"}} />'
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
            inputProps: {
                focused: true
            }
        },
        {
            label: 'Secondary',
            inputProps: {
                focused: true,
                color: 'secondary'
            }
        },
        {
            label: 'Success',
            inputProps: {
                focused: true,
                color: 'success'
            }
        },
        {
            label: 'Error',
            inputProps: {
                focused: true,
                color: 'error'
            }
        },
        {
            label: 'Warning',
            inputProps: {
                focused: true,
                color: 'warning'
            }
        },
        {
            label: 'Info',
            inputProps: {
                focused: true,
                color: 'info'
            }
        }
    ]
};

Colors.parameters = {
    docs: {
        source: {
            code:
                '<Autocomplete options={options} label="Primary" />\n' +
                '<Autocomplete options={options} label="Secondary" inputProps={{color: "secondary"}} />\n' +
                '<Autocomplete options={options} label="Success" inputProps={{color: "success"}} />\n' +
                '<Autocomplete options={options} label="Error" inputProps={{color: "error"}} />\n' +
                '<Autocomplete options={options} label="Warning" inputProps={{color: "warning"}} />\n' +
                '<Autocomplete options={options} label="Info" inputProps={{color: "info"}} />'
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
            disabled: true,
            inputProps: {
                variant: 'standard'
            }
        },
        {
            label: 'Filled',
            disabled: true,
            inputProps: {
                variant: 'filled'
            }
        }
    ]
};

Disabled.parameters = {
    docs: {
        source: {
            code: `
<Autocomplete options={options} label="Outlined" disabled />

<Autocomplete
    options={options}
    label="Standard"
    disabled
    inputProps={{
        variant: 'standard'
    }}
/>

<Autocomplete
    options={options}
    label="Filled"
    disabled
    inputProps={{
        variant: 'filled'
    }}
/>
`
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
                '<Autocomplete options={options} label="Medium" />\n' +
                '<Autocomplete options={options} label="Small" size="small" />'
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
            label: 'Autocomplete',
            inputProps: {
                helperText: 'Helper Text'
            }
        },
        {
            label: 'Autocomplete',
            inputProps: {
                helperText: 'Error text',
                error: true
            }
        },
        {
            label: 'Autocomplete',
            inputProps: {
                helperText: 'Long long long long long long long long long text'
            }
        }
    ]
};

HelperText.parameters = {
    docs: {
        source: {
            code: `
<Autocomplete
    options={options}
    label="Autocomplete"
    inputProps={{
        helperText: 'Helper Text'
    }}
/>

<Autocomplete
    options={options}
    label="Autocomplete"
    inputProps={{
        helperText: 'Error text',
        error: true
    }}
/>

<Autocomplete
    options={options}
    label="Autocomplete"
    inputProps={{
        helperText: 'Long long long long long long long long long text'
    }}
/>
`
        }
    }
};

/**
 * Loading
 */
export const Loading = BaseTemplate.bind({});

Loading.args = {
    ...Base.args,
    label: 'Loading',
    loading: true,
    options: [],
    inputProps: {
        focused: true
    }
};

Loading.parameters = {
    docs: {
        source: {
            code: `
<Autocomplete
    options={[]}
    label="Loading"
    loading
/>`
        }
    }
};

/**
 * CustomOptions
 */
export const CustomOptions = BaseTemplate.bind({});

CustomOptions.args = {
    ...Base.args,
    label: 'Custom Options',
    options: countries,
    renderOption: (props: any, option: any) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
            />
            {option.label} ({option.code}) +{option.phone}
        </Box>
    )
};

const src = 'https://flagcdn.com/w20/$&nbsp;{option.code.toLowerCase()}.png';
const src2x = 'https://flagcdn.com/w40/$&nbsp;{option.code.toLowerCase()}.png 2x';

CustomOptions.parameters = {
    docs: {
        source: {
            code: `
<Autocomplete
    options={[
        { code: 'AL', label: 'Albania', phone: '355' },
        { code: 'BY', label: 'Belarus', phone: '375' },
        ...
        { code: 'GB', label: 'United Kingdom', phone: '44' }
    ]}
    label="Custom Options"
    renderOption={
        (props: any, option: any) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                    loading="lazy"
                    width="20"
                    src={${src}}
                    srcSet={${src2x}}
                    alt=""
                />
                {option.label} ({option.code}) +{option.phone}
            </Box>
        )
    }
/>`
        }
    }
};

/**
 * Grouped
 */
export const GroupedOption = BaseTemplate.bind({});

GroupedOption.args = {
    ...Base.args,
    options: countries,
    label: 'Grouped',
    groupBy: (option: AutocompleteOptionInterface) => option.label[0].toUpperCase()
};

GroupedOption.parameters = {
    docs: {
        source: {
            code: `
<Autocomplete
    options={options}
    label="Grouped"
    groupBy={(option: AutocompleteOptionInterface) => option.label[0].toUpperCase()}
/>`
        }
    }
};

/**
 * Highlight
 */
export const Highlight = BaseTemplate.bind({});

Highlight.args = {
    ...Base.args,
    options: countries,
    label: 'Highlight',
    highlight: true
};

Highlight.parameters = {
    docs: {
        source: {
            code: `
<Autocomplete
    options={options}
    label="Highlight"
    highlight
/>`
        }
    }
};
