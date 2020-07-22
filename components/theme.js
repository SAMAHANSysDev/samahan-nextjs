import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: "#14489f",
    },
    secondary: {
      main: "#fff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1250,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    button: {
      textTransform: "none"
    },
    fontFamily: 'Montserrat, Open Sans'
  }
});