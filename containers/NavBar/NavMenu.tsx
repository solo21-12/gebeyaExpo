"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { NavList } from "@/constants/navbarlist";
import { Options } from "@/types/navbarlist";
import { motion, AnimatePresence } from "framer-motion";
import AppMobileNavMenu from "./MobileMenu";
import AppDesktopNavMenu from "./DesktopMenu";

type Props = { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> };

export default function AppNavMenu({ isOpen, setIsOpen }: Props) {
  const [active, setActive] = useState<number>(0);
  const [menuOptions, setMenuOptions] = useState<Options[]>([]);
  const [selectedElement, setSelectedElement] = useState<string>("");

  const router = useRouter();

  const handleClick = (index: number) => {
    setActive(index);
    const selectedList = NavList[index];
    if (selectedList.options) {
      setMenuOptions(selectedList.options);
      setSelectedElement(selectedList.lable);
    } else {
      setMenuOptions([]);
      setIsOpen(false);
      router.push(selectedList.path as string);
    }
  };

  return (
    <div>
      <AppMobileNavMenu
        isOpen={isOpen}
        menuOptions={menuOptions}
        handleClick={handleClick}
        selectedElement={selectedElement}
        active={active}
      />
      <AppDesktopNavMenu
        isOpen={isOpen}
        menuOptions={menuOptions}
        handleClick={handleClick}
        selectedElement={selectedElement}
        active={active}
      />
    </div>
  );
}
