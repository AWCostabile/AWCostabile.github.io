import { LOCAL_STORAGE_KEY } from "common/constants/app";
import { defaultFormData } from "common/constants/defaults";
import { IObjectionModel } from "common/models/form-model";

export const getSaveData = (): IObjectionModel => {
  if (!global.window) {
    return defaultFormData;
  }

  const currentData = localStorage.getItem(LOCAL_STORAGE_KEY);
  const values = JSON.parse(currentData || "{}");

  return {
    concernedParty: {
      ...defaultFormData.concernedParty,
      ...values.concernedParty,
    },
    objection: {
      ...defaultFormData.objection,
      ...values.objection,
    },
    proposal: {
      ...defaultFormData.proposal,
      ...values.proposal,
    },
  };
};

export const setSaveData = (values: IObjectionModel) => {
  if (!global.window) {
    return defaultFormData;
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
};
