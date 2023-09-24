import { useTeamEditor } from "@/hooks";
import { Field } from "@/types/register";
import React, { FC, useEffect } from "react";
import { FormikValues, useFormikContext } from "formik";
import { AppButton, AppFormField, AppImageUploader } from "..";

type Props = {
  fields: Field[];
  initialValues: FormikValues | null;
};

const AppTeamEditorMobile: FC<Props> = ({ fields, initialValues }) => {
  const { handleDiscard, handleSave, dirty, isValid, values } = useTeamEditor({
    initialValues: initialValues,
  });
  const { setFieldValue } = useFormikContext<FormikValues>();

  useEffect(() => {
    for (let field in initialValues) {
      setFieldValue(field, initialValues[field]);
    }
  }, [initialValues]);
  return (
    <div className=" w-[90%] mx-auto mt-2 flex flex-col  justify-center gap-5 md:hidden mb-10">
      <h3 className=" text-base mt-6 text-BlueLight font-bold  uppercase w-[90%] mx-auto ">
        Edit Your Team members
      </h3>
      <AppImageUploader fieldName={"image"} imageUrl={values['image']} />

      <div className=" flex flex-wrap gap-4 w-full  mx-auto items-center">
        {fields.map((item) => (
          <AppFormField
            key={item.name}
            required={item.required}
            name={item.name}
            value={values[item.name]}
            label={item.label}
            className=" min-w-[280px]  "
          />
        ))}
      </div>
      <div className=" flex gap-5 mx-auto">
        <AppButton
          label="Update"
          handleAction={() => handleSave(values)}
          disabled={!isValid || !dirty}
        />

        <AppButton label="Discard" handleAction={handleDiscard} />
      </div>
    </div>
  );
};

export default AppTeamEditorMobile;
