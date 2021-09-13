import { ILanguage } from "common/models/language";
import { chineseInfo } from './chinese-info';

export const chinese: ILanguage = {
  // ==========================================================================
  //  LANGUAGE META DATA
  // ==========================================================================

  icon:                                       "false",
  name:                                       "中文",
  nameEnglish:                                "Chinese - Traditional",


  // ==========================================================================
  //  BUTTONS, INPUTS & UI ELEMENTS
  // ==========================================================================

  buttons: {
    cancel:                                   "取消",
    createDigitalObjectionForm:               "電子簽名",
    createPrintObjectionForm:                 "打印反對書",
    go:                                       "打印並發送",
    hide:                                     "隱藏",
    reset:                                    "重設",
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
    qrCodeLabel:                              "掃描並分享",
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
    signature:                                "簽名",
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
  warning:                                    "此申請不會傳送電郵到市議會。請使用預覧打印功能打印反對書或輸出成PDF檔。您必須親身傳送以確保正確提交您的反對。",


  // ==========================================================================
  //  MAIN PARAGRAPH CONTENT
  // ==========================================================================

  info: chineseInfo,


  // ==========================================================================
  //  CREDITS -> Replace the name below with your name
  // ==========================================================================

  translationBy: "Jonathan Suen"
};