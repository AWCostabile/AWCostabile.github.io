import { AppView } from "common/context/app/types";
import { useAppView } from "common/hooks/use-app-view";
import React, { useMemo } from "react";
import { FormViewPage } from "./form";
import { PrintViewPage } from "./print";

const isDebug = false;

export const App: React.FC = () => {
  const { values, view, toFormView } = useAppView();
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
        {view === AppView.PRINT && (
          <PrintViewPage isMobile toFormView={toFormView} values={values} />
        )}
      </>
    );
  }

  if (isDebug) {
    return (
      <>
        {view === AppView.FORM && <FormViewPage />}
        {view === AppView.PRINT && (
          <PrintViewPage isDebug toFormView={toFormView} values={values} />
        )}
      </>
    );
  }

  return (
    <>
      <FormViewPage />
      {view === AppView.PRINT && (
        <PrintViewPage toFormView={toFormView} values={values} />
      )}
    </>
  );
};
