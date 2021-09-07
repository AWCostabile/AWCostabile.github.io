import { defaultFormData } from "common/constants/defaults";
import { createContext } from "react";
import { AppView, IAppContext } from "./types";

export const defaultAppContext = {
  view: AppView.FORM,
  values: defaultFormData,
};

export const AppContext = createContext<IAppContext>({
  printData: () => null,
  resetData: () => null,
  saveData: () => null,
  toFormView: () => null,
  toPrintView: () => null,
  state: defaultAppContext,
});
