import { createContext } from "react";
import { IPrintContext, IPrintState, PrintContextStatus } from "./types";

export const defaultPrintState: IPrintState<unknown> = {
  items: [],
  status: PrintContextStatus.IDLE,
};

export const PrintContext = createContext<IPrintContext<string>>({
  items: {},
  onFieldBreak: () => null,
  onFieldSize: () => null,
  onValues: () => null,
});
