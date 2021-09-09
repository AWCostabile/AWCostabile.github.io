import Grid, { GridProps } from "@material-ui/core/Grid";
import { PropsWithChildren, useMemo } from "react";

export const useGrid = (className: string) =>
  useMemo(
    () => ({
      GridFour: ({ children, ...props }: PropsWithChildren<GridProps>) => (
        <Grid item xs={12} lg={6} xl={4} {...props}>
          <div className={className}>{children}</div>
        </Grid>
      ),
      GridSix: ({ children, ...props }: PropsWithChildren<GridProps>) => (
        <Grid item xs={12} lg={6} {...props}>
          <div className={className}>{children}</div>
        </Grid>
      ),
      GridEight: ({ children, ...props }: PropsWithChildren<GridProps>) => (
        <Grid item xs={12} lg={6} xl={8} {...props}>
          <div className={className}>{children}</div>
        </Grid>
      ),
      GridTwelve: ({ children, ...props }: PropsWithChildren<GridProps>) => (
        <Grid item xs={12} {...props}>
          <div className={className}>{children}</div>
        </Grid>
      ),
    }),
    [className]
  );
