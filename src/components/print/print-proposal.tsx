import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { IObjectionModel } from "common/models/form-model";
import React from "react";
import { PrintLine } from "./print-line";

export const PrintProposal: React.FC<{ values: IObjectionModel }> = ({
  values,
}) => (
  <React.Fragment>
    <Grid item container xs={11}>
      <Typography paragraph variant="h6">
        Details of objection to Planning Permit
      </Typography>
    </Grid>
    <Grid item container xs={11}>
      <PrintLine
        xs={12}
        label="To (name of applicant):"
        value={values.proposal.applicationName}
      />
      <PrintLine
        xs={12}
        label="For (description of proposal):"
        value={values.proposal.description}
      />
      <PrintLine
        xs={12}
        label="At (desctription of land):"
        value={values.proposal.applicantLand}
      />
    </Grid>
  </React.Fragment>
);
