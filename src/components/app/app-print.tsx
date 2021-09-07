import { PrintView } from "components/print/print";
import React from "react";
import { usePrintView } from "common/hooks/use-print-view";

export const PrintViewPage: React.FC<{ isMobile?: boolean }> = ({
  isMobile,
}) => (
  <div className="print-root">
    <div className="print-content">
      <PrintView isMobile={isMobile} values={usePrintView().values} />
    </div>
  </div>
);
