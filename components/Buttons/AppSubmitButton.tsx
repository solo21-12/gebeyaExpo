import { useFormikContext } from "formik";
import AppButton from "./AppButton";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface App {
  title: string;
  iconOnly?: boolean;
  setProcess: (val: boolean) => void;
  setError: Dispatch<SetStateAction<boolean>>;
  Icon?: ReactNode;
  disabled?: boolean;
}
export const AppSubmitButton = ({
  title,
  iconOnly,
  setProcess,
  setError,
  Icon,
  disabled,
}: App) => {
  const { handleSubmit, isValid, dirty } = useFormikContext();
  const handleClick = () => {
    if (dirty && isValid) {
      setProcess(true);
      setError(false);
      handleSubmit();
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {iconOnly ? (
        <div
          className="text-BlueLighter text-4xl cursor-pointer"
          onClick={handleClick}
        >
          {Icon}
        </div>
      ) : (
        <AppButton
          label={title}
          handleAction={handleClick}
          Icon={Icon}
          disabled={disabled}
        />
      )}
    </div>
  );
};
