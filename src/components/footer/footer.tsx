import { PageSection } from "components/page-section";
import React from "react";

export const Footer: React.FC = ({ children }) => (
  <PageSection
    background="#9CE"
    color="#048"
    fontSize={10}
    justify="flex-end"
    padding={{ x: 6, y: 4 }}
  >
    {children}
  </PageSection>
);
