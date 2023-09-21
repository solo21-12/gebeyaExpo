import { Formik, FormikValues } from "formik";
import React, { ReactNode } from "react";

interface AppFormProps {
  initialValues: FormikValues;
  onSubmit: (values: FormikValues) => void;
  validationSchema: any;
  children: ReactNode;
}

export function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <div>{children}</div>}
    </Formik>
  );
}
