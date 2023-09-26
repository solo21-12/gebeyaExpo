import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { FormikValues, useFormikContext } from "formik";

type Props = {
  initialValues: FormikValues | null;
};

const useProductEditor = ({ initialValues }: Props) => {
  const { currentUser, setCurrentUser, setEditing } =
    useExhibitorPortalContext();
  const { dirty, isValid, values, handleReset, submitForm, setValues } =
    useFormikContext<FormikValues>();
  let { products } = currentUser;
  const handleDiscard = () => {
    if (initialValues) {
      setValues(initialValues);
    }
    setEditing(false);
    handleReset();
  };

  const handleSave = (currentTeam: FormikValues) => {
    const productIndex = products.findIndex(
      (team) => team.id === currentTeam.id
    );

    if (productIndex !== -1) {
      const updatedProducts = [...products];

      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        ...currentTeam,
      }; // Merge the changes

      setCurrentUser({ ...currentUser, products: updatedProducts });

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

export default useProductEditor;
