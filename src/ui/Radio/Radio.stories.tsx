import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio, { RadioGroup } from './Radio';

export default {
    title: 'UI/Radio',
    component: Radio,
    argTypes: {
        checked: { control: { type: null } },
        onChange: { control: { type: null }, table: { category: 'Events' } },
        onFocusVisible: { control: { type: null }, table: { category: 'Events' } }
    },
    parameters: { controls: { exclude: ['items'] } }
} as ComponentMeta<typeof Radio>;

const wrapperDecorator = (Story: any) => (
    <div
        style={{
            display: 'flex',
            alignItems: 'baseline',
            flexWrap: 'wrap'
        }}
    >
        {Story()}
    </div>
);

const BaseTemplate: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;
const RadioGroupTemplate: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

const GroupTemplate: ComponentStory<any> = (args) => {
    const { items, ...rest } = args;

    return (
        <>
            {items.map((item: any, idx: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <Radio key={idx} {...rest} {...item} />
            ))}
        </>
    );
};

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    label: 'Radio',
    checked: true
};

Base.parameters = {
    docs: {
        source: {
            code: '<Radio label="Radio" checked />'
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
            value: 1,
            color: 'primary'
        },
        {
            label: 'Secondary',
            value: 2,
            color: 'secondary'
        },
        {
            label: 'Success',
            value: 3,
            color: 'success'
        },
        {
            label: 'Error',
            value: 4,
            color: 'error'
        },
        {
            label: 'Warning',
            value: 5,
            color: 'warning'
        },
        {
            label: 'Info',
            value: 6,
            color: 'info'
        }
    ]
};

Colors.parameters = {
    docs: {
        source: {
            code:
                '<Radio color="primary" label="Primary" checked />\n' +
                '<Radio color="secondary" label="Secondary" checked />\n' +
                '<Radio color="success" label="Success" checked />\n' +
                '<Radio color="error" label="Error" checked />\n' +
                '<Radio color="warning" label="Warning" checked />\n' +
                '<Radio color="info" label="Info" checked />'
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
            checked: true,
            disabled: true
        },
        {
            label: 'Unchecked disabled',
            checked: false,
            disabled: true
        }
    ]
};

Disabled.parameters = {
    docs: {
        source: {
            code:
                '<Radio label="Checked disabled" checked disabled />\n' +
                '<Radio label="Unchecked disabled" disabled />'
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
                '<Radio label="End" />\n' +
                '<Radio label="Start" labelPlacement="start" />\n' +
                '<Radio label="Top" labelPlacement="top" />\n' +
                '<Radio label="Bottom" labelPlacement="bottom" />'
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
            code: '<Radio label="Medium" />\n' + '<Radio label="Small" size="small" />'
        }
    }
};

/**
 * Group
 */
export const Group = RadioGroupTemplate.bind({});

Group.args = {
    defaultValue: 1,
    options: [
        {
            label: 'Radio 1',
            value: 1
        },
        {
            label: 'Radio 2',
            value: 2
        }
    ]
};

Group.parameters = {
    docs: {
        source: {
            code: `
<RadioGroup
    defaultValue={1}
    options={[
        {
            label: 'Radio 1',
            value: 1
        },
        {
            label: 'Radio 2',
            value: 2
        }
    ]}
/>`
        }
    }
};

/**
 * Group Row
 */
export const GroupRow = RadioGroupTemplate.bind({});

GroupRow.args = {
    row: true,
    defaultValue: 1,
    options: [
        {
            label: 'Radio 1',
            value: 1
        },
        {
            label: 'Radio 2',
            value: 2
        }
    ]
};

GroupRow.parameters = {
    docs: {
        source: {
            code: `
<RadioGroup
    row
    defaultValue={1}
    options={[
        {
            label: 'Radio 1',
            value: 1
        },
        {
            label: 'Radio 2',
            value: 2
        }
    ]}
/>`
        }
    }
};
