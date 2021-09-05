import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ObjectionForm } from "components/objection-form";
import { PageSection } from "components/page-section";
import React from "react";
import { paddingStyles } from "styles/utils";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100%",
    position: "relative",
  },
  content: {
    ...paddingStyles.toProps(16),
  },
}));

export const Content: React.FC = () => {
  const classes = useStyles();

  return (
    <PageSection justify="center" stretch>
      <Grid classes={{ root: classes.root }} item md={8} xs={12}>
        <div className={classes.content}>
          <ObjectionForm />
        </div>
      </Grid>
    </PageSection>
  );
};
