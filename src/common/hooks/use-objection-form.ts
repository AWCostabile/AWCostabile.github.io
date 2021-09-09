import { AppContext } from "common/context/app";
import { IObjectionModel } from "common/models/objection";
import { useContext, useEffect, useRef } from "react";
import { useInterval } from "./use-interval";

export const useObjectionForm = (
  values: IObjectionModel,
  timeout: number = 30000
) => {
  const { saveData } = useContext(AppContext);
  const ref = useRef(() => saveData(values));

  useEffect(
    () => {
      ref.current = () => saveData(values);
    },
    [values] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useInterval(() => ref.current(), timeout);
};
