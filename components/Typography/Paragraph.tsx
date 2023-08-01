import React from "react";

type Props = { lable: string; className?: string };

export default function Pargraph({ lable, className }: Props) {
  return (
    <h1
      className={` text-sm lg:text-base max-w-md font-thin ${
        className ? className : "text-BlueDark"
      }`}
    >
      {lable}
    </h1>
  );
}
