import { PrintHelper } from "./helper";
import {
  IPrintState,
  PrintContextAction,
  PrintContextActions,
  PrintContextStatus,
} from "./types";

export const createPrintReducer = <Type>(printHelper: PrintHelper<Type>) => {
  const reducer = (
    state: IPrintState<Type>,
    action: PrintContextActions<Type>
  ): IPrintState<Type> => {
    // If 'Done' state, then no further processing should occur
    if (state.status === PrintContextStatus.DONE) {
      return state;
    }

    switch (action.type) {
      case PrintContextAction.ADD_QUEUE:
        if (state.status !== PrintContextStatus.IDLE) {
          return state;
        }

        return action.queue.reduce(
          (prev, item) =>
            reducer(prev, { ...item, type: PrintContextAction.SET_TEXT }),
          state
        );

      case PrintContextAction.SET_TEXT:
        return {
          items: [
            ...state.items,
            ...printHelper.getPrintQueue(action.text, action.field),
          ],
          status: PrintContextStatus.PROCESSING,
        };

      case PrintContextAction.SET_BREAK:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.id ? { ...item, break: action.break } : item
          ),
        };

      case PrintContextAction.SET_DONE:
        return { ...state, status: PrintContextStatus.DONE };

      case PrintContextAction.SET_SIZE:
        const updates = printHelper.updatePrintQueue(state.items, action.id, {
          size: action.size,
          ready: true,
        });

        return {
          ...state,
          items: updates.items,
          status: updates.ready
            ? PrintContextStatus.CALCULATING
            : PrintContextStatus.RENDERING,
        };

      case PrintContextAction.SET_SKIP:
        return PrintContextStatus.RENDERING >= state.status
          ? {
              items: printHelper.calculatePrintBreaks(state.items),
              status: PrintContextStatus.CALCULATING,
            }
          : state;

      default:
        return state;
    }
  };

  return reducer;
};
