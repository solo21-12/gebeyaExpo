import Image from "next/image";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type Props = {
  isOpen: boolean;
  handleMenuClick: () => void;
  logoChange: boolean;
};

const AppMobileNavBar: React.FC<Props> = ({
  isOpen,
  handleMenuClick,
  logoChange,
}) => {
  const commonImageProps = {
    alt: "Main logo",
    width: 70,
    height: 70,
  };

  return (
    <div className="flex md:hidden justify-between align-middle items-center p-5 gap-5">
      <Image
        src={logoChange ? "/logoMobileBlack.png" : "/logoMobile.png"}
        {...commonImageProps}
      />
      <div className="align-middle items-center flex gap-3">
        <Image
          src="/partner.png"
          alt="Main logo"
          width={200}
          height={200}
          className="object-cover"
        />
        {logoChange ? (
          <AiOutlineClose
            className="text-3xl text-White cursor-pointer"
            onClick={handleMenuClick}
          />
        ) : (
          <AiOutlineMenu
            className="text-3xl text-BlueLighter cursor-pointer"
            onClick={handleMenuClick}
          />
        )}
      </div>
    </div>
  );
};

export default AppMobileNavBar;
