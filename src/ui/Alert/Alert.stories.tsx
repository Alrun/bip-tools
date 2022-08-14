import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from './Alert';
import Button from '../Button/Button';

export default {
    title: 'UI/Alert',
    component: Alert,
    argTypes: {
        action: { control: { type: null } },
        icon: {
            options: ['Icon', 'False'],
            mapping: {
                Icon: undefined,
                False: false
            }
        },
        iconMapping: { control: { type: null } },
        onClose: { control: { type: null }, table: { category: 'Events' } }
    },
    parameters: {
        controls: {
            exclude: ['items', 'onClose']
        }
    }
} as ComponentMeta<typeof Alert>;

const wrapperDecorator = (Story: any) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}
    >
        {Story()}
    </div>
);

const BaseTemplate: ComponentStory<typeof Alert> = ({ children, ...args }) => <Alert {...args}>{children}</Alert>;

const GroupTemplate: ComponentStory<any> = ({ items, ...args }) =>
    items.map((item: any, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Alert key={idx} {...args} {...item} />
    ));

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    children: 'Default'
};

/**
 * With Actions
 */
export const WithActions = GroupTemplate.bind({});

WithActions.decorators = [wrapperDecorator];

WithActions.args = {
    items: [
        {
            children: <span>With custom action buttons</span>,
            action: (
                <div style={{ display: 'flex' }}>
                    <Button variant="text" size="small" color="inherit">
                        Cancel
                    </Button>
                    <Button variant="text" size="small" color="inherit">
                        OK
                    </Button>
                </div>
            )
        },
        {
            children: <span>With default action close button</span>,
            onClose: () => {}
        }
    ]
};

/**
 * Variants
 */
export const Variants = GroupTemplate.bind({});

Variants.decorators = [wrapperDecorator];

Variants.args = {
    items: [
        {
            children: <span>Standard</span>,
            variant: 'standard'
        },
        {
            children: <span>Filled</span>,
            variant: 'filled'
        },
        {
            children: <span>Outlined</span>,
            variant: 'outlined'
        }
    ]
};

/**
 * Severity
 */
export const Severity = GroupTemplate.bind({});

Severity.decorators = [wrapperDecorator];

Severity.args = {
    items: [
        {
            children: <span>Success</span>,
            severity: 'success'
        },
        {
            children: <span>Error</span>,
            severity: 'error'
        },
        {
            children: <span>Warning</span>,
            severity: 'warning'
        },
        {
            children: <span>Info</span>,
            severity: 'info'
        }
    ]
};
