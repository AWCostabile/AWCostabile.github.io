import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useGrid } from "common/hooks/use-grid";
import { useLanguage } from "common/hooks/use-language";
import { IObjectionModel } from "common/models/objection";
import { Expandable } from "components/expandable";
import { FormikField } from "components/formik-field";
import { HideButton } from "components/hide-button";
import { FormikProps } from "formik";
import React, { useState } from "react";
import { paddingStyles } from "styles/utils";
import { ObjectionFormInformation } from "./objection-info";

const useStyles = makeStyles(() => ({
  centered: { textAlign: "center" },
  italics: { fontStyle: "italic " },
  root: { ...paddingStyles.toProps(16) },
}));

export const ObjectionFormTemplate: React.FC<FormikProps<IObjectionModel>> = ({
  submitForm,
  values,
}) => {
  const { strings } = useLanguage();
  const { centered, italics, root } = useStyles();
  const { GridFour, GridEight, GridTwelve } = useGrid(root);

  const [showApplicant, setShowApplicant] = useState(false);
  const [showConcernedParty, setShowConcernedParty] = useState(true);

  return (
    <React.Fragment>
      <Grid container>
        <GridTwelve>
          <ObjectionFormInformation />
        </GridTwelve>
      </Grid>
      <Grid container>
        <GridTwelve>
          <Typography variant="h6">{strings.titles.proposal}</Typography>
          <hr />
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography
                align="justify"
                classes={{ root: showApplicant ? undefined : italics }}
                variant="body1"
              >
                {showApplicant
                  ? strings.sections.proposal
                  : strings.miscellaneous.hiddenFields}
              </Typography>
            </Grid>
            <Grid item>
              <HideButton
                show={showApplicant}
                toggleShow={() => setShowApplicant(!showApplicant)}
              />
            </Grid>
          </Grid>
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
          <Typography variant="h6">{strings.titles.concernedParty}</Typography>
          <hr />
          <Grid container justifyContent="space-between">
            <Grid item>
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
            </Grid>
            <Grid item>
              <HideButton
                show={showConcernedParty}
                toggleShow={() => setShowConcernedParty(!showConcernedParty)}
              />
            </Grid>
          </Grid>
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
        <GridTwelve classes={{ root: centered }}>
          <Button color="primary" onClick={submitForm} variant="contained">
            {strings.buttons.printObjectionForm}
          </Button>
        </GridTwelve>
      </Grid>
    </React.Fragment>
  );
};
