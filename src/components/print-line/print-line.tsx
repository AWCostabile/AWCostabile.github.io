import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { useCallback } from "react";
import { classNames } from "utils/class-names";
import { sleep } from "utils/sleep";
import { IPrintLineContentProps, PrintLineContent } from "./content";

interface IPrintLineStyles {
  lineHeight: number;
}

const useStyles = makeStyles<Theme, IPrintLineStyles>(() => ({
  lineHeight: ({ lineHeight }) => ({
    lineHeight: lineHeight ? `${lineHeight}px` : 0,
  }),
}));

interface IPrintLineProps
  extends Omit<IPrintLineContentProps, "handleParagraph"> {
  forceHeight?: number;
  lineHeight?: number;
  minLines?: number;
  singleLine?: boolean;
  offset?: number;
  onParagraph?: (size: number) => void;
}

export const PrintLine: React.FC<IPrintLineProps> = ({
  classes: classesProp = {},
  lineHeight = 28,
  minLines = 0,
  singleLine = false,
  offset = 0,
  onParagraph,
  ...props
}) => (
  <PrintLineContent
    {...props}
    classes={{
      ...classesProp,
      lineHeight: classNames(
        useStyles({ lineHeight }).lineHeight,
        classesProp.lineHeight
      ),
    }}
    handleParagraph={useCallback(
      async (element: HTMLParagraphElement, setLines) => {
        await sleep(10);

        // Extract height for Element with respect to any offset
        const height = element.getBoundingClientRect().height - offset;

        if (singleLine) {
          setLines(1);
        } else {
          // Derive number of lines
          const lines = Math.floor(height / lineHeight);

          // Set number of lines to be rendered by PrintLine
          setLines(Math.max(lines, minLines));
        }

        // Update paragraph listener
        if (onParagraph) {
          onParagraph(height);
        }
      },
      [] // eslint-disable-line react-hooks/exhaustive-deps
    )}
  />
);
