import { Content } from "components/content";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { PageLayout } from "components/page-layout";
import React from "react";

export const FormViewPage: React.FC = () => (
  <div className="form-root">
    <PageLayout>
      <Header />
      <Content />
      <Footer>&copy; 2021 - Anthony Costabile</Footer>
    </PageLayout>
  </div>
);
