import { createMuiTheme } from '@material-ui/core/styles'

const PRIMARY_COLOR_LIGHT = '#376091'
const PRIMARY_COLOR_DARK = '#35a4ff'

const DANGER_COLOR_LIGHT = '#ff3d3d'
const DANGER_COLOR_DARK = '#ff3d3d'


export const materialUiTheme = createMuiTheme({
    props: {
        MuiButtonBase: {
            disableRipple: true
        }
    },

    palette: {
        type: 'light',
        primary: {
            light: PRIMARY_COLOR_LIGHT,
            main: PRIMARY_COLOR_LIGHT,
            contrastText: '#fff'
        },

        secondary: {
            main: DANGER_COLOR_LIGHT
        },

        error: {
            light: DANGER_COLOR_LIGHT,
            main: DANGER_COLOR_LIGHT,
            dark: DANGER_COLOR_DARK
        }
    },
    typography: {
        fontSize: 20
    },

    overrides: {
        MuiOutlinedInput: {
            root: {
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: PRIMARY_COLOR_LIGHT
                }
            },

            colorSecondary: {
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: DANGER_COLOR_LIGHT
                }
            }
        },

        MuiCheckbox: {
            root: {
                padding: '0'
            }
        },

        MuiFormHelperText: {
            root: {
                color: DANGER_COLOR_LIGHT,
                fontSize: '1.28rem'
            },

            contained: {
                marginLeft: '0'
            }
        },
        MuiPaper: {
            root: {
                fontSize: '1.8rem !important'
            }
        },
        MuiButton: {
            outlinedPrimary: {
                background: 'transparent',

                '&.button-wrapper': {
                    background: 'transparent',
                    color: PRIMARY_COLOR_LIGHT,

                    '&:hover': {
                        backgroundColor: 'transparent'
                    }
                }
            }
        }
        // MuiInputLabel: {
        //     outlined: {
        //         '&.MuiInputLabel-shrink': {
        //             background: '#fff',
        //             padding: '5px'
        //         }
        //     }
        // }
    }
})
