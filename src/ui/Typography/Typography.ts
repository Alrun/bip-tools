import React from 'react';

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

    // allow configuration using `createTheme`
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

const typography = {
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
        lineHeight: 1.25,
        '@media (max-width:600px)': {
            fontSize: '1.5rem'
        }
    },
    h4: {
        fontSize: '1.285rem',
        lineHeight: 1.3
    },
    h5: {
        fontSize: '1.145rem',
        lineHeight: 1.25
    },
    h6: {
        fontSize: '1rem',
        lineHeight: 1.25
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

export default typography;
