import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IObjectionModel } from "common/models/form-model";
import Logo from "images/logo.gif";
import React from "react";
import { PrintLine } from "./print-line";

const useStyles = makeStyles(() => ({
  box: {
    border: "1px solid #000",
    padding: 8,
    width: 180,
  },
  boxTextBody: { fontSize: "7.5pt", marginBottom: 8 },
  boxTextTitle: { fontSize: "7.5pt", fontWeight: 600, marginBottom: 8 },
  formTitle: { fontWeight: 600 },
  label: {
    fontSize: 18,
    fontWeight: 600,
  },
  value: {
    fontSize: 24,
    fontWeight: 600,
  },
}));

interface IPrintHeaderProps {
  values: IObjectionModel;
}

export const PrintHeader: React.FC<IPrintHeaderProps> = ({ values }) => {
  const { box, boxTextBody, boxTextTitle, formTitle, ...classes } = useStyles();

  return (
    <Grid item container xs={11}>
      <Grid item xs={6}>
        <Typography classes={{ root: formTitle }} variant="h4">
          Objection to Grant a Planning Permit
        </Typography>
        <br />
        <br />
        <PrintLine
          xs={12}
          classes={classes}
          label="Application Number:"
          subLabel="*Indicates required fields to be completed"
          value={values.proposal.applicationNumber}
        />
      </Grid>
      <Grid container item xs={6} direction="column" alignItems="flex-end">
        <Box>
          <img alt="City of Monash" src={Logo} width={200} />
          <br />
          <br />
        </Box>
        <Box className={box}>
          <Typography classes={{ root: boxTextTitle }}>
            Office Use Only
          </Typography>
          <Typography classes={{ root: boxTextBody }}>
            Date Received: ...................................
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
