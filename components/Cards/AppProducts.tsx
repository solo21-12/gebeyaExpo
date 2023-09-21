'use client'

import { Product } from "@/types/exhibitor";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { AppButton, AppButtonDefult } from "..";

type Props = {
  index: number;
  product: Product;
  show: boolean;
};

const AppProducts: FC<Props> = ({
  product: { description, title, image, categorie },
  index,
  show,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleMouseEvent = (val: boolean) => {
    setIsHovered(val);
  };

  const handleCLick = () => {
    router.push("/photoGallery");
  };
  return (
    <div
      className={`mx-auto w-[90%] md:w-[48%] lg:w-[30%] h-[300px] lg:h-[375px] bg-[#f2f2f2] rounded-[8px] overflow-hidden relative cursor-pointer ${
        index >= 3 ? "hidden" : " block"
      } `}
      onMouseEnter={() => handleMouseEvent(true)}
      onMouseLeave={() => handleMouseEvent(false)}
    >
      <img
        className={`hover:cursor-pointer w-full h-[80%] object-contain opacity-80 ${
          isHovered ? " hidden" : " block"
        }`}
        src={image}
        alt="Product Image"
      />
      <div
        className={`product-card-tags absolute top-[16px] left-[16px] flex items-center justify-center ${
          isHovered ? " hidden" : " block"
        }`}
      >
        <div className="product-card-tag px-[12px] py-[6px]  bg-BlueLight text-White font-bold uppercase rounded-[4px] mr-[8px] opacity-100">
          New
        </div>
      </div>
      <div
        className={` p-[16px] flex flex-col justify-between h-[10%] opacity-100 ${
          isHovered ? " hidden" : " block"
        }`}
      >
        <p className=" text-center font-bold mb-[8px] text-2xl text-BlueLighter ">{title}</p>
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center  bg-BlueDark rounded-md">
          <AppButton
            label={"See More"}
            handleAction={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AppProducts;
