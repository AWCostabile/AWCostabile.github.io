import {
  LINE_ENDING_PATTERN,
  TERMINATORS_PATTERN,
} from "common/constants/patterns";
import { v4 } from "uuid";
import { IPrintData } from "./types";

type TextSplitter = (value: string) => string[];

interface IPrintHelperSettings<Type> {
  offestType: Type;
  paragraph: {
    allowedLimit: number;
    maxSize: number;
    minSize: number;
  };
  pageSize: {
    initialOffset: number;
    initialPage: number;
    regularPage: number;
  };
  separator: string;
}

export interface IPrintHelperConfig<Type> {
  offestType?: Type;
  paragraph?: {
    allowedLimit?: number;
    maxSize?: number;
    minSize?: number;
  };
  pageSize?: {
    initialOffset?: number;
    initialPage?: number;
    regularPage?: number;
  };
  separator?: string;
}

export class PrintHelper<Type> {
  private settings: IPrintHelperSettings<Type>;

  // ================
  //  STATIC METHODS
  // ================

  // Split text block into paragraphs
  private static splitOnLineEndings = (text: string) =>
    text.split(LINE_ENDING_PATTERN);

  // Split text block into sentences
  private static splitOnTerminators = (text: string) =>
    text
      .split(TERMINATORS_PATTERN)
      .reduceRight(([prev = "", ...rest], next, index) => {
        // Add the terminator and trim
        if (index % 3 === 0) {
          return [`${next}${prev}`.trim(), ...rest];
        }

        // Add the last word
        if (index % 3 === 1) {
          return [`${next}${prev || ""}`, ...rest];
        }

        // Start a new string chain
        return prev ? [next, prev, ...rest] : [next, ...rest];
      }, [] as string[]);

  // Process the incoming strings to generate a list of print items
  private static toPrintQueue = <Type>(paragraphs: string[], field: Type) =>
    paragraphs.map((next, index) => {
      const id = v4();

      return {
        id,
        break: false,
        field,
        index,
        ready: false,
        size: 0,
        text: next,
      };
    });

  // =============
  //  CONSTRUCTOR
  // =============

  constructor(config: IPrintHelperConfig<Type> = {}) {
    this.settings = {
      offestType: (config.offestType ?? "") as Type,
      pageSize: {
        initialOffset: 80,
        initialPage: 450,
        regularPage: 780,
        ...config.pageSize,
      },
      paragraph: {
        allowedLimit: 2500,
        maxSize: 800,
        minSize: 400,
        ...config.paragraph,
      },
      separator: config.separator ?? " ",
    };
  }

  // ====================
  //  INTERNAL FUNCTIONS
  // ====================

  // Join incoming strings according to settings
  private assembleStrings = (value: string[]) =>
    value.reduce((acc, next) => {
      const [prev = ""] = acc.slice(-1);
      const rest = acc.slice(0, -1);

      if (
        prev.length > this.settings.paragraph.minSize ||
        prev.length + next.length > this.settings.paragraph.maxSize
      ) {
        return [...rest, ...(prev ? [prev] : []), next];
      }

      return [
        ...rest,
        prev ? [prev, next].join(this.settings.separator) : next,
      ];
    }, [] as string[]);

  // Calculate the page breaks associated with each print item
  private calculateBreaks = (items: Array<IPrintData<Type>>) => {
    let onInitialPage = true;
    let runningTotal = 0;

    return items.map((item) => {
      // Get page maximum size based on initial page
      const compareTo = onInitialPage
        ? this.settings.pageSize.initialPage
        : this.settings.pageSize.regularPage;

      // Get offset for current page
      const topOffset =
        item.index === 0 && item.field === this.settings.offestType
          ? this.settings.pageSize.initialOffset
          : 0;

      // Get current height offset
      runningTotal += item.size + topOffset;

      if (runningTotal > compareTo) {
        onInitialPage = false;
        runningTotal = 0;

        return { ...item, break: true };
      }

      return item;
    });
  };

  // Create a text processing function
  private createProcessor =
    (
      preProcessor: TextSplitter,
      postProcessor: TextSplitter = (value) => [value]
    ) =>
    (value: string) =>
      preProcessor(value).reduce(
        (strings, textBlock = "") => [
          ...strings,
          ...(textBlock.length < this.settings.paragraph.allowedLimit
            ? !textBlock
              ? []
              : [textBlock]
            : postProcessor(textBlock)),
        ],
        [] as string[]
      );

  // Generate paragraphs from a block of raw text
  private generateParagraphs = this.createProcessor(
    PrintHelper.splitOnLineEndings,
    this.createProcessor((value: string) =>
      this.assembleStrings(PrintHelper.splitOnTerminators(value))
    )
  );

  // ====================
  //  EXTERNAL FUNCTIONS
  // ====================

  // Update the print queue and assess if items are 'Ready'
  public calculatePrintBreaks = (items: Array<IPrintData<Type>>) =>
    this.calculateBreaks(items);

  // Create a list of print items based on a given Type
  public getPrintQueue = (text: string, field: Type) => {
    const paragraphs = this.generateParagraphs(text);
    const printQueue = PrintHelper.toPrintQueue(paragraphs, field);

    return printQueue;
  };

  // Update the print queue and assess if items are 'Ready'
  public updatePrintQueue = (
    prevItems: Array<IPrintData<Type>>,
    id: string,
    update: Partial<IPrintData<Type>>
  ) => {
    if (!id) {
      return { items: prevItems, ready: false };
    }

    const nextItems = prevItems.map((item) =>
      item.id === id ? { ...item, ...update } : item
    );

    if (nextItems.some((item) => !item.ready)) {
      return { items: nextItems, ready: false };
    }

    return {
      items: this.calculateBreaks(nextItems),
      ready: true,
    };
  };
}
