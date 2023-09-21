"use client";

import React from "react";
import * as Yup from "yup";
import { Field } from "@/types/register";
import { RegisterWrapper } from "@/containers";
import { FormikValues } from "formik";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  middleName: Yup.string().label("Middle name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().min(10).max(13).required().label("Phone"),
  sex: Yup.string().required().label("Sex"),
  mediaName: Yup.string().required().label("Media Name"),
  youTubeLink: Yup.string(),
  tikTokLink: Yup.string(),
  telegramChannel: Yup.string(),
  websiteLink: Yup.string(),
  linkedinLink: Yup.string(),
  tvChannelName: Yup.string(),
  faceBookLink: Yup.string(),
  instagram: Yup.string(),
  logo: Yup.string(),
  telephone: Yup.string(),
});

const initialValues: FormikValues = {
  firstName: "",
  lastName: "",
  middleName: "",
  email: "",
  phone: "",
  telephone: "",
  sex: "",
  mediaName: "",
  youTubeLink: "",
  tikTokLink: "",
  telegramChannel: "",
  websiteLink: "",
  linkedinLink: "",
  tvChannelName: "",
  faceBookLink: "",
  instagram: "",
  logo: "",
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
  ],
  [
    {
      name: "email",
      label: "Email",
      required: true,
    },
    {
      name: "phone",
      label: "phone",
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
      name: "mediaName",
      label: "Media name",
      required: true,
    },
    {
      name: "youTubeLink",
      label: "Youtube Channel",
      required: false,
    },
    {
      name: "tikTokLink",
      label: "TikTok Channel",
      required: false,
    },
    {
      name: "telegramChannel",
      label: "Telegram Channel",
      required: false,
    },
    {
      name: "websiteLink",
      label: "Website ",
      required: false,
    },
    {
      name: "linkedinLink",
      label: "Linkedin Channel",
      required: false,
    },
    {
      name: "tvChannelName",
      label: "TV Channel",
      required: false,
    },
    {
      name: "faceBookLink",
      label: "Facebook Channel",
      required: false,
    },
    {
      name: "instagram",
      label: "Instagram Channel",
      required: false,
    },
    {
      name: "logo",
      label: "Logo",
      required: false,
    },
  ],
];

const URL = process.env.NEXT_PUBLIC_MEDIA_REQUEST_URL as string;
const steps = [
  "Personal Information",
  "Contact Information",
  "Media Information",
];

const pages: React.FC = () => {
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
