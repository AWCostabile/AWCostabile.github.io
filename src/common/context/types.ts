import { IObjectionModel } from "common/models/form-model";

export enum AppContextAction {
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
  values: IObjectionModel;
  view: AppView;
}

export interface IAppContext {
  printData: (values: IObjectionModel) => void;
  resetData: () => void;
  saveData: (values: IObjectionModel) => void;
  toFormView: () => void;
  toPrintView: () => void;
  state: IAppContextState;
}

export type AppContextActions =
  | {
      values: IObjectionModel;
      type: AppContextAction.PRINT;
    }
  | {
      type: AppContextAction.RESET;
    }
  | {
      values: IObjectionModel;
      type: AppContextAction.SAVE;
    }
  | {
      view: AppView;
      type: AppContextAction.VIEW;
    };
