import { useFormikContext } from "formik";
import AppButton from "./AppButton";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface App {
  title: string;
  icon?: boolean;
  setProcess: (val: boolean) => void;
  setComplete: (val: boolean) => void;
}
export const AppSubmitButton = ({
  title,
  icon,
  setComplete,
  setProcess,
}: App) => {
  const { handleSubmit } = useFormikContext();
  const handleClick = () => {
    setProcess(true);
    setTimeout(() => {
      setComplete(true);
    }, 1000);
    handleSubmit();
  };

  return (
    <div>
      {icon ? (
        <BsFillArrowRightCircleFill
          className="text-BlueLighter text-4xl cursor-pointer"
          onClick={handleClick}
        />
      ) : (
        <AppButton label={title} handleAction={handleClick} />
      )}
    </div>
  );
};
