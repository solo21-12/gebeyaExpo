import axios from "axios";
import { FormikValues } from "formik";
import { useState } from "react";

const useAPI = () => {
  const [progress, setProgress] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<number>();
  const [data, setData] = useState<any>();

  const statusUpdater = (status: any, data: any) => {
    setStatus(status);
    if (status == 200) {
      setProgress(true);
      setData(data);
      setMessage("Process Complete!");
    } else if (status == 401) {
      setSubmit(false);
      setMessage("Please use a valid username and  password");
    }
  };

  const submitForm = async (
    formData: FormikValues,
    URL: string,
    type: string = "POST"
  ) => {
    try {
      if (type == "PUT") {
        const { status, data } = await axios.put(URL, formData);
        statusUpdater(status, data);
      } else if (type == "GET") {
        const { status, data } = await axios.get(URL);
        statusUpdater(status, data);
      } else {
        const { status, data } = await axios.post(URL, formData);
        statusUpdater(status, data);
      }
    } catch (error: any) {
      setProgress(true);
      setError(true);
      if (error.response) setMessage(error?.response.data);
      else if (error.request) setMessage("Could not reach the server!");
      else setMessage("An unexpected error occurred!");
    }
  };

  return {
    progress,
    submit,
    error,
    message,
    setSubmit,
    submitForm,
    status,
    data,
  };
};

export default useAPI;
