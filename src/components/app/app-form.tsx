import { Typography } from "@material-ui/core";
import { useLanguage } from "common/hooks/use-language";
import { Content } from "components/content";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { PageLayout } from "components/page-layout";
import Logo from "images/frame.svg";
import React from "react";

export const FormViewPage: React.FC<{ isMobile?: boolean }> = ({
  isMobile,
}) => {
  const { strings } = useLanguage();

  return (
    <div className="form-root">
      <PageLayout>
        <Header />
        <Content />
        {isMobile && (
          <>
            <img src={Logo} alt="QR Code" width="60%" />
            <Typography variant="body1">
              {strings.miscellaneous.qrCodeLabel}
            </Typography>
            <br />
            <br />
            <br />
          </>
        )}
        <Footer>&copy; 2021 - Anthony Costabile</Footer>
      </PageLayout>
    </div>
  );
};
