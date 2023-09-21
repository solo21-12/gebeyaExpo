"use client";

import React, { Dispatch, SetStateAction } from "react";
import AppDesktopNavBar from "./DesktopNavBar";
import AppMobileNavBar from "./MobileNavabr";
import AppNavMenu from "./NavMenu";
import Sponsor from "./sponsor";
import { usePathname } from "next/navigation";

type Props = {
  isOpen: boolean;
  handleMenuClick: () => void;
  logoChange: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function AppNavBar({
  handleMenuClick,
  isOpen,
  logoChange,
  setIsOpen,
}: Props) {
  const hiddenRoutes = ["/exhibitor-portal", "/exhibitor-login","/exhibitor-portal/notification","exhibitor-portal/notification/[id]","/exhibitor-portal/profile","/exhibitor-portal/team",'/exhibitor-portal/products'];
  const hiddenNavigationBar = hiddenRoutes.includes(usePathname());
  return (
    <div>
      {!hiddenNavigationBar && (
        <div className="  absolute top-2 left-0 right-0 z-20 md:w-[70%] mx-auto ">
          <AppDesktopNavBar
            isOpen={isOpen}
            handleMenuClick={handleMenuClick}
            logoChange={logoChange}
          />
          <AppMobileNavBar
            isOpen={isOpen}
            handleMenuClick={handleMenuClick}
            logoChange={logoChange}
          />
          <AppNavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          <Sponsor isOpen={isOpen} />
        </div>
      )}
    </div>
  );
}
