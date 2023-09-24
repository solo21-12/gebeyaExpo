
import Button from "@mui/joy/Button";
import React, { ReactNode } from "react";
type Props = {
  label: string;
  handleAction: () => void;
  Icon?: ReactNode;
  disabled?: boolean;
};

export default function AppButton({
  handleAction,
  label,
  Icon,
  disabled,
}: Props) {
  return (
    <Button
      variant="soft"
      size="sm"
      onClick={handleAction}
      disabled={disabled}
      className="bg-BlueLighter hover:bg-BlueLighter/90 disabled:bg-BlueLighter/70 disabled:cursor-not-allowed rounded-lg text-White  px-2 xl:px-7 py-1 text-xs flex gap-2"
    >
      {label}
      {Icon}
    </Button>
  );
}
