import { defaultFormData } from "common/constants/defaults";
import { english } from "common/languages/english";
import { ILanguage } from "common/models/language";
import { createContext } from "react";
import { AppView, IAppContext } from "./types";

export const defaultAppContext = {
  language: "english",
  save: false,
  view: AppView.FORM,
  values: defaultFormData,
};

export const AppContext = createContext<IAppContext>({
  printData: () => null,
  resetData: () => null,
  saveData: () => null,
  setLanguage: () => null,
  toFormView: () => null,
  toPrintView: () => null,
  state: defaultAppContext,
  strings: english as ILanguage,
});
