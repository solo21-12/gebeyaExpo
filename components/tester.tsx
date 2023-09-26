import React, { FC } from "react";
import { FormikValues, useFormikContext } from "formik";
import { AppFormField } from ".";
import { IoMdAddCircle, IoIosRemoveCircleOutline } from "react-icons/io";
import { IconButton } from "@mui/material";
interface Props {
  fieldName: string;
  lable: string;
}

const MultipleItemsForm: FC<Props> = ({ fieldName, lable }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleAddItem = () => {
    const newItems = [...values[fieldName], ""];
    setFieldValue(fieldName, newItems);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = [...values[fieldName]];
    newItems.splice(index, 1);
    setFieldValue(fieldName, newItems);
  };

  return (
    <div>
      <div>
        {values[fieldName].map((item: any, index: number) => (
          <div key={index} className=" flex gap-1">
            <AppFormField
              name={`${fieldName}[${index}]`}
              label={`${lable} ${index + 1}`}
            />
            <div className=" flex flex-col gap-0">
              <IconButton
                onClick={() => handleRemoveItem(index)}
                color="error"
                size="medium"
                className=" p-0"
              >
                <IoIosRemoveCircleOutline />
              </IconButton>
              <IconButton color="primary" onClick={handleAddItem} size="medium">
                <IoMdAddCircle />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleItemsForm;
