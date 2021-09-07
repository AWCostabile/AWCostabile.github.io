import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { IObjectionModel } from "common/models/form-model";
import React from "react";
import { PrintLine } from "./print-line";

const useStyles = makeStyles(() => ({
  label: {
    fontWeight: 600,
  },
  subLabel: {
    fontWeight: 600,
  },
}));

export const PrintContact: React.FC<{ values: IObjectionModel }> = ({
  values,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item container xs={11}>
        <PrintLine
          xs={12}
          label="I/We*:"
          value={values.concernedParty.contactName}
        />
        <PrintLine
          xs={12}
          label="Of (Address)*:"
          value={values.concernedParty.contactAddress}
        />
        <PrintLine
          xs={5}
          label="Post Code*:"
          value={values.concernedParty.contactPostCode}
        />
        <PrintLine
          xs={7}
          classes={{ subLabel: classes.subLabel }}
          label="Telephone:"
          subLabel="(Please refer to privacy statement below)"
          value={values.concernedParty.contactPhone}
        />
      </Grid>
      <Grid item container xs={11}>
        <PrintLine
          xs={12}
          classes={classes}
          label="Email Address"
          subLabel="(Please refer to privacy statement below)"
          value={<strong>{values.concernedParty.contactEmail}</strong>}
        />
      </Grid>
    </React.Fragment>
  );
};
