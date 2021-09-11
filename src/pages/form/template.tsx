import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TEXT_COLOR } from "common/constants/app";
import { useGrid } from "common/hooks/use-grid";
import { useLanguage } from "common/hooks/use-language";
// import { useObjectionForm } from "common/hooks/use-objection-form";
import { IObjectionModel } from "common/models/objection";
import { Expandable } from "components/expandable";
import { FormikField } from "components/formik-field";
import { HideButton } from "components/hide-button";
import { FormikProps } from "formik";
import React, { useCallback, useMemo, useState } from "react";
import { paddingStyles } from "styles/utils";
import { ObjectionFormInformation } from "./info";
import { useSignature } from "./signature";

const useStyles = makeStyles((theme) => ({
  centered: { textAlign: "center" },
  italics: { fontStyle: "italic " },
  left: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    textAlign: "left",
  },
  right: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    textAlign: "right",
  },
  root: { ...paddingStyles.toProps(16) },
  signatureStyles: {
    border: "1px solid #444",
    height: "40%",
    minHeight: "400px",
    width: "100%",
  },
}));

export const ObjectionFormTemplate: React.FC<FormikProps<IObjectionModel>> = ({
  handleChange,
  submitForm,
  validateForm,
}) => {
  const { centered, italics, left, right, root, signatureStyles } = useStyles();

  // useObjectionForm(values, 10000);
  const { GridFour, GridSix, GridEight, GridTwelve } = useGrid(root);
  const { strings } = useLanguage();

  const [hasMarkedCanvas, setHasMarkedCanvas] = useState(false);
  const [showApplicant, setShowApplicant] = useState(false);
  const [showConcernedParty, setShowConcernedParty] = useState(true);
  const [showSignatureView, setShowSignatureView] = useState(false);
  const signature = useSignature();

  const informationSection = useMemo(
    () => (
      <Grid container>
        <GridTwelve>
          <ObjectionFormInformation italics={italics} />
        </GridTwelve>
      </Grid>
    ),
    [GridTwelve, italics]
  );

  const onSubmit = useCallback(
    (withSignature?: boolean) => {
      handleChange({ target: { name: "withSignature", value: withSignature } });
      submitForm();
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const onSignature = useCallback(
    (onClick: () => unknown, onComplete?: () => void) => () => {
      const value = onClick() ?? "";

      handleChange({
        target: { name: "authority.signature", value },
      });

      if (onComplete) {
        onComplete();
      }
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  if (showSignatureView) {
    return (
      <React.Fragment>
        {informationSection}
        <Grid container>
          <GridTwelve>
            <Typography variant="h6">{strings.titles.signature}</Typography>
          </GridTwelve>
          <GridTwelve classes={{ root: centered }}>
            <signature.Component
              onBegin={() => !hasMarkedCanvas && setHasMarkedCanvas(true)}
              canvasProps={{ className: signatureStyles }}
              penColor={TEXT_COLOR}
            />
          </GridTwelve>
        </Grid>
        <Grid classes={{ root }} item container justifyContent="space-between">
          <Button
            color="primary"
            onClick={onSignature(() => setShowSignatureView(false))}
            variant="outlined"
          >
            {strings.buttons.cancel}
          </Button>
          <Button
            color="primary"
            disabled={!hasMarkedCanvas}
            onClick={onSignature(signature.reset, () =>
              setHasMarkedCanvas(false)
            )}
            variant="outlined"
          >
            {strings.buttons.reset}
          </Button>
          <Button
            color="primary"
            disabled={!hasMarkedCanvas}
            onClick={onSignature(signature.save, () => {
              setShowSignatureView(false);
              onSubmit(true);
            })}
            variant="contained"
          >
            {strings.buttons.go}
          </Button>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {informationSection}
      <Grid container>
        <GridTwelve>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">{strings.titles.proposal}</Typography>
            </Grid>
            <Grid item>
              <HideButton
                show={showApplicant}
                toggleShow={() => setShowApplicant(!showApplicant)}
              />
            </Grid>
          </Grid>
          <hr />
          <Typography
            align="justify"
            classes={{ root: showApplicant ? undefined : italics }}
            variant="body1"
          >
            {showApplicant
              ? strings.sections.proposal
              : strings.miscellaneous.hiddenFields}
          </Typography>
        </GridTwelve>
      </Grid>
      <Expandable open={showApplicant}>
        <Grid container>
          <GridFour>
            <FormikField
              label="Name of Applicant"
              name="proposal.applicationName"
              placeholder="Enter the applicant's Name or Business"
            />
          </GridFour>
          <GridEight>
            <FormikField
              label="Description of Proposal"
              name="proposal.description"
              placeholder="Enter a description for the purpose of the planning proposal"
            />
          </GridEight>
          <GridFour>
            <FormikField
              label="Application Number"
              name="proposal.applicationNumber"
              placeholder="Enter the TPA number on the planning permit"
              readonly
            />
          </GridFour>
          <GridEight>
            <FormikField
              label="Description of Land"
              name="proposal.applicantLand"
              placeholder="Enter a description of the land to be developed"
              readonly
            />
          </GridEight>
        </Grid>
      </Expandable>
      <Grid container>
        <GridTwelve>
          <Expandable open={showApplicant}>
            <br />
          </Expandable>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">
                {strings.titles.concernedParty}
              </Typography>
            </Grid>
            <Grid item>
              <HideButton
                show={showConcernedParty}
                toggleShow={() => setShowConcernedParty(!showConcernedParty)}
              />
            </Grid>
          </Grid>
          <hr />
          <Typography
            align="justify"
            classes={{
              root: showConcernedParty ? undefined : italics,
            }}
            variant="body1"
          >
            {showConcernedParty
              ? strings.sections.concernedParty
              : strings.miscellaneous.hiddenFields}
          </Typography>
        </GridTwelve>
      </Grid>
      <Expandable open={showConcernedParty}>
        <Grid container>
          <GridFour>
            <FormikField
              label="Name(s)"
              name="concernedParty.contactName"
              placeholder="Enter your name(s)"
            />
          </GridFour>
          <GridFour>
            <FormikField
              label="Email Address"
              name="concernedParty.contactEmail"
              placeholder="Your Email Address"
            />
          </GridFour>
          <GridFour>
            <FormikField
              label="Phone"
              name="concernedParty.contactPhone"
              placeholder="Enter your contact phone number"
            />
          </GridFour>
          <GridEight>
            <FormikField
              label="Residential Address"
              name="concernedParty.contactAddress"
              placeholder="Enter your residential address"
            />
          </GridEight>
          <GridFour>
            <FormikField
              label="Post Code"
              name="concernedParty.contactPostCode"
              placeholder="Enter your post code"
            />
          </GridFour>
        </Grid>
      </Expandable>
      <Grid container>
        <GridTwelve>
          <Expandable open={showConcernedParty}>
            <br />
          </Expandable>
          <Typography variant="h6">{strings.titles.objection}</Typography>
          <hr />
          <Typography variant="body1" align="justify">
            {strings.sections.objection}
          </Typography>
        </GridTwelve>
      </Grid>
      <Grid container>
        <GridTwelve>
          <FormikField
            label="Grounds of Objection"
            name="objection.concerns"
            placeholder="Detail your concerns with regards to this proposal"
            multiline
            minRows={8}
            maxRows={12}
          />
        </GridTwelve>
      </Grid>
      <Grid container>
        <GridTwelve>
          <FormikField
            label="Changes which could address your concern(s)"
            name="objection.suggestedChanges"
            placeholder="Enter any changes that could be made to the proposal that would address your concer(s)"
            multiline
            minRows={4}
            maxRows={8}
          />
        </GridTwelve>
      </Grid>
      <Grid container>
        <GridSix classes={{ root: left }}>
          <Button
            color="primary"
            onClick={async () => {
              const errors = await validateForm();

              if (errors && Object.keys(errors).length > 0) {
                submitForm();
              } else {
                setShowSignatureView(true);
              }
            }}
            variant="outlined"
          >
            {strings.buttons.createDigitalObjectionForm}
          </Button>
        </GridSix>
        <GridSix classes={{ root: right }}>
          <Button
            color="primary"
            onClick={() => onSubmit(false)}
            variant="contained"
          >
            {strings.buttons.createPrintObjectionForm}
          </Button>
        </GridSix>
      </Grid>
    </React.Fragment>
  );
};
