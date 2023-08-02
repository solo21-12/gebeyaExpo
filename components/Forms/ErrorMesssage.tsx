
import React from "react";

export const ErrorMesssage = ({ error, visible }: any) => {
  if (!visible || !error) return null;

  return <p className=" text-red-600 text-sm">{error}</p>;
};

