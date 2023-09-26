import React, { FC } from "react";
import { FormikValues, useFormikContext } from "formik";

import { IoMdAddCircle, IoIosRemoveCircleOutline } from "react-icons/io";
import { IconButton } from "@mui/material";
import { AppFormField } from "..";
interface Props {
  fieldName: string;
  label: string;
}

const AppMultipleItemsForm: FC<Props> = ({ fieldName, label }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleAddItem = () => {
    const newItems = [...values[fieldName], ""];
    setFieldValue(fieldName, newItems);
  };

  const handleRemoveItem = (index: number) => {
    if (index >= 0 && index < values[fieldName].length) {
      const newItems = [...values[fieldName]];
      newItems.splice(index, 1);
      setFieldValue(fieldName, newItems);
    }
  };

  return (
    <div>
      {values[fieldName].map((item: any, index: number) => (
        <div key={index} className="flex gap-1 mb-2">
          <AppFormField
            name={`${fieldName}[${index}]`}
            label={`${label} ${index + 1}`}
            value={item}
            className="min-w-[260px] xs:min-w-[200px] lg:min-w-[300px]"
          />
          <div className="flex flex-col gap-0">
            <IconButton
              onClick={() => handleRemoveItem(index)}
              color="error"
              size="medium"
              className="py-0"

            >
              <IoIosRemoveCircleOutline />
            </IconButton>
            {index == values[fieldName].length - 1 && (
              <IconButton
                color="primary"
                onClick={handleAddItem}
                size="medium"
                className="px-0"
              >
                <IoMdAddCircle />
              </IconButton>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppMultipleItemsForm;
