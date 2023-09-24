import React, { Dispatch, FC, SetStateAction } from "react";
import { Field } from "@/types/register";
import { AppButton, AppFormField, AppImageUploader } from "..";
import { useTeamAdder } from "@/hooks";

type Props = {
  fields: Field[];
  openModal: boolean;
};

const AppTeamAdderMobile: FC<Props> = ({ fields, openModal }) => {
  const {
    handleAddMoreMembers,
    handleDiscard,
    handleSave,
    dirty,
    isValid,
    values,
  } = useTeamAdder();

  return (
    openModal && (
      <div className=" w-[90%] mx-auto mt-2 flex flex-col  justify-center gap-5 md:hidden mb-10">
        <h3 className=" mt-6 text-base text-BlueLight font-bold  uppercase w-[90%] mx-auto ">
          Add Your Team members
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
        </div>
        <div className=" flex gap-5 mx-auto">
          <AppButton
            label="Save"
            handleAction={handleSave}
            disabled={!isValid || !dirty}
          />
          <AppButton
            label="Add more"
            handleAction={handleAddMoreMembers}
            disabled={!isValid || !dirty}
          />
          <AppButton label="Discard" handleAction={handleDiscard} />
        </div>
      </div>
    )
  );
};

export default AppTeamAdderMobile;
