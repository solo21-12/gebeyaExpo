"use client";
import { CircularProgress } from "@mui/material";
import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className=" h-screen flex flex-col justify-center align-middle text-2xl text-BlueDark items-center">
      <CircularProgress
        sx={{
          color: "#32b9ec",
        }}
      />
    </div>
  );
}
