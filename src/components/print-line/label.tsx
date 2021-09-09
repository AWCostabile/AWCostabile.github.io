import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { ReactNode } from "react";
import { classNames } from "utils/class-names";
import { IPrintLineCommonProps } from "./types";

interface IPrintLineLabelStyles {
  hidden?: boolean;
}

interface IPrintLineLabelProps
  extends IPrintLineCommonProps<"label">,
    IPrintLineLabelStyles {
  label?: ReactNode;
}

const useStyles = makeStyles<Theme, IPrintLineLabelStyles>(() => ({
  label: ({ hidden }) => ({
    ...(hidden ? { opacity: 0 } : { color: "#333" }),
    fontSize: "1rem",
  }),
}));

export const PrintLineLabel: React.FC<IPrintLineLabelProps> = React.memo(
  ({ classes: classesProp = {}, hidden, label }) => {
    const classes = useStyles({ hidden });

    if (!label) {
      return null;
    }

    return (
      <span className={classNames(classes.label, classesProp.label)}>
        {label}{" "}
      </span>
    );
  },
  () => true
);
