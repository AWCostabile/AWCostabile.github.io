import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { PrintLine } from "components/print-line";
import React from "react";
import { IPrintPageCommonProps } from "./common";

const useStyles = makeStyles(() => ({
  label: {
    fontWeight: 600,
  },
  subLabel: {
    fontWeight: 600,
  },
}));

export const PrintContact: React.FC<IPrintPageCommonProps> = ({ values }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item container xs={11}>
        <PrintLine label="I/We*:" value={values.concernedParty.contactName} />
        <PrintLine
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
          classes={classes}
          label="Email Address"
          subLabel="(Please refer to privacy statement below)"
          value={<strong>{values.concernedParty.contactEmail}</strong>}
        />
      </Grid>
    </React.Fragment>
  );
};
