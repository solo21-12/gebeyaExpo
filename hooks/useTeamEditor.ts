import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { Teams } from "@/types/exhibitor";
import { FormikValues, useFormikContext } from "formik";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const useTeamEditor = ({ setOpenModal }: Props) => {
  const { currentUser, setCurrentUser } = useExhibitorPortalContext();
  const { dirty, isValid, values, handleReset, submitForm } =
    useFormikContext<FormikValues>();
  let { teams } = currentUser;

  const handleDiscard = () => {
    handleReset();
    setOpenModal(false);
  };
  const handleSave = (currentTeam: FormikValues) => {
    submitForm();
    setOpenModal(false);
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
