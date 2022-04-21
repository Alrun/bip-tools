import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './Switch';

export default {
    title: 'UI/Switch',
    component: Switch,
    parameters: {
        controls: {
            exclude: ['items', 'onChange']
        }
    }
} as ComponentMeta<typeof Switch>;

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

const BaseTemplate: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

const GroupTemplate: ComponentStory<any> = (args) => {
    const { items, ...rest } = args;

    return (
        <>
            {items.map((item: any, idx: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <Switch key={idx} {...rest} {...item} />
            ))}
        </>
    );
};

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    label: 'Switch',
    defaultChecked: true
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
                '<Switch color="primary" label="Primary" />\n' +
                '<Switch color="secondary" label="Secondary" />\n' +
                '<Switch color="success" label="Success" />\n' +
                '<Switch color="error" label="Error" />\n' +
                '<Switch color="warning" label="Warning" />\n' +
                '<Switch color="info" label="Info" />'
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
            code: '<Switch label="Checked disabled" defaultChecked />\n' + '<Switch label="Unchecked disabled" />'
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
                '<Switch label="End" />\n' +
                '<Switch label="Start" labelPlacement="start" />\n' +
                '<Switch label="Top" labelPlacement="top" />\n' +
                '<Switch label="Bottom" labelPlacement="bottom" />'
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
            code: '<Switch label="Medium" />\n' + '<Switch label="Small" size="small" />'
        }
    }
};
