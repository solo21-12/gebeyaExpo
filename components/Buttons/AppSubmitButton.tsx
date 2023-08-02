import { useFormikContext } from "formik";
import AppButton from "./AppButton";

interface App {
  title: string;
}
export const AppSubmitButton = ({ title }: App) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton label={title} handleAction={handleSubmit} />;
};
