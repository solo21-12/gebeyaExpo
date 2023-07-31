import React from "react";
type Props = {
  label: string;
  handleAction: () => void;
  conditionalClass?:string
};

export default function AppButtonDefult({ handleAction, label,conditionalClass }: Props) {
  return <button className={` bg-BlueLighter rounded-lg text-White px-7 py-3 mt-4 ${conditionalClass}`}>{label}</button>;
}
