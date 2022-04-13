import { createTheme } from '@mui/material';
import StyledShadows from '../Shadows/ShadowsStyles';
import { typoStyles } from '../Typography/Typography';

const colors = {
    light: {
        body: {
            color: '#4f5a5f',
            background: '#fff'
        },
        scrollbar: {
            background: '#ccc'
        },
        paper: {
            background: '#fff'
        },
        primary: {
            main: '#007eb5'
        },
        secondary: {
            main: '#6c797b'
        },
        success: {
            main: '#248900'
        },
        error: {
            main: '#e52828'
        },
        info: {
            // main: '#0288d1'
            main: '#007EB5'
        },
        warning: {
            main: '#b65d00'
        }
    },
    dark: {
        body: {
            color: '#bbc8d0',
            background: '#202124'
        },
        scrollbar: {
            background: '#555'
        },
        paper: {
            background: '#2a2b2d'
        },
        primary: {
            main: '#41aedd'
        },
        secondary: {
            main: '#95a6a8'
        },
        error: {
            main: '#ff4e4e',
            text: 'rgba(0,0,0,0.87)'
        },
        success: {
            main: '#60b742',
            text: '#60b742'
        },
        info: {
            main: '#41AEDD'
        },
        warning: {
            main: '#ffa726'
        },
        disabled: {
            main: '#d1d1d1',
            text: 'rgba(255,255,255,0.3)'
        }
    }
};

const customTheme = (mode: 'light' | 'dark') =>
    createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1600
            }
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    /* Mozilla */
                    '@supports (-moz-appearance:none)': {
                        /* Scroll styling */
                        '*': {
                            scrollbarColor: '#eee #ccc',
                            scrollbarWidth: 'thin'
                        }
                    },
                    /* Chrome */
                    /* Scroll styling */
                    '::-webkit-scrollbar': {
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'transparent'
                    },
                    // '::-webkit-scrollbar-track': {
                    //     backgroundColor: '#ccc'
                    // },
                    '::-webkit-scrollbar-thumb': {
                        borderRadius: '3px',
                        background:
                            mode === 'light' ? colors.light.scrollbar.background : colors.dark.scrollbar.background
                    },
                    html: {
                        height: '100%',
                        WebkitTextSizeAdjust: '100%', // disable auto change font size on landscape IOS
                        fontSize: 14
                    },
                    body: {
                        // ...darkScrollbar(),
                        height: '100%',
                        // color: 'darkred',
                        // backgroundColor: 'grey',
                        // '& h1': {
                        //     color: 'black'
                        // }
                        '#root': {
                            height: '100%'
                        }
                    },
                    h1: typoStyles.h1,
                    h2: typoStyles.h2,
                    h3: typoStyles.h3,
                    h4: typoStyles.h4,
                    h5: typoStyles.h5,
                    h6: typoStyles.h6,
                    ul: {
                        '&:not([class])': {
                            paddingLeft: 0,
                            listStyleType: 'none',

                            '& > li': {
                                position: 'relative',
                                padding: '0 0 0 1rem',

                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    borderRadius: '50%',
                                    width: '1em',
                                    height: '1em',
                                    fontSize: '.5rem',
                                    color: mode === 'light' ? colors.light.primary.main : colors.dark.primary.main,
                                    backgroundColor:
                                        mode === 'light' ? colors.light.primary.main : colors.dark.primary.main,
                                    top: '1em',
                                    left: 0
                                },

                                '& > ul:not([class]) > li': {
                                    padding: '0 0 0 1rem',

                                    '&::before': {
                                        backgroundColor: 'transparent',
                                        border: '1px solid currentColor'
                                    }
                                }
                            }
                            // '& ul:not([class])': {
                            //     margin: '0.3em 0 0.7em 0'
                            // },
                            // '& ol:not([class])': {
                            //     margin: '0.3em 0 0.7em 0'
                            // },
                        }
                    },
                    ol: {
                        '&:not([class])': {
                            paddingLeft: 0,
                            listStyleType: 'none',
                            counterReset: 'list 0',

                            '& > li': {
                                position: 'relative',
                                padding: '0 0 0 1.2rem',

                                '&::before': {
                                    content: 'counter(list, decimal) "."',
                                    counterIncrement: 'list',
                                    position: 'absolute',
                                    left: 0,
                                    color: mode === 'light' ? colors.light.primary.main : colors.dark.primary.main,
                                    fontWeight: 500,
                                    letterSpacing: '-0.05rem'
                                },

                                '& > ol:not([class])': {
                                    counterReset: 'list2 0',

                                    '& > li': {
                                        padding: '0 0 0 2em',

                                        '&::before': {
                                            content: 'counter(list, decimal) "." counter(list2, decimal) "."',
                                            counterIncrement: 'list2'
                                        }
                                    }
                                }
                            }
                            // '& ul:not([class])': {
                            //     margin: '0.3em 0 0.7em 0'
                            // },
                            // '& ol:not([class])': {
                            //     margin: '0.3em 0 0.7em 0'
                            // }
                        }
                    }
                }
            },
            MuiTypography: {
                styleOverrides: {
                    gutterBottom: {
                        marginBottom: '1rem'
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none'
                    }
                }
            }
        },
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                      // Palette values for light mode
                      primary: {
                          main: colors.light.primary.main
                      },
                      secondary: {
                          main: colors.light.secondary.main
                      },
                      success: {
                          main: colors.light.success.main
                      },
                      error: {
                          main: colors.light.error.main
                      },
                      warning: {
                          main: colors.light.warning.main
                          // contrastText: 'pink'
                      },
                      info: {
                          main: colors.light.info.main
                      },
                      // divider: amber[200],
                      background: {
                          default: colors.light.body.background,
                          paper: colors.light.paper.background
                      },
                      text: {
                          primary: colors.light.body.color
                      }
                  }
                : {
                      // Palette values for dark mode
                      primary: {
                          main: colors.dark.primary.main
                      },
                      secondary: {
                          main: colors.dark.secondary.main
                      },
                      error: {
                          main: colors.dark.error.main,
                          contrastText: colors.dark.error.text
                      },
                      success: {
                          main: colors.dark.success.main
                      },
                      warning: {
                          main: colors.dark.warning.main
                      },
                      info: {
                          main: colors.dark.info.main
                      },
                      // divider: deepOrange[700],
                      background: {
                          default: colors.dark.body.background,
                          paper: colors.dark.paper.background
                      },
                      text: {
                          primary: colors.dark.body.color,
                          disabled: colors.dark.disabled.text
                      }
                  })
        },
        typography: {
            fontFamily: [
                'Roboto',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(','),
            h1: { ...typoStyles.h1, ...typoStyles.bold },
            h2: { ...typoStyles.h2, ...typoStyles.bold },
            h3: { ...typoStyles.h3, ...typoStyles.bold },
            h4: { ...typoStyles.h4, ...typoStyles.bold },
            h5: { ...typoStyles.h5, ...typoStyles.bold },
            h6: { ...typoStyles.h6, ...typoStyles.bold },
            subtitle1: undefined,
            subtitle2: undefined,
            body2: undefined,
            button: {},
            caption: undefined,
            overline: undefined,
            smThin: {
                ...typoStyles.sm,
                ...typoStyles.thin
            },
            xsThin: {
                ...typoStyles.xs,
                ...typoStyles.thin
            },
            xxsThin: {
                ...typoStyles.xxs,
                ...typoStyles.thin
            },
            smRegular: {
                ...typoStyles.sm,
                ...typoStyles.regular
            },
            xsRegular: {
                ...typoStyles.xs,
                ...typoStyles.regular
            },
            xxsRegular: {
                ...typoStyles.xxs,
                ...typoStyles.regular
            },
            smBold: {
                ...typoStyles.sm,
                ...typoStyles.bold
            },
            xsBold: {
                ...typoStyles.xs,
                ...typoStyles.bold
            },
            xxsBold: {
                ...typoStyles.xxs,
                ...typoStyles.bold
            }
        },
        shadows: StyledShadows,
        spacing: (factor: number) => `${0.25 * factor}rem`, // (Bootstrap strategy)
        shape: {
            borderRadius: 6
        }
        // overrides: {
        //     MuiSvgIcon: {
        //         fontSizeLarge: {
        //             fontSize: '2rem'
        //         }
        //     }
        // }
    });

export default customTheme;
