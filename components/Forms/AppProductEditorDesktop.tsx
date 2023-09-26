import { Product, Teams } from "@/types/exhibitor";
import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";
import Sheet from "@mui/joy/Sheet";
import CloseIcon from "@mui/icons-material/Close";
import { Field } from "@/types/register";
import { FormikValues, useFormikContext } from "formik";
import {
  AppButton,
  AppFormField,
  AppImageUploader,
  AppMultipleItemsForm,
} from "..";
import { useProductEditor, useTeamEditor } from "@/hooks";

type Props = {
  product: Product | null;
  setEditing: Dispatch<SetStateAction<boolean>>;
  fields: Field[];
  initialValues: FormikValues;
  multipleField: Field;
};

const AppProductEditorDesktop: FC<Props> = ({
  product,
  setEditing,
  fields,
  initialValues,
  multipleField,
}) => {
  const { handleDiscard, handleSave, dirty, isValid, values } =
    useProductEditor({
      initialValues: initialValues,
    });
  const { handleReset, setValues } = useFormikContext<FormikValues>();
  useEffect(() => {
    setValues(initialValues);
  }, [product]);

  return (
    <div className=" h-[30vh]">
      {product && (
        <>
          <Sheet
            sx={{
              display: { xs: "none", md: "initial" },
              borderLeft: "1px solid",
              borderColor: "neutral.outlinedBorder",
              
            }}
          >
            <Box sx={{ pb: 2, display: "flex", alignItems: "center" }}>
              <Typography sx={{ flex: 1 }}>Edit</Typography>
              <IconButton
                variant="outlined"
                color="neutral"
                size="sm"
                onClick={() => {
                  handleReset();
                  setEditing(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <AppImageUploader fieldName={"image"} imageUrl={product.image} />

            <Divider />
            <div className=" flex flex-col gap-2 mt-5">
              {fields.map((item) => (
                <AppFormField
                  key={item.name}
                  required={item.required}
                  name={item.name}
                  value={values[item.name]}
                  label={item.label}
                  className=" min-w-[300px] xs:min-w-[200px]  lg:min-w-[300px] "
                />
              ))}
              <AppMultipleItemsForm
                fieldName={multipleField.name}
                label={multipleField.label}
              />
            </div>

            <div className=" flex gap-5 mx-auto mt-5">
              <AppButton
                label="Update"
                handleAction={() => handleSave(values)}
                disabled={!isValid || !dirty}
              />

              <AppButton label="Discard" handleAction={handleDiscard} />
            </div>
          </Sheet>
        </>
      )}
    </div>
  );
};

export default AppProductEditorDesktop;
