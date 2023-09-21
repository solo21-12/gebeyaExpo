import React, { Dispatch, FC, SetStateAction } from "react";
import { Field } from "@/types/register";
import { AiOutlineDelete } from "react-icons/ai";

import { AppButton, AppFormField } from "..";
import { Button, Stack } from "@mui/material";
import { useTeamAdder } from "@/hooks";

type Props = {
  fields: Field[];
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
};

const AppTeamAdderMobile: FC<Props> = ({ fields, setOpenModal, openModal }) => {
  const {
    handleAddMoreMembers,
    handleDiscard,
    handleRemove,
    handleSave,
    tempoTeams,
    dirty,
    isValid,
    values,
  } = useTeamAdder({ setOpenModal: setOpenModal });

  return (
    openModal && (
      <div className=" w-[90%] mx-auto mt-2 flex flex-col  justify-center gap-5 md:hidden mb-10">
        <h3 className=" mt-6 text-base text-BlueLight font-bold  uppercase w-[90%] mx-auto ">
          Add Your Team members
        </h3>
        {tempoTeams.length > 0 && (
          <Stack
            direction="row"
            rowGap={2}
            className=" flex gap-10  mx-auto  overflow-x-scroll pr-10 pl-5 pb-2 max-w-[450px]"
          >
            {tempoTeams.map((team) => (
              <Button
                endIcon={
                  <AiOutlineDelete
                    className=" text-xl text-red-500 font-bold"
                    onClick={() => handleRemove(team)}
                  />
                }
                className={`${team.bgColor} bg-BlueLight  flex-shrink-0 text-xs text-White px-5 rounded-lg `}
                key={team.id}
              >
                {team.firstName}
              </Button>
            ))}
          </Stack>
        )}
        <div className=" flex flex-wrap gap-4 w-full  mx-auto items-center">
          {fields.map((item) => (
            <AppFormField
              key={item.name}
              required={item.required}
              name={item.name}
              value={values[item.name]}
              label={item.label}
              className=" min-w-[320px]  "
            />
          ))}
        </div>
        <div className=" flex gap-5 mx-auto">
          <AppButton
            label="Save"
            handleAction={handleSave}
            disabled={!isValid || !dirty}
          />
          <AppButton
            label="Add more"
            handleAction={handleAddMoreMembers}
            disabled={!isValid || !dirty}
          />
          <AppButton label="Discard" handleAction={handleDiscard} />
        </div>
      </div>
    )
  );
};

export default AppTeamAdderMobile;
