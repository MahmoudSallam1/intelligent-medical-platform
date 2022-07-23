import { createMuiTheme } from "@material-ui/core/styles";


export const theme = createMuiTheme({
    // shadows: ["none"],
  
    typography: {
      button: {
        textTransform: 'none'
      }},
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
        contrastText: "#fff",
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