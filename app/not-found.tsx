"use client";
import { AppButton } from "@/components";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="  w-[80%] mx-auto text-center h-screen items-center align-middle justify-center flex-col flex ">
      <h2 className=" text-7xl  font-bold text-BlueDark">404</h2>
      <p>Could not find requested page</p>
      <AppButton label="Return Home" handleAction={() => router.push("/")} />
    </div>
  );
}
