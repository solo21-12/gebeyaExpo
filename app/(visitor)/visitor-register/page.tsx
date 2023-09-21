"use client";

import React from "react";
import * as Yup from "yup";
import { Field } from "@/types/register";
import { RegisterWrapper } from "@/containers/";
import { FormikValues } from "formik";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  middleName: Yup.string().label("Middle name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().min(10).max(13).required().label("Phone"),
  sex: Yup.string().required().label("Sex"),
  birthDate: Yup.date().required().label("Birth Date"),
  companyName: Yup.string().required().label("Company Name"),
  jobTitle: Yup.string().required().label("Job Title"),
  telephone: Yup.string(),
});

const initialValues: FormikValues = {
  firstName: "",
  lastName: "",
  middleName: "",
  email: "",
  phone: "",
  sex: "",
  birthDate: "",
  companyName: "",
  jobTitle: "",
  telephone: "",
};

const fields: Field[][] = [
  [
    {
      name: "firstName",
      label: "First Name",
      required: true,
    },
    {
      name: "middleName",
      label: "Middle Name",
      required: false,
    },
    {
      name: "lastName",
      label: "Last Name",
      required: true,
    },
    {
      name: "sex",
      label: "Sex",
      required: true,
    },
    {
      name: "birthDate",
      label: "Birth Date",
      required: true,
    },
  ],
  [
    {
      name: "email",
      label: "Email",
      required: true,
    },
    {
      name: "phone",
      label: "Phone",
      required: true,
    },
    {
      name: "telephone",
      label: "TelePhone Number",
      required: false,
    },
  ],
  [
    {
      name: "companyName",
      label: "Company Name",
      required: true,
    },
    {
      name: "jobTitle",
      label: "Job Title",
      required: true,
    },
  ],
];

const pages: React.FC = () => {
  const URL = process.env.NEXT_PUBLIC_VISITER_REGISTER_URL as string;
  const steps = [
    "Personal Information",
    "Contact Information",
    "Career Information",
  ];

  return (
    <RegisterWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      fields={fields}
      URL={URL}
      steps={steps}
    />
  );
};

export default pages;
