import { ILanguage } from "common/models/language";
import { englishInfo } from './english-info';

export const english: ILanguage = {
  // ==========================================================================
  //  LANGUAGE META DATA
  // ==========================================================================

  icon:                                       "true",
  name:                                       "English",
  nameEnglish:                                "English",

  // ==========================================================================
  //  BUTTONS, INPUTS & UI ELEMENTS
  // ==========================================================================

  buttons: {
    cancel:                                   "Cancel",
    createDigitalObjectionForm:               "Create Digitally Signed Document",
    createPrintObjectionForm:                 "Create Physically Printed Document",
    go:                                       "Go",
    hide:                                     "Hide",
    reset:                                    "Reset",
    show:                                     "Show",
  },
  document: {
    date:                                     "Date",
    signature:                                "Signed",
  },
  labels: {
    "concernedParty.contactAddress":          "Residential Address",
    "concernedParty.contactEmail":            "Email Address",
    "concernedParty.contactName":             "Name(s)",
    "concernedParty.contactPhone":            "Phone",
    "concernedParty.contactPostCode":         "Post Code",
    "objection.concerns":                     "Grounds of Objection",
    "objection.suggestedChanges":             "Changes which could address your concern(s)",
    "proposal.applicantLand":                 "Description of Land",
    "proposal.applicationName":               "Name of Applicant",
    "proposal.applicationNumber":             "Application Number",
    "proposal.description":                   "Description of Proposal",
  },
  miscellaneous: {
    hiddenFields:                             "Fields are hidden",
    hiddenText:                               "Text is hidden",
    qrCodeLabel:                              "Share this form!",
  },
  placeholder: {
    "concernedParty.contactAddress":          "Enter your residential address",
    "concernedParty.contactEmail":            "Enter your email address",
    "concernedParty.contactName":             "Enter your name(s)",
    "concernedParty.contactPhone":            "Enter your contact phone number",
    "concernedParty.contactPostCode":         "Enter your post code",
    "objection.concerns":                     "Detail your concerns with regards to this proposal",
    "objection.suggestedChanges":             "Enter any changes that could be made to the proposal that would address your concer(s)",
    "proposal.applicantLand":                 "Enter a description of the land to be developed",
    "proposal.applicationName":               "Enter the applicant's Name or Business",
    "proposal.applicationNumber":             "Enter the TPA number on the planning permit",
    "proposal.description":                   "Enter a description for the purpose of the planning proposal",
  },
  sections: {
    concernedParty:                           "Enter your details as accurately as possible",
    proposal:                                 "Fields are pre-populated for your convenience",
    objection:                                "Enter your concerns and reasons for this object, as well as any changes you'd like to see",
  },
  titles: {
    about:                                    "To the Residents of Glen Waverley and surrounding areas",
    concernedParty:                           "Concerned Party (You)",
    header:                                   "Objection Helper",
    proposal:                                 "Planning Permit being Objected",
    objection:                                "Objection Details",
    signature:                                "Use the area below to record a signature",
  },
  validations: {
    "concernedParty.contactAddress":          "A residential address is required",
    "concernedParty.contactEmail":            "Invalid email address detected",
    "concernedParty.contactName":             "At least one contact name is required",
    "concernedParty.contactPhone":            "Invalid phone number detected",
    "concernedParty.contactPostCode":         "A valid post code is required",
    "objection.concerns":                     "You must supply a reason for your objection",
    "proposal.applicationNumber":             "An application number is mandatory",
  },
  warning:                                    "This application does 𝗡𝗢𝗧 send an email to the Monash City council. Use the print preview to either print the objection form OR export it as a PDF file. You 𝗠𝗨𝗦𝗧 send it yourself in order to make sure the objection is submitted!",

  // ==========================================================================
  //  MAIN PARAGRAPH CONTENT (stored in separate file)
  // ==========================================================================

  info: englishInfo,


  // ==========================================================================
  //  CREDITS -> Replace the name below with your name
  // ==========================================================================

  translationBy:                              "Anthony Costabile",
};
