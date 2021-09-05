import { PageSection } from "components/page-section";
import React from "react";

export const Header: React.FC = ({ children }) => (
  <PageSection background="#28C" color="#F2F2F2" padding={{ all: 16 }}>
    {children}
  </PageSection>
);
