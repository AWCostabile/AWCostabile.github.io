import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { PrintLine } from "components/print-line";
import React from "react";
import { IPrintPageCommonProps } from "./common";

export const PrintProposal: React.FC<IPrintPageCommonProps> = ({ values }) => (
  <React.Fragment>
    <Grid item container xs={11}>
      <Typography paragraph variant="h6">
        Details of objection to Planning Permit
      </Typography>
    </Grid>
    <Grid item container xs={11}>
      <PrintLine
        label="To (name of applicant):"
        value={values.proposal.applicationName}
      />
      <PrintLine
        label="For (description of proposal):"
        value={values.proposal.description}
      />
      <PrintLine
        label="At (desctription of land):"
        value={values.proposal.applicantLand}
      />
    </Grid>
  </React.Fragment>
);
