import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useLanguage } from "common/hooks/use-language";
import { Expandable } from "components/expandable";
import { HideButton } from "components/hide-button";
import React, { useEffect, useState } from "react";

export const ObjectionFormInformation: React.FC<{ italics?: string }> = ({
  italics,
}) => {
  const [lingering, setLingering] = useState(true);
  const [showText, setShowText] = useState(true);
  const { strings } = useLanguage();

  useEffect(() => {
    if (!showText) {
      setTimeout(() => setLingering(false), 300);
    }
  }, [showText]);

  return (
    <Expandable open={showText} sneekPeek={100}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h6" align="justify">
            {strings.titles.about}
          </Typography>
        </Grid>
        <Grid item>
          <HideButton
            show={showText}
            toggleShow={() => {
              if (!showText) {
                setLingering(true);
                setShowText(true);
              } else {
                setShowText(false);
              }
            }}
          />
        </Grid>
      </Grid>
      <hr />
      {lingering || showText ? (
        <>
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
        </>
      ) : (
        <Typography align="justify" classes={{ root: italics }} variant="body1">
          {strings.miscellaneous.hiddenText}
        </Typography>
      )}
    </Expandable>
  );
};
