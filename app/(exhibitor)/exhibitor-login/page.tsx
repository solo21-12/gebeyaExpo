"use client";

import { AppLoginForm } from "@/components";
import React from "react";

const page = () => {
  const URL = process.env.NEXT_PUBLIC_EXHIBITOR_PORTAL_LOGIN_URL as string;
  const successURL = "/exhibitor-portal";
  const newAccountUrl = "/exhibitor-register";
  return (
    <div className=" h-screen flex items-center justify-center max-w-[1200px] mx-auto">
      <AppLoginForm
        URL={URL}
        successURL={successURL}
        allowNewAccount={true}
        handleNewAccount={newAccountUrl}
      />
    </div>
  );
};

export default page;
