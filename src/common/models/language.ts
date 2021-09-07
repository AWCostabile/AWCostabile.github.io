import { ReactNode } from "react";

type LanguageDataType =
  | ((...args: string[]) => string)
  | ILanguageData
  | ReactNode
  | string;

export interface ILanguageData {
  [K: string]: LanguageDataType | LanguageDataType[];
}

export interface ILanguageField extends ILanguageData {
  "concernedParty.contactAddress": string;
  "concernedParty.contactEmail": string;
  "concernedParty.contactName": string;
  "concernedParty.contactPhone": string;
  "concernedParty.contactPostCode": string;
  "objection.concerns": string;
  "objection.suggestedChanges": string;
  "proposal.applicantLand": string;
  "proposal.applicationName": string;
  "proposal.applicationNumber": string;
  "proposal.description": string;
}

export interface ILanguage extends ILanguageData {
  buttons: {
    hide: string;
    printObjectionForm: string;
    show: string;
  };
  document: {
    date: string;
    signature: string;
  };
  info: {
    delivery: ReactNode;
    description: ReactNode[];
    more: ReactNode[];
  };
  labels: ILanguageField;
  miscellaneous: {
    hiddenFields: string;
    qrCodeLabel: string;
  };
  icon: string;
  name: string;
  nameEnglish: string;
  placeholder: ILanguageField;
  sections: {
    concernedParty: string;
    proposal: string;
    objection: string;
  };
  titles: {
    about: string;
    concernedParty: string;
    header: string;
    proposal: string;
    objection: string;
  };
  translationBy: string;
}
