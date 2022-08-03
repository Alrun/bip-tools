import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Skeleton from './Skeleton';

export default {
    title: 'UI/Skeleton',
    component: Skeleton,
    argTypes: {
        children: { control: { type: 'text' } },
        width: { control: { type: 'number' } },
        height: { control: { type: 'number' } }
    },
    parameters: { controls: { exclude: ['items'] } }
} as ComponentMeta<typeof Skeleton>;

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

const BaseTemplate: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

const GroupTemplate: ComponentStory<any> = ({ items, ...args }) =>
    items.map((item: any, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Skeleton key={idx} {...args} {...item} />
    ));

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    width: 200
};

/**
 * Variants
 */
export const Variants = GroupTemplate.bind({});

Variants.decorators = [wrapperDecorator];

Variants.args = {
    items: [
        {
            variant: 'rectangular',
            width: 200,
            height: 100
        },
        {
            variant: 'default',
            width: 200
        },
        {
            variant: 'text',
            width: 200
        },
        {
            variant: 'circular',
            width: 40,
            height: 40
        }
    ]
};

/**
 * Animation
 */
export const Animation = GroupTemplate.bind({});

Animation.decorators = [wrapperDecorator];

Animation.args = {
    ...Base.args,
    items: [
        {
            animation: 'wave'
        },
        {
            animation: 'pulse'
        },
        {
            animation: false
        }
    ]
};
