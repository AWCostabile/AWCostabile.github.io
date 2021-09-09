import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TEXT_DOTS } from "common/constants/print";
import React, { ReactNode } from "react";
import { classNames } from "utils/class-names";
import { PrintLineLabel } from "./label";
import { IPrintLineCommonProps } from "./types";

interface IPrintLineDotsProps extends IPrintLineCommonProps<"lineHeight"> {
  label?: ReactNode;
}

const useStyles = makeStyles(() => ({
  dots: {
    color: "#888",
    overflow: "hidden",
    width: "100%",
    zIndex: 0,
  },
}));

export const PrintLineDots: React.FC<IPrintLineDotsProps> = ({
  classes: classesProp = {},
  label,
}) => {
  const classes = useStyles().dots;

  return (
    <Typography
      align="justify"
      classes={{ root: classNames(classes, classesProp.lineHeight) }}
      noWrap
      variant={label ? "body1" : "body2"}
    >
      <PrintLineLabel hidden label={label} />
      {TEXT_DOTS}
    </Typography>
  );
};
