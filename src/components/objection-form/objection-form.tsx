import { defaultFormData } from "common/constants/defaults";
import { useSaveData } from "common/hooks/use-save-data";
import { IObjectionModel } from "common/models/form-model";
import { Formik } from "formik";
import React from "react";
import { ObjectionFormTemplate } from "./objection-template";

export const ObjectionForm: React.FC = () => {
  const { printData } = useSaveData();

  return (
    <Formik<IObjectionModel>
      initialValues={defaultFormData}
      onSubmit={(values) => printData(values)}
    >
      {ObjectionFormTemplate}
    </Formik>
  );
};
