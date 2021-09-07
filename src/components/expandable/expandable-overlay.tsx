import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  fade: {
    position: "absolute",
    height: 8,
    boxShadow: "0 0 8px rgba(255,255,255, 1)",
    width: "100%",
    zIndex: 10,
  },
  root: {
    width: "100%",
    position: "relative",
  },
}));

export const ExpandableOverlay: React.FC = () => {
  const { fade, root } = useStyles();

  return (
    <div className={root}>
      <div className={fade}></div>
    </div>
  );
};
