import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { FormikValues, useFormikContext } from "formik";

type Props = {
  initialValues: FormikValues | null;
};

const useTeamEditor = ({ initialValues }: Props) => {
  const { currentUser, setCurrentUser, setEditing } =
    useExhibitorPortalContext();
  const { dirty, isValid, values, handleReset, submitForm, setValues } =
    useFormikContext<FormikValues>(); 
  let { teams } = currentUser;

  const handleDiscard = () => {
    if (initialValues) {
      setValues(initialValues);
    }
    setEditing(false);
    handleReset();
  };

  const handleSave = (currentTeam: FormikValues) => {
    const teamIndex = teams.findIndex((team) => team.id === currentTeam.id);

    if (teamIndex !== -1) {
      const updatedTeams = [...teams];

      updatedTeams[teamIndex] = { ...updatedTeams[teamIndex], ...currentTeam }; // Merge the changes

      setCurrentUser({ ...currentUser, teams: updatedTeams });

      submitForm().then(() => {
        setEditing(false);
        handleReset();
      });
    }
  };

  return {
    handleDiscard,
    handleSave,
    isValid,
    dirty,
    values,
  };
};

export default useTeamEditor;
