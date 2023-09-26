import React, { Dispatch, FC, SetStateAction } from "react";
import { Field } from "@/types/register";
import { AppButton, AppFormField, AppImageUploader, AppMultipleItemsForm } from "..";
import { useProductAdder, useTeamAdder } from "@/hooks";

type Props = {
  fields: Field[];
  openModal: boolean;
  multipleField: Field;

};

const AppProductAdderMobile: FC<Props> = ({ fields, openModal,multipleField }) => {
  const {
    handleDiscard,
    handleSave,
    dirty,
    isValid,
    handleAddMoreProducts,
    values,
  } = useProductAdder();

  return (
    openModal && (
      <div className=" w-[90%] mx-auto mt-2 flex flex-col  justify-center gap-5 md:hidden mb-10">
        <h3 className=" mt-6 text-base text-BlueLight font-bold  uppercase w-[90%] mx-auto ">
          Add Your products
        </h3>
        <AppImageUploader fieldName={"image"} />
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
          <AppMultipleItemsForm
            fieldName={multipleField.name}
            label={multipleField.label}
          />
        </div>
        <div className=" flex gap-5">
          <AppButton
            label="Save"
            handleAction={handleSave}
            disabled={!isValid || !dirty}
          />
          <AppButton
            label="Add more"
            handleAction={handleAddMoreProducts}
            disabled={!isValid || !dirty}
          />
          <AppButton label="Discard" handleAction={handleDiscard} />
        </div>
      </div>
    )
  );
};

export default AppProductAdderMobile;
