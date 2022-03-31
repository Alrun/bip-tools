import { createTheme } from '@mui/material';
import StyledShadows from '../Shadows/ShadowsStyles';
import typography from '../Typography/Typography';

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
            main: '#d1d1d1'
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
                    h1: typography.h1,
                    h2: typography.h2,
                    h3: typography.h3,
                    h4: typography.h4,
                    h5: typography.h5,
                    h6: typography.h6,
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
                      // palette values for light mode
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
                          main: colors.light.warning.main,
                          contrastText: 'pink'
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
                      // palette values for dark mode
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
                          primary: colors.dark.body.color
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
            h1: { ...typography.h1, ...typography.bold },
            h2: { ...typography.h2, ...typography.bold },
            h3: { ...typography.h3, ...typography.bold },
            h4: { ...typography.h4, ...typography.bold },
            h5: { ...typography.h5, ...typography.bold },
            h6: { ...typography.h6, ...typography.bold },
            subtitle1: undefined,
            subtitle2: undefined,
            body2: undefined,
            button: {},
            caption: undefined,
            overline: undefined,
            smThin: {
                ...typography.sm,
                ...typography.thin
            },
            xsThin: {
                ...typography.xs,
                ...typography.thin
            },
            xxsThin: {
                ...typography.xxs,
                ...typography.thin
            },
            smRegular: {
                ...typography.sm,
                ...typography.regular
            },
            xsRegular: {
                ...typography.xs,
                ...typography.regular
            },
            xxsRegular: {
                ...typography.xxs,
                ...typography.regular
            },
            smBold: {
                ...typography.sm,
                ...typography.bold
            },
            xsBold: {
                ...typography.xs,
                ...typography.bold
            },
            xxsBold: {
                ...typography.xxs,
                ...typography.bold
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
// theme.typography.h2 = typoHeaderStyles(theme).h2;
// theme.typography.h3 = typoHeaderStyles(theme).h3;
// theme.typography.h4 = typoHeaderStyles(theme).h4;
// theme.typography.h5 = typoHeaderStyles(theme).h5;
// theme.typography.h6 = typoHeaderStyles(theme).h6;

// export const GlobalCss = withStyles((theme: Theme) => ({
//     '@global': {
//         ['html, body, #__next']: {
//             height: '100%'
//         },
//         // div: {outline: '1px solid #eee'},
//         html: {
//             '-webkit-text-size-adjust': '100%', // disable auto change font size on landscape IOS
//             fontSize: 14,
//             [theme.breakpoints.up('sm')]: {
//                 fontSize: 16
//             },
//             [theme.breakpoints.up('xl')]: {
//                 fontSize: 18
//             },
//             '@media (min-width:2560px)': {
//                 fontSize: 20
//             },
//             '@media (min-width:3840px)': {
//                 fontSize: 24
//             }
//         },
//         body: {
//             fontSize: '1rem',
//             lineHeight: '1.5',
//             letterSpacing: '0.015rem'
//         },
//         a: {
//             textDecoration: 'none',
//             color: theme.palette.text.primary,
//             transition: theme.transitions.create('color', {
//                 duration: theme.transitions.duration.shortest
//             }),
//             '&:not([class])': {
//                 color: theme.palette.secondary.dark
//             },
//             '&:hover': {
//                 color: theme.palette.secondary.main
//             }
//         },
//         img: {
//             '&:not([class])': {
//                 maxWidth: '100%'
//             }
//         },
//         ['ul:not([class]), ol:not([class])']: {
//             paddingLeft: 0,
//             listStyleType: 'none'
//         },
//         ['ul:not([class]) > li, ol:not([class]) > li']: {
//             position: 'relative',
//             padding: 0
//         },
//         ['ul:not([class]) > li, li > ul:not([class]) > li']: {
//             padding: '0 0 0 1rem'
//         },
//         ['ul:not([class]) > li::before']: {
//             content: '""',
//             position: 'absolute',
//             borderRadius: '50%',
//             width: '0.375rem',
//             height: '0.375rem',
//             color: theme.palette.secondary.dark,
//             backgroundColor: theme.palette.secondary.dark,
//             top: '0.65em',
//             left: 0
//         },
//         ['ul:not([class]) > li > ul:not([class]) > li::before']: {
//             backgroundColor: 'transparent',
//             border: '1px solid currentColor'
//         },
//         ['ol:not([class])']: {
//             counterReset: 'list 0'
//         },
//         ['ol:not([class]) > li::before']: {
//             content: 'counter(list, decimal) "."',
//             counterIncrement: 'list',
//             position: 'absolute',
//             left: 0,
//             color: theme.palette.secondary.dark,
//             fontWeight: 'bolder',
//             letterSpacing: '-0.05rem'
//         },
//         ['ol:not([class]) > li']: {
//             padding: '0 0 0 1.2rem'
//         },
//         ['ol:not([class]) > li > ol:not([class])']: {
//             counterReset: 'list2 0'
//         },
//         ['ol:not([class]) > li > ol:not([class]) > li::before']: {
//             content: 'counter(list, decimal) "." counter(list2, decimal) "."',
//             counterIncrement: 'list2'
//         },
//         ['ol:not([class]) > li > ol:not([class]) > li']: {
//             padding: '0 0 0 2em'
//         },
//         h1: typoHeaderStyles(theme).h1,
//         h2: typoHeaderStyles(theme).h2,
//         h3: typoHeaderStyles(theme).h3,
//         h4: typoHeaderStyles(theme).h4,
//         h5: typoHeaderStyles(theme).h5,
//         h6: typoHeaderStyles(theme).h6,
//
//         /* Mozilla */
//         ['@supports (-moz-appearance:none)']: {
//             /* Scroll styling */
//             '*': {
//                 scrollbarColor: '#eee #ccc',
//                 scrollbarWidth: 'thin'
//             }
//         },
//
//         /* Chrome */
//         /* Scroll styling */
//         '::-webkit-scrollbar': {
//             width: 10,
//             borderRadius: 2
//         },
//         '::-webkit-scrollbar-track': {
//             backgroundColor: '#ccc'
//         },
//         '::-webkit-scrollbar-thumb': {
//             backgroundColor: '#999',
//             borderRadius: 2
//         },
//         /* Change Autocomplete styles */
//         ['input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus']: {
//             '-webkit-text-fill-color': theme.palette.text.primary,
//             '-webkit-box-shadow': '0 0 0px 1000px #fff inset',
//             height: '0.9em'
//         }
//         // ['textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus']
//         // ['select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus']: {
//         // -webkit-box-shadow: 0 0 0px 1000px #000 inset;
//         // transition: background-color 5000s ease-in-out 0s;
//     }
// }))(() => null);
