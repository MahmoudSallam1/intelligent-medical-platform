import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getFirestore } from "redux-firestore";

import { reduxFirestore } from "redux-firestore";

import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./firebase/firebase";

const loadingMarkup = (
  <div>
    <h3>Loading..</h3>
  </div>
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      userProfile: "doctors",
      attachAuthIsReady: true,
    }), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Suspense fallback={loadingMarkup}>
      <ThemeProvider theme={theme}>
        {" "}
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Suspense>,
    document.getElementById("root")
  );
});
