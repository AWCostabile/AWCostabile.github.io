import { IObjectionModel } from "common/models/form-model";

export const defaultFormData: IObjectionModel = {
  proposal: {
    applicantLand: "251 -261 Springvale Road, Glen Waverley",
    applicationName: "Hongxing Springvale Road Pty Ltd",
    applicationNumber: "TPA/52268",
    description:
      "21 storey mixed-use building (147 dwellings, 6 retail tenancies)",
  },
  concernedParty: {
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    contactAddress: "",
    contactPostCode: 3150,
  },
  objection: {
    concerns: "",
    suggestedChanges: "",
  },
};
