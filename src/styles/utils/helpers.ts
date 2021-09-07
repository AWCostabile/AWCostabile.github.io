import { createSideStyle } from "./style-side";

export const marginStyles = createSideStyle<
  "margin" | "marginTop" | "marginLeft" | "marginRight" | "marginBottom"
>("margin");

export const paddingStyles = createSideStyle<
  "padding" | "paddingTop" | "paddingLeft" | "paddingRight" | "paddingBottom"
>("padding");
