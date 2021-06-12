import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: "#1637BC",
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
      lg: 1500,
      xl: 1920,
    },
  },
  typography: {
    button: {
      textTransform: "none"
    },
    h1: {
      fontSize: '5rem',
      fontFamily: 'Montserrat',
      fontWeight: 900
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 900
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 700
    },
    h4: {
      fontFamily: 'Montserrat',
      fontWeight: 700
    },
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: 600
    },
    h6: {
      fontFamily: 'Montserrat',
      fontWeight: 500
    },
    fontFamily: 'Open Sans',
    fontWeight: 400
  },
  spacing: 10
}), { factor: 4 });