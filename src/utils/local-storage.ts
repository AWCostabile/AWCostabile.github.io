import { LOCAL_STORAGE_KEY } from "common/constants/app";
import { defaultFormData } from "common/constants/defaults";
import { IAppData } from "common/models/app-data";
import { IObjectionModel } from "common/models/objection";

export const getSaveData = (): IAppData => {
  if (!global.window) {
    return {
      form: defaultFormData,
      language: "english",
    };
  }

  const currentData = localStorage.getItem(LOCAL_STORAGE_KEY);
  const {
    form = {} as IObjectionModel,
    language = "english",
    "proposal.applicationNumber": check = false,
  } = JSON.parse(currentData || "{}") as IAppData & {
    "proposal.applicationNumber"?: string;
  };

  // Fix for older sessions!
  if (check) {
    localStorage.clear();
  }

  return {
    form: {
      authority: {
        date: Date.now(),
        signature: "",
      },
      concernedParty: {
        ...defaultFormData.concernedParty,
        ...form.concernedParty,
      },
      objection: {
        ...defaultFormData.objection,
        ...form.objection,
      },
      proposal: {
        ...defaultFormData.proposal,
        ...form.proposal,
      },
    },
    language,
  };
};

export const setSaveData = (values: IAppData) => {
  if (!global.window) {
    return defaultFormData;
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
};
