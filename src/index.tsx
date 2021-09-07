import { AppProvider } from "common/context";
import { App } from "components/app";
import React from "react";
import { render } from "react-dom";
import { getSaveData } from "utils/local-storage";
import "styles/global.css";

render(
  <React.StrictMode>
    <AppProvider appData={getSaveData()}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
