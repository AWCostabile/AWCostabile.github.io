import { CSSProperties } from "@material-ui/core/styles/withStyles";

interface ISideStyle {
  all?: number | string;
  b?: number | string;
  bottom?: number | string;
  l?: number | string;
  left?: number | string;
  r?: number | string;
  right?: number | string;
  t?: number | string;
  top?: number | string;
  x?: number | string;
  y?: number | string;
}

interface ISideStyleMapping {
  sides: string[];
  value: string;
}

interface ISideStyleValue<Value extends string | number = string | number> {
  top?: Value;
  left?: Value;
  right?: Value;
  bottom?: Value;
}

interface ISideStyleOptions {
  asProps?: boolean;
  property: string;
  separator?: string;
  units?: SideStyleUnits;
  value: SideStyleValue;
}

type SideStyleUnits = "%" | "px";

export type SideStyleValue = ISideStyle | number | string;

class SideStyle {
  private static convert = ({
    asProps,
    property,
    separator = ";",
    units = "px",
    value,
  }: ISideStyleOptions): unknown => {
    if (value === undefined) {
      return asProps ? {} : "";
    }

    if (typeof value === "number" || typeof value === "string") {
      return asProps
        ? { [property]: value }
        : `${property}: ${SideStyle.toValue(value, units)}`;
    }

    const b = value.b ?? value.bottom ?? value.y ?? value.all;
    const l = value.l ?? value.left ?? value.x ?? value.all;
    const r = value.r ?? value.right ?? value.x ?? value.all;
    const t = value.t ?? value.top ?? value.y ?? value.all;

    if (asProps) {
      return t !== undefined && [l, r, b].every((side) => side === t)
        ? SideStyle.convert({
            asProps,
            property,
            separator,
            units,
            value: t,
          })
        : SideStyle.toProps(property, [
            ["bottom", b],
            ["left", l],
            ["right", r],
            ["top", t],
          ]);
    }

    return SideStyle.toShorthand(property, separator, {
      bottom: SideStyle.toValue(b, units),
      left: SideStyle.toValue(l, units),
      right: SideStyle.toValue(r, units),
      top: SideStyle.toValue(t, units),
    });
  };

  private static toLonghand = (property: string, sides: ISideStyleValue) => {
    const { mapped, total } = SideStyle.toMapped(sides);

    if (total !== 4 || mapped[0].sides.length === 1) {
      return SideStyle.toStyles(property, mapped);
    }

    const [first, ...others] = mapped;

    return [
      `${property}: ${first.value}`,
      ...SideStyle.toStyles(property, others),
    ];
  };

  private static toMapped = (queue: ISideStyleValue) => {
    // Track how many items exist in total
    let total = 0;

    // Process queue of items
    const mapped = Object.entries(queue)
      // .filter((item): item is [string, string] => item[] !== undefined)
      .reduce((mappings, [side, value]) => {
        if (value === undefined) {
          return mappings;
        }

        const prevIndex = mappings.findIndex((prev) => prev.value === value);

        if (prevIndex >= 0) {
          mappings[prevIndex].sides.push(side);
        } else {
          mappings.push({ value, sides: [side] });
        }

        total++;

        return mappings;
      }, [] as ISideStyleMapping[]);

    return { mapped, total };
  };

  private static toProps = (
    property: string,
    values: Array<[string, number | string | undefined]>
  ) =>
    values.reduce(
      (styles, [side, value]) =>
        value === undefined
          ? styles
          : {
              ...styles,
              [`${property}${side[0].toUpperCase()}${side.substr(1)}`]: value,
            },
      {} as Record<string, string | number>
    );

  private static toShorthand = (
    property: string,
    separator: string,
    sides: ISideStyleValue
  ) => {
    const { bottom, left, right, top } = sides;

    if ([bottom, left, right, top].includes(undefined)) {
      return SideStyle.toLonghand(property, sides).join(separator);
    }

    if (left !== right) {
      return `${property}: ${top} ${right} ${bottom} ${left}`;
    }

    if (top !== bottom) {
      return `${property}: ${top} ${left} ${bottom}`;
    }

    if (top !== left) {
      return `${property}: ${bottom} ${left}`;
    }

    return `${property}: ${bottom}`;
  };

  private static toStyles = (property: string, mapped: ISideStyleMapping[]) =>
    mapped.reduce(
      (styels, { sides, value }) => [
        ...styels,
        ...sides.map((side) => `${property}-${side}: ${value}`),
      ],
      [] as Array<string>
    );

  private static toValue = (
    value?: number | string,
    units: SideStyleUnits = "px"
  ) => {
    if (typeof value === "string" || typeof value === "undefined") {
      return value;
    }

    if (!value) {
      return `${value}`;
    }

    return `${value}${units}`;
  };

  public static createSideStyle = <
    PropKeys extends number | string | symbol = keyof CSSProperties
  >(
    property: string,
    separator?: string
  ) => ({
    toString: (value: SideStyleValue, units?: SideStyleUnits) =>
      SideStyle.convert({ property, separator, value, units }) as string,
    toProps: (value: SideStyleValue, units?: SideStyleUnits) =>
      SideStyle.convert({
        asProps: true,
        property,
        separator,
        value,
        units,
      }) as Record<PropKeys, string | number>,
  });
}

export const { createSideStyle } = SideStyle;
