"use client";
import {
  AppForm,
  AppFormFiled as AppFormField,
  Header,
  Pargraph,
} from "@/components";
import React from "react";
import * as Yup from "yup";
import {
  BsFillArrowRightCircleFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { OfficeData } from "@/constants/homepage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

export default function ContactUs() {
  return (
    <div
      className=" h-[70vh] px-10 lg:w-[85%] mx-auto justify-center flex flex-col"
      style={{
        backgroundImage: `url(${"/logo-08.png"})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        width: "100%",
      }}
    >
      <div className=" flex flex-col md:flex-row gap-20">
        <div className=" flex flex-col gap-5 md:w-[50%]">
          <Header
            lable="Sign up for our newsletter"
            className=" text-BlueDark"
          />
          <Pargraph lable="Subscribe to get the latest expo news, articles, and resources." />
          <AppForm
            initialValues={{ email: "" }}
            onSubmit={(values: any) => console.log(values)}
            validationSchema={validationSchema}
          >
            <form>
              <AppFormField
                placeholder="Email"
                required
                Icon={
                  <BsFillArrowRightCircleFill className="text-BlueLighter text-2xl" />
                }
                name="email"
                className="w-full lg:w-1/2 mb-2"
                label="Email"
              />
            </form>
          </AppForm>
        </div>
        <div className="md:w-[50%] leading-6">
          <h3 className="text-6xl font-bold">Our Offices</h3>
          <div className="flex flex-col md:flex-row gap-5 md:gap-20 mt-5">
            {OfficeData.map((office, index) => (
              <div key={index}>
                <h4 className="text-2xl font-semibold">Office {index + 1}</h4>
                <p className="text-base font-thin flex gap-2 text-BlueLight">
                  <IoLocationSharp className="text-BlueLight text-base" />
                  {office.location}
                </p>
                {office.phone.map((num, i) => (
                  <p
                    key={i}
                    className="text-sm font-thin flex gap-2 text-BlueLight"
                  >
                    <BsFillTelephoneFill className="text-BlueLight text-base" />
                    <span>{num}</span>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
