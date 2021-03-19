import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#1DB5E4",
      main: "#1DB5E4",
      dark: "#FAB91C",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FAB91C",
      main: "#FAB91C",
      dark: "#FAB91C",
      contrastText: "#000",
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
