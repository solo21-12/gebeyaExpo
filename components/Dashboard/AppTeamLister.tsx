import React, { FC, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { SiAboutdotme } from "react-icons/si";

import { Teams } from "@/types/exhibitor";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import { textCliper } from "@/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";

type Props = {
  teams: Teams[] | null;
  openModal: any;
};

const AppTeamLister: FC<Props> = ({ teams, openModal }) => {
  const router = useRouter();
  const [teamBioStates, setTeamBioStates] = useState<boolean[]>(
    teams?.map(() => false) || []
  );

  const toggleTeamBio = (teamIndex: number) => {
    setTeamBioStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[teamIndex] = !updatedStates[teamIndex];
      return updatedStates;
    });
  };

  return (
    <List
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 2,
      }}
    >
      {teams?.map((team, index) => (
        <Sheet
          key={index}
          component="li"
          variant="outlined"
          sx={{
            borderRadius: "sm",
            p: 2,
            listStyle: "none",
          }}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Avatar src={team.image} sx={{ borderRadius: "sm" }} />
              <div>
                <Typography>
                  {team.firstName} {team.middleName} {team.lastName}
                </Typography>
                <Typography level="body-xs">{team.jobTitle}</Typography>
              </div>
            </div>
            <div
              className="cursor-pointer text-xl hover:bg-BlueLighter hover:bg-opacity-10 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                openModal(e, team);
              }}
            >
              <CiMenuKebab />
            </div>
          </div>
          <Divider component="div" sx={{ my: 2 }} />
          <List sx={{ "--ListItemDecorator-size": "48px" }}>
            <ListItem sx={{ alignItems: "flex-start" }}>
              <ListItemDecorator
                sx={{
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    height: "100%",
                    width: "2px",
                    bgcolor: "divider",
                    left: "calc(var(--ListItem-paddingLeft) + 15px)",
                    top: "50%",
                  },
                }}
              >
                <AiFillLinkedin className="rounded-full text-3xl bg-BlueLighter text-White p-1" />
              </ListItemDecorator>
              <ListItemContent>
                <Typography fontSize="sm">Linkedin</Typography>
                <Typography level="body-xs">{team.linkedinLink}</Typography>
              </ListItemContent>
              <Button
                className="bg-BlueLighter text-xs px-2 hover:bg-BlueLighter/90"
                size="sm"
                onClick={() => router.push(team.linkedinLink as string)}
              >
                <Link
                  href={team.linkedinLink as string}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect
                </Link>
              </Button>
            </ListItem>
            <ListItem sx={{ alignItems: "flex-start" }}>
              <ListItemDecorator>
                <SiAboutdotme className="rounded-full text-3xl bg-BlueLighter text-White p-1" />
              </ListItemDecorator>
              <ListItemContent>
                <Typography fontSize="sm">Bio</Typography>
                <Typography level="body-xs">
                  {teamBioStates[index]
                    ? team.description
                    : textCliper(team.description, 50)}
                </Typography>
              </ListItemContent>

              <Button
                className="bg-BlueLighter text-xs hover:bg-BlueLighter/90"
                size="sm"
                onClick={() => toggleTeamBio(index)}
              >
                {teamBioStates[index] ? "Less" : "more"}
              </Button>
            </ListItem>
          </List>
        </Sheet>
      ))}
    </List>
  );
};

export default AppTeamLister;
