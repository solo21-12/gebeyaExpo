"use client";

import Image from "next/image";
import React from "react";

import { AppButtonDefult } from "@/components";
import { HeroData } from "@/constants/homepage";
import { LogoContainer } from "..";
type Props = {};

export default function Hero({}: Props) {
  const {
    Expo,
    ExpoName,
    decription,
    imageUrl,
    smallLable,
    imageUrlMob,
    backGroundImage,
  } = HeroData;
  return (
    <LogoContainer
      backGroundImage={backGroundImage}
      className=" h-screen px-[5%] md:px-0 lg:px-0 w-[95%] lg:w-[85%] mx-auto flex md:flex-row flex-col gap-10 justify-center  md:justify-between  items-center"
    >
      <div className=" px-[20px] ">
        <h4 className=" text-sm md:text-xl text-BlueDark">{smallLable}</h4>
        <h1 className=" text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[10rem] font-bold text-BlueDark tracking-wider">
          {ExpoName}
          <span className=" text-BlueLight">{Expo}</span>
        </h1>
        <p className=" text-sm max-w-sm text-BlueDark">{decription}</p>
        <AppButtonDefult
          label={"Get Started"}
          handleAction={() => console.log("first")}
          conditionalClass=" md:block hidden"
        />
      </div>
      <div className=" hidden  md:block">
        <Image
          src={imageUrl}
          alt="Hero image"
          width={600}
          height={500}
          className=" md:w-[400px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] h-auto"
        />
      </div>
      <div className=" md:hidden  block">
        <Image
          src={imageUrlMob}
          alt="Hero image"
          width={600}
          height={500}
          className=" object-contains w-[400px] md:w-[400px] lg:w-[450px] xl:w-[550px] h-auto"
        />
      </div>
      <AppButtonDefult
        label={"Get Started"}
        handleAction={() => console.log("first")}
        conditionalClass=" block md:hidden w-full mt-10"
      />
    </LogoContainer>
  );
}
