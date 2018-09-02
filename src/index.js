import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { amber, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    },
    type: 'dark'
  },
  spacing: {
    unit: 10
  }
});
const rootElement = document.getElementById("root");

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>, rootElement);
