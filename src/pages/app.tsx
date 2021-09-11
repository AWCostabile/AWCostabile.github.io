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

  const form = view === AppView.FORM;
  const print = view === AppView.PRINT;

  if (isMobile) {
    return (
      <>
        {form && <FormViewPage />}
        {print && (
          <PrintViewPage isMobile toFormView={toFormView} values={values} />
        )}
      </>
    );
  }

  if (isDebug) {
    return (
      <>
        {form && <FormViewPage />}
        {print && (
          <PrintViewPage isDebug toFormView={toFormView} values={values} />
        )}
      </>
    );
  }

  return (
    <>
      <FormViewPage />
      {print && <PrintViewPage toFormView={toFormView} values={values} />}
    </>
  );
};
