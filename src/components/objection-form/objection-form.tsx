import { useSaveData } from "common/hooks/use-save-data";
import { IObjectionModel } from "common/models/objection";
import { Formik } from "formik";
import React from "react";
import { ObjectionFormTemplate } from "./objection-template";

export const ObjectionForm: React.FC = () => {
  const { initialValues, printData } = useSaveData();

  return (
    <Formik<IObjectionModel>
      initialValues={initialValues}
      onSubmit={(values) => printData(values)}
    >
      {ObjectionFormTemplate}
    </Formik>
  );
};
