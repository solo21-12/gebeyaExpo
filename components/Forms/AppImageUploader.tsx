import { useImageUploader } from "@/hooks";
import AspectRatio from "@mui/joy/AspectRatio";
import { FormikValues, useFormikContext } from "formik";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

type FileUploaderProps = {
  imageUrl?: string;
  fieldName: string;
};

const AppImageUploader: React.FC<FileUploaderProps> = ({
  imageUrl,
  fieldName,
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { handleFileUpload } = useImageUploader();
  const { values } = useFormikContext<FormikValues>();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      handleFileUpload(file, fieldName);
    },
    [handleFileUpload, fieldName]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // @ts-ignore
    accept: "image/*",
    multiple: false,
  });

  return (
    <div className="cursor-pointer">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {imageUrl && !values[fieldName] && (
          <AspectRatio ratio="16/9">
            <img
              src={imageUrl}
              alt="Uploaded"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
              className="object-contain"
            />
          </AspectRatio>
        )}
        {imageUrl && values[fieldName] && (
          <div>
            <AspectRatio ratio="16/9">
              <img
                src={values[fieldName]}
                alt="Uploaded"
                style={{ maxWidth: "100%", maxHeight: "300px" }}
                className="object-contain"
              />
            </AspectRatio>
          </div>
        )}
        {!imageUrl && !values[fieldName] && (
          <AspectRatio ratio="21/9">
            <p className="text-center">
              Drag & drop an image file here, or click to select one
            </p>
          </AspectRatio>
        )}
        {!imageUrl && values[fieldName] && (
          <div>
            <AspectRatio ratio="16/9">
              <img
                src={values[fieldName]}
                alt="Uploaded"
                style={{ maxWidth: "100%", maxHeight: "300px" }}
                className="object-contain"
              />
            </AspectRatio>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppImageUploader;
