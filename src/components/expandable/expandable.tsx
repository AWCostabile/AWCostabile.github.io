import Collapse from "@material-ui/core/Collapse";
import React from "react";
import { ExpandableOverlay } from "./expandable-overlay";

interface IExpandableProps {
  sneekPeek?: number;
  open?: boolean;
}

export const Expandable: React.FC<IExpandableProps> = ({
  children,
  sneekPeek,
  open,
}) => (
  <React.Fragment>
    <Collapse collapsedSize={sneekPeek} in={open}>
      {children}
    </Collapse>
    {sneekPeek && !open && <ExpandableOverlay />}
  </React.Fragment>
);
