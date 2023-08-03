import React from "react";
import { ErrorMesssage } from "./ErrorMesssage";
import { AppInput } from "./AppInput";
import { FormikValues, useFormikContext } from "formik";

export const AppFormFiled = ({ name, ...others }: any) => {
  const { handleChange, setFieldTouched, errors, touched } =
    useFormikContext<FormikValues>();

  return (
    <div>
      <AppInput
        setValue={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        id={name}
        {...others}
      />
      <ErrorMesssage error={errors[name]} visible={touched[name]} />
    </div>
  );
};
