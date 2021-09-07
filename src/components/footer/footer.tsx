import { NON_BREAKING_SPACE } from "common/constants/app";
import { useLanguage } from "common/hooks/use-language";
import { PageSection } from "components/page-section";
import React from "react";

export const Footer: React.FC = ({ children }) => {
  const { currentLanguage, strings } = useLanguage();

  return (
    <PageSection
      background="#9CE"
      color="#048"
      fontSize={10}
      justify="space-between"
      padding={{ x: 6, y: 4 }}
    >
      <div>
        {currentLanguage === "english"
          ? NON_BREAKING_SPACE
          : `Translation by ${strings.translationBy}`}
      </div>
      <div>{children}</div>
    </PageSection>
  );
};
