import Grid, { GridProps } from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TEXT_DOTS } from "common/constants/app";
import React, { ReactNode, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { classNames } from "utils/class-names";

interface IPrintLine extends Omit<GridProps, "classes"> {
  classes?: {
    label?: string;
    subLabel?: string;
    value?: string;
  };
  label?: string;
  minLines?: number;
  onLines?: (lines: number) => void;
  subLabel?: ReactNode;
  value?: ReactNode;
}

const heightOffset = 28;

const useStyles = makeStyles<Theme, { subLabel?: boolean }>(() => ({
  container: {
    position: "relative",
  },
  dots: {
    color: "#888",
    overflow: "hidden",
    width: "100%",
    zIndex: 0,
  },
  lineHeight: {
    lineHeight: `${heightOffset}px`,
  },
  dotsLabel: {
    opacity: 0,
  },
  space: {
    height: ({ subLabel }) => (subLabel ? 20 : 4),
  },
  subLabel: {
    color: "#333",
    fontSize: "0.75rem",
  },
  text: {
    color: "#048",
    top: -4,
    width: "100%",
    position: "absolute",
  },
  textLabel: {
    color: "#333",
    fontSize: "1rem",
  },
  value: {
    whiteSpace: "pre-wrap",
  },
}));

export const PrintLine: React.FC<IPrintLine> = ({
  children,
  classes: classesProp = {},
  label,
  onLines,
  minLines,
  subLabel,
  value,
  ...props
}) => {
  const classes = useStyles({ subLabel: !!subLabel });
  const textField = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState(0);

  useEffect(() => {
    if (!textField.current) {
      return;
    }

    const { height } = textField.current.getBoundingClientRect();

    const linesToAdd = Math.floor(height / heightOffset) - 1;
    setLines(Math.max(linesToAdd, minLines ?? 0));
  }, [minLines]);

  useEffect(() => {
    if (!onLines || !lines) {
      return;
    }

    onLines(lines);
  }, [lines, onLines]);

  return (
    <Grid xs={12} {...props} classes={{ root: classes.container }} item>
      <div className={classes.dots}>
        <Typography
          classes={{ root: classes.lineHeight }}
          noWrap
          variant="body1"
        >
          <span className={classes.dotsLabel}>{label} </span>
          {TEXT_DOTS}
        </Typography>
        {lines > 0 &&
          Array.from(Array(lines)).map((_, index) => (
            <Typography
              classes={{ root: classes.lineHeight }}
              key={index}
              noWrap
              variant="body2"
            >
              {TEXT_DOTS}
            </Typography>
          ))}
        <div className={classes.space} />
      </div>
      <div className={classes.text} ref={textField}>
        <Typography
          classes={{
            root: classNames(
              classes.lineHeight,
              classes.value,
              classesProp.value
            ),
          }}
          variant="body2"
          align="justify"
        >
          <span className={classNames(classes.textLabel, classesProp.label)}>
            {label}
          </span>{" "}
          {value}
        </Typography>{" "}
        <Typography
          classes={{ root: classNames(classes.subLabel, classesProp.subLabel) }}
          variant="subtitle2"
          align="justify"
        >
          {subLabel}
        </Typography>
      </div>
    </Grid>
  );
};
// minLines
