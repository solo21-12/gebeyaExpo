import React from "react";

type Props = { lable: string; className?: string };

export default function Header({ lable, className }: Props) {
  return (
    <h1
      className={` text-3xl lg:text-5xl max-w-xs font-semibold ${
        className ? className : "text-BlueDark"
      }`}
    >
      {lable}
    </h1>
  );
}
