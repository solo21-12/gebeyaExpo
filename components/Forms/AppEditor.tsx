"use client";
import { Field } from "@/types/register";
import { FormikValues, useFormikContext } from "formik";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { AppButton, AppButtonDefult, AppFormField, AppSubmitButton } from "..";
import { CiEdit } from "react-icons/ci";
import { Button } from "@mui/material";

type Props = {
  steps: string[];
  setSubmit: Dispatch<SetStateAction<boolean>>;
  FieldValue: Field[][];
};

const AppEditor: FC<Props> = ({ FieldValue, setSubmit, steps }) => {
  const {
    dirty,
    values,
    setValues,
    initialValues,
    isValid,
    handleSubmit,
    errors,
  } = useFormikContext<FormikValues>();
  const [edit, setEdit] = useState<boolean>(false);

  const handleDiscard = () => {
    setValues(initialValues);
    setEdit(false);
  };

  const handleEdit = () => {
    if (dirty && isValid) {
      setEdit(false);
      handleSubmit();
    }
  };

  return (
    <div className=" pb-20">
      {FieldValue.map((field, index) => (
        <div className=" mt-10" key={field[index].label + "a"}>
          <div className=" flex justify-between 2xl:w-[80%] mb-5 align-middle items-center">
            <h3 className=" text-xl text-BlueLight font-bold  uppercase ">
              {steps[index]}
            </h3>
            {index == 0 && !edit && (
              <Button
                className=" text-4xl text-BluePurple px-10 py-2"
                onClick={() => setEdit(true)}
              >
                <CiEdit />
              </Button>
            )}
          </div>

          {edit ? (
            <div className=" flex flex-wrap gap-5">
              {field.map((item) => (
                <AppFormField
                  key={item.name}
                  required={item.required}
                  name={item.name}
                  value={values[item.name]}
                  label={item.label}
                  className=" min-w-[300px] xs:min-w-[260px]  lg:min-w-[400px] "
                />
              ))}
            </div>
          ) : (
            <div>
              {field.map((item) => (
                <div
                  className=" flex justify-between xl:w-[80%] mb-5"
                  key={item.name}
                >
                  <h4 className=" lg:text-xl   text-BlueDark">{item.label}</h4>
                  <h4 className=" lg:text-base text-gray-600 max-w-[200px] md:max-w-sm">
                    {values[item.name]}
                  </h4>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      {edit && (
        <div className=" flex gap-5 mt-10">
          <AppButton
            label={"Submit"}
            handleAction={handleEdit}
            disabled={!dirty}
          />
          <AppButtonDefult label={"Discard"} handleAction={handleDiscard} />
        </div>
      )}
    </div>
  );
};

export default AppEditor;
