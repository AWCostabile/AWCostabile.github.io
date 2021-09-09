import { Typography } from "@material-ui/core";
import { useLanguage } from "common/hooks/use-language";
import { useSaveData } from "common/hooks/use-save-data";
import { IObjectionModel } from "common/models/objection";
import { Content } from "components/content";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { Link } from "components/link";
import { PageLayout } from "components/page-layout";
import { Formik } from "formik";
import Logo from "images/frame.svg";
import React, { useEffect, useMemo, useState } from "react";
import { ObjectionFormTemplate } from "./template";
import { createValidationSchema } from "./validations";

export const FormViewPage: React.FC<{ isMobile?: boolean }> = ({
  isMobile,
}) => {
  const { currentLanguage, strings } = useLanguage();
  const { initialValues, printData } = useSaveData();
  const [render, setRender] = useState(false);

  const validationSchema = useMemo(
    () => createValidationSchema(strings.validations),
    [currentLanguage] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => setRender(false), [currentLanguage]);
  useEffect(() => {
    requestAnimationFrame(() => setRender(true));
  }, [render]);

  return (
    <div className="form-root">
      <PageLayout>
        <Header />
        <Content>
          {render && (
            <Formik<IObjectionModel>
              key={currentLanguage}
              initialValues={initialValues}
              onSubmit={(values) => printData(values)}
              validationSchema={validationSchema}
            >
              {ObjectionFormTemplate}
            </Formik>
          )}
        </Content>
        <br />
        <br />
        <hr />
        <img id="qr-code" src={Logo} alt="QR Code" />
        <Typography style={{ textAlign: "center" }} variant="body1">
          {strings.miscellaneous.qrCodeLabel}
          <br />
          <Link to="http://bit.ly/3h7gip1">bit.ly/3h7gip1</Link>
        </Typography>
        <br />
        <Footer>&copy; 2021 - Anthony Costabile</Footer>
      </PageLayout>
    </div>
  );
};
