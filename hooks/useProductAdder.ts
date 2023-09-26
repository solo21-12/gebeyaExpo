import { Product } from "@/types/exhibitor";
import { useState } from "react";
import { FormikValues, useFormikContext } from "formik";
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { v4 as uuidv4 } from "uuid";
const getId = (team: FormikValues): string => {
  const uniqueId = uuidv4();
  return uniqueId;
};

const useProductAdder = () => {
  const { dirty, isValid, values, handleReset, submitForm } =
    useFormikContext<FormikValues>();
  const { currentUser, setCurrentUser, setAdding } =
    useExhibitorPortalContext();
  let { products } = currentUser;
  const [CurrentProducts, setCurrentproduct] = useState<Product[]>(products);

  const handleDiscard = () => {
    handleReset();
    setAdding(false);
  };

  const handleAddMoreProducts = () => {
    if (isValid) {
      const id = getId(values);
      const newProduct = {
        ...values,
        id,
        categorie: [...values.categorie],
      };

      // Update the state with the new product
      // @ts-ignore
      setCurrentUser((prevUser) => ({
        ...prevUser,
        products: [newProduct, ...prevUser.products],
      }));

      // Update the currentProduct state
      // @ts-ignore
      setCurrentproduct((prevProduct) => [...prevProduct, newProduct]);

      // Submit the form data (if needed)
      submitForm().then(() => {
        handleReset();
      });
    }
  };

  const handleSave = () => {
    handleAddMoreProducts();
    setAdding(false);
  };

  const handleRemove = (produc: Product) => {
    const newProduct = products.filter((item) => item.id !== produc.id);
    setCurrentproduct(newProduct);
    setCurrentUser({ ...currentUser, products: newProduct });
  };

  return {
    handleAddMoreProducts,
    handleDiscard,
    handleRemove,
    handleSave,
    CurrentProducts,
    isValid,
    dirty,
    values,
  };
};

export default useProductAdder;
