import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography';
import Link from '../Link/Link';

export default {
    title: 'UI/Typography',
    component: Typography,
    parameters: {
        controls: {
            exclude: ['items']
        }
    }
} as ComponentMeta<typeof Typography>;

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

const LinksTemplate: ComponentStory<any> = (args) => {
    const { items, ...rest } = args;

    return (
        <>
            {items.map((item: any, idx: number) => (
                <Link
                    // eslint-disable-next-line react/no-array-index-key
                    key={idx}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
                    {...rest}
                    {...item}
                />
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
 * Links
 */
export const Links = LinksTemplate.bind({});

Links.decorators = [wrapperDecorator];

Links.args = {
    items: [
        {
            children: 'Default',
            href: '/'
        },
        {
            children: 'Span'
        },
        {
            children: 'External',
            href: '/',
            external: true
        }
    ]
};

Links.parameters = {
    docs: {
        source: {
            // eslint-disable-next-line no-useless-concat
            code: '<Link href="/">Default</Link>\n' + '<Link>Span</Link>\n' + '<Link href="/" external>External</Link>'
        }
    }
};
