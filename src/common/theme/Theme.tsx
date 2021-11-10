import { adaptV4Theme, createTheme } from "@mui/material/styles";
import { red } from "@material-ui/core/colors";


export const BULLET = `•`;
export const cardRadius = 20;

export const navBarBackgroundRadius = "40px";

const primaryColor = "#A13E5F";
const primaryLightColor = "#D25482";
const primaryDarkColor = "#89324D";
const primaryContrastTextColor = "#FAFAFA";

const secondaryColor = "#009710";
const secondaryLightColor = "#00CC15";
const secondaryDarkColor = "#006F0D";
const secondaryContrastTextColor = "#FAFAFA";

export const lightBackgroundColor = "#FAFAFA";
export const darkBackgroundColor = "#272727"; //eerie black
export const lightDarkBackgroundColor = '#474747';
export const darkerBackgroundColor = "#1A1A1A";

/*
--royal-purple: #7F55A6;
--purple-plum: #8F61AD;
--purple-mountain-majesty: #9F6DB5;
--african-violet: #AF78BC;
--african-violet-2: #BF84C3;

--sapphire-blue: #056196;
--celadon-blue: #2575A1;
--blue-ncs: #4589AC;
--air-superiority-blue: #649DB7;
--dark-sky-blue: #84B1C2;

--eerie-black: #272727;
--onyx: #444444;
--dim-gray: #606060;
--gray-web: #7D7D7D;
--spanish-gray: #999999;

*/

const theme = createTheme(adaptV4Theme({


  palette: {
    text: {
      primary: primaryContrastTextColor,
      secondary: "#7D7D7D"
    },

    primary: {
      main: primaryColor,
      light: primaryLightColor,
      dark: primaryDarkColor,
      contrastText: primaryContrastTextColor,
    },
    secondary: {
      main: secondaryColor,
      light: secondaryLightColor,
      dark: secondaryDarkColor,
      contrastText: secondaryContrastTextColor,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: darkerBackgroundColor,
      paper: darkerBackgroundColor
    },
  },

  overrides: {
    MuiTypography: {
      root: {
        fontFamily: [
          'Mochiy Pop P One',
          'sans-serif',
        ].join(','),
      },
      h1: {
        fontSize: 36,
      },
      h2: {
        fontSize: 30,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 22,
      },
      h5: {
        fontSize: 18,
      },
      h6: {
        fontSize: 16,
      },
      subtitle1: {
        fontSize: 18,
      },
      subtitle2: {
        fontSize: 20,
      },
      body1: {
        fontSize: 16,
      },
      body2: {
        fontSize: 14,
      },
      caption: {
        fontSize: 10,
      },
    },
    MuiCard: {
      root: {
        borderRadius: cardRadius,
      },
    },
    MuiButton: {
      root: {
        borderRadius: cardRadius,
        paddingTop: '0px !important',
        paddingBottom: '0px !important',
      },
    },
    MuiCheckbox: {
      root: {},
      colorSecondary: {
        color: primaryColor,
        '&$checked': {
          color: primaryColor,
        },
      },
    },
    MuiInput: {
      root: {
        border: `1px thin ${primaryContrastTextColor}`,
        borderRadius: "11px",
        borderColor: primaryContrastTextColor,

      },
    },
    MuiOutlinedInput: {
      root: {
        border: `1px thin ${primaryContrastTextColor}`,
        borderRadius: "11px",
        borderColor: primaryContrastTextColor,
        position: 'relative',
        '& $notchedOutline': {
          borderColor: primaryContrastTextColor,
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: primaryContrastTextColor,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: secondaryContrastTextColor,
          },
        },
        '&$focused $notchedOutline': {
          borderColor: primaryColor,
        },
      },
    },
    MuiSelect: {

      iconOutlined: {
        color: secondaryContrastTextColor
      },
      root: {
        borderRadius: "11px",
        color: secondaryContrastTextColor
      }
    },
    MuiFormLabel: {
      root: {
        borderRadius: "11px",
        color:
          secondaryContrastTextColor
        ,
        '&$focused': {
          color: primaryColor
        }
      }
    },
  }
}
));

export default theme;