import { useContext } from "react";
import { AppContext } from "common/context/app";

export const useLanguage = () => {
  const { setLanguage, state, strings } = useContext(AppContext);

  return {
    currentLanguage: state.language,
    setLanguage,
    strings,
  };
};
