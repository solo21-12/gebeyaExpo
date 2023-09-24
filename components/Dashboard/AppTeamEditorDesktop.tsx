import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { Field } from "@/types/register";
import { Modal } from "@mui/material";
import { AppButton, AppFormField } from "..";
import { useTeamEditor } from "@/hooks";
import { FormikValues, useFormikContext } from "formik";

type Props = {
  fields: Field[];
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
  initialValues: FormikValues | null;
};

const AppTeamEditorDesktop: FC<Props> = ({
  fields,
  openModal,
  setOpenModal,
  initialValues,
}) => {
  const { handleDiscard, handleSave, dirty, isValid, values } = useTeamEditor({
    setOpenModal: setOpenModal,
  });
  const { setFieldValue } = useFormikContext<FormikValues>();

  useEffect(() => {
    for (let field in initialValues) {
      setFieldValue(field, initialValues[field]);
    }
  }, [initialValues]);
  return (
    <Modal
      open={openModal}
      className=" items-center hidden md:flex flex-col justify-center "
    >
      <div className=" bg-BlueDark h-[60vh] w-[100%] md:w-[89%] 2xl:w-[60%] mx-auto">
        <div className=" bg-white  rounded-t-[3rem]  rounded-b-md w-full h-full mt-2 flex flex-col  justify-center gap-5">
          <h3 className=" text-xs md:text-base text-BlueLight font-bold  uppercase w-[90%] text-center mx-auto ">
            Edit Your Team members
          </h3>

          <div className=" flex flex-wrap gap-5 w-[90%] mx-auto items-center justify-center">
            {fields.map((item) => (
              <AppFormField
                key={item.name}
                required={item.required}
                name={item.name}
                value={values[item.name]}
                label={item.label}
                className=" min-w-[300px] xs:min-w-[200px]  lg:min-w-[400px] "
              />
            ))}
          </div>
          <div className=" flex gap-5 mx-auto">
            <AppButton
              label="Save"
              handleAction={() => handleSave(values)}
              disabled={!isValid || !dirty}
            />

            <AppButton label="Discard" handleAction={handleDiscard} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AppTeamEditorDesktop;
