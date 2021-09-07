/* eslint-disable react-hooks/exhaustive-deps */
import Grid from "@material-ui/core/Grid";
import { usePrintView } from "common/hooks/use-print-view";
import { IObjectionModel } from "common/models/objection";
import React from "react";
import { useCallback } from "react";
import { PrintContact } from "./print-contact";
import { PrintHeader } from "./print-header";
import { PrintObjection } from "./print-objection";
import { PrintPrivacy } from "./print-privacy";
import { PrintProposal } from "./print-proposal";

export const PrintView: React.FC<{ values: IObjectionModel }> = ({
  values,
}) => {
  const { toFormView } = usePrintView();
  const onReady = useCallback(() => {
    if (global.window) {
      global.window.print();

      toFormView();
    }
  }, []);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <br />
        <PrintHeader values={values} />
        <PrintContact values={values} />
        <br />
        <PrintProposal values={values} />
      </Grid>
      <PrintObjection onReady={onReady} values={values} />
      <div className="pagebreak" />
      <Grid container direction="column" alignItems="center">
        <PrintPrivacy />
      </Grid>
    </>
  );
};
