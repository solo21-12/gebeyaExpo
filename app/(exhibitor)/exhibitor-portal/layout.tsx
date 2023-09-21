import { AppAuthWrapper } from "@/containers";
import { ExhibitorPortalContext } from "@/context";
import { MenuItems } from "@/types/dashboard";
import { Badge } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { BsPersonFillGear } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";

type Props = {
  children: ReactNode;
};

const layout: FC<Props> = ({ children }) => {
  const menuItems: MenuItems[] = [
    {
      name: "Profile",
      Icon: <BsPersonFillGear className=" text-3xl text-BlueLighter" />,
      path: "/exhibitor-portal/profile",
    },
    {
      name: "Teams",
      Icon: <AiOutlineTeam className=" text-3xl text-BlueLighter" />,
      path: "/exhibitor-portal/team",
    },
    {
      name: "Products",
      Icon: <CiShoppingCart className=" text-3xl text-BlueLighter" />,
      path: "/exhibitor-portal/products",
    },
  ];

  return (
    <ExhibitorPortalContext>
      <AppAuthWrapper menuItems={menuItems} notifications={true}>
        {children}
      </AppAuthWrapper>
    </ExhibitorPortalContext>
  );
};

export default layout;
