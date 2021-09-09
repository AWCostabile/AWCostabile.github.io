export enum PrintContextAction {
  ADD_QUEUE,
  SET_BREAK,
  SET_DONE,
  SET_TEXT,
  SET_SIZE,
  SET_SKIP,
}

export enum PrintContextStatus {
  // Initial State
  IDLE,

  // Processing incoming text values
  PROCESSING,

  // Rendering text in view
  RENDERING,

  // Calculating the page breaks
  CALCULATING,

  // All Done
  DONE,
}

export enum PrintValueType {
  CONCERNS = "concerns",
  SUGGESTIONS = "suggestions",
  SIGNATURE = "signature",
}

export type PrintContextActions<Type> =
  | {
      queue: Array<{
        field: Type;
        text: string;
      }>;
      type: PrintContextAction.ADD_QUEUE;
    }
  | {
      field: Type;
      text: string;
      type: PrintContextAction.SET_TEXT;
    }
  | {
      id: string;
      size: number;
      type: PrintContextAction.SET_SIZE;
    }
  | {
      id: string;
      break: boolean;
      type: PrintContextAction.SET_BREAK;
    }
  | {
      type: PrintContextAction.SET_DONE | PrintContextAction.SET_SKIP;
    };

export interface IPrintData<Type> extends Record<string, unknown> {
  break: boolean;
  field: Type;
  id: string;
  index: number;
  ready: boolean;
  size: number;
  text: string;
}

export interface IPrintState<Type> {
  items: Array<IPrintData<Type>>;
  status: PrintContextStatus;
}

export interface IPrintContext<Type extends string = string> {
  items: Record<Type, Array<IPrintData<Type>>>;
  onFieldBreak: (id: string, shouldBreak: boolean) => void;
  onFieldSize: (id: string, size: number) => void;
  onValues: (queue: Array<{ field: Type; text: string }>) => void;
}
