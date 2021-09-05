import { AppContext } from "common/context";
import { useContext } from "react";

export const useSaveData = () => {
  const { printData, saveData } = useContext(AppContext);

  return {
    printData,
    saveData,
  };
};
