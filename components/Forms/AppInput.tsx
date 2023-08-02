import { InputAdornment, TextField } from "@mui/material";
import React from "react";

export const AppInput = ({
  Icon,
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
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">{Icon}</InputAdornment>
          ),
        }}
        {...others}
      />
    </div>
  );
};
