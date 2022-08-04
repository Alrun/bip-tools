import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from './Tabs';
import { ModeLightIcon, ModeDarkIcon } from '../Icons/Icons';

export default {
    title: 'UI/Tabs',
    component: Tabs,
    argTypes: {
        scrollButtons: {
            options: ['Auto', 'True', 'False'],
            mapping: {
                Auto: 'auto',
                True: true,
                False: false
            }
        },
        ScrollButtonComponent: { control: { type: null } },
        TabIndicatorProps: { control: { type: null } },
        TabScrollButtonProps: { control: { type: null } },
        onChange: { control: { type: null }, table: { category: 'Events' } }
    },
    parameters: { controls: { exclude: ['items'] } }
} as ComponentMeta<typeof Tabs>;

const wrapperDecorator = (Story: any) => (
    <div
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem'
        }}
    >
        {Story()}
    </div>
);

const BaseTemplate: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} onChange={undefined} />;

const GroupTemplate: ComponentStory<any> = ({ items, ...args }) =>
    items.map((item: any, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tabs key={idx} {...args} {...item} onChange={undefined} />
    ));

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    idPrefix: 'base',
    tabList: [
        { label: 'Tab 1', content: <div>Content 1</div> },
        { label: 'Tab 2', content: <div>Content 2</div> }
    ]
};

/**
 * Swipeable
 */
export const Swipeable = BaseTemplate.bind({});

Swipeable.args = {
    idPrefix: 'swipeable',
    tabList: [
        { label: 'Tab 1', content: <div>Swipeable content 1</div> },
        { label: 'Tab 2', content: <div>Swipeable content 2</div> }
    ],
    isSwipeable: true
};

/**
 * Disabled
 */
export const Disabled = BaseTemplate.bind({});

Disabled.args = {
    idPrefix: 'disabled',
    tabList: [
        { label: 'Tab 1', content: <div>Content 1</div> },
        { label: 'Disabled', content: <div>Content 2</div>, disabled: true },
        { label: 'Tab 3', content: <div>Content 3</div> }
    ]
};

/**
 * Vertical
 */
export const Vertical = BaseTemplate.bind({});

Vertical.args = {
    idPrefix: 'vertical',
    tabList: [
        { label: 'Tab 1', content: <div style={{ marginLeft: '1rem' }}>Content 1</div> },
        { label: 'Disabled', content: <div style={{ marginLeft: '1rem' }}>Content 2</div> },
        { label: 'Tab 3', content: <div style={{ marginLeft: '1rem' }}>Content 3</div> }
    ],
    isVertical: true
};

/**
 * Wrapped
 */
export const Wrapped = BaseTemplate.bind({});

Wrapped.args = {
    idPrefix: 'wrapped',
    tabList: [
        {
            label: 'Very very very very very very very very very very very very very very very long tab label',
            content: <div>Content 1</div>,
            wrapped: true
        },
        { label: 'Tab 2', content: <div>Content 2</div> },
        { label: 'Tab 3', content: <div>Content 3</div> }
    ]
};

/**
 * WithIcon
 */
export const WithIcon = GroupTemplate.bind({});

WithIcon.decorators = [wrapperDecorator];

WithIcon.args = {
    items: [
        {
            idPrefix: 'text-with-icon',
            tabList: [
                { label: 'Tab 1', content: <div>Content 1</div>, icon: <ModeLightIcon /> },
                { label: 'Tab 2', content: <div>Content 2</div>, icon: <ModeDarkIcon /> }
            ]
        },
        {
            idPrefix: 'icon',
            tabList: [
                { content: <div>Content 1</div>, icon: <ModeLightIcon /> },
                { content: <div>Content 2</div>, icon: <ModeDarkIcon /> }
            ]
        },
        {
            idPrefix: 'icon-position',
            tabList: [
                { label: 'Top', content: <div>Content 1</div>, icon: <ModeLightIcon />, iconPosition: 'top' },
                { label: 'Bottom', content: <div>Content 2</div>, icon: <ModeDarkIcon />, iconPosition: 'bottom' },
                { label: 'Start', content: <div>Content 3</div>, icon: <ModeLightIcon />, iconPosition: 'start' },
                { label: 'End', content: <div>Content 4</div>, icon: <ModeDarkIcon />, iconPosition: 'end' }
            ]
        }
    ]
};

WithIcon.parameters = {
    docs: {
        source: {
            code: `
<Tabs id="text-with-icon" tabList={[
    { label: 'Tab 1', content: <div>Content 1</div>, icon: <ModeLightIcon /> },
    { label: 'Tab 2', content: <div>Content 2</div>, icon: <ModeDarkIcon /> }
]} />

<Tabs id="icon" tabList={[
    { content: <div>Content 1</div>, icon: <ModeLightIcon /> },
    { content: <div>Content 2</div>, icon: <ModeDarkIcon /> }
]} />

<Tabs id="icon-position" tabList={[
    { label: 'Top', content: <div>Content 1</div>, icon: <ModeLightIcon />, iconPosition: 'top' },
    { label: 'Bottom', content: <div>Content 2</div>, icon: <ModeDarkIcon />, iconPosition: 'bottom' },
    { label: 'Start', content: <div>Content 3</div>, icon: <ModeLightIcon />, iconPosition: 'start' },
    { label: 'End', content: <div>Content 4</div>, icon: <ModeDarkIcon />, iconPosition: 'end' }
]} />
`
        }
    }
};

/**
 * Scrollable
 */
export const Scrollable = BaseTemplate.bind({});

Scrollable.args = {
    idPrefix: 'scrollable',
    tabList: [
        { label: 'Tab 1', content: <div>Content 1</div> },
        { label: 'Tab 2', content: <div>Content 2</div> },
        { label: 'Tab 3', content: <div>Content 3</div> },
        { label: 'Tab 4', content: <div>Content 4</div> },
        { label: 'Tab 5', content: <div>Content 5</div> },
        { label: 'Tab 6', content: <div>Content 6</div> },
        { label: 'Tab 7', content: <div>Content 7</div> },
        { label: 'Tab 8', content: <div>Content 8</div> },
        { label: 'Tab 9', content: <div>Content 9</div> }
    ],
    variant: 'scrollable',
    scrollButtons: 'auto',
    sx: { maxWidth: 320 }
};
