"use client";

import { AppEditor, AppForm, Progress } from "@/components";
import AppSteppper from "@/components/Forms/AppSteppper";
import { useAPI } from "@/hooks";
import { Field } from "@/types/register";
import { FormikValues } from "formik";
import React from "react";

type Props = {
  initialValues: FormikValues;
  validationSchema: any;
  fields: Field[][];
  URL: string;
  steps: string[];
  withEditor?: boolean;
  type?: string;
};

const RegisterWrapper: React.FC<Props> = ({
  fields,
  initialValues,
  validationSchema,
  URL,
  steps,
  withEditor,
  type,
}) => {
  const { error, message, progress, setSubmit, submit, submitForm } = useAPI();

  return (
    <div className="  min-h-[50vh] flex flex-col ">
      <AppForm
        initialValues={initialValues}
        onSubmit={(values: FormikValues) => submitForm(values, URL, type)}
        validationSchema={validationSchema}
      >
        {submit ? (
          <Progress process={progress} error={error} message={message} />
        ) : withEditor ? (
          <AppEditor steps={steps} setSubmit={setSubmit} FieldValue={fields} />
        ) : (
          <AppSteppper
            steps={steps}
            setSubmit={setSubmit}
            FieldValue={fields}
          />
        )}
      </AppForm>
    </div>
  );
};
export default RegisterWrapper;
