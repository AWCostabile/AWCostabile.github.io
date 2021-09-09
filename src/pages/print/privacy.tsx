import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(() => ({
  bold: {
    fontWeight: 600,
  },
}));

export const PrintPrivacy: React.FC = () => {
  const { bold } = useStyles();

  return (
    <React.Fragment>
      <Grid item container xs={11}>
        <Typography classes={{ root: bold }} variant="body2">
          Please read the following explanatory advice:
        </Typography>
      </Grid>
      <Grid item container xs={11}>
        <ol>
          <li>
            <Typography paragraph variant="body2">
              To make a submission you should clearly complete the details on
              this form and lodge it with Council either online, by email, mail,
              fax, or in person.
            </Typography>
          </li>
          <li>
            <Typography paragraph variant="body2">
              State the reason for your objection and how you would be affected
              if a permit was granted.
            </Typography>
          </li>
          <li>
            <Typography paragraph variant="body2">
              If your submission is about the impact the application could have
              on a property which is not your principal place of residence,
              please provide the address of that property and details of your
              interest in it when stating how you would be affected.
            </Typography>
          </li>
          <li>
            <Typography paragraph variant="body2">
              To ensure your submission is considered by Council it should be
              received by the date specified in the Notice of Application.
            </Typography>
          </li>
          <li>
            <Typography paragraph variant="body2">
              Please be aware that copies of submissions received are placed on
              a public file and are not confidential. They may be made available
              to any person as part of the planning process.
            </Typography>
          </li>
          <li>
            <Typography paragraph variant="body2">
              If, despite your objection, Council decides to grant the permit,
              you can appeal against the decision. Details of the appeal
              procedures are set out on the back of the Notice of Decision that
              you will receive. An appeal must be made on a prescribed form
              (obtainable from the Victorian Civil and Administrative Tribunal)
              and must be accompanied by the prescribed fee. A copy must be
              given to Council, the Applicant and all Objectors. The closing
              date for appeals is 21 days after Council gives notice of its
              decision.
            </Typography>
          </li>
          <li>
            <Typography paragraph variant="body2">
              The Applicant can also appeal Council's decision. The provisions
              are set out in the Refusal of Planning Application Notice that
              will be issued at that time.
            </Typography>
          </li>
        </ol>
      </Grid>
      <Grid item container xs={11}>
        <Typography classes={{ root: bold }} variant="body2">
          Privacy collection notice:
        </Typography>
      </Grid>
      <Grid item container xs={11}>
        <Typography paragraph variant="body2">
          Your objection and the personal information on this form is collected
          by Council for the purposes of the planning process as set out in the
          Planning and Environment Act 1987 (PE Act).
          <br />
          <br />
          If you do not provide your name and address, Council will not be able
          to consider your objection.
          <br />
          <br />
          Your objection will be available at the Council office for any person
          to inspect and copies may be made available on request to any person
          for the relevant period set out in the PE Act.
          <br />
          <br />
          You must not submit any personal information or copyright material of
          third parties without their informed consent. By submitting the
          material, you agree that the use of the material as detailed above
          does not breach any third party’s right to privacy and copyright.
          <br />
          <br />
          You can request access to your personal information by contacting
          Council.
        </Typography>
      </Grid>
    </React.Fragment>
  );
};
