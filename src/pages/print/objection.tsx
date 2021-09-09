import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { PrintContext } from "common/context/print/context";
import { PrintValueType } from "common/context/print/types";
import { useLanguage } from "common/hooks/use-language";
import { breakProps, PrintBreak } from "components/print-break";
import { PrintLine } from "components/print-line";
import React, { useContext, useEffect, useMemo } from "react";
import { IPrintPageCommonProps } from "./common";

interface IPrintObjectionProps extends IPrintPageCommonProps {
  isMobile?: boolean;
}

const signatureText = "signature";

const defaultItem = [{ break: false, id: "", text: "" }];

export const PrintObjection: React.FC<IPrintObjectionProps> = ({ values }) => {
  // Get strings required to render document
  const { currentLanguage, strings } = useLanguage();
  const printContext = useContext(PrintContext);

  const concerns = printContext.items[PrintValueType.CONCERNS] ?? defaultItem;

  const suggestions =
    printContext.items[PrintValueType.SUGGESTIONS] ?? defaultItem;

  const [signature] =
    printContext.items[PrintValueType.SIGNATURE] ?? defaultItem;

  const hasSignature = signature.text === signatureText;
  const withDateStamp = useMemo(
    () =>
      hasSignature ? (
        <span style={{ fontSize: "1.25em", paddingLeft: 24 }}>
          {new Date(values.authority.date).toLocaleDateString()}
        </span>
      ) : null,
    [hasSignature, values.authority.date]
  );

  useEffect(
    () => {
      printContext.onValues([
        {
          field: PrintValueType.CONCERNS,
          text: values.objection.concerns,
        },
        {
          field: PrintValueType.SUGGESTIONS,
          text: values.objection.suggestedChanges,
        },
        ...(values.authority.signature
          ? [
              {
                field: PrintValueType.SIGNATURE,
                text: signatureText,
              },
            ]
          : []),
      ]);
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const addSpace = useMemo(
    () => concerns.reduce((sum, next) => sum + (next.break ? 1 : 0), 0),
    [concerns]
  );

  const signatureImage = useMemo(
    () =>
      hasSignature && (
        <span id="signature">
          <img
            alt="signature"
            src={values.authority.signature}
            style={{ display: "block" }}
          />
        </span>
      ),
    [hasSignature, values.authority.signature]
  );

  return (
    <>
      {concerns.map((concern, index) => (
        <React.Fragment key={index}>
          <PrintBreak {...breakProps(concern.break, 2, index === 0)} />
          <Grid alignItems="center" container direction="column">
            <Grid item container xs={11}>
              <PrintLine
                label={index === 0 && "Grounds of Objection*:"}
                minLines={index === 0 && concerns.length === 1 ? 5 : 1}
                onParagraph={(size) =>
                  printContext.onFieldSize(concern.id, size)
                }
                value={`${concern.text}\n`}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      ))}
      {suggestions.map((suggestion, index) => (
        <React.Fragment key={index}>
          {index === 0 && <br />}
          <PrintBreak
            {...(index === 0 && !suggestion.break
              ? { gapSize: addSpace ? addSpace + 1 : 2 }
              : breakProps(suggestion.break, 2))}
          />
          <Grid alignItems="center" container direction="column">
            <Grid item container xs={11}>
              {index === 0 && (
                <Grid item>
                  <Typography paragraph variant="body1">
                    Are there any changes that could be made to the proposal
                    that would address your concern(s)? If so, please provide
                    details below
                  </Typography>
                </Grid>
              )}
              <PrintLine
                // extraHeight={concerns.length > 1 && index === 0 ? 14 : 0}
                minLines={index ? 1 : 2}
                onParagraph={(size) =>
                  printContext.onFieldSize(suggestion.id, size)
                }
                value={`${suggestion.text}\n`}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      ))}
      <PrintBreak
        {...breakProps(signature.break, 2)}
        gapSize={hasSignature ? 4 : 2}
      />
      <Grid container direction="column" alignItems="center">
        {currentLanguage === "english" ? (
          <Grid item container xs={11}>
            <PrintLine
              xs={8}
              offset={hasSignature ? -72 : 0}
              label="Signed:"
              singleLine
              value={signatureImage}
            />
            <PrintLine xs={4} label="Date:" value={withDateStamp} />
          </Grid>
        ) : (
          <Grid item container xs={11}>
            <PrintLine
              xs={8}
              offset={hasSignature ? -72 : 0}
              label="Signed:"
              singleLine
              subLabel={<em>{strings.document.signature}</em>}
              value={signatureImage}
            />
            <PrintLine
              xs={4}
              label="Date:"
              subLabel={<em>{strings.document.date}</em>}
              value={withDateStamp}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};
