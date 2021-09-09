type ClassesKey = "lineHeight";

export interface IPrintLineCommonProps<Classes extends string = ClassesKey> {
  classes?: Partial<Record<Classes, string>>;
}
