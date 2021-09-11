import { ILanguage } from "common/models/language";
import { IObjectionModel } from "common/models/objection";

export enum AppContextAction {
  DONE,
  LANGUAGE,
  PRINT,
  RESET,
  SAVE,
  VIEW,
}

export enum AppView {
  FORM,
  PRINT,
}

export interface IAppContextState {
  language: string;
  save: boolean;
  values: IObjectionModel;
  view: AppView;
}

export interface IAppContext {
  printData: (values: IObjectionModel) => void;
  resetData: () => void;
  setLanguage: (language: string) => void;
  saveData: (values: IObjectionModel) => void;
  toFormView: () => void;
  toPrintView: () => void;
  state: IAppContextState;
  strings: ILanguage;
}

export type AppContextActions =
  | {
      language: string;
      type: AppContextAction.LANGUAGE;
    }
  | {
      warningText: string;
      values: IObjectionModel;
      type: AppContextAction.PRINT;
    }
  | {
      type: AppContextAction.DONE | AppContextAction.RESET;
    }
  | {
      values: IObjectionModel;
      type: AppContextAction.SAVE;
    }
  | {
      view: AppView;
      type: AppContextAction.VIEW;
    };
