import { AppView } from "common/context/types";
import { useAppView } from "common/hooks/use-app-view";
import React from "react";
import { FormViewPage } from "./app-form";
import { PrintViewPage } from "./app-print";

export const App: React.FC = () => {
  const { view } = useAppView();

  switch (view) {
    case AppView.FORM:
      return <FormViewPage />;

    case AppView.PRINT:
      return <PrintViewPage />;

    default:
      return null;
  }
};
