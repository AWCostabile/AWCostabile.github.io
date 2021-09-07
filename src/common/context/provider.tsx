import { IObjectionModel } from "common/models/form-model";
import React, { useCallback, useReducer } from "react";
import { setSaveData } from "utils/local-storage";
import { AppContext } from "./context";
import { appContextReducer } from "./reducer";
import { AppContextAction, AppView, IAppContextState } from "./types";

interface IAppProviderProps {
  initialState: IAppContextState;
}

export const AppProvider: React.FC<IAppProviderProps> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(appContextReducer, initialState);

  const printData = useCallback((values: IObjectionModel) => {
    setSaveData(values);
    dispatch({ type: AppContextAction.PRINT, values });
  }, []);

  const resetData = useCallback(() => {
    dispatch({ type: AppContextAction.RESET });
  }, []);

  const saveData = useCallback((values: IObjectionModel) => {
    setSaveData(values);
    dispatch({ type: AppContextAction.SAVE, values });
  }, []);

  const toPrintView = useCallback(() => {
    dispatch({ type: AppContextAction.VIEW, view: AppView.PRINT });
  }, []);

  const toFormView = useCallback(() => {
    dispatch({ type: AppContextAction.VIEW, view: AppView.FORM });
  }, []);

  return (
    <AppContext.Provider
      value={{
        printData,
        resetData,
        saveData,
        toPrintView,
        toFormView,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
