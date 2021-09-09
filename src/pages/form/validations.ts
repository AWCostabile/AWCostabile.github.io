import {
  EMAIL_PATTERN,
  PHONE_PATTERN,
  POST_CODE_PATTERN,
  REPLACE_PHONE_CHARS,
} from "common/constants/patterns";
import { ILanguageValidations } from "common/models/language";
import * as Yup from "yup";

// Should be good for almost all combinations of phone numbers
const emailValidation = (value?: string) =>
  !value || !!value.match(EMAIL_PATTERN);

// Standard Australian home and mobile phone numbers
const phoneValidation = (value?: string) =>
  !value || !!value.replace(REPLACE_PHONE_CHARS, "").match(PHONE_PATTERN);

// Standard Australian home and mobile phone numbers
const postCodeValidator = (value?: number) =>
  !value || !!String(value).match(POST_CODE_PATTERN);

// Objection Form Validations
export const createValidationSchema = (validations: ILanguageValidations) =>
  Yup.object().shape({
    concernedParty: Yup.object().shape({
      contactName: Yup.string().required(
        validations["concernedParty.contactName"]
      ),
      contactEmail: Yup.string().test({
        message: validations["concernedParty.contactEmail"],
        test: emailValidation,
      }),
      contactPhone: Yup.string().test({
        message: validations["concernedParty.contactPhone"],
        test: phoneValidation,
      }),
      contactAddress: Yup.string().required(
        validations["concernedParty.contactAddress"]
      ),
      contactPostCode: Yup.number()
        .test({
          message: validations["concernedParty.contactPostCode"],
          test: postCodeValidator,
        })
        .required(validations["concernedParty.contactPostCode"]),
    }),
    proposal: Yup.object().shape({
      applicantLand: Yup.string(),
      applicationName: Yup.string(),
      applicationNumber: Yup.string().required(),
      description: Yup.string(),
    }),
    objection: Yup.object().shape({
      concerns: Yup.string().required(),
      suggestedChanges: Yup.string(),
    }),
  });
