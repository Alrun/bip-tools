import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography';

export default {
    title: 'UI/Typography',
    component: Typography,
    parameters: {
        controls: {
            exclude: ['items']
        }
    }
} as ComponentMeta<typeof Typography>;

const BaseTemplate: ComponentStory<typeof Typography> = ({ children, ...args }) => (
    <Typography {...args}>{children}</Typography>
);

const GroupTemplate: ComponentStory<any> = (args) => {
    const { items, ...rest } = args;

    return (
        <>
            {items.map((item: any, idx: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <Typography key={idx} {...rest} {...item} />
            ))}
        </>
    );
};

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    children: 'Base text'
};

/**
 * Headings
 */
export const Headings = GroupTemplate.bind({});

Headings.args = {
    ...Base.args,
    items: [
        {
            children: 'H1. Heading title',
            variant: 'h1',
            gutterBottom: true
        },
        {
            children: 'H2. Heading title',
            variant: 'h2',
            gutterBottom: true
        },
        {
            children: 'H3. Heading title',
            variant: 'h3',
            gutterBottom: true
        },
        {
            children: 'H4. Heading title',
            variant: 'h4',
            gutterBottom: true
        },
        {
            children: 'H5. Heading title',
            variant: 'h5',
            gutterBottom: true
        },
        {
            children: 'H6. Heading title',
            variant: 'h6',
            gutterBottom: true
        }
    ]
};

/**
 * Sizes
 */
export const Sizes = GroupTemplate.bind({});

Sizes.args = {
    ...Base.args,
    items: [
        {
            children: 'Size SM Thin',
            variant: 'smThin',
            paragraph: true,
            gutterBottom: true
        },
        {
            children: 'Size XS Thin',
            variant: 'xsThin',
            paragraph: true,
            gutterBottom: true
        },
        {
            children: 'Size XXS Thin',
            variant: 'xxsThin',
            paragraph: true,
            gutterBottom: true
        },
        {
            children: 'Size SM Regular',
            variant: 'smRegular',
            paragraph: true,
            gutterBottom: true
        },
        {
            children: 'Size XS Regular',
            variant: 'xsRegular',
            paragraph: true,
            gutterBottom: true
        },
        {
            children: 'Size XXS Regular',
            variant: 'xxsRegular',
            paragraph: true,
            gutterBottom: true
        },
        {
            children: 'Size SM Bold',
            variant: 'smBold',
            paragraph: true,
            gutterBottom: true
        },
        {
            children: 'Size XS Bold',
            variant: 'xsBold',
            paragraph: true,
            gutterBottom: true
        },
        {
            children: 'Size XXS Bold',
            variant: 'xxsBold',
            paragraph: true,
            gutterBottom: true
        }
    ]
};

/**
 * Colors
 */
export const Colors = GroupTemplate.bind({});

Colors.args = {
    ...Base.args,
    items: [
        {
            children: 'Primary',
            color: 'primary',
            gutterBottom: true
        },
        {
            children: 'Secondary',
            color: 'secondary',
            gutterBottom: true
        },
        {
            children: 'Success',
            color: 'success.main',
            gutterBottom: true
        },
        {
            children: 'Error',
            color: 'error.main',
            gutterBottom: true
        },
        {
            children: 'Info',
            color: 'info.main',
            gutterBottom: true
        },
        {
            children: 'Warning',
            color: 'warning.main',
            gutterBottom: true
        },
        {
            children: 'Disabled',
            color: 'text.disabled',
            gutterBottom: true
        }
    ]
};

/**
 * List
 */
export const List = () => (
    <>
        <Typography variant="h3" gutterBottom>
            Unordered list
        </Typography>
        <ul>
            <li>
                Well, I went to the doctors believing the devil had control over me,
                <br />
                and I was finding it hard to breathe, and finding it hard to fight the feeling.
            </li>
            <li>When my heart just burst like a glass balloon.</li>
            <li>
                I let it fly too high and it shattered too soon:
                <ul>
                    <li>I was the wrong damn girl in the wrong damn room;</li>
                    <li>I broke my glass balloon;</li>
                    <li>I let go of my glass balloon;</li>
                </ul>
            </li>
            <li>They call him Hermit the Frog He is looking for a dog</li>
            <li>Did you find your bitch in me?</li>
        </ul>
        <Typography variant="h3" gutterBottom>
            Ordered list
        </Typography>
        <ol>
            <li>
                Well, I went to the doctors believing the devil had control over me,
                <br />
                and I was finding it hard to breathe, and finding it hard to fight the feeling.
            </li>
            <li>When my heart just burst like a glass balloon.</li>
            <li>
                I let it fly too high and it shattered too soon:
                <ol>
                    <li>I was the wrong damn girl in the wrong damn room;</li>
                    <li>I broke my glass balloon;</li>
                    <li>I let go of my glass balloon;</li>
                </ol>
            </li>
            <li>They call him Hermit the Frog He is looking for a dog</li>
            <li>Did you find your bitch in me?</li>
        </ol>
    </>
);
