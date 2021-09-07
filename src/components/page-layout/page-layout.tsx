import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100%",
  },
}));

export const PageLayout: React.FC = ({ children }) => {
  const { root } = useStyles();

  return (
    <Grid
      alignItems="center"
      classes={{ root }}
      container
      direction="column"
      justifyContent="space-between"
    >
      {children}
    </Grid>
  );
};
