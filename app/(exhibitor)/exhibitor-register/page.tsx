"use client";

import React from "react";
import * as Yup from "yup";
import { Field } from "@/types/register";
import { FormikValues } from "formik";
import { RegisterWrapper } from "@/containers";

const validationSchema = Yup.object().shape({
  businessName: Yup.string().required().label("Business Name"),
  DescriptionOfBusiness: Yup.string()
    .required()
    .label("Description of the business"),
  city: Yup.string().required().label("City name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().min(10).max(13).required().label("Phone"),
  country: Yup.string().required().label("country"),
  zipCode: Yup.string().label("Zip Code"),
  streetNumber: Yup.string().label("Zip Code"),
  youTubeLink: Yup.string(),
  tikTokLink: Yup.string(),
  telegramChannel: Yup.string(),
  websiteLink: Yup.string(),
  linkedinLink: Yup.string(),
  tvChannelName: Yup.string(),
  faceBookLink: Yup.string(),
  instagram: Yup.string(),
  telephone: Yup.string(),
});

const initialValues: FormikValues = {
  businessName: "",
  DescriptionOfBusiness: "",
  city: "",
  country: "",
  streetNumber: "",
  zipCode: "",
  email: "",
  phone: "",
  telephone: "",
  youTubeLink: "",
  tikTokLink: "",
  telegramChannel: "",
  websiteLink: "",
  linkedinLink: "",
  tvChannelName: "",
  faceBookLink: "",
  instagram: "",
};

const fields: Field[][] = [
  [
    {
      name: "businessName",
      label: "Business Name",
      required: true,
    },
    {
      name: "DescriptionOfBusiness",
      label: "Description of the business",
      required: true,
    },
    {
      name: "city",
      label: "City",
      required: true,
    },
    {
      name: "country",
      label: "Country",
      required: true,
    },
    {
      name: "zipCode",
      label: "Zip Code",
      required: false,
    },
    {
      name: "streetNumber",
      label: "Street Number",
      required: false,
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
  ],
];

const pages: React.FC = () => {
  const URL = process.env.NEXT_PUBLIC_EXHIBITOR_REGISTER_URL as string;
  const steps = [
    "Business Information",
    "Contact Information",
    "Media Information",
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
