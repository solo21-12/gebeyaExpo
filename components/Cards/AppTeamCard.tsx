import React, { FC } from "react";
import { Pargraph } from "..";
import { Teams } from "@/types/exhibitor";
import { Avatar } from "@mui/material";
type Props = {
  team: Teams;
};

const AppTeamCard: FC<Props> = ({ team }) => {
  return (
    <div className="  w-[32%] gap-5 py-8 flex items-center rounded-xl bg-[#f2f2f2] px-5">
      <div className=" flex">
        <Avatar src={team.image} className=" w-[80px] h-[80px]"  />
      </div>
      <div className=" text-left pl-3">
        <h3 className=" text-2xl font-bold">
          {team.firstName} {team.middleName} {team.lastName}
        </h3>
        <div className=" flex gap-2">
          <p className=" text-gray-400  text-base">{team.jobTitle}</p>
          <a
            href={team.linkedinLink}
            target="_blank"
            className=" text-gray-400 text-base hover:text-BlueLight hover:underline hover:scale-110"
          >
            {team.linkedinLink}
          </a>
        </div>
        <p className=" text-[14px] max-w-[250px]">{team.description}</p>
      </div>
    </div>
  );
};

export default AppTeamCard;
