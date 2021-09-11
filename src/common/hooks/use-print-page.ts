import { useCallback, useEffect, useRef } from "react";
import { sleep } from "utils/sleep";

interface IUsePrintPageConfig {
  handlePrint: () => void;
  isDebug?: boolean;
  isMobile?: boolean;
  toFormView: () => void;
}

export const usePrintPage = ({
  handlePrint,
  isDebug,
  isMobile,
  toFormView,
}: IUsePrintPageConfig) => {
  const isReady = useRef(false);

  const onReady = useCallback(
    async () => {
      handlePrint();

      await sleep(100);

      if (!isMobile && !isDebug) {
        requestAnimationFrame(toFormView);
      } else {
        isReady.current = true;
      }
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    const root = document.getElementById("root");

    if (!root) {
      return;
    }

    const onTouch = () => {
      if (isReady.current) {
        toFormView();
      }
    };

    root.addEventListener("touchstart", onTouch);

    return () => {
      root.addEventListener("touchstart", onTouch);
    };
  }, [toFormView]);

  return onReady;
};
