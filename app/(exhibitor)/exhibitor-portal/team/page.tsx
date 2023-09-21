"use client";
import React, { useState } from "react";
import {
  AppButton,
  AppForm,
  AppTeamAdderDesktop,
  AppTeamAdderMobile,
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

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  middleName: Yup.string().label("Middle name"),
  jobTitle: Yup.string().required().label("Job title"),
  description: Yup.string().required().label("Description"),
  linkedinLink: Yup.string(),
});

const initialValues: FormikValues = {
  firstName: "",
  lastName: "",
  middleName: "",
  jobTitle: "",
  description: "",
  linkedinLink: "",
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
  const { currentUser, setCurrentUser } = useExhibitorPortalContext();
  const [teamEditorModal, setTeamEditorModal] = useState<boolean>(false);
  const [editingTeam, setEditingTeam] = useState<FormikValues | null>(null);
  const { teams } = currentUser;

  const { submitForm } = useAPI();

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };

  const handleDelete = (team: Teams) => {
    const newTeam = teams.filter((item) => item.id !== team.id);
    if (currentUser && newTeam) {
      setCurrentUser({ ...currentUser, teams: newTeam });
    }
  };

  const handleEdit = (team: Teams) => {
    setTeamEditorModal(true);
    setEditingTeam(team);
  };

  return (
    <div className="">
      {teams.length == 0 && (
        <div className=" flex flex-col justify-center items-center h-screen">
          <div className="lg:w-[45%] w-[90%] md:w-[75%] mx-auto border-dashed border-2 h-[50vh] p-10 flex flex-col items-center justify-center">
            <h3 className=" text-base lg:text-2xl text-gray-400 font-bold">
              You don't have a team yet
            </h3>
            <AppButton
              label={"Add A team Member"}
              handleAction={() => {
                setOpenModal(true);
              }}
            />
          </div>
        </div>
      )}
      <div className=" mt-32 lg:mt-20  ml-5 w-[80%] mx-auto md:ml-[260px] xs:ml-[165px]">
        {!openModal && (
          <AppButton
            label="Add New Member"
            handleAction={() => setOpenModal(true)}
          />
        )}

        <AppForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppTeamAdderDesktop
            fields={fields}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          <AppTeamAdderMobile
            fields={fields}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          <AppTeamEditorDesktop
            fields={fields}
            setOpenModal={setTeamEditorModal}
            openModal={teamEditorModal}
            initialValues={editingTeam}
          />
          <AppTeamEditorMobile
            fields={fields}
            setOpenModal={setTeamEditorModal}
            openModal={teamEditorModal}
            initialValues={editingTeam}
          />

          {teams && (
            <AppTeamLister
              teams={teams}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )}
        </AppForm>
      </div>
    </div>
  );
};

export default page;
