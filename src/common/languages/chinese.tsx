import { COMMUNITY_AMENITY, PROPOSAL_LINK } from "common/constants/app";
import { ILanguage } from "common/models/language";
import { Link } from "components/link";

export const chinese: ILanguage = {
  // ==========================================================================
  //  LANGUAGE META DATA
  // ==========================================================================

  icon:                                       "false",
  name:                                       "中文",
  nameEnglish:                                "Chinese - Simplified",


  // ==========================================================================
  //  BUTTONS, INPUTS & UI ELEMENTS
  // ==========================================================================

  buttons: {
    hide:                                     "Hide",
    printObjectionForm:                       "Download Object Form",
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
    hiddenFields: "Fields are hidden",
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
    about:                                    "About this form",
    concernedParty:                           "Concerned Party (You)",
    header:                                   "Objection Helper",
    proposal:                                 "Planning Permit being Objected",
    objection:                                "Objection Details",
  },


  // ==========================================================================
  //  MAIN PARAGRAPH CONTENT
  // ==========================================================================

  info: {
    delivery: (
      <ul>
        <li>Mail - PO Box 1, Glen Waverley VIC 3150</li>
        <li>
          Email -{" "}
          <Link to={`mailto:mail@monash.vic.gov.au`}>
            mail@monash.vic.gov.au
          </Link>
        </li>
      </ul>
    ),
    description: [
      <>
        This form helper was created to assist the local residents of Glen
        Waverley in their objections to the recent announcement of a planned
        development at <em>251 -261 Springvale Road</em>. Using the fields
        below, make certain that you supply as much information as you can to
        ensure your objection is taken seriously. When you have completed all
        the fields, you will be able to click the{" "}
        <strong>Print Object Form</strong> button at the bottom of this page in
        order to view your completed form and save it for printing.
      </>,
      <>
        While you may include personal reasons for objecting to this proposal,
        such as{" "}
        <strong>
          <em>my view will be blocked</em>
        </strong>{" "}
        or{" "}
        <strong>
          <em>my property's value is at risk</em>
        </strong>
        , it is important to remember that the Council's responsibility first
        and formost is to look after the{" "}
        <Link to={COMMUNITY_AMENITY}>community amenity</Link>, and as such, the
        strongest arguments you can provide will relate to how this development
        may affect public safety, how it may be a nuisance such as impact on
        parking, and how it may negatively impact the character of Glen
        Wavelery.
      </>,
      <>
        Unfortunately, there is a high likelihood that this development will
        indeed go ahead however the size and scope of the development may be
        influenced by the number of objections made and the willingness to find
        a compromise, so it is <strong>strongly</strong> recommended that you
        make suggestions as to the sorts of changes to this development you
        would be willing to consider.
      </>,
      <>
        Unfortunately, there is a high likelihood that this development will
        indeed go ahead however the size and scope of the development may be
        influenced by the number of objections made and the willingness to find
        a compromise, so it is <strong>strongly</strong> recommended that you
        make suggestions as to the sorts of changes to this development you
        would be willing to consider.
      </>,
      <>
        As the deadline for objections is{" "}
        <strong>Thursday 16 September 2021</strong>, you should aim to complete
        this as soon as you can! Simply print off the form, sign and date the
        physical copy, and then send it back to the Monash City council as soon
        as possible via one of the following methods of delivery
      </>,
    ],
    more: [
      "For information about the proposal itself, click the following link:",
      <Link to={PROPOSAL_LINK}>
        Proposed development at 251 -261 Springvale Road, Glen Waverley
      </Link>,
    ],
  },


  // ==========================================================================
  //  CREDITS -> Replace the name below with your name
  // ==========================================================================

  translationBy: "Anthony Costabile"
};
