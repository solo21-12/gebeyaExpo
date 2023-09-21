import React, { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Button,
  Avatar,
  TableContainer,
} from "@mui/material";
import { Teams } from "@/types/exhibitor";
type Props = {
  teams: Teams[] | null;
  handleDelete: (team: Teams) => void;
  handleEdit: (team: Teams) => void;
};

const AppTeamLister: FC<Props> = ({ teams, handleDelete, handleEdit }) => {
  return (
    <TableContainer className=" mt-12 pb-20  h-[70vh]  overflow-y-scroll">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Middle Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>LinkedinLink</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams &&
            teams.map((team) => (
              <TableRow
                className=" hover:bg-BlueLight hover:bg-opacity-10 cursor-pointer"
                key={team.id}
              >
                <TableCell>
                  <Avatar src={team.image} />
                </TableCell>

                <TableCell>{team.firstName}</TableCell>
                <TableCell>{team.middleName}</TableCell>
                <TableCell>{team.lastName}</TableCell>
                <TableCell>{team.jobTitle}</TableCell>
                <TableCell>{team.description}</TableCell>
                <TableCell>{team.linkedinLink}</TableCell>
                <TableCell>
                  <Button
                    className=" text-red-700 text-2xl hover:bg-red-100"
                    onClick={() => handleDelete(team)}
                  >
                    {" "}
                    <AiOutlineDelete />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    className=" text-yellow-400 text-2xl hover:bg-yellow-100"
                    onClick={() => handleEdit(team)}
                  >
                    {" "}
                    <AiOutlineEdit />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppTeamLister;
