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
    case AppContextAction.DONE:
      return { ...state, save: false };

    case AppContextAction.LANGUAGE:
      return { ...state, language: action.language, save: true };

    case AppContextAction.PRINT:
      // eslint-disable-next-line no-restricted-globals
      const view = confirm(action.warningText);

      return {
        ...state,
        save: true,
        view: view ? AppView.PRINT : AppView.FORM,
        values: action.values,
      };

    case AppContextAction.RESET:
      return { ...state, values: defaultFormData };

    case AppContextAction.SAVE:
      return { ...state, save: true, values: action.values };

    case AppContextAction.VIEW:
      return { ...state, view: action.view };

    default:
      return state;
  }
};
