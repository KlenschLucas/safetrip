import {ThemeOptions} from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: "#1222046",
      light: "#122046"
    },
    error: {main: "#E94547"},
    warning: {main: "#F0A71A"},
    success: {main: "#24C872"},
    action: {focus: "#0148E9", selected: "#3090F1"},
    secondary: {main: "#2D4a9a"},
  },
  // components: {
  //   MuiButton: {
  //     variants: {
  //       props: {
  //         palette: {
  //           mode: 'light',
  //           primary: {
  //             main: "#EB620D"
  //           },
  //           secondary: {
  //             main: "#7AC9D2"
  //           }
  //         },
  //
  //       },
  //
  //     }
  //   }
  // }
};

export default lightThemeOptions;
