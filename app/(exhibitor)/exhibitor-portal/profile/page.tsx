"use client";

import React from "react";
import * as Yup from "yup";
import { Field } from "@/types/register";
import { FormikValues } from "formik";
import { RegisterWrapper } from "@/containers";
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";

const page = () => {
  const { currentUser } = useExhibitorPortalContext();
  const {
    DescriptionOfBusiness,
    address,
    businessName,
    email,
    rentedBooth,
    social,
  } = currentUser;

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
    telephone: Yup.string(),
    youTubeLink: Yup.string(),
    tikTokLink: Yup.string(),
    telegramChannel: Yup.string(),
    websiteLink: Yup.string(),
    linkedinLink: Yup.string(),
    tvChannelName: Yup.string(),
    faceBookLink: Yup.string(),
    instagram: Yup.string(),
    rentedBooth: Yup.string(),
  });

  const initialValues: FormikValues = {
    businessName: businessName,
    DescriptionOfBusiness: DescriptionOfBusiness,
    city: address[0].city,
    country: address[0].country,
    streetNumber: address[0].streetNumber,
    zipCode: address[0].zipCode,
    email: email,
    phone: address[0].phone,
    telephone: address[0].telephone,
    youTubeLink: social.youTubeLink,
    tikTokLink: social.tikTokLink,
    telegramChannel: social.telegramChannel,
    websiteLink: social.websiteLink,
    linkedinLink: social.linkedinLink,
    tvChannelName: social.tvChannelName,
    faceBookLink: social.faceBookLink,
    instagram: social.instagram,
    rentedBooth: rentedBooth,
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
        name: "rentedBooth",
        label: "Reneted Booth",
        required: false,
      },
    ],
    [
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
  const URL = process.env.NEXT_PUBLIC_EXHIBITOR_REGISTER_URL as string;
  const steps = [
    "Business Information",
    "Address",
    "Contact Information",
    "Media Information",
  ];
  return (
    <div className="  xs:ml-[120px] md:ml-[260px] px-10 xs:px-3 lg:px-20 pt-14 flex flex-col gap-10 ">
      <div>
        <h3 className=" text-xl md:text-3xl text-BlueLight font-bold  uppercase ">
          Exhibitor Inforamtion
        </h3>
        <p className=" max-w-xl text-sm text-gray-400 font-light mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          obcaecati eligendi sequi nostrum illo, suscipit doloremque voluptates
          provident, et, sit fugiat? Amet repudiandae voluptatem nesciunt!
          Voluptatem sint quia sed ut?
        </p>
      </div>
      <div className=" h-[70vh] overflow-y-auto">
        <RegisterWrapper
          initialValues={initialValues}
          validationSchema={validationSchema}
          fields={fields}
          URL={URL}
          steps={steps}
          withEditor
          type="PUT"
        />
      </div>
    </div>
  );
};

export default page;
