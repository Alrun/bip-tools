import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToggleButtons from './ToggleButtons';
import { ToggleButtonsOption } from './ToggleButtons.d';
import { ModeLightIcon, ModeDarkIcon } from '../Icons/Icons';

const defaultOptions: ToggleButtonsOption[] = [
    {
        value: 'light',
        children: <ModeLightIcon />
    },
    {
        value: 'dark',
        children: <ModeDarkIcon />
    }
];

export default {
    title: 'UI/ToggleButtons',
    component: ToggleButtons,
    argTypes: {
        ButtonsProps: { control: { type: null } },
        children: { control: { type: null } },
        selected: { control: { type: null } },
        value: { control: { type: null } },
        onChange: { control: { type: null }, table: { category: 'Events' } }
    },
    parameters: { controls: { exclude: ['items'] } }
} as ComponentMeta<typeof ToggleButtons>;

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

const BaseTemplate: ComponentStory<typeof ToggleButtons> = ({ onChange, ...args }) => <ToggleButtons {...args} />;

const GroupTemplate: ComponentStory<any> = ({ items, onChange, ...args }) =>
    items.map((item: any, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <ToggleButtons key={idx} {...args} {...item} />
    ));

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    selected: ['1'],
    options: [{ value: '1', children: 'Default' }, ...defaultOptions]
};

/**
 * Variants
 */
export const Variants = GroupTemplate.bind({});

Variants.decorators = [wrapperDecorator];

Variants.args = {
    items: [
        {
            options: [{ value: '1', children: 'Always one selected' }, ...defaultOptions],
            selected: ['1'],
            isMultiple: false,
            isAllowUnselected: false
        },
        {
            options: [{ value: '1', children: 'Allow Unselected' }, ...defaultOptions],
            selected: ['1'],
            isMultiple: false,
            isAllowUnselected: true
        },
        {
            options: [{ value: '1', children: 'Multiple' }, ...defaultOptions],
            selected: ['1'],
            isMultiple: true,
            isAllowUnselected: false
        },
        {
            options: [{ value: '1', children: 'Alone' }],
            selected: ['1'],
            isMultiple: true,
            isAllowUnselected: false
        }
    ]
};

Variants.parameters = {
    docs: {
        source: {
            code: `
<ToggleButtons
    options={[
        { value: '1', children: 'Always one selected' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
/>

<ToggleButtons
    options={[
        { value: '1', children: 'Allow Unselected' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
    isAllowUnselected
/>

<ToggleButtons
    options={[
        { value: '1', children: 'Multiple' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
    isMultiple
/>

<ToggleButtons options={[{ value: '1', children: 'Alone' }]} selected={['1']} isMultiple />
`
        }
    }
};

/**
 * Vertical
 */
export const Vertical = BaseTemplate.bind({});

Vertical.args = {
    options: defaultOptions,
    selected: ['light'],
    orientation: 'vertical'
};

/**
 * Colors
 */
export const Colors = GroupTemplate.bind({});

Colors.decorators = [wrapperDecorator];

Colors.args = {
    items: [
        {
            options: [{ value: '1', children: 'Primary' }, ...defaultOptions],
            selected: ['1'],
            color: 'primary'
        },
        {
            options: [{ value: '1', children: 'Secondary' }, ...defaultOptions],
            selected: ['1'],
            color: 'secondary'
        },
        {
            options: [{ value: '1', children: 'Success' }, ...defaultOptions],
            selected: ['1'],
            color: 'success'
        },
        {
            options: [{ value: '1', children: 'Error' }, ...defaultOptions],
            selected: ['1'],
            color: 'error'
        },
        {
            options: [{ value: '1', children: 'Warning' }, ...defaultOptions],
            selected: ['1'],
            color: 'warning'
        },
        {
            options: [{ value: '1', children: 'Info' }, ...defaultOptions],
            selected: ['1'],
            color: 'info'
        }
    ]
};

Colors.parameters = {
    docs: {
        source: {
            code: `
<ToggleButtons
    options={[
        { value: '1', children: 'Primary' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
    color: 'primary'
/>

<ToggleButtons
    options={[
        { value: '1', children: 'Secondary' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
    color: 'secondary'
/>

<ToggleButtons
    options={[
        { value: '1', children: 'Success' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
    color: 'success'
/>

<ToggleButtons
    options={[
        { value: '1', children: 'Error' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
    color: 'error'
/>

<ToggleButtons
    options={[
        { value: '1', children: 'Warning' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
    color: 'warning'
/>

<ToggleButtons
    options={[
        { value: '1', children: 'Info' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
    color: 'info'
/>
`
        }
    }
};

/**
 * Disabled
 */
export const Disabled = GroupTemplate.bind({});

Disabled.decorators = [wrapperDecorator];

Disabled.args = {
    items: [
        {
            options: [
                { value: '1', children: 'Active' },
                { value: '2', children: 'Disabled', disabled: true }
            ],
            selected: ['1']
        },
        {
            options: [
                { value: '1', children: 'Disabled' },
                { value: '2', children: 'All' }
            ],
            selected: ['1'],
            disabled: true
        }
    ]
};

Disabled.parameters = {
    docs: {
        source: {
            code: `
<ToggleButtons
    options={[
        { value: '1', children: 'Active' },
        { value: '2', children: 'Disabled', disabled: true }
    ]}
    selected={['1']}
/>

<ToggleButtons
    options={[
        { value: '1', children: 'Disabled' },
        { value: '2', children: 'All' }
    ]}
    selected={['1']}
    disabled
/>
`
        }
    }
};

/**
 * Size
 */
export const Size = GroupTemplate.bind({});

Size.decorators = [wrapperDecorator];

Size.args = {
    items: [
        {
            options: [{ value: '1', children: 'Large' }, ...defaultOptions],
            selected: ['1'],
            size: 'large'
        },

        {
            options: [{ value: '1', children: 'Medium' }, ...defaultOptions],
            selected: ['1'],
            size: 'medium'
        },
        {
            options: [{ value: '1', children: 'Small' }, ...defaultOptions],
            selected: ['1'],
            size: 'small'
        }
    ]
};

Size.parameters = {
    docs: {
        source: {
            code: `
<ToggleButtons
    options={[
        { value: '1', children: 'Large' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
    size='large'
/>

<ToggleButtons
    options={[
        { value: '1', children: 'Medium' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
    size='medium'
/>

<ToggleButtons
    options={[
        { value: '1', children: 'Small' },
        { children: <ModeLightIcon />, value: 'light' },
        { children: <ModeDarkIcon />, value: 'dark' }
    ]}
    selected={['1']}
    size='small'
/>
`
        }
    }
};
