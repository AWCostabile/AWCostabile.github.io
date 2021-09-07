import { useEffect, useRef } from "react";

export const useInterval = (
  action: () => void,
  timeout: number,
  deps: any[] = []
) => {
  const actionRef = useRef<() => void>(() => null);
  const intervalRef = useRef<NodeJS.Timeout | number>(0);

  useEffect(() => {
    actionRef.current = action;
  });

  useEffect(
    () => {
      // Clear previous instances of the interval timeout
      if (intervalRef.current > 0) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }

      // Create a new instance of the interval timeout
      intervalRef.current = setInterval(() => actionRef.current(), timeout);

      // On unmount, clear any instances of the interval timeout
      return () => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      };
    },
    [...deps] // eslint-disable-line react-hooks/exhaustive-deps
  );
};
