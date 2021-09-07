import { defaultFormData } from "common/constants/defaults";
import {
  AppContextAction,
  AppContextActions,
  AppView,
  IAppContextState,
} from "./types";

export const appContextReducer = (
  state: IAppContextState,
  action: AppContextActions
): IAppContextState => {
  switch (action.type) {
    case AppContextAction.PRINT:
      return { view: AppView.PRINT, values: action.values };

    case AppContextAction.RESET:
      return { ...state, values: defaultFormData };

    case AppContextAction.SAVE:
      return { ...state, values: action.values };

    case AppContextAction.VIEW:
      return { ...state, view: action.view };

    default:
      return state;
  }
};
