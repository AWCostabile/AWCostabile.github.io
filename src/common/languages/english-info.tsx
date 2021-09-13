import {
  EMAIL,
  PROPOSAL_LINK,
  PUBLIC_AMENITY,
  ZOOM_ID,
  ZOOM_LINK,
  ZOOM_PASSWORD,
} from "common/constants/app";
import { ILanguage } from "common/models/language";
import { Link } from "components/link";
import { textSpace } from "utils/text";

export const englishInfo: ILanguage["info"] = {
  delivery: (
    <ul>
      <li>Mail - PO Box 1, Glen Waverley VIC 3150</li>
      <li>
        Email -{" "}
        <Link to="mailto:mail@monash.vic.gov.au">mail@monash.vic.gov.au</Link>
      </li>
    </ul>
  ),
  description: [
    <>
      After <strong>Thursday the 16th of September</strong>, the Monash City
      Council will be deciding on whether to issue or refuse a "Notice of
      Decision to Grant a Permit" for a proposed 21 storey building to be
      constructed at <em>251 - 261 Springvale road</em>. As residents of Glen
      Waverley, my family and I believe it is within our community's best
      interests that we gather in support of those concerned with a project on
      this scale. I have created this website in order to provide information on
      this proposed development as well as an interactive form that will assist
      you in creating an objection should you wish to lodge one with the Monash
      City Council.
    </>,
    <>
      To assist us in strengthening our grounds for objection, my family and I
      have commissioned an independent town planning report, scheduled for
      release on Tuesday 14th of September, which I intend on sharing here on
      this website, as the report will investigate the potential impacts of
      over-development in this part of Glen Waverley, so close to the existing
      apartment buildings, both the Galleria and Sky Garden complexes
      respectively. You too will be able to read this report and use it as part
      of your objections if you would like.
    </>,
    <>
      Additionally, I have scheduled a Zoom meeting to be held on{" "}
      <strong>Tuesday 14th September</strong> (details below) at{" "}
      <strong>6.30pm</strong> in order to answer questions and help outline what
      is contained within the Town Planner's report, as well as provide a
      platform for members of the Glen Waverley community to discuss strategies
      we could collectively enact to help make our case for objection stronger.
      Since the period for objection to this proposal ends on the 16th, I
      strongly urge you to notify your neighbours and local contacts in order to
      ensure as many people know about this development as possible.
    </>,
    <span style={{ display: "block", padding: "0 16px" }}>
      <strong>Zoom Meeting ID:</strong>
      <br />
      {textSpace(6)}
      <Link to={ZOOM_LINK}>
        <em>{ZOOM_ID}</em>
      </Link>
      <br />
      <strong>Zoom Meeting Password:</strong>
      <br />
      {textSpace(6)}
      <em style={{ color: "#C22" }}>{ZOOM_PASSWORD}</em>
    </span>,
    <>
      In terms of using the form below to create an objection, your private
      information is important, and so this site has been built from the ground
      up to ensure it runs and stores data only on YOUR device without ever
      sending information online. This however means that the PDF generated by
      submitting the form will NOT be automatically sent to the Monash City
      Council. The form is only there to make it easier for you to fill in your
      details and add in a signature.
    </>,
    <>
      Remember though that if you want to raise an objection, the council's
      responsibility is to maintain the{" "}
      <Link to={PUBLIC_AMENITY}>public amenity</Link> for the wider community,
      and does not cater to the needs of specific individuals who feel they may
      be at an inconvenience. For this reason, when you are writing your
      objection, be sure to include some of the following talking points amongst
      your own concerns:
      <ul>
        <li>
          Twenty one floors is quite excessive for a suburb already seeing a few
          too many high rises going up, and we want to avoid becoming like other
          nearby areas which suffer from over development. Let's send a message
          to developers that they should not be competing with each other on who
          can build the tallest building in the area.
        </li>
        <li>
          The developer's submission only displays a single timeframe to
          demonstrate the shadowing this building may cause. It is clear that
          there will be an absence of natural light around the building and its
          surrounding streets given its proximity to the Galleria and Sky Garden
          apartments. It will likely overshadow the town square design around
          Railway Parade, Kingsway and potentially Coleman Parade before noon.
        </li>
        <li>
          The developer's traffic analysis took place in November 2020 during
          the COVID-19 lockdown period and as such, traffic was not
          representative of what would be expected in the long term when
          activity in the area will surely intensify
        </li>
        <li>
          The building will have REDUCED parking available in their building for
          the over 150 lots proposed, and using the Glen's own parking to
          justify reduced parking is unacceptable.
        </li>
        <li>
          O'Sullivan Road is already a narrow through way often used by parents
          to drop children off at the secondary school and is used by commuters
          looking to park around Glen Waverley for access to public transport.
          Further construction for this building's proposed car park entrance,
          to be shared with the Galleria building's own parking entrance will
          add to the chaos around peak traffic times.
        </li>
        <li>
          The developer's own report outlines the potentially harmful effects
          that wind may play on pedestrians using O'Sullivan Road.
        </li>
        <li>
          The council should be reminded that as our elected representatives,
          they serve the residents of their community first and foremost, and
          should consider community expectations and not only those of potential
          developers.
        </li>
      </ul>
    </>,
    <>
      In order to successfully lodge your objection, make sure you personally
      send it by mail or via email to the Monash City Council at one of the
      following addresses, since this form will NOT send your objection to the
      council on your behalf
    </>,
  ],
  more: [
    <>
      If you would like to research this development proposal yourself, and see
      all the supplied materials the council has made public, click the
      following link, where you can see reports and analysis submitted by the
      developer. There are also links provided there for you to manually create
      your objection should you choose do not use the form provided below.
    </>,
    <Link to={PROPOSAL_LINK}>
      Proposed development at 251 -261 Springvale Road, Glen Waverley
    </Link>,
    <>Thank you for your time and consideration in this matter.</>,
    <>
      Anthony Costabile and family
      <br />
      <em>1213A 25 O' Sullivan Road</em>
      <br />
      <Link to={`mailto:${EMAIL}`}>{EMAIL}</Link>
      <br />
      <br />
      <em style={{ fontSize: "0.8em" }}>
        The town planning report was commissioned by my family and I at a capped
        invoice price of $3000. Whilst we will be sharing the report free of
        charge, we welcome any contributions to help cover this cost and will
        make public any payments made for this cause.
      </em>
    </>,
  ],
};
