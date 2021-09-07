import { AppContext } from "common/context";
import { IObjectionModel } from "common/models/form-model";
import { useContext } from "react";
import { useInterval } from "./use-interval";

export const useObjectionForm = (values: IObjectionModel) => {
  const { saveData } = useContext(AppContext);

  useInterval(() => saveData(values), 30000);
};
