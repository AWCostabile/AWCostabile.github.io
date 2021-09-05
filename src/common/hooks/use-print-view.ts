import { AppContext } from "common/context";
import { useContext } from "react";

export const usePrintView = () => {
  const { state, toFormView } = useContext(AppContext);

  return {
    toFormView,
    values: state.values,
  };
};
