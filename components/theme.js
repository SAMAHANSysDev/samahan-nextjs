import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: "#14489f",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#fff"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    button: {
      textTransform: "none"
    },
    fontFamily: 'Open Sans, Montserrat'
  },
  spacing: 10
}), { factor: 4 });