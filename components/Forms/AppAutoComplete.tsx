import React, { Dispatch, SetStateAction } from "react";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  TextField,
} from "@mui/material";

type Props = {
  options: string[];
  setValue: Dispatch<SetStateAction<string>>;
  id: string;
  label: string;
};

const AppAutoComplete = (
  { options, setValue, id, label }: Props,
  { ...others }: any
) => {
  return (
    <Autocomplete
      options={options}
      id={id}
      fullWidth
      autoHighlight
      sx={{
        width: "300px",
      }}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
          }}
          label={label}
          {...params}
          className=" min-w-[300px]  lg:min-w-[500px]"
        />
      )}
    />
  );
};

export default AppAutoComplete;
