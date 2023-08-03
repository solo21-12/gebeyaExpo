import { InputAdornment, TextField } from "@mui/material";
import React from "react";

export const AppInput = ({
  placeholder,
  setValue,
  width = "100%",
  id,
  ...others
}: any) => {
  return (
    <div>
      <TextField
        label={placeholder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
        id={id}
        fullWidth
        variant="outlined"
        {...others}
      />
    </div>
  );
};
