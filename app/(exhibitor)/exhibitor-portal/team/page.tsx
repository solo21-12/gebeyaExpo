"use client";
import React, { useState } from "react";
import {
  AppButton,
  AppForm,
  AppTeamAdderDesktop,
  AppTeamAdderMobile,
  AppTeamEditor,
  AppTeamEditorDesktop,
  AppTeamEditorMobile,
  AppTeamLister,
} from "@/components";
import * as Yup from "yup";
import { Field } from "@/types/register";
import { FormikValues } from "formik";
import { useAPI } from "@/hooks";
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { Teams } from "@/types/exhibitor";
import Typography from "@mui/joy/Typography";
import { AppMenuItemContent } from "@/components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { Menu, MenuItem } from "@mui/material";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  middleName: Yup.string().label("Middle name"),
  jobTitle: Yup.string().required().label("Job title"),
  description: Yup.string().required().label("Description"),
  linkedinLink: Yup.string(),
  image: Yup.string(),
});

const initialValues: FormikValues = {
  firstName: "",
  lastName: "",
  middleName: "",
  jobTitle: "",
  description: "",
  linkedinLink: "",
  image: "",
};

const fields: Field[] = [
  {
    name: "firstName",
    label: "First Name",
    required: true,
  },
  {
    name: "middleName",
    label: "Middle Name",
    required: false,
  },
  {
    name: "lastName",
    label: "Last Name",
    required: true,
  },
  {
    name: "jobTitle",
    label: "job Title",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    required: true,
  },
  {
    name: "linkedinLink",
    label: "Linkedin Channel",
    required: false,
  },
];

const page = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {
    currentUser,
    setCurrentUser,
    editing,
    adding,
    setAdding,
    setEditing,
  } = useExhibitorPortalContext();
  const [teamEditorModal, setTeamEditorModal] = useState<boolean>(false);
  const [editingTeam, setEditingTeam] = useState<FormikValues | null>(null);
  const { teams } = currentUser;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [currentTeam, setCurrentTeam] = useState<Teams | null>(null);

  const open = Boolean(anchorEl);

  const { submitForm } = useAPI();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };

  const handleDelete = (team: Teams | null) => {
    if (team) {
      const newTeam = teams.filter((item) => item.id !== team.id);
      if (currentUser && newTeam) {
        setCurrentUser((currentUser) => ({ ...currentUser, teams: newTeam }));
      }
      handleClose();
      if (editing) {
        setEditing(false);
      }
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    team: Teams
  ) => {
    setAnchorEl(event.currentTarget);
    setCurrentTeam(team);
  };

  const handleEdit = (team: Teams | null) => {
    if (team) {
      // setTeamEditorModal(true);
      setEditing(true);
      setAdding(false);
      setEditingTeam(team);
      handleClose();
    }
  };

  return (
    <div className="">
      {teams.length == 0 && !adding && (
        <div className=" flex flex-col justify-center items-center h-screen">
          <div className="lg:w-[45%] w-[90%] md:w-[75%] mx-auto border-dashed border-2 h-[50vh] p-10 flex flex-col items-center justify-center">
            <h3 className=" text-base lg:text-2xl text-gray-400 font-bold">
              You don't have a team yet
            </h3>
            <AppButton
              label={"Add A team Member"}
              handleAction={() => {
                setAdding(true);
              }}
            />
          </div>
        </div>
      )}
      <div className=" mt-32 lg:mt-20  ml-5 w-[85%] xs:w-[65%] lg:w-[70%] xl:w-[77%] px-2 mx-auto md:ml-[280px] xs:ml-[165px] mr-5 h-[80vh] overflow-y-auto ">
        <div className=" flex justify-between sm:items-center mb-2 sm:flex-row flex-col w-[40%] sm:w-full ">
          <Typography level="h2">Teams</Typography>
          <AppButton
            label="Add New Member"
            handleAction={() => {
              setEditing(false);
              setAdding(true);
            }}
          />
        </div>
        <AppForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppTeamAdderMobile
            fields={fields}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          <AppTeamEditorMobile
            fields={fields}
            setOpenModal={setTeamEditorModal}
            openModal={teamEditorModal}
            initialValues={editingTeam}
          />

          <div className=" flex flex-col md:flex-row justify-between gap-10 ">
            {teams && <AppTeamLister teams={teams} openModal={handleClick} />}
            {editing && (
              <AppTeamEditor
                // @ts-ignore
                team={editingTeam}
                setEditing={setEditing}
                fields={fields}
                // @ts-ignore
                initialValues={editingTeam}
              />
            )}
            {adding && (
              <AppTeamAdderDesktop
                fields={fields}
                setEditing={setAdding}
                initialValues={initialValues}
              />
            )}
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleDelete(currentTeam)}>
              <AppMenuItemContent
                icon={<RiDeleteBin6Line className="text-2xl text-red-500" />}
                title="Delete"
                description="Delete this member"
              />
            </MenuItem>
            <MenuItem onClick={() => handleEdit(currentTeam)}>
              <AppMenuItemContent
                icon={<AiOutlineEdit className="text-2xl text-yellow-500" />}
                title="Edit"
                description="Edit this member profile"
              />
            </MenuItem>
          </Menu>
        </AppForm>
      </div>
    </div>
  );
};

export default page;
