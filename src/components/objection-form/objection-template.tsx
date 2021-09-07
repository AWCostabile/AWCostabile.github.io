import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useGrid } from "common/hooks/use-grid";
import { useObjectionForm } from "common/hooks/use-objection-form";
import { IObjectionModel } from "common/models/form-model";
import { Expandable } from "components/expandable";
import { FormikField } from "components/formik-field";
import { HideButton } from "components/hide-button";
import { FormikProps } from "formik";
import React, { useState } from "react";
import { paddingStyles } from "styles/utils";
import { ObjectionFormInformation } from "./objection-info";

const useStyles = makeStyles(() => ({
  italics: { fontStyle: "italic " },
  root: { ...paddingStyles.toProps(16) },
}));

export const ObjectionFormTemplate: React.FC<FormikProps<IObjectionModel>> = ({
  submitForm,
  values,
}) => {
  const { italics, root } = useStyles();
  const { GridFour, GridEight, GridTwelve } = useGrid(root);

  const [showApplicant, setShowApplicant] = useState(false);
  const [showConcernedParty, setShowConcernedParty] = useState(true);

  useObjectionForm(values);

  return (
    <React.Fragment>
      <Grid container>
        <GridTwelve>
          <ObjectionFormInformation />
        </GridTwelve>
      </Grid>
      <Grid container>
        <GridTwelve>
          <Typography variant="h6">Planning Permit being Objected</Typography>
          <hr />
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography
                align="justify"
                classes={{ root: showApplicant ? undefined : italics }}
                variant="body1"
              >
                {showApplicant
                  ? "Fields are pre-populated for your convenience"
                  : "Fields are hidden"}
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
          <Typography variant="h6">Concerned Party (You)</Typography>
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
                  ? "Enter your details as accurately as possible"
                  : "Fields are hidden"}
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
          <Typography variant="h6">Objection Details</Typography>
          <hr />
          <Typography variant="body1" align="justify">
            Enter your concerns and reasons for this object, as well as any
            changes you'd like to see
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
        <GridTwelve>
          <Button onClick={submitForm} variant="contained">
            Download Objection Form
          </Button>
        </GridTwelve>
      </Grid>
    </React.Fragment>
  );
};
