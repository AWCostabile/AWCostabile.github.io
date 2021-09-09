import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { defaultPrintState, PrintContext } from "./context";
import { IPrintHelperConfig, PrintHelper } from "./helper";
import { createPrintReducer } from "./reducer";
import {
  IPrintContext,
  IPrintData,
  IPrintState,
  PrintContextAction,
  PrintContextStatus,
} from "./types";

interface IPrintProviderProps<Type extends string = string> {
  config: IPrintHelperConfig<Type>;
  onReady: () => void;
  resizeTimout: number;
}

export const PrintProvider = <Type extends string = string>({
  children,
  config,
  onReady,
  resizeTimout,
}: PropsWithChildren<IPrintProviderProps<Type>>) => {
  const printReducer = useMemo(
    () => createPrintReducer(new PrintHelper(config)),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const [state, dispatch] = useReducer(
    printReducer,
    defaultPrintState as IPrintState<Type>
  );

  const onFieldBreak = useCallback((id: string, shouldBreak: boolean) => {
    dispatch({
      id,
      break: shouldBreak,
      type: PrintContextAction.SET_BREAK,
    });
  }, []);

  const onFieldSize = useCallback(
    (id: string, size: number) => {
      dispatch({ id, size, type: PrintContextAction.SET_SIZE });
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(
    () => {
      if (state.status !== PrintContextStatus.CALCULATING) {
        return;
      }

      dispatch({ type: PrintContextAction.SET_DONE });
      onReady();
    },
    [state.status] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(
    () => {
      setTimeout(() => {
        dispatch({ type: PrintContextAction.SET_SKIP });
      }, resizeTimout);
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const onValues = useCallback(
    (queue: Array<{ field: Type; text: string }>) => {
      dispatch({
        queue,
        type: PrintContextAction.ADD_QUEUE,
      });
    },
    []
  );

  // Items sorted by their type
  const items = useMemo(
    () =>
      state.items.reduce(
        (sorted, item) => ({
          ...sorted,
          [item.field]: [...(sorted[item.field] ?? []), item],
        }),
        {} as Record<Type, Array<IPrintData<Type>>>
      ),
    [state.items]
  );

  return (
    <PrintContext.Provider
      value={
        {
          items,
          onFieldBreak,
          onFieldSize,
          onValues,
        } as unknown as IPrintContext<string>
      }
    >
      {children}
    </PrintContext.Provider>
  );
};
