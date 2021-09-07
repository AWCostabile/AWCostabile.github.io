export const classNames = (
  ...args: Array<string | 0 | null | false | undefined>
) =>
  Array.from(args)
    .filter((className) => !!className)
    .join(" ");
