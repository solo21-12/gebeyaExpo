import { Box, Step, StepLabel, Stepper } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { AppButtonDefult, AppFormField, AppSubmitButton, Pargraph } from "..";
import { Field } from "@/types/register";
import { motion } from "framer-motion";
import { Opacity } from "@/utils/motion";
import { FormikValues, useFormikContext } from "formik";

type Props = {
  steps: string[];
  setSubmit: Dispatch<SetStateAction<boolean>>;
  FieldValue: Field[][];
};

const AppSteppper: React.FC<Props> = ({ steps, setSubmit, FieldValue }) => {
  const { initialValues, dirty, values } = useFormikContext<FormikValues>();
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [error, setError] = React.useState<boolean>(false);

  const steeper = () => {
    let step = true;
    if (dirty) {
      for (let item of FieldValue[activeStep]) {
        if (item.required && initialValues[item.name] == values[item.name]) {
          step = false;
          setError(true);
        }
      }
      if (step) {
        setError(false);
        const a = activeStep + 1;
        setActiveStep(a);
      }
    }
  };

  const decrementer = () => {
    const a = activeStep - 1;
    setActiveStep(a);
  };

  return (
    <motion.div
      variants={Opacity}
      initial="hidden"
      animate="show"
      className=" lg:w-[60%] mx-auto mt-40 lg:mt-60"
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {error && (
          <Pargraph
            lable={"Please fill all required field"}
            className=" text-red-600 text-center mt-5"
          />
        )}
        {FieldValue.map(
          (field, index) =>
            activeStep === index && (
              <motion.div
                variants={Opacity}
                initial="hidden"
                animate="show"
                className=" mt-10 flex flex-col gap-5"
                key={index}
              >
                {field.map((item) => (
                  <AppFormField
                    key={item.name}
                    required={item.required}
                    name={item.name}
                    value={values[item.name]}
                    label={item.name == "birthDate" ? "Birth Date" : item.label}
                    className=" min-w-[300px]  lg:min-w-[500px]"
                  />
                ))}
              </motion.div>
            )
        )}
      </Box>
      <Box className=" flex flex-col items-center">
        <Box className=" flex gap-3 items-center align-middle">
          {activeStep > 0 && (
            <AppButtonDefult label={"Back"} handleAction={decrementer} />
          )}
          {activeStep !== steps.length - 1 ? (
            <AppButtonDefult label={"Next"} handleAction={steeper} />
          ) : (
            <AppSubmitButton
              title={"Finish"}
              setProcess={setSubmit}
              setError={setError}
            />
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

export default AppSteppper;
