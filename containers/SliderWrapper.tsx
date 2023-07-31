"use client";
import React, { useState } from "react";
import { AppNavBar } from ".";

type Props = {
  children: React.ReactNode;
};

export default function AppSliderWrapper({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [logoChange, setLogoChange] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);

    if (logoChange) {
      setTimeout(() => {
        setLogoChange(!logoChange);
      }, 700);
    } else {
      setTimeout(() => {
        setLogoChange(!logoChange);
      }, 150);
    }
  };
  const pathSelected = () => {
    setIsOpen(false);

    if (logoChange) {
      setTimeout(() => {
        setLogoChange(!logoChange);
      }, 350);
    } else {
      setTimeout(() => {
        setLogoChange(!logoChange);
      }, 100);
    }
  };

  return (
    <div className=" relative">
      <AppNavBar
        isOpen={isOpen}
        handleMenuClick={handleMenuClick}
        logoChange={logoChange}
        setIsOpen={pathSelected}
      />
      <div
        className={` absolute top-2 left-0 right-0 bg-white min-h-screen rounded-tl-[3rem] rounded-tr-[3rem] transition-transform transform ease-in-out duration-1000 scroll-smooth ${
          isOpen ? " translate-y-full md:translate-y-[85vh] " : "top-2 "
        }`}
      >
        {children}
      </div>
    </div>
  );
}
