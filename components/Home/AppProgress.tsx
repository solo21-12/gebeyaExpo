"use client";

import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import AppMessage from "../Forms/AppMessage";
import { useRouter } from "next/navigation";

type Props = {
  process: boolean;
  message: string;
  error?: boolean;
  status?: number;
  URL?: string;
};

const Progress: React.FC<Props> = ({
  process,
  message,
  error,
  URL,
  status,
}) => {
  const router = useRouter();
  useEffect(() => {
    if (URL && status == 200) {
      router.push(URL);
    }
  }, [status]);
  return (
    <div className=" flex flex-col justify-center items-center">
      {process ? (
        <AppMessage error={error} message={message} />
      ) : (
        <CircularProgress
          sx={{
            color: "#0878ab",
          }}
        />
      )}
    </div>
  );
};

export default Progress;
