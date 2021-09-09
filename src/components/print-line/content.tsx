import Grid, { GridClassKey, GridProps } from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { ReactNode, useCallback, useMemo, useState } from "react";
import { classNames } from "utils/class-names";
import { PrintLineDots } from "./dots";
import { PrintLineSubLabel } from "./sub-label";
import { IPrintLineCommonProps } from "./types";
import { PrintLineValue } from "./value";

export interface IPrintLineContentProps
  extends IPrintLineCommonProps<"label" | "lineHeight" | "subLabel" | "value">,
    Omit<GridProps, "classes"> {
  gridClasses?: Partial<Record<GridClassKey, string>>;
  handleParagraph: (
    element: HTMLParagraphElement,
    setLines: (lines: number) => void
  ) => void;
  label?: ReactNode;
  subLabel?: ReactNode;
  value?: ReactNode;
}

interface IPrintLineContentStyles {
  ready?: boolean;
}

const useStyles = makeStyles<Theme, IPrintLineContentStyles>(() => ({
  container: {
    position: "relative",
  },
  reRender: {
    position: "absolute",
    top: -4,
  },
}));

export const PrintLineContent: React.FC<IPrintLineContentProps> = ({
  classes: classesProp = {},
  gridClasses = {},
  handleParagraph,
  label,
  subLabel,
  value,
  xs = 12,
  ...props
}) => {
  const [lines, setLines] = useState<null | number>(null);
  const classes = useStyles({ ready: lines !== null });

  const setParagraph = useCallback(
    (element: HTMLParagraphElement) => handleParagraph(element, setLines),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <Grid
      {...props}
      classes={{
        ...gridClasses,
        root: classNames(classes.container, gridClasses.root),
      }}
      item
      xs={xs}
    >
      <PrintLineValue
        classes={{
          label: classesProp.label,
          lineHeight: classesProp.lineHeight,
          value: classNames(
            classesProp.value,
            lines !== null && classes.reRender
          ),
        }}
        setParagraph={setParagraph}
        label={label}
        value={value}
      />
      {useMemo(
        () =>
          Array.from(Array(lines ?? 0)).map((_, index) => (
            <PrintLineDots
              classes={{ lineHeight: classesProp.lineHeight }}
              key={`dots-${index}`}
              label={index === 0 && label}
            />
          )),
        [classesProp.lineHeight, label, lines]
      )}
      <PrintLineSubLabel
        classes={{ subLabel: classesProp.subLabel }}
        subLabel={subLabel}
      />
    </Grid>
  );
};
