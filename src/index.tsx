import { AppProvider } from "common/context";
import { AppView } from "common/context/types";
import { App } from "components/app";
import React from "react";
import { render } from "react-dom";
import "styles/global.css";
import { getSaveData } from "utils/local-storage";

render(
  <React.StrictMode>
    <AppProvider
      initialState={{
        values: getSaveData(),
        view: AppView.FORM,
      }}
    >
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
