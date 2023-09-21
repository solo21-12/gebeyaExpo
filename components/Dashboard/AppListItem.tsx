import { MenuItems } from "@/types/dashboard";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

type Props = {
  item: MenuItems;
  handleClick: (path: string) => void;
};

const AppListItem: FC<Props> = ({ item, handleClick }) => {
  const path = usePathname();
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          handleClick(item.path);
        }}
        className={` hover:bg-BlueLight/30 hover:translate-x-1 sm:text-ellipsis  ${
          path == item.path ? " bg-BlueLight/30" : ""
        } `}
      >
        <ListItemIcon>{item.Icon}</ListItemIcon>
        <ListItemText
          primary={item.name}
          className=" text-BlueDark text-4xl block md:block xs:hidden"
        />
      </ListItemButton>
    </ListItem>
  );
};

export default AppListItem;
