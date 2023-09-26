import Box, { BoxProps } from "@mui/joy/Box";
import React from "react";

function AppMain(props: BoxProps) {
  return (
    <Box
      component="main"
      className="Main"
      {...props}
      sx={[{ p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
    />
  );
}

export default {
  AppMain,
};
