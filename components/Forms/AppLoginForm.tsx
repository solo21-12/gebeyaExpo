"use client";
import React, { useState } from "react";
import { AppForm, AppFormField, AppSubmitButton, Pargraph, Progress } from "..";
import { FormikValues } from "formik";
import { Field } from "@/types/register";
import { AiOutlineLogin } from "react-icons/ai";
import { useAPI } from "@/hooks";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

type Props = {
  allowNewAccount?: boolean;
  handleNewAccount?: string;
  URL: string;
  successURL: string;
};

const validationSchema = Yup.object().shape({
  passWord: Yup.string().required().min(8).label("Password"),
  email: Yup.string().required().email().label("Email"),
});
const initialValues: FormikValues = {
  email: "",
  passWord: "",
};
const FieldValue: Field[] = [
  {
    name: "email",
    label: "Email",
    required: true,
  },
  {
    name: "passWord",
    label: "Password",
    required: true,
    type: "password",
  },
];

const AppLoginForm: React.FC<Props> = ({
  allowNewAccount,
  handleNewAccount,
  URL,
  successURL,
}) => {
  const [fieldError, setFieldError] = useState<boolean>(false);
  const { message, progress, setSubmit, submit, submitForm, error, status } =
    useAPI();

  const router = useRouter();

  return (
    <>
      {submit ? (
        <Progress
          process={progress}
          message={message}
          error={error}
          status={status}
          URL={successURL}
        />
      ) : (
        <div className="lg:w-[45%] w-[90%] md:w-[75%] mx-auto border-dashed border-2 h-[50vh] p-10 flex flex-col">
          <div className=" flex flex-col  w-full">
            <div className=" flex items-center justify-between w-full text-BlueLighter ">
              <h1 className=" text-2xl">Login</h1>
              {allowNewAccount && (
                <p
                  className=" cursor-pointer hover:underline"
                  onClick={() => router.push(handleNewAccount ?? "/")}
                >
                  Don't have an account?
                </p>
              )}
            </div>
            <AppForm
              initialValues={initialValues}
              onSubmit={(val: FormikValues) => submitForm(val, URL)}
              validationSchema={validationSchema}
            >
              {fieldError && (
                <Pargraph
                  lable={"Please fill all required field"}
                  className=" text-red-600 text-center mt-5"
                />
              )}
              {message && (
                <Pargraph
                  lable={message}
                  className=" text-red-600 text-center mt-5"
                />
              )}
              <div className=" flex flex-col items-center mt-10 gap-6">
                {FieldValue.map((item, index) => (
                  <AppFormField
                    key={item.name}
                    required={item.required}
                    name={item.name}
                    type={item.type}
                    label={item.label}
                    className=" min-w-[400px] "
                  />
                ))}
                <AppSubmitButton
                  title={"Login"}
                  setProcess={setSubmit}
                  setError={setFieldError}
                  Icon={<AiOutlineLogin className=" text-White text-xl" />}
                />
              </div>
            </AppForm>
          </div>
        </div>
      )}
    </>
  );
};

export default AppLoginForm;
