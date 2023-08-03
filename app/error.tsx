"use client"; // Error components must be Client Components

import { AppButton } from "@/components";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="  w-[80%] mx-auto text-center h-screen items-center align-middle justify-center flex-col flex ">
      <h2 className=" text-3xl text-BlueDark">Something went wrong!</h2>
      <p>We are still building so it's supposed to happen!</p>
      <AppButton label="Try again" handleAction={() => reset()} />
    </div>
  );
}
