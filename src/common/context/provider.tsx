import { language } from "common/languages";
import { IAppData } from "common/models/app-data";
import { IObjectionModel } from "common/models/objection";
import React, { useCallback, useMemo, useReducer } from "react";
import { useEffect } from "react";
import { setSaveData } from "utils/local-storage";
import { AppContext } from "./context";
import { appContextReducer } from "./reducer";
import { AppContextAction, AppView } from "./types";

interface IAppProviderProps {
  appData: IAppData;
}

export const AppProvider: React.FC<IAppProviderProps> = ({
  appData,
  children,
}) => {
  const [state, dispatch] = useReducer(
    appContextReducer,
    useMemo(
      () => ({
        language: appData.language,
        save: false,
        values: appData.form,
        view: AppView.FORM,
      }),
      [] // eslint-disable-line react-hooks/exhaustive-deps
    )
  );

  const strings = useMemo(() => {
    language.set(state.language as "english");

    return language.strings;
  }, [state.language]);

  const printData = useCallback((values: IObjectionModel) => {
    dispatch({ type: AppContextAction.PRINT, values });
  }, []);

  const resetData = useCallback(() => {
    dispatch({ type: AppContextAction.RESET });
  }, []);

  const saveData = useCallback((values: IObjectionModel) => {
    dispatch({ type: AppContextAction.SAVE, values });
  }, []);

  const setLanguage = useCallback((nextLanguage: string) => {
    if (language.is(nextLanguage)) {
      return;
    }

    dispatch({ type: AppContextAction.LANGUAGE, language: nextLanguage });
  }, []);

  const toPrintView = useCallback(() => {
    dispatch({ type: AppContextAction.VIEW, view: AppView.PRINT });
  }, []);

  const toFormView = useCallback(() => {
    dispatch({ type: AppContextAction.VIEW, view: AppView.FORM });
  }, []);

  useEffect(() => {
    if (!state.save) {
      return;
    }

    dispatch({ type: AppContextAction.DONE });
    setSaveData({ form: state.values, language: state.language });
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        printData,
        resetData,
        saveData,
        setLanguage,
        toPrintView,
        toFormView,
        state,
        strings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
