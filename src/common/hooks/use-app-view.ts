import { AppContext } from "common/context/app";
import { useContext } from "react";

export const useAppView = () => {
  const { toFormView, toPrintView, state } = useContext(AppContext);

  return {
    toFormView,
    toPrintView,
    values: state.values,
    view: state.view,
  };
};
