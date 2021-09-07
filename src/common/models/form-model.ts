export interface IObjectionModel {
  concernedParty: {
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    contactAddress: string;
    contactPostCode: number;
  };
  proposal: {
    applicantLand: string;
    applicationName: string;
    applicationNumber: string;
    description: string;
  };
  objection: {
    concerns: string;
    suggestedChanges: string;
  };
}
