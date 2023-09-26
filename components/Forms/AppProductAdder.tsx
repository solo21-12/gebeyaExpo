import React, { FC } from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";
import Sheet from "@mui/joy/Sheet";
import CloseIcon from "@mui/icons-material/Close";
import { Field } from "@/types/register";
import { FormikValues } from "formik";
import {
  AppButton,
  AppFormField,
  AppImageUploader,
  AppMultipleItemsForm,
} from "..";
import { useProductAdder } from "@/hooks";

type Props = {
  fields: Field[];
  multipleField: Field;
};

const AppTeamAdderDesktop: FC<Props> = ({ fields, multipleField }) => {
  const {
    handleDiscard,
    handleSave,
    dirty,
    isValid,
    handleAddMoreProducts,
    values,
  } = useProductAdder();

  return (
    <div className="h-[30vh]">
      <Sheet
        sx={{
          display: { xs: "none", md: "initial" },
          borderLeft: "1px solid",
          borderColor: "neutral.outlinedBorder",
        }}
      >
        <Box sx={{ pb: 2, display: "flex", alignItems: "center" }}>
          <Typography sx={{ flex: 1 }}>Add new product</Typography>
          <IconButton
            variant="outlined"
            color="neutral"
            size="sm"
            onClick={() => {
              handleDiscard();
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <AppImageUploader fieldName="image" />

        <Divider />
        <div className="flex flex-col gap-2 mt-5">
          {fields.map((item) => (
            <AppFormField
              key={item.name}
              required={item.required}
              name={item.name}
              label={item.label}
              value={values[item.name]}
              className="min-w-[300px] xs:min-w-[200px] lg:min-w-[300px]"
            />
          ))}
          <AppMultipleItemsForm
            fieldName={multipleField.name}
            label={multipleField.label}
          />
        </div>
        <div className="flex gap-5 mx-auto mt-5">
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
      </Sheet>
    </div>
  );
};

export default AppTeamAdderDesktop;
