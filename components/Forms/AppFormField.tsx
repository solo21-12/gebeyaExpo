import React from "react";
import { ErrorMesssage } from "./ErrorMesssage";
import { AppInput } from "./AppInput";
import { FormikValues, useFormikContext } from "formik";

export const AppFormField = ({ name,label, ...others }: any) => {
  const { handleChange, setFieldTouched, errors, touched, } =
    useFormikContext<FormikValues>();

  return (
    <div>
      <AppInput
        setValue={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        label={label}
        id={name}
        {...others}
      />
      <div className=" pl-5 pt-1">
        <ErrorMesssage error={errors[name]} visible={touched[name]} />
      </div>
    </div>
  );
};
