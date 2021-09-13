import { NON_BREAKING_SPACE } from "common/constants/app";

export const textSpace = (spaces: number) =>
  Array.from(Array(spaces))
    .map(() => NON_BREAKING_SPACE)
    .join("");
