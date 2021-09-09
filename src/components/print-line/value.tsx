import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TEXT_COLOR } from "common/constants/app";
import React, { ReactNode, useCallback } from "react";
import { classNames } from "utils/class-names";
import { PrintLineLabel } from "./label";
import { IPrintLineCommonProps } from "./types";

interface IPrintLineValueProps
  extends IPrintLineCommonProps<"label" | "lineHeight" | "value"> {
  setParagraph: (element: HTMLParagraphElement) => void;
  label?: ReactNode;
  value?: ReactNode;
}

const useStyles = makeStyles(() => ({
  value: {
    color: TEXT_COLOR,
    whiteSpace: "pre-wrap",
    width: "100%",
  },
}));

export const PrintLineValue: React.FC<IPrintLineValueProps> = ({
  classes: classesProp = {},
  setParagraph,
  label,
  value,
}) => (
  <Typography
    align="justify"
    classes={{
      root: classNames(
        useStyles().value,
        classesProp.lineHeight,
        classesProp.value
      ),
    }}
    ref={useCallback(
      (element: HTMLParagraphElement | null) => {
        if (!element) {
          return;
        }

        setParagraph(element);
      },
      [] // eslint-disable-line react-hooks/exhaustive-deps
    )}
    variant="body2"
  >
    <PrintLineLabel classes={{ label: classesProp.label }} label={label} />
    {value}
  </Typography>
);
