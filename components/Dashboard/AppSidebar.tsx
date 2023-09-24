"use client";

import { AppDrawer } from "@/components";
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { MenuItems } from "@/types/dashboard";
import { ExhibitorsDataType } from "@/types/exhibitor";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { AiOutlineLogin, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";

const drawerWidth = 250;

interface Props {
  window?: () => Window;
  menuItems: MenuItems[];
}

const UserMenu: MenuItems[] = [
  {
    name: "Login",
    Icon: <AiOutlineLogin className=" text-3xl text-BlueLighter" />,
    path: "/exhibitor-login",
  },
  {
    name: "Logout",
    Icon: <AiOutlineLogout className=" text-3xl text-BlueLighter" />,
    path: "/",
  },
];

const AppSidebar: FC<Props> = ({ window, menuItems }) => {
  const { currentUser } = useExhibitorPortalContext();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [user, setUser] = useState<ExhibitorsDataType | null>(currentUser);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (path: string) => {
    handleDrawerToggle();
    router.push(path);
  };

  const auth = async () => {
    if (user) {
      setUser(null);
      handleDrawerToggle();
      router.push("/");
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "transparent",
          boxShadow: "none",
          display: { md: "none" },
        }}
      >
        <Toolbar className="  flex justify-between xs:hidden bg-white rounded-t-[3rem] ">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <AiOutlineMenu className=" text-BlueLighter text-4xl m-5 " />
          </IconButton>
          <Link href="/">
            <Image src={"/logoMobile.png"} width={70} height={70} alt="logo" />
          </Link>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          <AppDrawer
            user={user}
            setMobileOpen={setMobileOpen}
            menuItems={menuItems}
            UserMenu={UserMenu}
            handleClick={handleClick}
            auth={auth}
          />
        </Drawer>
        <Drawer
          variant="permanent"
          className=" w-[250px] xs:w-[80px] lg:w-[250px]"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",

              height: "100vh",
              backgroundColor: "transparent",
            },
          }}
          open
        >
          <AppDrawer
            user={user}
            setMobileOpen={setMobileOpen}
            menuItems={menuItems}
            UserMenu={UserMenu}
            handleClick={handleClick}
            auth={auth}
          />
        </Drawer>
      </Box>
    </Box>
  );
};

export default AppSidebar;
