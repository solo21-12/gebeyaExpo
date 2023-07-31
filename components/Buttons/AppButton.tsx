import { Button } from "@mui/material";
import React from "react";
type Props = {
  label: string;
  handleAction: () => void;
};

export default function AppButton({ handleAction, label }: Props) {
  return (
    <Button variant="outlined" onClick={handleAction}   sx={{
      mt:3
    }}>
      {label}
    </Button>
  );
}
