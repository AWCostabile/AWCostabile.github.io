import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { NON_BREAKING_SPACE } from "common/constants/app";
import { useLanguage } from "common/hooks/use-language";
import { PrintLine } from "components/print-line";
import Logo from "images/logo.gif";
import React from "react";
import { IPrintPageCommonProps } from "./common";

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
  languageLabel: {
    color: "#C22",
    paddingTop: 12,
    paddingBottom: 12,
  },
  value: {
    fontSize: 24,
    fontWeight: 600,
  },
}));

export const PrintHeader: React.FC<IPrintPageCommonProps> = ({ values }) => {
  const { currentLanguage, strings } = useLanguage();
  const {
    box,
    boxTextBody,
    boxTextTitle,
    formTitle,
    languageLabel,
    ...classes
  } = useStyles();

  return (
    <Grid item container xs={11}>
      <Grid item xs={6}>
        <Typography classes={{ root: formTitle }} variant="h4">
          Objection to Grant a Planning Permit
        </Typography>
        <Typography classes={{ root: languageLabel }} variant="body1">
          {currentLanguage === "english" ? (
            NON_BREAKING_SPACE
          ) : (
            <em>
              Language: <strong>{strings.nameEnglish}</strong>
            </em>
          )}
        </Typography>
        <br />
        <PrintLine
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
