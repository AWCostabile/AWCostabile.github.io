import Grid from "@material-ui/core/Grid";
import { IObjectionModel } from "common/models/form-model";
import React from "react";
import { PrintContact } from "./print-contact";
import { PrintHeader } from "./print-header";
import { PrintObjection } from "./print-objection";
import { PrintProposal } from "./print-proposal";

export const PrintView: React.FC<{ values: IObjectionModel }> = ({
  values,
}) => (
  <Grid container direction="column" alignItems="center">
    <Grid item xs={12}>
      <br />
      <br />
    </Grid>
    <PrintHeader values={values} />
    <PrintContact values={values} />
    <br />
    <PrintProposal values={values} />
    <PrintObjection values={values} />
  </Grid>
);
