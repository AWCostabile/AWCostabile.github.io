import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { COMMUNITY_AMENITY, PROPOSAL_LINK } from "common/constants/app";
import { Expandable } from "components/expandable";
import { HideButton } from "components/hide-button";
import { Link } from "components/link";
import React, { useState } from "react";

export const ObjectionFormInformation: React.FC = () => {
  const [showText, setShowText] = useState(false);

  return (
    <Expandable open={showText} sneekPeek={90}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h6" align="justify">
            About this form
          </Typography>
        </Grid>
        <Grid item>
          <HideButton
            show={showText}
            toggleShow={() => setShowText(!showText)}
          />
        </Grid>
      </Grid>
      <br />
      <Typography variant="body1" align="justify">
        This form helper was created to assist the local residents of Glen
        Waverley in their objections to the recent announcement of a planned
        development at <em>251 -261 Springvale Road</em>. Using the fields
        below, make certain that you supply as much information as you can to
        ensure your objection is taken seriously. When you have completed all
        the fields, you will be able to click the{" "}
        <strong>Print Object Form</strong> button at the bottom of this page in
        order to view your completed form and save it for printing.
      </Typography>
      <br />
      <Typography variant="body1" align="justify">
        While you may include personal reasons for objecting to this proposal,
        such as{" "}
        <strong>
          <em>my view will be blocked</em>
        </strong>{" "}
        or{" "}
        <strong>
          <em>my property's value is at risk</em>
        </strong>
        , it is important to remember that the Council's responsibility first
        and formost is to look after the{" "}
        <Link to={COMMUNITY_AMENITY}>community amenity</Link>, and as such, the
        strongest arguments you can provide will relate to how this development
        may affect public safety, how it may be a nuisance such as impact on
        parking, and how it may negatively impact the character of Glen
        Wavelery.
      </Typography>
      <br />
      <Typography variant="body1" align="justify">
        Unfortunately, there is a high likelihood that this development will
        indeed go ahead however the size and scope of the development may be
        influenced by the number of objections made and the willingness to find
        a compromise, so it is <strong>strongly</strong> recommended that you
        make suggestions as to the sorts of changes to this development you
        would be willing to consider.
      </Typography>
      <br />
      <Typography variant="body1" align="justify">
        As the deadline for objections is{" "}
        <strong>Thursday 16 September 2021</strong>, you should aim to complete
        this as soon as you can! Simply print off the form, sign and date the
        physical copy, and then send it back to the Monash City council as soon
        as possible via one of the following methods of delivery
      </Typography>
      <ul>
        <li>Mail - PO Box 1, Glen Waverley VIC 3150</li>
        <li>
          Email -{" "}
          <Link to={`mailto:mail@monash.vic.gov.au`}>
            mail@monash.vic.gov.au
          </Link>
        </li>
      </ul>
      <br />
      <Typography variant="body1" align="justify">
        For information about the proposal itself, click the following link:
      </Typography>
      <br />
      <Typography variant="body1" align="justify">
        <Link to={PROPOSAL_LINK}>
          Proposed development at 251 -261 Springvale Road, Glen Waverley
        </Link>
      </Typography>
      <br />
    </Expandable>
  );
};
