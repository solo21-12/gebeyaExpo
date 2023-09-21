import { TextField } from "@mui/material";
import React from "react";

export const AppInput = ({
  setValue,
  id,
  options,
  label,
  type,
  ...others
}: any) => {
  return (
    <TextField
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      }}
      id={id}
      label={label}
      type={type ? type : "text"}
      variant="outlined"
      {...others}
    />
  );
};
