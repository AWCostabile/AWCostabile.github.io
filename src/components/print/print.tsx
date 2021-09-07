import Grid from "@material-ui/core/Grid";
import { usePrintView } from "common/hooks/use-print-view";
import { IObjectionModel } from "common/models/objection";
import React, { useEffect, useRef } from "react";
import { useCallback } from "react";
import { sleep } from "utils/sleep";
import { PrintContact } from "./print-contact";
import { PrintHeader } from "./print-header";
import { PrintObjection } from "./print-objection";
import { PrintPrivacy } from "./print-privacy";
import { PrintProposal } from "./print-proposal";

export const PrintView: React.FC<{
  isMobile?: boolean;
  values: IObjectionModel;
}> = ({ isMobile, values }) => {
  const { toFormView } = usePrintView();
  const isReady = useRef(false);

  const onReady = useCallback(
    async () => {
      if (global.window) {
        requestAnimationFrame(global.window.print);
      }

      await sleep(100);

      if (!isMobile) {
        requestAnimationFrame(toFormView);
      } else {
        isReady.current = true;
      }
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    const root = document.getElementById("root");

    if (!root) {
      return;
    }

    const onTouch = () => {
      if (isReady.current) {
        toFormView();
      }
    };

    root.addEventListener("touchstart", onTouch);

    return () => {
      root.addEventListener("touchstart", onTouch);
    };
  }, [toFormView]);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <br />
        <br />
        <br />
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
