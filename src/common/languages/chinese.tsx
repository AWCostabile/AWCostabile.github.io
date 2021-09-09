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
    cancel:                                   "Cancel",
    createDigitalObjectionForm:               "Create Digitally Signed Document",
    createPrintObjectionForm:                 "打印反對書",
    go:                                       "Go",
    hide:                                     "隱藏",
    reset:                                    "Reset",
    show:                                     "顯示",
  },
  document: {
    date:                                     "日期",
    signature:                                "簽名",
  },
  labels: {
    "concernedParty.contactAddress":          "住址",
    "concernedParty.contactEmail":            "電郵地址",
    "concernedParty.contactName":             "姓名",
    "concernedParty.contactPhone":            "電話",
    "concernedParty.contactPostCode":         "郵編",
    "objection.concerns":                     "反對理據",
    "objection.suggestedChanges":             "您希望有什麼反饋",
    "proposal.applicantLand":                 "項目地址",
    "proposal.applicationName":               "申請人",
    "proposal.applicationNumber":             "申請編號",
    "proposal.description":                   "項目描述",
  },
  miscellaneous: {
    hiddenFields:                             "Fields are hidden",
    hiddenText:                               "Text is hidden",
    qrCodeLabel:                              "Share this form!",
  },
  placeholder: {
    "concernedParty.contactAddress":          "輸入住址",
    "concernedParty.contactEmail":            "輸入電郵地址",
    "concernedParty.contactName":             "輸入姓名",
    "concernedParty.contactPhone":            "輸入聯絡電話",
    "concernedParty.contactPostCode":         "輸入郵編",
    "objection.concerns":                     "項目為您帶來的影響",
    "objection.suggestedChanges":             "您希望項目有哪些調整",
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
    about:                                    "關於此反對書",
    concernedParty:                           "受影響個體(您本人)",
    header:                                   "反對小幫手",
    proposal:                                 "反對的規劃項目",
    objection:                                "反對內容",
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


  // ==========================================================================
  //  MAIN PARAGRAPH CONTENT
  // ==========================================================================

  info: {
    delivery: (
      <ul>
        <li>郵寄 - PO Box 1, Glen Waverley VIC 3150</li>
        <li>
          電郵 -{" "}
          <Link to={`mailto:mail@monash.vic.gov.au`}>
            mail@monash.vic.gov.au
          </Link>
        </li>
      </ul>
    ),
    description: [
      <>
        此反對書的目的為幫助Glen Waverley居民對新公佈的計劃發展項目向市議會提出反對，項目地址位於
        <em>251-261 Springvale Road</em>。 項目內容為 21 層商住物業 (147住戶，6商鋪)。
        填寫反對書時，請盡量提供詳細資料好讓您的反對聲音得到充分考慮。完成後請按頁面底部 “打印反對書” 確認相關資料並按以下途徑提交。
      </>,
      <>
        您可以個人原因作為反對理據
        例如{" "}
        <strong>
          <em>觀景被阻擋</em>
        </strong>{" "}
        或{" "}
        <strong>
          <em>物業價格受影響</em>
        </strong>
        等等，不過市議會首要責任為提供{" "}
        <Link to={COMMUNITY_AMENITY}>社區設施</Link>, 所以若您能提出例如該項目會怎樣影響公共安全，
        車位數目減少等理據，您的反對會變得更加強而有力。
      </>,
      <>
       該項目最終可能仍會通過，惟反對聲音極有可能影響項目的大小，所以
       <strong>懇請</strong>
       您能抽空提出建議，好讓市議會能夠考慮你的反對聲音。
      </>,
      <>
        反對書截止收集日期為{" "}
        <strong>周四 2021年9月16日</strong>, 請盡快填寫並簽名，您可以用以下途徑交到市議會。
      </>,
    ],
    more: [
      "計劃項目內容請參考：",
      <Link to={PROPOSAL_LINK}>
        Proposed development at 251 -261 Springvale Road, Glen Waverley
      </Link>,
    ],
  },


  // ==========================================================================
  //  CREDITS -> Replace the name below with your name
  // ==========================================================================

  translationBy: "Jonathan Suen"
};