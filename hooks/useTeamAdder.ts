import { Teams } from "@/types/exhibitor";
import { useState } from "react";
import { FormikValues, useFormikContext } from "formik";
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { v4 as uuidv4 } from "uuid";

const getId = (team: FormikValues): string => {
  const uniqueId = uuidv4();
  return uniqueId;
};

const useTeamAdder = () => {
  const { dirty, isValid, values, handleReset, submitForm } =
    useFormikContext<FormikValues>();
  const { currentUser, setCurrentUser, setAdding } =
    useExhibitorPortalContext();
  let { teams } = currentUser;
  const [CurrentTeams, setTeams] = useState<Teams[]>(teams);

  const handleDiscard = () => {
    handleReset();
    setAdding(false);
  };

  const handleAddMoreMembers = () => {
    if (isValid) {
      const id = getId(values);
      const newTeam = [{ ...values, id }, ...teams];
      // @ts-ignore
      setCurrentUser((prevUser) => ({
        ...prevUser,
        teams: newTeam,
      }));
      // @ts-ignore
      setTeams((prevTeams) => [...prevTeams, { ...values, id }]);

      submitForm().then(() => {
        handleReset();
      });
    }
  };

  const handleSave = () => {
    handleAddMoreMembers();
    setAdding(false);
  };

  const handleRemove = (team: Teams) => {
    const newTeam = teams.filter((item) => item.id !== team.id);
    setTeams(newTeam);
    setCurrentUser({ ...currentUser, teams: newTeam });
  };

  return {
    handleAddMoreMembers,
    handleDiscard,
    handleRemove,
    handleSave,
    CurrentTeams,
    isValid,
    dirty,
    values,
  };
};

export default useTeamAdder;
