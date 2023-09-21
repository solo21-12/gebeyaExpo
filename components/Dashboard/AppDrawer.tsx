import { Avatar, List, Toolbar } from "@mui/material";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import AppListItem from "./AppListItem";
import { MenuItems, User } from "@/types/dashboard";
import { ExhibitorsDataType } from "@/types/exhibitor";

type Props = {
  user: ExhibitorsDataType | null;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  menuItems: MenuItems[];
  UserMenu: MenuItems[];
  handleClick: (path: string, index?: number) => void;
  auth: () => void;
};

const AppDrawer: FC<Props> = ({
  user,
  setMobileOpen,
  UserMenu,
  menuItems,
  handleClick,
  auth,
}) => {
  return (
    <>
      <div onClick={() => setMobileOpen(false)}>
        <AiOutlineClose className=" text-4xl text-BlueLighter absolute top-5  right-5 hover:cursor-pointer block xs:hidden" />
      </div>
      <div className=" flex items-center justify-center flex-col gap-10 mt-20 px-2 ">
        <Toolbar>
          {user?.image ? (
            <div className="h-48 w-48 xs:h-10 xs:w-10 md:h-48 md:w-48">
              <img
                className=" h-48 xs:h-10 md:h-48 w-full rounded-full object-contain   border border-BlueLighter "
                src={user?.image}
                alt="exhibitor logo"
              />
            </div>
          ) : (
            <Avatar className=" h-48 w-48 bg-BlueDark/80" />
          )}
        </Toolbar>

        <List className=" w-full  flex flex-col gap-3">
          {menuItems.map((item, index) => (
            <AppListItem
              key={item.name}
              item={item}
              handleClick={handleClick}
            />
          ))}
        </List>
        {menuItems.length > 0 && (
          <List className=" w-full  flex flex-col gap-3">
            {user ? (
              <AppListItem item={UserMenu[1]} handleClick={auth} />
            ) : (
              <AppListItem item={UserMenu[0]} handleClick={auth} />
            )}
          </List>
        )}
      </div>
    </>
  );
};

export default AppDrawer;
