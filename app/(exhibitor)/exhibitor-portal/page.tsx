"use client";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [signed, setSigned] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    if (!signed) {
      router.push("/exhibitor-login");
    }
  }, []);

  return (
    <div className=" h-screen">
      {signed ? (
        <div className=" h-screen flex flex-col justify-center items-center ">page</div>
      ) : (
        <div className=" flex flex-col items-center justify-center h-screen">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default page;
