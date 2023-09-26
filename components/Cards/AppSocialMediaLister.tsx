import React, { FC, ReactNode } from "react";

import Typography from "@mui/joy/Typography";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Button from "@mui/joy/Button";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { useRouter } from "next/navigation";

type Props = {
  link: string | undefined;
  lable: string;
  Icon: ReactNode;
};

const AppSocialMediaLister: FC<Props> = ({ link, Icon, lable }) => {
  const router = useRouter();
  return (
    <div>
      <ListItem
        sx={{ alignItems: "flex-start" }}
        
        className=" flex flex-col items-left gap-1"
      >
        <ListItemDecorator>
          <Link
            href={link as string}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full  text-2xl bg-BlueLighter text-White p-1 cursor-pointer hover:scale-105"
          >
            {Icon}
          </Link>
        </ListItemDecorator>
      </ListItem>
    </div>
  );
};

export default AppSocialMediaLister;
