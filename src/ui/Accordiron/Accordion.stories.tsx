import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';

export default {
    title: 'UI/Accordion',
    component: Accordion,
    argTypes: {
        AccordionSummaryProps: { control: { type: null } },
        headerContent: { control: { type: null } },
        TransitionProps: { control: { type: null } },
        onChange: { control: { type: null }, table: { category: 'Events' } }
    },
    parameters: { controls: { exclude: ['items'] } }
} as ComponentMeta<typeof Accordion>;

const wrapperDecorator = (Story: any) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        }}
    >
        {Story()}
    </div>
);

const BaseTemplate: ComponentStory<typeof Accordion> = ({ children, ...args }) => (
    <Accordion {...args}>{children}</Accordion>
);

const GroupTemplate: ComponentStory<any> = (args) => {
    const { accordions, ...rest } = args;

    return accordions.map(({ items }: any, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={idx}>
            {items.map(({ text, children, ...other }: any) => (
                <Accordion key={text} headerText={text} {...rest} {...other}>
                    {children}
                </Accordion>
            ))}
        </div>
    ));
};

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    headerText: 'Accordion',
    children: 'Accordion content'
};

Base.parameters = {
    docs: {
        source: {
            code: '<Accordion headerText="Accordion">Accordion content</Accordion>'
        }
    }
};

/**
 * Variants
 */
export const Variants = GroupTemplate.bind({});

Variants.decorators = [wrapperDecorator];

Variants.args = {
    accordions: [
        {
            items: [
                {
                    headerText: 'Elevation Accordion Header 1',
                    children: 'Accordion content 1',
                    variant: 'elevation'
                },
                {
                    headerText: 'Elevation Accordion Header 2',
                    children: 'Accordion content 2',
                    variant: 'elevation'
                },
                {
                    headerText: 'Elevation Accordion Header 3',
                    children: 'Accordion content 3',
                    variant: 'elevation'
                }
            ]
        },
        {
            items: [
                {
                    headerText: 'Outlined Accordion Header 1',
                    children: 'Accordion content 1',
                    variant: 'outlined',
                    elevation: 0
                },
                {
                    headerText: 'Outlined Accordion Header 2',
                    children: 'Accordion content 2',
                    variant: 'outlined',
                    elevation: 0
                },
                {
                    headerText: 'Outlined Accordion Header 3',
                    children: 'Accordion content 3',
                    variant: 'outlined',
                    elevation: 0
                }
            ]
        }
    ]
};

Variants.parameters = {
    docs: {
        source: {
            code: `
<div>
    <Accordion variant="elevation" headerText="Elevation Accordion Header 1">Accordion content 1</Accordion>
    <Accordion variant="elevation" headerText="Elevation Accordion Header 2">Accordion content 2</Accordion>
    <Accordion variant="elevation" headerText="Elevation Accordion Header 3">Accordion content 3</Accordion>
</div>

<div>
    <Accordion headerText="Outlined Accordion Header 1">Outlined content 1</Accordion>
    <Accordion headerText="Outlined Accordion Header 2">Outlined content 2</Accordion>
    <Accordion headerText="Outlined Accordion Header 3">Outlined content 3</Accordion>
</div>
`
        }
    }
};
