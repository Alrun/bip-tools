import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { ModeLightIcon } from '../Icons/Icons';

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        endIcon: {
            options: ['None', '$', 'Light'],
            mapping: {
                None: undefined,
                Light: <ModeLightIcon />
            }
        },
        startIcon: {
            options: ['None', '$', 'Light'],
            mapping: {
                None: undefined,
                Light: <ModeLightIcon />
            }
        },
        LinkComponent: { options: ['a', 'span'] },
        onClick: { control: { type: null }, table: { category: 'Events' } },
        onFocusVisible: { control: { type: null }, table: { category: 'Events' } }
    },
    parameters: { controls: { exclude: ['items'] } }
} as ComponentMeta<typeof Button>;

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

const BaseTemplate: ComponentStory<typeof Button> = ({ children, ...args }) => <Button {...args}>{children}</Button>;

const GroupTemplate: ComponentStory<any> = (args) => {
    const { items, ...rest } = args;

    return (
        <>
            {items.map((item: any, idx: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <Button key={idx} {...rest} {...item} />
            ))}
        </>
    );
};

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    children: 'Button'
};

Base.parameters = {
    docs: {
        source: {
            code: '<Button>Button</Button>'
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
            children: 'Contained',
            variant: 'contained'
        },
        {
            children: 'Outlined',
            variant: 'outlined'
        },
        {
            children: 'Text',
            variant: 'text'
        }
    ]
};

Variants.parameters = {
    docs: {
        source: {
            code:
                '<Button>Contained</Button>\n' +
                '<Button variant="outlined">Outlined</Button>\n' +
                '<Button variant="text">Text</Button>'
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
            children: 'Primary',
            color: 'primary'
        },
        {
            children: 'Secondary',
            color: 'secondary'
        },
        {
            children: 'Success',
            color: 'success'
        },
        {
            children: 'Error',
            color: 'error'
        },
        {
            children: 'Warning',
            color: 'warning'
        },
        {
            children: 'Info',
            color: 'info'
        }
    ]
};

Colors.parameters = {
    docs: {
        source: {
            code:
                '<Button color="primary">Primary</Button>\n' +
                '<Button color="secondary">Secondary</Button>\n' +
                '<Button color="success">Success</Button>\n' +
                '<Button color="error">Error</Button>\n' +
                '<Button color="warning">Warning</Button>\n' +
                '<Button color="info">Info</Button>'
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
            children: 'Disabled',
            variant: 'contained',
            disabled: true
        },
        {
            children: 'Disabled',
            variant: 'outlined',
            disabled: true
        },
        {
            children: 'Disabled',
            variant: 'text',
            disabled: true
        }
    ]
};

Disabled.parameters = {
    docs: {
        source: {
            code:
                '<Button disabled>Disabled</Button>\n' +
                '<Button variant="outlined" disabled>Disabled</Button>\n' +
                '<Button variant="text" disabled>Disabled</Button>'
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
            children: 'Large',
            size: 'large'
        },
        {
            children: 'Medium',
            size: 'medium'
        },
        {
            children: 'Small',
            size: 'small'
        }
    ]
};

Sizes.parameters = {
    docs: {
        source: {
            code:
                '<Button size="large">Large</Button>\n' +
                '<Button>Medium</Button>\n' +
                '<Button size="small">Small</Button>'
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
            children: 'Start Icon',
            startIcon: <ModeLightIcon />
        },
        {
            children: 'End Icon',
            endIcon: <ModeLightIcon />
        }
    ]
};

WithIcon.parameters = {
    docs: {
        source: {
            code:
                '<Button startIcon={<ModeLightIcon />}>Start Icon</Button>\n' +
                '<Button endIcon={<ModeLightIcon />}>End Icon</Button>'
        }
    }
};

/**
 * Icon
 */
export const Icon = GroupTemplate.bind({});

Icon.decorators = [wrapperDecorator];

Icon.args = {
    ...Base.args,
    items: [
        {
            children: <ModeLightIcon fontSize="inherit" />,
            isRound: true,
            size: 'small'
        },
        {
            children: <ModeLightIcon />,
            isRound: true
        },
        {
            children: 'B',
            isRound: true
        },
        {
            children: <ModeLightIcon fontSize="inherit" />,
            isRound: true,
            size: 'large'
        }
    ]
};

Icon.parameters = {
    docs: {
        source: {
            code:
                '<Button isRound size="small"><ModeLightIcon fontSize="inherit" /></Button>\n' +
                '<Button isRound><ModeLightIcon /></Button>\n' +
                '<Button isRound>B</Button>\n' +
                '<Button isRound size="large"><ModeLightIcon fontSize="inherit" /></Button>'
        }
    }
};
