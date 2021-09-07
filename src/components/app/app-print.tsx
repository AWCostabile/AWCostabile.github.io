import { PrintView } from "components/print/print";
import React from "react";
import { usePrintView } from "common/hooks/use-print-view";

export const PrintViewPage: React.FC = () => {
  const { values } = usePrintView();

  return (
    <div className="print-root">
      <PrintView values={values} />
    </div>
  );
};
