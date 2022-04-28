import React from 'react';
import MuiTypography from '@mui/material/Typography';
import { TypographyTypeMap } from '@mui/material/Typography/Typography';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        smThin: React.CSSProperties;
        xsThin: React.CSSProperties;
        xxsThin: React.CSSProperties;
        smRegular: React.CSSProperties;
        xsRegular: React.CSSProperties;
        xxsRegular: React.CSSProperties;
        smBold: React.CSSProperties;
        xsBold: React.CSSProperties;
        xxsBold: React.CSSProperties;
    }

    // Allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        smThin?: React.CSSProperties;
        xsThin?: React.CSSProperties;
        xxsThin?: React.CSSProperties;
        smRegular?: React.CSSProperties;
        xsRegular?: React.CSSProperties;
        xxsRegular?: React.CSSProperties;
        smBold?: React.CSSProperties;
        xsBold?: React.CSSProperties;
        xxsBold?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        smThin: true;
        xsThin: true;
        xxsThin: true;
        smRegular: true;
        xsRegular: true;
        xxsRegular: true;
        smBold: true;
        xsBold: true;
        xxsBold: true;
        subtitle1: false;
        subtitle2: false;
        body2: false;
        caption: false;
        overline: false;
    }
}

type TypographyProps = Pick<
    TypographyTypeMap['props'],
    'align' | 'children' | 'gutterBottom' | 'noWrap' | 'paragraph' | 'sx' | 'variant'
> & {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default default
     */
    color?:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'success.main'
        | 'error.main'
        | 'info.main'
        | 'warning.main'
        | 'text.disabled';
};

export const typoStyles = {
    h1: {
        fontSize: '2.6rem',
        lineHeight: 1.15,
        '@media (max-width:600px)': {
            fontSize: '2rem',
            lineHeight: 1.15
        }
    },
    h2: {
        fontSize: '2rem',
        lineHeight: 1.2,
        '@media (max-width:600px)': {
            fontSize: '1.715rem',
            lineHeight: 1.25
        }
    },
    h3: {
        fontSize: '1.715rem',
        lineHeight: 1.3,
        '@media (max-width:600px)': {
            fontSize: '1.5rem'
        }
    },
    h4: {
        fontSize: '1.285rem',
        lineHeight: 1.35
    },
    h5: {
        fontSize: '1.145rem',
        lineHeight: 1.4
    },
    h6: {
        fontSize: '1rem',
        lineHeight: 1.5
    },
    sm: {
        fontSize: '.85714rem'
    },
    xs: {
        fontSize: '.714rem'
    },
    xxs: {
        fontSize: '.571rem'
    },
    thin: {
        fontWeight: 300
    },
    regular: {
        fontWeight: 400
    },
    bold: {
        fontWeight: 500
    }
};

const Typography = ({ children, ...props }: TypographyProps) => <MuiTypography {...props}>{children}</MuiTypography>;
export default Typography;
