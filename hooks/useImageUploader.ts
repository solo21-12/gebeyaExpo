import { FormikValues, useFormikContext } from "formik";

const useImageUploader = () => {
  const { setFieldValue } = useFormikContext<FormikValues>();

  const handleFileUpload = (file: File, fieldName: string) => {
    const imageUrl = URL.createObjectURL(file);
    setFieldValue(fieldName, imageUrl);
  };

  return { handleFileUpload };
};

export default useImageUploader;
