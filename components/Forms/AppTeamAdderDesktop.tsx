import React, { Dispatch, FC, SetStateAction } from "react";
import { Field } from "@/types/register";
import { AiOutlineDelete } from "react-icons/ai";

import { AppButton, AppFormField } from "..";
import { Button, Modal, Stack } from "@mui/material";
import { useTeamAdder } from "@/hooks";

type Props = {
  fields: Field[];
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
};

const AppTeamAdderDesktop: FC<Props> = ({
  fields,
  openModal,
  setOpenModal,
}) => {
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
    <Modal
      open={openModal}
      className=" items-center hidden md:flex flex-col justify-center "
    >
      <div className=" bg-BlueDark h-[60vh] w-[100%] md:w-[89%] 2xl:w-[60%] mx-auto">
        <div className=" bg-white  rounded-t-[3rem]  rounded-b-md w-full h-full mt-2 flex flex-col  justify-center gap-5">
          <h3 className=" text-xs md:text-base text-BlueLight font-bold  uppercase w-[90%] text-center mx-auto ">
            Add Your Team members
          </h3>
          {tempoTeams.length > 0 && (
            <Stack
              direction="row"
              rowGap={2}
              className=" flex gap-10 w-[90%] mx-auto  overflow-x-scroll px-5 py-3"
            >
              {tempoTeams.map((team) => (
                <Button
                  className={` ${team.bgColor}  bg-BlueLight  flex-shrink-0 text-xs text-White px-5 rounded-lg `}
                  endIcon={
                    <AiOutlineDelete
                      className=" text-xl text-red-500 font-bold"
                      onClick={() => handleRemove(team)}
                    />
                  }
                  key={team.id}
                >
                  {team.firstName}
                </Button>
              ))}
            </Stack>
          )}
          <div className=" flex flex-wrap gap-5 w-[90%] mx-auto items-center justify-center">
            {fields.map((item) => (
              <AppFormField
                key={item.name}
                required={item.required}
                name={item.name}
                value={values[item.name]}
                label={item.label}
                className=" min-w-[300px] xs:min-w-[200px]  lg:min-w-[400px] "
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
            <AppButton label="close" handleAction={handleDiscard} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AppTeamAdderDesktop;
