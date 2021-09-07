import Grid, { GridJustification } from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useMemo } from "react";
import { paddingStyles, SideStyle } from "styles/utils";

interface IPageSectionStyles {
  background?: string;
  color?: string;
  fontSize?: string | number;
  height?: number;
  justify?: GridJustification;
  minHeight?: number;
  padding?: SideStyle;
  stretch?: boolean;
}

const useStyles = makeStyles<{}, IPageSectionStyles>(() => ({
  padding: ({ color, fontSize, padding }) =>
    padding ? { color, fontSize, ...paddingStyles.toProps(padding) } : {},
  root: ({
    background,
    color,
    fontSize,
    height,
    minHeight,
    padding,
    stretch,
  }) => ({
    ...(background ? { background } : {}),
    ...(height ? { height } : {}),
    ...(minHeight ? { minHeight } : {}),
    ...(!padding
      ? {
          ...(color ? { color } : {}),
          ...(fontSize ? { fontSize } : {}),
        }
      : {}),
    ...(stretch ? { flex: "1 0 auto" } : {}),
  }),
}));

export const PageSection: React.FC<IPageSectionStyles> = ({
  children,
  justify = "center",
  ...props
}) => {
  const classes = useStyles(props);

  const Wrapper = useMemo(
    (): React.FC =>
      props.padding
        ? ({ children }) => (
            <Grid
              classes={{ root: classes.padding }}
              container
              item
              justifyContent={justify}
            >
              {children}
            </Grid>
          )
        : React.Fragment,
    [classes.padding, justify, props.padding]
  );

  return (
    <Grid
      classes={{ root: classes.root }}
      container
      item
      justifyContent={props.padding ? undefined : justify}
    >
      <Wrapper>{children}</Wrapper>
    </Grid>
  );
};
