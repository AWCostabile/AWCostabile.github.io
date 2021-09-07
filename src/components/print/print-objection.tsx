import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useLanguage } from "common/hooks/use-language";
import { IObjectionModel } from "common/models/objection";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PrintLine } from "./print-line";

const useStyles = makeStyles(() => ({
  pageBreak: {
    paddingTop: 8,
  },
}));

const getBreaks = (concernsLines: number, suggestedChangesLines: number) => {
  const totalLines = concernsLines + suggestedChangesLines;

  console.log({
    concernsLines,
    suggestedChangesLines,
    totalLines,
  });

  if (totalLines <= 8) {
    return [false, false];
  }

  if (totalLines >= 26) {
    return [concernsLines > 14, true];
  }

  if (concernsLines > 14) {
    return [true, false];
  }

  return [false, concernsLines > 5 || suggestedChangesLines > 3];
};

interface IPrintObjectionProps {
  onReady: () => void;
  values: IObjectionModel;
}

export const PrintObjection: React.FC<IPrintObjectionProps> = ({
  onReady,
  values,
}) => {
  const { currentLanguage, strings } = useLanguage();
  const isDone = useRef(false);
  const [breaks, setBreaks] = useState({
    concernsBreak: false,
    suggestedChangesBreak: false,
  });
  const [concernsLines, setConsersLines] = useState(0);
  const [suggestedChangesLines, setSuggestedChangesLines] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    if (!concernsLines || !suggestedChangesLines || isDone.current) {
      return;
    }

    isDone.current = true;

    const [concernsBreak, suggestedChangesBreak] = getBreaks(
      concernsLines,
      suggestedChangesLines
    );

    setBreaks({ concernsBreak, suggestedChangesBreak });
  }, [concernsLines, onReady, suggestedChangesLines]);

  useEffect(() => {
    if (isDone.current) {
      onReady();
      return;
    }

    setTimeout(() => {
      if (!isDone.current) {
        onReady();
      }
    }, 100);
  }, [breaks, onReady]);

  return (
    <React.Fragment>
      {breaks.concernsBreak && <div className="pagebreak" />}
      {breaks.concernsBreak && (
        <Typography paragraph variant="body1">
          <br />
          <br />
          <br />
        </Typography>
      )}
      <Grid
        classes={{ root: breaks.concernsBreak ? classes.pageBreak : "" }}
        container
        direction="column"
        alignItems="center"
      >
        <Grid item container xs={11}>
          <PrintLine
            xs={12}
            label="Grounds of Objection*:"
            minLines={5}
            onLines={setConsersLines}
            value={values.objection.concerns}
          />
        </Grid>
        <br />
      </Grid>
      {breaks.suggestedChangesBreak && <div className="pagebreak" />}
      {breaks.suggestedChangesBreak && (
        <Typography paragraph variant="body1">
          <br />
          <br />
          <br />
        </Typography>
      )}
      <Grid
        classes={{
          root: breaks.suggestedChangesBreak ? classes.pageBreak : "",
        }}
        container
        direction="column"
        alignItems="center"
      >
        <Grid item container xs={11}>
          <Grid item>
            <Typography paragraph variant="body1">
              Are there any changes that could be made to the proposal that
              would address your concern(s)? If so, please provide details below
            </Typography>
          </Grid>
          <PrintLine
            xs={12}
            minLines={2}
            onLines={setSuggestedChangesLines}
            value={values.objection.suggestedChanges}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container direction="column" alignItems="center">
        {currentLanguage === "english" ? (
          <Grid item container xs={11}>
            <PrintLine xs={8} label="Signed:" />
            <PrintLine xs={4} label="Date:" />
          </Grid>
        ) : (
          <Grid item container xs={11}>
            <PrintLine
              xs={8}
              label="Signed:"
              subLabel={<em>{strings.document.signature}</em>}
            />
            <PrintLine
              xs={4}
              label="Date:"
              subLabel={<em>{strings.document.date}</em>}
            />
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};
