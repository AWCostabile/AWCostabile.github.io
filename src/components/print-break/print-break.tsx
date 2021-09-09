import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useMemo } from "react";
import { classNames } from "utils/class-names";

export const breakProps = (
  shouldBreak: boolean,
  gapSize?: number,
  ignore?: boolean
) => {
  if (!shouldBreak) {
    return {};
  }

  if (ignore) {
    return { gapSize: 0 };
  }

  return { break: true, gapSize };
};

const useStyles = makeStyles(() => ({
  pageBreak: {
    paddingTop: 8,
  },
}));

export const PrintBreak: React.FC<{
  break?: boolean;
  gapSize?: number;
}> = ({ break: shouldBreak, gapSize = 0 }) => {
  const classes = useStyles();

  return useMemo(
    () =>
      shouldBreak || gapSize ? (
        <>
          {shouldBreak && (
            <div className={classNames(classes.pageBreak, "page-break")} />
          )}
          {gapSize > 0 && (
            <Typography paragraph variant="body1">
              {Array.from(Array(gapSize)).map((_, index) => (
                <br key={`br-${index}`} />
              ))}
            </Typography>
          )}
        </>
      ) : null,
    [classes, gapSize, shouldBreak]
  );
};
