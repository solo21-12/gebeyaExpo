import { Teams, TempoTeams } from "@/types/exhibitor";
import { Dispatch, SetStateAction, useState } from "react";
import { FormikValues, useFormikContext } from "formik";
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const colors: string[] = [
  "bg-indigo-500 !important",
  "bg-orange-400 ",
  "bg-cyan-700 ",
  "bg-green-400 ",
  "bg-stone-600 ",
  "bg-yellow-400 ",
  "bg-violet-800 ",
  "bg-lime-400 ",
  "bg-emerald-500 ",
  "bg-violet-500 ",
  "bg-emerald-800 ",
  "bg-slate-600 ",
  "bg-cyan-400 ",
  "bg-fuchsia-400 ",
  "bg-purple-600 ",
  "bg-pink-900 ",
];

const setBgColor = (): number => {
  const number = Math.round(Math.random() * 16);
  return number;
};

const getId = (team: FormikValues): string => {
  const id =
    team.firstName[0] + team.lastName[0] + team.jobTitle[0] + team.firstName;

  return id;
};

const useTeamAdder = ({ setOpenModal }: Props) => {
  const {
    dirty,
    isValid,
    values,
    handleReset,
    submitForm,
  } = useFormikContext<FormikValues>();
  const { currentUser, setCurrentUser } = useExhibitorPortalContext();
  let { teams } = currentUser;
  const [CurrentTeams, setTeams] = useState<Teams[]>(teams);
  const [tempoTeams, setTempoTeams] = useState<TempoTeams[]>([]);

  const handleDiscard = () => {
    handleReset();
    setOpenModal(false);
    setTempoTeams([]);
  };

  const handleAddMoreMembers = () => {
    if (isValid) {
      const id = getId(values);
      const bgColor = setBgColor();
      // teams.push({ ...values, id });
      const newTeam = [{ ...values, id }, ...teams];
      // @ts-ignore
      setCurrentUser({ ...currentUser, teams: newTeam });

      setTeams(
        // @ts-ignore
        [...CurrentTeams, { ...values, id }]
      );
      setTempoTeams(
        // @ts-ignore
        [...tempoTeams, { ...values, id, bgColor: colors[bgColor] }]
      );
      // handleSubmit();
      submitForm().then(() => {
        handleReset();
      });
    }
  };

  const handleSave = () => {
    handleAddMoreMembers();
    setTempoTeams([]);
    setOpenModal(false);
  };

  const handleRemove = (team: Teams) => {
    const newTeam = teams.filter((item) => item.id !== team.id);
    const newTempoTeam = tempoTeams.filter((item) => item.id !== team.id);

    setTeams(newTeam);
    setTempoTeams(newTempoTeam);
    setCurrentUser({ ...currentUser, teams: newTeam });
  };

  return {
    handleAddMoreMembers,
    handleDiscard,
    handleRemove,
    handleSave,
    CurrentTeams,
    tempoTeams,
    isValid,
    dirty,
    values,
  };
};

export default useTeamAdder;
