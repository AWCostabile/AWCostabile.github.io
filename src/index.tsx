import { AppProvider } from "common/context/app";
import { App } from "pages/app";
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
