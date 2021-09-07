import { AppContext } from "common/context";
import { useContext } from "react";

export const useAppView = () => {
  const { toFormView, toPrintView, state } = useContext(AppContext);

  return {
    toFormView,
    toPrintView,
    view: state.view,
  };
};
