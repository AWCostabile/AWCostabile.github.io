import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { IObjectionModel } from "common/models/form-model";
import React from "react";
import { PrintLine } from "./print-line";

export const PrintObjection: React.FC<{ values: IObjectionModel }> = ({
  values,
}) => (
  <React.Fragment>
    <Grid item container xs={11}>
      <PrintLine
        xs={12}
        label="Grounds of Objection*:"
        minLines={6}
        value={values.objection.concerns}
      />
    </Grid>
    <br />
    <Grid item container xs={11}>
      <Grid item>
        <Typography paragraph variant="body1">
          Are there any changes that could be made to the proposal that would
          address your concern(s)? If so, please provide details below
        </Typography>
      </Grid>
      <PrintLine
        xs={12}
        minLines={3}
        value={values.objection.suggestedChanges}
      />
    </Grid>
    <br />
    <br />
    <Grid item container xs={11}>
      <PrintLine xs={8} label="Signed:" />
      <PrintLine xs={4} label="Date:" />
    </Grid>
  </React.Fragment>
);
