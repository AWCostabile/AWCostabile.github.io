import { AppView } from "common/context/types";
import { useAppView } from "common/hooks/use-app-view";
import React, { useMemo } from "react";
import { FormViewPage } from "./app-form";
import { PrintViewPage } from "./app-print";

export const App: React.FC = () => {
  const { view } = useAppView();
  const isMobile = useMemo(
    () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
    []
  );

  if (isMobile) {
    return (
      <>
        {view === AppView.FORM && <FormViewPage isMobile />}
        {view === AppView.PRINT && <PrintViewPage isMobile />}
      </>
    );
  }

  return (
    <>
      <FormViewPage />
      {view === AppView.PRINT && <PrintViewPage />}
    </>
  );
};
