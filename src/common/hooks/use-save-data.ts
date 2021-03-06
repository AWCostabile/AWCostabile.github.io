import { AppContext } from "common/context/app";
import { useContext } from "react";

export const useSaveData = () => {
  const { state, printData, saveData } = useContext(AppContext);

  return {
    initialValues: state.values,
    printData,
    saveData,
  };
};
