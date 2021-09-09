import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useLanguage } from "common/hooks/use-language";
import { Expandable } from "components/expandable";
import { HideButton } from "components/hide-button";
import React, { useState } from "react";

export const ObjectionFormInformation: React.FC = () => {
  const [showText, setShowText] = useState(false);
  const { strings } = useLanguage();

  return (
    <Expandable open={showText} sneekPeek={90}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h6" align="justify">
            {strings.titles.about}
          </Typography>
        </Grid>
        <Grid item>
          <HideButton
            show={showText}
            toggleShow={() => setShowText(!showText)}
          />
        </Grid>
      </Grid>
      {strings.info.description.map((description, index) => (
        <React.Fragment key={index}>
          <br />
          <Typography variant="body1" align="justify">
            {description}
          </Typography>
        </React.Fragment>
      ))}
      {strings.info.delivery}
      {strings.info.more.map((more, index) => (
        <React.Fragment key={index}>
          <br />
          <Typography variant="body1" align="justify">
            {more}
          </Typography>
        </React.Fragment>
      ))}
      <br />
    </Expandable>
  );
};
