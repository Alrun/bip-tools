import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Preloader from './Preloader';

export default {
    title: 'UI/Preloader',
    component: Preloader,
    argTypes: {
        isLinear: { control: { type: null } },
        size: { control: { type: 'number' } }
    },
    parameters: { controls: { exclude: ['items'] } }
} as ComponentMeta<typeof Preloader>;

const wrapperDecorator = (Story: any) => (
    <div
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
        }}
    >
        {Story()}
    </div>
);

const BaseTemplate: ComponentStory<typeof Preloader> = (args) => <Preloader {...args} />;

const GroupTemplate: ComponentStory<any> = ({ items, ...args }) =>
    items.map((item: any, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Preloader key={idx} {...args} {...item} />
    ));

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    value: 35
};

/**
 * Variants
 */
export const Variants = GroupTemplate.bind({});

Variants.decorators = [wrapperDecorator];

Variants.args = {
    ...Base.args,
    items: [
        { variant: 'indeterminate' },
        {
            variant: 'determinate',
            disableShrink: false
        },
        {
            isLinear: true,
            sx: { width: '100%' }
        },
        {
            isLinear: true,
            variant: 'determinate',
            sx: { width: '100%' }
        },
        {
            isLinear: true,
            variant: 'buffer',
            valueBuffer: 55,
            sx: { width: '100%' }
        },
        {
            isLinear: true,
            variant: 'query',
            sx: { width: '100%' }
        }
    ]
};

/**
 * Colors
 */
export const Colors = GroupTemplate.bind({});

Colors.decorators = [wrapperDecorator];

Colors.args = {
    ...Base.args,
    items: [
        { color: 'primary' },
        { color: 'secondary' },
        { color: 'success' },
        { color: 'error' },
        { color: 'warning' },
        { color: 'info' },
        { isLinear: true, sx: { width: '100%' }, color: 'primary' },
        { isLinear: true, sx: { width: '100%' }, color: 'secondary' },
        { isLinear: true, sx: { width: '100%' }, color: 'success' },
        { isLinear: true, sx: { width: '100%' }, color: 'error' },
        { isLinear: true, sx: { width: '100%' }, color: 'warning' },
        { isLinear: true, sx: { width: '100%' }, color: 'info' }
    ]
};
