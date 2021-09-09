import Grid from "@material-ui/core/Grid";
import { RESIZE_TIMEOUT } from "common/constants/app";
import {
  ALLOWED_CHARACTERS,
  INITIAL_PAGE_BREAK,
  REGULAR_PAGE_BREAK,
  PARAGRAPH_SIZE_MIN,
  PARAGRAPH_SIZE_MAX,
  SENTENCE_SEPARATOR,
  SUGGESTION_OFFSET,
} from "common/constants/print";
import { IPrintHelperConfig } from "common/context/print/helper";
import { PrintProvider } from "common/context/print/provider";
import { PrintValueType } from "common/context/print/types";
import { usePrintPage } from "common/hooks/use-print-page";
import { PrintBreak } from "components/print-break";
import React, { useMemo } from "react";
import { classNames } from "utils/class-names";
import { IPrintPageCommonProps } from "./common";
import { PrintContact } from "./contact";
import { PrintHeader } from "./header";
import { PrintObjection } from "./objection";
import { PrintPrivacy } from "./privacy";
import { PrintProposal } from "./proposal";

interface IPrintPageProps extends IPrintPageCommonProps {
  isDebug?: boolean;
  isMobile?: boolean;
  toFormView: () => void;
}

export const PrintViewPage: React.FC<IPrintPageProps> = ({
  isDebug,
  isMobile,
  toFormView,
  values,
}) => {
  const printConfig: IPrintHelperConfig<PrintValueType> = useMemo(
    () => ({
      offestType: PrintValueType.SUGGESTIONS,
      pageSize: {
        initialOffset: SUGGESTION_OFFSET,
        initialPage: INITIAL_PAGE_BREAK,
        regularPage: REGULAR_PAGE_BREAK,
        // initialPage: isMobile ? 300 : INITIAL_PAGE_BREAK,
        // regularPage: isMobile ? 600 : REGULAR_PAGE_BREAK,
      },
      paragraph: {
        allowedLimit: ALLOWED_CHARACTERS,
        maxSize: PARAGRAPH_SIZE_MAX,
        minSize: PARAGRAPH_SIZE_MIN,
        // maxSize: isMobile ? 600 : PARAGRAPH_SIZE_MAX,
        // minSize: isMobile ? 300 : PARAGRAPH_SIZE_MIN,
      },
      separator: SENTENCE_SEPARATOR,
    }),
    []
    // [isMobile]
  );

  return (
    <div className={classNames("print-root", isDebug && "debug-root")}>
      <div className="print-content">
        {
          // Memoize static field elements
          useMemo(
            () => (
              <Grid container direction="column" alignItems="center">
                <br />
                <PrintHeader values={values} />
                <PrintContact values={values} />
                <br />
                <PrintProposal values={values} />
              </Grid>
            ),
            [values]
          )
        }
        <PrintProvider<PrintValueType>
          config={printConfig}
          resizeTimout={RESIZE_TIMEOUT}
          onReady={usePrintPage({ isDebug, isMobile, toFormView })}
        >
          <PrintObjection isMobile={isMobile} values={values} />
        </PrintProvider>
        <PrintBreak break gapSize={3} />
        {
          // Memoize static Privacy Content
          useMemo(
            () => (
              <Grid container direction="column" alignItems="center">
                <PrintPrivacy />
              </Grid>
            ),
            []
          )
        }
      </div>
    </div>
  );
};
