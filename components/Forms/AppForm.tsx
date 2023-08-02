import { Formik } from "formik";
import React, { ReactNode } from "react";

interface AppFormProps {
  initialValues: any;
  onSubmit: (values: any) => void;
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
