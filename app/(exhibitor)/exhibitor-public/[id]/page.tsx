"use client";
import ExhibitorsData from "@/data/temporarayData";
import { ExhibitorsDataType } from "@/types/exhibitor";
import { AiOutlineVerified } from "react-icons/ai";
import React, { useCallback, useEffect, useState } from "react";
import { Avatar, Button, CircularProgress } from "@mui/material";
import {
  AppButtonDefult,
  AppProducts,
  AppSocial,
  AppTeamCard,
  Header,
} from "@/components";
import { useRouter } from "next/navigation";
type Props = {
  params: {
    id: number;
  };
};

const page: React.FC<Props> = ({ params: { id } }) => {
  const [exhibitor, setExhibitor] = useState<ExhibitorsDataType | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();

  const getCurrentExhibitor = useCallback(() => {
    const currentExhibitor = ExhibitorsData.filter(
      (exhibitor) => exhibitor.id == id
    );
    setExhibitor(currentExhibitor[0]);
  }, [exhibitor]);

  useEffect(() => {
    getCurrentExhibitor();
  }, []);
  return (
    <div className=" min-h-screen">
      {exhibitor ? (
        <div className=" relative  flex flex-col mt-[8rem]">
          <div className=" h-[300px] lg:h-[500px] w-full overflow-hidden border-b-gray-300 border-b ">
            {exhibitor?.image ? (
              <img
                src={exhibitor?.image}
                className=" w-full h-[300px] lg:h-[500px] object-contain "
              />
            ) : (
              <div className="w-full h-[300px] lg:h-[500px] flex flex-col items-center justify-center">
                <img
                  src={"/logoMain.png"}
                  className=" w-full h-[300px] lg:h-[500px] object-contain "
                />
              </div>
            )}
          </div>
          <div className=" absolute top-[20rem] lg:top-[28rem] left-[1rem]  sm:left-[5rem] md:left-[10rem] xl:left-80 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] a">
            {exhibitor.image ? (
              <img
                src={exhibitor?.image}
                className=" w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] rounded-full object-contain border border-BlueLighter"
              />
            ) : (
              <Avatar className=" w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px]" />
            )}
          </div>
          <div className=" absolute top-[20rem] lg:top-[33rem] left-[7rem] sm:left-[15rem] md:left-[20rem]  lg:left-[26rem] xl:left-[36rem] flex flex-col gap-1 px-5 ">
            <div className=" flex  gap-5 sm:gap-[9rem] md:gap-[11rem] lg:gap-[15rem] xl:gap-[25rem] 2xl:gap-[30rem] items-center mb-2">
              <div className=" flex gap-1">
                <h3 className=" text-[16px] sm:text-[20px] md:text-2xl xl:text-3xl">
                  {exhibitor?.businessName}
                </h3>
                <AiOutlineVerified className=" text-blue-500 text-[12px]" />
              </div>
              <AppButtonDefult
                label="Book A Meeting"
                handleAction={() => console.log("not implemneted")}
              />
            </div>
            <p className=" max-w-xs lg:max-w-lg text-[11px] sm:text-[13px] md:text-[14px] xl:text-[16px] text-gray-500">
              {exhibitor?.shortDescription}
            </p>

            <AppSocial socila={exhibitor.social} />
          </div>

          <div className=" mt-60 mb-20 lg:mt-80 w-[85%] mx-auto flex flex-col gap-10">
            <Header
              lable="Check Our Products"
              className=" text-BlueDark  tracking-[5px]"
            />
            <div className=" flex flex-wrap gap-5">
              {exhibitor.products.map((product, index) => (
                <AppProducts
                  index={index}
                  key={product.title}
                  product={product}
                  show={show}
                />
              ))}
            </div>
          </div>
          {/* <div className=" w-[80%] mx-auto">
            <Header
              lable="Meet The Team"
              className=" text-BlueDark  tracking-[5px]"
            />
            <div className=" flex justify-between flex-wrap mt-10">
              {exhibitor.teams.map((team) => (
                <AppTeamCard team={team} key={team.firstName} />
              ))}
            </div>
          </div> */}
        </div>
      ) : (
        <div className=" h-screen flex flex-col justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default page;
