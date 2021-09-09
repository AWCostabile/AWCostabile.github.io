import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { ReactNode } from "react";
import { classNames } from "utils/class-names";
import { IPrintLineCommonProps } from "./types";

interface IPrintLineSubLabelProps extends IPrintLineCommonProps<"subLabel"> {
  subLabel?: ReactNode;
}

const useStyles = makeStyles(() => ({
  subLabel: {
    color: "#333",
    fontSize: "0.75rem",
  },
}));

export const PrintLineSubLabel: React.FC<IPrintLineSubLabelProps> = React.memo(
  ({ classes: classesProp = {}, subLabel }) => {
    const classes = useStyles();

    if (!subLabel) {
      return null;
    }

    return (
      <Typography
        align="justify"
        classes={{ root: classNames(classes.subLabel, classesProp.subLabel) }}
        variant="subtitle2"
      >
        {subLabel}
      </Typography>
    );
  },
  () => true
);
