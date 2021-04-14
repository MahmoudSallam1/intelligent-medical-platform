import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./firebase/firebase";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, { attachAuthIsReady: true }), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

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

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      {" "}
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>,
    document.getElementById("root")
  );
});
